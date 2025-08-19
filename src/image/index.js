import { log } from '../core/logger.js';
import { imageState, IMAGE_DEFAULTS } from './config.js';
import { BlueMarblelImageProcessor, detectAvailableColors } from './blue-marble-processor.js';
import { processImage, stopPainting } from './painter.js';
import { saveProgress, loadProgress, clearProgress, getProgressInfo } from './save-load.js';
import { createImageUI, showConfirmDialog } from './ui.js';
import { getSession } from '../core/wplace-api.js';
import { initializeLanguage, getSection, t, getCurrentLanguage } from '../locales/index.js';
import { isPaletteOpen, findAndClickPaintButton } from '../core/dom.js';
import { sleep } from '../core/timing.js';
import './plan-overlay-blue-marble.js';

export async function runImage() {
  log('🚀 Iniciando WPlace Auto-Image (versión modular)');

  // Inicializar sistema de idiomas
  initializeLanguage();

  // Asegurarse que el estado global existe
  window.__wplaceBot = { ...window.__wplaceBot, imageRunning: true };

  let currentUserInfo = null; // Variable global para información del usuario
  let originalFetch = window.fetch; // Guardar fetch original globalmente

  // Función para restaurar fetch original de forma segura
  const restoreFetch = () => {
    if (window.fetch !== originalFetch) {
      window.fetch = originalFetch;
      log('🔄 Fetch original restaurado');
    }
    if (imageState.positionTimeoutId) {
      clearTimeout(imageState.positionTimeoutId);
      imageState.positionTimeoutId = null;
    }
    if (imageState.cleanupObserver) {
      imageState.cleanupObserver();
      imageState.cleanupObserver = null;
    }
    imageState.selectingPosition = false;
  };

  try {
    // Inicializar configuración
    const config = { ...IMAGE_DEFAULTS };

    // Obtener textos en el idioma actual
    const texts = getSection('image');

    // Actualizar estado del idioma
    imageState.language = getCurrentLanguage();

    // Verificar sitekey
    if (!config.SITEKEY) {
      const siteKeyElement = document.querySelector('*[data-sitekey]');
      if (siteKeyElement) {
        config.SITEKEY = siteKeyElement.getAttribute('data-sitekey');
        log(`📝 Sitekey encontrada automáticamente: ${config.SITEKEY.substring(0, 20)}...`);
      } else {
        log('⚠️ No se pudo encontrar la sitekey automáticamente');
      }
    }

    // Función para auto-inicio del bot
    async function tryAutoInit() {
      log('🤖 Intentando auto-inicio...');

      // Verificar si la paleta ya está abierta
      if (isPaletteOpen()) {
        log('🎨 Paleta de colores ya está abierta');
        return true;
      }

      log('🔍 Paleta no encontrada, buscando botón Paint...');

      // Intentar hacer clic en el botón Paint
      if (findAndClickPaintButton()) {
        log('👆 Botón Paint encontrado y presionado');

        // Esperar un momento para que la paleta se abra
        await sleep(2000);

        // Verificar si la paleta se abrió
        if (isPaletteOpen()) {
          log('✅ Paleta abierta exitosamente');
          return true;
        } else {
          log('❌ La paleta no se abrió después de hacer clic');
          return false;
        }
      } else {
        log('❌ Botón Paint no encontrado');
        return false;
      }
    }

    // Función para inicializar el bot (usada tanto para auto-inicio como inicio manual)
    async function initializeBot(isAutoInit = false) {
      log('🤖 Inicializando Auto-Image...');

      // Verificar colores disponibles
      ui.setStatus(t('image.checkingColors'), 'info');
      const colors = detectAvailableColors();

      if (colors.length === 0) {
        ui.setStatus(t('image.noColorsFound'), 'error');
        return false;
      }

      // Obtener información del usuario
      const sessionInfo = await getSession();
      let userInfo = null;
      if (sessionInfo.success && sessionInfo.data.user) {
        userInfo = {
          username: sessionInfo.data.user.name || 'Anónimo',
          charges: sessionInfo.data.charges,
          maxCharges: sessionInfo.data.maxCharges,
          pixels: sessionInfo.data.user.pixelsPainted || 0, // Usar pixelsPainted en lugar de pixels
        };
        currentUserInfo = userInfo; // Actualizar variable global
        imageState.currentCharges = sessionInfo.data.charges;
        imageState.maxCharges = sessionInfo.data.maxCharges || 50; // Guardar maxCharges en state
        log(
          `👤 Usuario conectado: ${sessionInfo.data.user.name || 'Anónimo'} - Cargas: ${userInfo.charges}/${userInfo.maxCharges} - Píxeles: ${userInfo.pixels}`,
        );
      } else {
        log('⚠️ No se pudo obtener información del usuario');
      }

      imageState.availableColors = colors;
      imageState.colorsChecked = true;

      ui.setStatus(t('image.colorsFound', { count: colors.length }), 'success');
      ui.updateProgress(0, 0, userInfo);

      // Solo mostrar log una vez (evitar duplicado en auto-inicio)
      if (!isAutoInit) {
        log(`✅ ${colors.length} colores disponibles detectados`);
      }

      // Marcar como inicializado exitosamente para deshabilitar el botón
      ui.setInitialized(true);

      // Habilitar botones de upload y load progress
      ui.enableButtonsAfterInit();

      // Inicializar plan overlay si ya hay cola previa (p.ej. reanudación)
      try {
        // Removed references to __WPA_PLAN_OVERLAY__
      } catch {
        // noop
      }

      return true;
    }

    // Crear interfaz de usuario
    const ui = await createImageUI({
      texts,

      onConfigChange: (config) => {
        // Manejar cambios de configuración
        if (config.pixelsPerBatch !== undefined) {
          imageState.pixelsPerBatch = config.pixelsPerBatch;
        }
        if (config.useAllCharges !== undefined) {
          imageState.useAllChargesFirst = config.useAllCharges;
        }
        log(`Configuración actualizada:`, config);
      },

      onInitBot: initializeBot,

      onUploadImage: async (file) => {
        try {
          ui.setStatus(t('image.loadingImage'), 'info');

          const imageUrl = window.URL.createObjectURL(file);
          const processor = new BlueMarblelImageProcessor(imageUrl);
          processor.originalName = file.name;

          await processor.load();

          // Inicializar paleta de colores Blue Marble
          const availableColors = processor.initializeColorPalette();
          imageState.availableColors = availableColors;

          // Analizar píxeles de la imagen
          const analysisResult = await processor.analyzePixels();

          // Establecer coordenadas base (se actualizarán al seleccionar posición)
          processor.setCoords(0, 0, 0, 0);

          // Obtener datos de imagen procesados
          const processedData = processor.getImageData();

          imageState.imageData = processedData;
          imageState.imageData.processor = processor; // Guardar referencia al processor para resize
          imageState.totalPixels = analysisResult.requiredPixels;
          imageState.paintedPixels = 0;
          imageState.originalImageName = file.name;
          imageState.imageLoaded = true;

          ui.setStatus(t('image.imageLoaded', { count: analysisResult.requiredPixels }), 'success');
          ui.updateProgress(0, analysisResult.requiredPixels, currentUserInfo);

          log(
            `✅ [BLUE MARBLE] Imagen cargada: ${processedData.width}x${processedData.height}, ${analysisResult.requiredPixels} píxeles válidos`,
          );
          log(
            `✅ [BLUE MARBLE] Análisis: ${analysisResult.uniqueColors} colores únicos, ${analysisResult.defacePixels} píxeles #deface`,
          );

          // Limpiar URL temporal (el overlay usa un dataURL separado)
          window.URL.revokeObjectURL(imageUrl);

          // Activar overlay de plan automáticamente cuando se carga imagen
          try {
            if (window.__WPA_PLAN_OVERLAY__) {
              window.__WPA_PLAN_OVERLAY__.injectStyles();
              window.__WPA_PLAN_OVERLAY__.setEnabled(true); // Activar automáticamente
              // Configurar ancla base con la posición del tile (será ajustada al seleccionar posición)
              window.__WPA_PLAN_OVERLAY__.setPlan([], {
                enabled: true,
                nextBatchCount: 0,
              });
              log('✅ Plan overlay activado automáticamente al cargar imagen');
            }
          } catch (e) {
            log('⚠️ Error activando plan overlay:', e);
          }

          return true;
        } catch (error) {
          ui.setStatus(t('image.imageError'), 'error');
          log('❌ Error cargando imagen:', error);
          return false;
        }
      },

      onSelectPosition: async () => {
        return new Promise((resolve) => {
          ui.setStatus(t('image.selectPositionAlert'), 'info');
          ui.setStatus(t('image.waitingPosition'), 'info');

          imageState.selectingPosition = true;
          let positionCaptured = false;

          // Método 1: Interceptar fetch (método original mejorado)
          const setupFetchInterception = () => {
            window.fetch = async (url, options) => {
              // Solo interceptar requests específicos de pintado cuando estamos seleccionando posición
              if (
                imageState.selectingPosition &&
                !positionCaptured &&
                typeof url === 'string' &&
                url.includes('/s0/pixel/') &&
                options &&
                options.method === 'POST'
              ) {
                try {
                  log(`🎯 Interceptando request de pintado: ${url}`);

                  const response = await originalFetch(url, options);

                  if (response.ok && options.body) {
                    let bodyData;
                    try {
                      bodyData = JSON.parse(options.body);
                    } catch (parseError) {
                      log('Error parseando body del request:', parseError);
                      return response;
                    }

                    if (
                      bodyData.coords &&
                      Array.isArray(bodyData.coords) &&
                      bodyData.coords.length >= 2
                    ) {
                      const localX = bodyData.coords[0];
                      const localY = bodyData.coords[1];

                      log(`[AUTO-IMAGE] 👆 Usuario hizo clic: local(${localX}, ${localY})`);

                      // Extraer tile de la URL de forma más robusta
                      const tileMatch = url.match(/\/s0\/pixel\/(-?\d+)\/(-?\d+)/);
                      if (tileMatch && !positionCaptured) {
                        positionCaptured = true;
                        const tileX = parseInt(tileMatch[1]);
                        const tileY = parseInt(tileMatch[2]);

                        log(
                          `[AUTO-IMAGE] 📍 Posición capturada: tile(${tileX}, ${tileY}) + pixel(${localX}, ${localY})`,
                        );
                        log(
                          `[AUTO-IMAGE] 🌍 Esto corresponde a coordenada global: (${tileX * 4000 + localX}, ${tileY * 4000 + localY})`,
                        );

                        // Guardar coordenadas tile/pixel
                        imageState.tileX = tileX;
                        imageState.tileY = tileY;
                        imageState.startPosition = { x: localX, y: localY };
                        imageState.selectingPosition = false;

                        // Actualizar coordenadas del procesador Blue Marble
                        if (imageState.imageData && imageState.imageData.processor) {
                          const processor = imageState.imageData.processor;
                          log(`[AUTO-IMAGE] 🔄 Processor encontrado. Estado antes de setCoords:`);
                          log(
                            `[AUTO-IMAGE] 📊 Processor coords actuales: [${processor.coords.join(',')}]`,
                          );
                          log(
                            `[AUTO-IMAGE] 🔄 Llamando setCoords(${tileX}, ${tileY}, ${localX}, ${localY})`,
                          );
                          processor.setCoords(tileX, tileY, localX, localY);
                          log(
                            `[AUTO-IMAGE] 📊 Processor coords después de setCoords: [${processor.coords.join(',')}]`,
                          );

                          // Generar tiles de template una vez que tenemos coordenadas
                          try {
                            await processor.createTemplateTiles();
                            log(
                              `✅ [BLUE MARBLE] Template tiles creados para posición tile(${tileX},${tileY}) pixel(${localX},${localY})`,
                            );
                          } catch (error) {
                            log(`❌ [BLUE MARBLE] Error creando template tiles: ${error.message}`);
                          }

                          // Regenerar cola de píxeles con coordenadas actualizadas
                          const pixelQueue = processor.generatePixelQueue();
                          imageState.remainingPixels = pixelQueue;
                          imageState.totalPixels = pixelQueue.length;

                          log(
                            `✅ Cola de píxeles generada: ${pixelQueue.length} píxeles para overlay`,
                          );
                          log(
                            `[AUTO-IMAGE] 📊 imageState.remainingPixels set to: ${imageState.remainingPixels?.length || 0} pixels`,
                          );
                          log(
                            `[AUTO-IMAGE] 📊 First pixel from Blue Marble: global(${pixelQueue[0]?.globalX}, ${pixelQueue[0]?.globalY}) local(${pixelQueue[0]?.localX}, ${pixelQueue[0]?.localY})`,
                          );
                        } else {
                          log(`[AUTO-IMAGE] ❌ ERROR: Processor no encontrado!`);
                          log(
                            `[AUTO-IMAGE] 📊 imageState.imageData existe: ${!!imageState.imageData}`,
                          );
                          if (imageState.imageData) {
                            log(
                              `[AUTO-IMAGE] 📊 imageState.imageData.processor existe: ${!!imageState.imageData.processor}`,
                            );
                          }
                        }

                        // Configurar overlay del plan con la posición seleccionada
                        try {
                          if (window.__WPA_PLAN_OVERLAY__) {
                            window.__WPA_PLAN_OVERLAY__.injectStyles();
                            window.__WPA_PLAN_OVERLAY__.setEnabled(true);

                            // Configurar ancla lógica (tile/pixel) para posicionamiento
                            window.__WPA_PLAN_OVERLAY__.setAnchor({
                              tileX: tileX,
                              tileY: tileY,
                              pxX: localX,
                              pxY: localY,
                            });

                            // Usar la cola de píxeles regenerada
                            if (
                              imageState.remainingPixels &&
                              imageState.remainingPixels.length > 0
                            ) {
                              window.__WPA_PLAN_OVERLAY__.setPlan(imageState.remainingPixels, {
                                anchor: { tileX: tileX, tileY: tileY, pxX: localX, pxY: localY },
                                imageWidth: imageState.imageData.width,
                                imageHeight: imageState.imageData.height,
                                enabled: true,
                              });

                              log(
                                `✅ Plan overlay anclado en tile(${tileX},${tileY}) local(${localX},${localY})`,
                              );
                            } else {
                              log(`⚠️ No hay píxeles para mostrar en overlay`);
                            }
                          }
                        } catch (error) {
                          log(`❌ Error configurando overlay: ${error.message}`);
                        }

                        // Restaurar fetch original inmediatamente
                        restoreFetch();

                        ui.setStatus(t('image.positionSet'), 'success');
                        log(
                          `✅ Posición establecida: tile(${imageState.tileX},${imageState.tileY}) local(${localX},${localY})`,
                        );

                        resolve(true);
                      } else {
                        log('⚠️ No se pudo extraer tile de la URL:', url);
                      }
                    }
                  }

                  return response;
                } catch (error) {
                  log('❌ Error interceptando pixel:', error);
                  // En caso de error, restaurar fetch y continuar con el original
                  if (!positionCaptured) {
                    restoreFetch();
                    return originalFetch(url, options);
                  }
                }
              }

              // Para todos los demás requests, usar fetch original
              return originalFetch(url, options);
            };
          };

          // Método 2: Observer de canvas para detectar cambios visuales
          const setupCanvasObserver = () => {
            const canvasElements = document.querySelectorAll('canvas');
            if (canvasElements.length === 0) {
              log('⚠️ No se encontraron elementos canvas');
              return;
            }

            log(`📊 Configurando observer para ${canvasElements.length} canvas`);

            // Escuchar eventos de click en el documento para detectar pintado
            const clickHandler = (event) => {
              if (!imageState.selectingPosition || positionCaptured) return;

              // Verificar si el click fue en un canvas
              const target = event.target;
              if (target && target.tagName === 'CANVAS') {
                log('🖱️ Click detectado en canvas durante selección');
                // Calcular coordenadas CSS relativas al contenedor del board para ancla CSS
                try {
                  const board = document.querySelector('canvas')?.parentElement || document.body;
                  const rect = board.getBoundingClientRect();
                  const cssX = event.clientX - rect.left;
                  const cssY = event.clientY - rect.top;
                  if (window.__WPA_PLAN_OVERLAY__) {
                    window.__WPA_PLAN_OVERLAY__.setAnchorCss(cssX, cssY);
                    log(`Plan overlay: ancla CSS establecida en (${cssX}, ${cssY})`);
                  }
                } catch (e) {
                  log('Plan Overlay: error calculando ancla CSS', e);
                }

                // Dar tiempo para que se procese el pintado
                setTimeout(() => {
                  if (!positionCaptured && imageState.selectingPosition) {
                    log('🔍 Buscando requests recientes de pintado...');
                    // El fetch interceptor manejará la captura
                  }
                }, 500);
              }
            };

            document.addEventListener('click', clickHandler);

            // Limpiar observer al finalizar
            imageState.cleanupObserver = () => {
              document.removeEventListener('click', clickHandler);
            };
          };

          // Configurar ambos métodos
          setupFetchInterception();
          setupCanvasObserver();

          // Timeout para selección de posición con cleanup mejorado
          const timeoutId = setTimeout(() => {
            if (imageState.selectingPosition && !positionCaptured) {
              restoreFetch();
              if (imageState.cleanupObserver) {
                imageState.cleanupObserver();
              }
              ui.setStatus(t('image.positionTimeout'), 'error');
              log('⏰ Timeout en selección de posición');
              resolve(false);
            }
          }, 120000); // 2 minutos

          // Guardar timeout para poder cancelarlo
          imageState.positionTimeoutId = timeoutId;
        });
      },

      onStartPainting: async () => {
        // Debug: verificar estado antes de validar
        log(`🔍 Estado para iniciar pintura:`, {
          imageLoaded: imageState.imageLoaded,
          startPosition: imageState.startPosition,
          tileX: imageState.tileX,
          tileY: imageState.tileY,
          totalPixels: imageState.totalPixels,
          remainingPixels: imageState.remainingPixels?.length || 0,
        });

        if (!imageState.imageLoaded || !imageState.startPosition) {
          ui.setStatus(t('image.missingRequirements'), 'error');
          log(
            `❌ Validación fallida: imageLoaded=${imageState.imageLoaded}, startPosition=${!!imageState.startPosition}`,
          );
          return false;
        }

        imageState.running = true;
        imageState.stopFlag = false;
        imageState.isFirstBatch = true; // Resetear flag de primera pasada

        ui.setStatus(t('image.startPaintingMsg'), 'success');

        try {
          await processImage(
            imageState.imageData,
            imageState.startPosition,
            // onProgress - ahora incluye tiempo estimado
            (painted, total, message, estimatedTime) => {
              // Actualizar cargas en userInfo si existe
              if (currentUserInfo) {
                currentUserInfo.charges = Math.floor(imageState.currentCharges);
                if (estimatedTime !== undefined) {
                  currentUserInfo.estimatedTime = estimatedTime;
                }
              }

              ui.updateProgress(painted, total, currentUserInfo);

              // Actualizar display de cooldown si hay cooldown activo
              if (imageState.inCooldown && imageState.nextBatchCooldown > 0) {
                ui.updateCooldownDisplay(imageState.nextBatchCooldown);
              } else {
                ui.updateCooldownDisplay(0);
              }

              if (message) {
                // Usar función optimizada para mensajes de cooldown para evitar parpadeo
                if (message.includes('⏳') && imageState.inCooldown) {
                  ui.updateCooldownMessage(message);
                } else {
                  ui.setStatus(message, 'info');
                }
              } else {
                ui.setStatus(t('image.paintingProgress', { painted, total }), 'info');
              }
            },
            // onComplete
            (completed, pixelsPainted) => {
              if (completed) {
                ui.setStatus(t('image.paintingComplete', { count: pixelsPainted }), 'success');
                clearProgress();
              } else {
                ui.setStatus(t('image.paintingStopped'), 'warning');
              }
              imageState.running = false;
            },
            // onError
            (error) => {
              ui.setStatus(t('image.paintingError'), 'error');
              log('❌ Error en proceso de pintado:', error);
              imageState.running = false;
            },
          );

          return true;
        } catch (error) {
          ui.setStatus(t('image.paintingError'), 'error');
          log('❌ Error iniciando pintado:', error);
          imageState.running = false;
          return false;
        }
      },

      onStopPainting: async () => {
        const progressInfo = getProgressInfo();

        if (progressInfo.hasProgress) {
          const shouldSave = await showConfirmDialog(
            t('image.confirmSaveProgress'),
            t('image.saveProgressTitle'),
            {
              save: t('image.saveProgress'),
              discard: t('image.discardProgress'),
              cancel: t('image.cancel'),
            },
          );

          if (shouldSave === 'save') {
            const result = saveProgress();
            if (result.success) {
              ui.setStatus(t('image.progressSaved', { filename: result.filename }), 'success');
            } else {
              ui.setStatus(t('image.progressSaveError', { error: result.error }), 'error');
            }
          } else if (shouldSave === 'cancel') {
            return false; // No detener
          }
        }

        stopPainting();
        ui.setStatus(t('image.paintingStopped'), 'warning');
        return true;
      },

      onSaveProgress: async () => {
        const result = saveProgress();
        if (result.success) {
          ui.setStatus(t('image.progressSaved', { filename: result.filename }), 'success');
        } else {
          ui.setStatus(t('image.progressSaveError', { error: result.error }), 'error');
        }
        return result.success;
      },

      onLoadProgress: async (file) => {
        try {
          const result = await loadProgress(file);
          if (result.success) {
            ui.setStatus(
              t('image.progressLoaded', { painted: result.painted, total: result.total }),
              'success',
            );
            ui.updateProgress(result.painted, result.total, currentUserInfo);

            // Habilitar botones después de cargar progreso exitosamente
            // No es necesario subir imagen ni seleccionar posición de nuevo
            log('✅ Progreso cargado - habilitando botones de inicio');

            return true;
          } else {
            ui.setStatus(t('image.progressLoadError', { error: result.error }), 'error');
            return false;
          }
        } catch (error) {
          ui.setStatus(t('image.progressLoadError', { error: error.message }), 'error');
          return false;
        }
      },

      onResizeImage: () => {
        if (imageState.imageLoaded && imageState.imageData && imageState.imageData.processor) {
          ui.showResizeDialog(imageState.imageData.processor);
        }
      },

      onConfirmResize: async (processor, newWidth, newHeight) => {
        log(
          `🔄 Redimensionando imagen de ${processor.getDimensions().width}x${processor.getDimensions().height} a ${newWidth}x${newHeight}`,
        );

        try {
          // Redimensionar la imagen usando Blue Marble
          await processor.resize(newWidth, newHeight);

          // Reanalizar imagen con nuevo tamaño usando Blue Marble
          const analysisResult = await processor.analyzePixels();

          // Actualizar imageState con resultados de Blue Marble
          imageState.imageData = {
            processor: processor,
            width: newWidth,
            height: newHeight,
            validPixelCount: analysisResult.validPixelCount,
            totalPixels: analysisResult.totalPixels,
            unknownPixels: analysisResult.unknownPixels,
          };

          imageState.totalPixels = analysisResult.validPixelCount;
          imageState.paintedPixels = 0;
          imageState.remainingPixels = []; // Resetear cola al redimensionar
          imageState.lastPosition = { x: 0, y: 0 };

          // Actualizar UI
          ui.updateProgress(0, analysisResult.validPixelCount, currentUserInfo);
          ui.setStatus(t('image.resizeSuccess', { width: newWidth, height: newHeight }), 'success');

          log(
            `✅ Imagen redimensionada: ${analysisResult.validPixelCount} píxeles válidos de ${analysisResult.totalPixels} totales`,
          );

          // Actualizar overlay si ya hay posición seleccionada
          try {
            if (
              window.__WPA_PLAN_OVERLAY__ &&
              imageState.startPosition &&
              imageState.tileX != null &&
              imageState.tileY != null
            ) {
              // Regenerar template tiles con nuevo tamaño
              await processor.createTemplateTiles();

              // Regenerar cola de píxeles con Blue Marble
              const pixelQueue = processor.generatePixelQueue();
              imageState.remainingPixels = pixelQueue;
              imageState.totalPixels = pixelQueue.length;

              // Actualizar overlay con nueva cola
              window.__WPA_PLAN_OVERLAY__.setPlan(pixelQueue, {
                anchor: {
                  tileX: imageState.tileX,
                  tileY: imageState.tileY,
                  pxX: imageState.startPosition.x,
                  pxY: imageState.startPosition.y,
                },
                imageWidth: newWidth,
                imageHeight: newHeight,
                enabled: true,
              });

              log(`✅ Overlay actualizado con ${pixelQueue.length} píxeles después del resize`);
            }
          } catch (overlayError) {
            log(`⚠️ Error actualizando overlay después del resize: ${overlayError.message}`);
          }
        } catch (error) {
          log(`❌ Error redimensionando imagen: ${error.message}`);
          ui.setStatus(t('image.imageError'), 'error');
        }
      },
    });

    // Escuchar cambios de idioma desde el launcher
    const handleLauncherLanguageChange = (event) => {
      const { language } = event.detail;
      log(`🌍 Imagen: Detectado cambio de idioma desde launcher: ${language}`);

      // Actualizar estado del idioma
      imageState.language = language;

      // Aquí se podría añadir lógica adicional para actualizar la UI
      // Por ejemplo, actualizar textos dinámicos, re-renderizar elementos, etc.
    };

    window.addEventListener('launcherLanguageChanged', handleLauncherLanguageChange);
    window.addEventListener('languageChanged', handleLauncherLanguageChange);

    // Cleanup al cerrar la página
    window.addEventListener('beforeunload', () => {
      // Restaurar fetch original si está interceptado
      restoreFetch();

      stopPainting();
      ui.destroy();
      window.removeEventListener('launcherLanguageChanged', handleLauncherLanguageChange);
      window.removeEventListener('languageChanged', handleLauncherLanguageChange);
      if (window.__wplaceBot) {
        window.__wplaceBot.imageRunning = false;
      }
    });

    log('✅ Auto-Image inicializado correctamente');

    // Intentar auto-inicio después de que la UI esté lista
    setTimeout(async () => {
      try {
        ui.setStatus(t('image.autoInitializing'), 'info');
        log('🤖 Intentando auto-inicio...');

        const autoInitSuccess = await tryAutoInit();

        if (autoInitSuccess) {
          ui.setStatus(t('image.autoInitSuccess'), 'success');
          log('✅ Auto-inicio exitoso');

          // Ocultar el botón de inicialización manual
          ui.setInitButtonVisible(false);

          // Ejecutar la lógica de inicialización del bot
          const initResult = await initializeBot(true); // true = es auto-inicio
          if (initResult) {
            log('🚀 Bot auto-iniciado completamente');
          }
        } else {
          ui.setStatus(t('image.autoInitFailed'), 'warning');
          log('⚠️ Auto-inicio falló, se requiere inicio manual');
          // El botón de inicio manual permanece visible
        }
      } catch (error) {
        log('❌ Error en auto-inicio:', error);
        ui.setStatus(t('image.manualInitRequired'), 'warning');
      }
    }, 1000); // Esperar 1 segundo para que la UI esté completamente cargada
  } catch (error) {
    log('❌ Error inicializando Auto-Image:', error);
    if (window.__wplaceBot) {
      window.__wplaceBot.imageRunning = false;
    }
    throw error;
  }
}
