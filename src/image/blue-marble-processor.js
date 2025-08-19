// === [Procesador de imágenes basado en Blue Marble] ===
import { log } from '../core/logger.js';
import { tileDetector } from '../core/tile-detector.js';
import { IMAGE_DEFAULTS } from './config.js';

/**
 * Procesador de imágenes con arquitectura Blue Marble
 * Maneja chunking en tiles, factor de escalado, y sistema de coordenadas compatible
 */
export class BlueMarblelImageProcessor {
  constructor(imageSrc) {
    this.imageSrc = imageSrc;
    this.img = new window.Image();
    this.originalName = null;

    // Configuración Blue Marble
    this.tileSize = 1000; // Tamaño de tile en píxeles (como Blue Marble)
    this.drawMult = 3; // Factor de escalado (DEBE ser impar)
    this.shreadSize = 3; // Alias para drawMult para compatibilidad
    this.actualTileSize = IMAGE_DEFAULTS.TILE_SIZE; // Tamaño real del sitio (será detectado)

    // Estado del procesamiento
    this.bitmap = null;
    this.imageWidth = 0;
    this.imageHeight = 0;
    this.totalPixels = 0;
    this.requiredPixelCount = 0;
    this.defacePixelCount = 0;
    this.colorPalette = {};
    this.allowedColorsSet = new Set();
    this.rgbToMeta = new Map();
    this.coords = [0, 0, 0, 0]; // [tileX, tileY, pixelX, pixelY]
    this.templateTiles = {};
    this.templateTilesBuffers = {};
    this.tilePrefixes = new Set();

    // Auto-detect tile size
    this.initializeTileSize();
  }

  /**
   * Detect and initialize proper tile size
   */
  async initializeTileSize() {
    try {
      const detectedSize = await tileDetector.autoDetect();
      if (detectedSize) {
        this.actualTileSize = detectedSize;
        log(`[BLUE MARBLE] Using detected tile size: ${detectedSize}`);
      } else {
        log(`[BLUE MARBLE] Using default tile size: ${this.actualTileSize}`);
      }
    } catch (error) {
      log('[BLUE MARBLE] Error detecting tile size, using default:', error);
    }
  }

  async load() {
    return new Promise((resolve, reject) => {
      this.img.onload = async () => {
        try {
          this.bitmap = await createImageBitmap(this.img);
          this.imageWidth = this.bitmap.width;
          this.imageHeight = this.bitmap.height;
          this.totalPixels = this.imageWidth * this.imageHeight;

          log(
            `[BLUE MARBLE] Imagen cargada: ${this.imageWidth}×${this.imageHeight} = ${this.totalPixels.toLocaleString()} píxeles`,
          );
          resolve();
        } catch (error) {
          reject(error);
        }
      };
      this.img.onerror = reject;
      this.img.src = this.imageSrc;
    });
  }

  /**
   * Inicializa la paleta de colores desde WPlace (como Blue Marble)
   */
  initializeColorPalette() {
    log('[BLUE MARBLE] Inicializando paleta de colores...');

    // Detectar colores disponibles del sitio (mejorado)
    const availableColors = this.detectSiteColors();

    // Construir conjunto de colores permitidos
    this.allowedColorsSet = new Set(
      availableColors
        .filter((c) => c.name && c.name.toLowerCase() !== 'transparent' && Array.isArray(c.rgb))
        .map((c) => `${c.rgb[0]},${c.rgb[1]},${c.rgb[2]}`),
    );

    // Asegurar que #deface (marcador de transparencia) se trate como permitido
    const defaceKey = '222,250,206';
    this.allowedColorsSet.add(defaceKey);

    // Mapear RGB a metadatos
    this.rgbToMeta = new Map(
      availableColors
        .filter((c) => Array.isArray(c.rgb))
        .map((c) => [
          `${c.rgb[0]},${c.rgb[1]},${c.rgb[2]}`,
          {
            id: c.id,
            premium: !!c.premium,
            name: c.name || `Color ${c.id}`,
          },
        ]),
    );

    // Mapear #deface a Transparent para UI
    try {
      const transparent = availableColors.find(
        (c) => c.name && c.name.toLowerCase() === 'transparent',
      );
      if (transparent && Array.isArray(transparent.rgb)) {
        this.rgbToMeta.set(defaceKey, {
          id: transparent.id,
          premium: !!transparent.premium,
          name: transparent.name,
        });
      }
    } catch (_) {}

    log(`[BLUE MARBLE] Paleta inicializada: ${this.allowedColorsSet.size} colores permitidos`);
    return Array.from(availableColors);
  }

  /**
   * Detecta colores disponibles del sitio (versión mejorada de Blue Marble)
   */
  detectSiteColors() {
    const colorElements = document.querySelectorAll('[id^="color-"]');
    const colors = [];

    for (const element of colorElements) {
      // Filtrar elementos con SVG (probablemente bloqueos)
      if (element.querySelector('svg')) continue;

      const idStr = element.id.replace('color-', '');
      const id = parseInt(idStr);

      // Obtener color RGB del style
      const backgroundStyle = element.style.backgroundColor;
      if (backgroundStyle) {
        const rgbMatch = backgroundStyle.match(/\d+/g);
        if (rgbMatch && rgbMatch.length >= 3) {
          const rgb = [parseInt(rgbMatch[0]), parseInt(rgbMatch[1]), parseInt(rgbMatch[2])];

          colors.push({
            id,
            element,
            rgb,
            name: element.title || element.getAttribute('aria-label') || `Color ${id}`,
            premium: element.classList.contains('premium') || element.querySelector('.premium'),
          });
        }
      }
    }

    log(`[BLUE MARBLE] ${colors.length} colores detectados del sitio`);
    return colors;
  }

  /**
   * Establece las coordenadas de posición (como Blue Marble)
   */
  setCoords(tileX, tileY, pixelX, pixelY) {
    this.coords = [tileX, tileY, pixelX, pixelY];
    log(
      `[BLUE MARBLE] ✅ Coordenadas establecidas: tile(${tileX},${tileY}) pixel(${pixelX},${pixelY})`,
    );
    log(
      `[BLUE MARBLE] 📍 Esto significa: imagen empezará en posición global (${tileX * this.actualTileSize + pixelX}, ${tileY * this.actualTileSize + pixelY})`,
    );
  }

  /**
   * Analiza píxeles de la imagen y cuenta requeridos vs #deface (como Blue Marble)
   */
  async analyzePixels() {
    if (!this.bitmap) {
      throw new Error('Imagen no cargada. Llama a load() primero.');
    }

    log('[BLUE MARBLE] Analizando píxeles de la imagen...');

    try {
      // Crear canvas de inspección a escala 1:1
      const inspectCanvas = new OffscreenCanvas(this.imageWidth, this.imageHeight);
      const inspectCtx = inspectCanvas.getContext('2d', { willReadFrequently: true });
      inspectCtx.imageSmoothingEnabled = false;
      inspectCtx.clearRect(0, 0, this.imageWidth, this.imageHeight);
      inspectCtx.drawImage(this.bitmap, 0, 0);
      const inspectData = inspectCtx.getImageData(0, 0, this.imageWidth, this.imageHeight).data;

      let required = 0;
      let deface = 0;
      const paletteMap = new Map();

      for (let y = 0; y < this.imageHeight; y++) {
        for (let x = 0; x < this.imageWidth; x++) {
          const idx = (y * this.imageWidth + x) * 4;
          const r = inspectData[idx];
          const g = inspectData[idx + 1];
          const b = inspectData[idx + 2];
          const a = inspectData[idx + 3];

          if (a === 0) continue; // Ignorar píxeles transparentes

          const key = `${r},${g},${b}`;

          // Contar píxeles #deface (marcador de transparencia)
          if (r === 222 && g === 250 && b === 206) {
            deface++;
          }

          // Solo contar colores de la paleta del sitio
          if (!this.allowedColorsSet.has(key)) continue;

          required++;
          paletteMap.set(key, (paletteMap.get(key) || 0) + 1);
        }
      }

      this.requiredPixelCount = required;
      this.defacePixelCount = deface;

      // Persistir paleta con todos los colores habilitados por defecto
      const paletteObj = {};
      for (const [key, count] of paletteMap.entries()) {
        paletteObj[key] = { count, enabled: true };
      }
      this.colorPalette = paletteObj;

      log(`[BLUE MARBLE] Análisis completado:`);
      log(`  - Píxeles requeridos: ${required.toLocaleString()}`);
      log(`  - Píxeles #deface: ${deface.toLocaleString()}`);
      log(`  - Colores únicos: ${paletteMap.size}`);

      return {
        totalPixels: this.totalPixels,
        requiredPixels: required,
        defacePixels: deface,
        uniqueColors: paletteMap.size,
        colorPalette: paletteObj,
      };
    } catch (err) {
      // Fallback si OffscreenCanvas no está disponible
      this.requiredPixelCount = Math.max(0, this.totalPixels);
      this.defacePixelCount = 0;
      log('[BLUE MARBLE] Fallback: usando total de píxeles como requeridos');

      return {
        totalPixels: this.totalPixels,
        requiredPixels: this.totalPixels,
        defacePixels: 0,
        uniqueColors: 0,
        colorPalette: {},
      };
    }
  }

  /**
   * Crea tiles de template (proceso principal de Blue Marble)
   */
  async createTemplateTiles() {
    if (!this.bitmap) {
      throw new Error('Imagen no cargada. Llama a load() primero.');
    }

    log('[BLUE MARBLE] Creando tiles de template...');

    const templateTiles = {};
    const templateTilesBuffers = {};

    const canvas = new OffscreenCanvas(this.tileSize, this.tileSize);
    const context = canvas.getContext('2d', { willReadFrequently: true });

    // Para cada tile Y...
    for (let pixelY = this.coords[3]; pixelY < this.imageHeight + this.coords[3]; ) {
      // Calcular tamaño de dibujo Y
      const drawSizeY = Math.min(
        this.tileSize - (pixelY % this.tileSize),
        this.imageHeight - (pixelY - this.coords[3]),
      );

      // Para cada tile X...
      for (let pixelX = this.coords[2]; pixelX < this.imageWidth + this.coords[2]; ) {
        // Calcular tamaño de dibujo X
        const drawSizeX = Math.min(
          this.tileSize - (pixelX % this.tileSize),
          this.imageWidth - (pixelX - this.coords[2]),
        );

        // Cambiar tamaño del canvas y limpiar
        const canvasWidth = drawSizeX * this.shreadSize;
        const canvasHeight = drawSizeY * this.shreadSize;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        context.imageSmoothingEnabled = false; // Nearest neighbor

        // Dibujar segmento de template en este segmento de tile
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        context.drawImage(
          this.bitmap, // Bitmap de imagen a dibujar
          pixelX - this.coords[2], // Coordenada X desde donde dibujar
          pixelY - this.coords[3], // Coordenada Y desde donde dibujar
          drawSizeX, // Ancho X a dibujar desde
          drawSizeY, // Alto Y a dibujar desde
          0, // Coordenada X donde dibujar
          0, // Coordenada Y donde dibujar
          drawSizeX * this.shreadSize, // Ancho X donde dibujar
          drawSizeY * this.shreadSize, // Alto Y donde dibujar
        );

        const imageData = context.getImageData(0, 0, canvasWidth, canvasHeight);

        // Procesar píxeles (como Blue Marble)
        for (let y = 0; y < canvasHeight; y++) {
          for (let x = 0; x < canvasWidth; x++) {
            const pixelIndex = (y * canvasWidth + x) * 4;

            // Si el píxel es #deface, dibujar patrón de tablero de ajedrez translúcido
            if (
              imageData.data[pixelIndex] === 222 &&
              imageData.data[pixelIndex + 1] === 250 &&
              imageData.data[pixelIndex + 2] === 206
            ) {
              if ((x + y) % 2 === 0) {
                imageData.data[pixelIndex] = 0;
                imageData.data[pixelIndex + 1] = 0;
                imageData.data[pixelIndex + 2] = 0;
              } else {
                imageData.data[pixelIndex] = 255;
                imageData.data[pixelIndex + 1] = 255;
                imageData.data[pixelIndex + 2] = 255;
              }
              imageData.data[pixelIndex + 3] = 32; // Hacerlo translúcido
            } else if (x % this.shreadSize !== 1 || y % this.shreadSize !== 1) {
              // Solo dibujar el píxel central
              imageData.data[pixelIndex + 3] = 0; // Hacer píxel transparente
            } else {
              // Píxel central: mantener solo si está en la paleta permitida del sitio
              const r = imageData.data[pixelIndex];
              const g = imageData.data[pixelIndex + 1];
              const b = imageData.data[pixelIndex + 2];
              if (!this.allowedColorsSet.has(`${r},${g},${b}`)) {
                imageData.data[pixelIndex + 3] = 0; // ocultar colores no-paleta
              }
            }
          }
        }

        context.putImageData(imageData, 0, 0);

        // Crear nombre de tile template "0000,0000,000,000"
        const templateTileName = `${(this.coords[0] + Math.floor(pixelX / 1000))
          .toString()
          .padStart(4, '0')},${(this.coords[1] + Math.floor(pixelY / 1000))
          .toString()
          .padStart(4, '0')},${(pixelX % 1000)
          .toString()
          .padStart(3, '0')},${(pixelY % 1000).toString().padStart(3, '0')}`;

        templateTiles[templateTileName] = await createImageBitmap(canvas);

        // Registrar prefijo de tile para búsqueda rápida
        this.tilePrefixes.add(templateTileName.split(',').slice(0, 2).join(','));

        // Almacenar buffer para serialización
        const canvasBlob = await canvas.convertToBlob();
        const canvasBuffer = await canvasBlob.arrayBuffer();
        templateTilesBuffers[templateTileName] = canvasBuffer;

        pixelX += drawSizeX;
      }

      pixelY += drawSizeY;
    }

    this.templateTiles = templateTiles;
    this.templateTilesBuffers = templateTilesBuffers;

    log(`[BLUE MARBLE] Tiles creados: ${Object.keys(templateTiles).length} tiles`);
    log(`[BLUE MARBLE] Prefijos registrados: ${this.tilePrefixes.size} tiles únicos`);

    return { templateTiles, templateTilesBuffers };
  }

  /**
   * Genera cola de píxeles para pintar (compatible con Auto-Image)
   */
  generatePixelQueue() {
    if (!this.bitmap) {
      throw new Error('Imagen no cargada. Llama a load() primero.');
    }

    log('[BLUE MARBLE] 🎯 Iniciando generación de cola de píxeles...');
    log(`[BLUE MARBLE] 📐 Tamaño actual de tile: ${this.actualTileSize}`);
    log(
      `[BLUE MARBLE] 🗂️ Coordenadas almacenadas: tile(${this.coords[0]},${this.coords[1]}) pixel(${this.coords[2] || 0},${this.coords[3] || 0})`,
    );

    const queue = [];
    const baseX = this.coords[0] * this.actualTileSize + (this.coords[2] || 0); // Coordenada global base X
    const baseY = this.coords[1] * this.actualTileSize + (this.coords[3] || 0); // Coordenada global base Y

    log(`[BLUE MARBLE] 📍 Posición base calculada: global(${baseX}, ${baseY})`);
    log(`[BLUE MARBLE] 📏 Dimensiones imagen: ${this.imageWidth}x${this.imageHeight}`);

    // Usar canvas 1:1 para leer píxeles exactos
    const readCanvas = new OffscreenCanvas(this.imageWidth, this.imageHeight);
    const readCtx = readCanvas.getContext('2d', { willReadFrequently: true });
    readCtx.imageSmoothingEnabled = false;
    readCtx.drawImage(this.bitmap, 0, 0);
    const pixelData = readCtx.getImageData(0, 0, this.imageWidth, this.imageHeight).data;

    for (let y = 0; y < this.imageHeight; y++) {
      for (let x = 0; x < this.imageWidth; x++) {
        const idx = (y * this.imageWidth + x) * 4;
        const r = pixelData[idx];
        const g = pixelData[idx + 1];
        const b = pixelData[idx + 2];
        const alpha = pixelData[idx + 3];

        // Filtrar píxeles transparentes
        if (alpha === 0) continue;

        // Filtrar píxeles #deface (se renderizan como transparentes)
        if (r === 222 && g === 250 && b === 206) continue;

        const colorKey = `${r},${g},${b}`;

        // Solo incluir colores de la paleta del sitio
        if (!this.allowedColorsSet.has(colorKey)) continue;

        // Calcular coordenadas globales - AQUÍ está el problema potencial
        const globalX = baseX + x;
        const globalY = baseY + y;

        // Log del primer pixel para debugging
        if (queue.length === 0) {
          log(`[BLUE MARBLE] 🔍 ANÁLISIS PRIMER PÍXEL:`);
          log(
            `[BLUE MARBLE] 📊 User clicked: pixel(${this.coords[2]}, ${this.coords[3]}) en tile(${this.coords[0]}, ${this.coords[1]})`,
          );
          log(
            `[BLUE MARBLE] 📊 baseX = ${this.coords[0]} * ${this.actualTileSize} + ${this.coords[2]} = ${baseX}`,
          );
          log(
            `[BLUE MARBLE] 📊 baseY = ${this.coords[1]} * ${this.actualTileSize} + ${this.coords[3]} = ${baseY}`,
          );
          log(`[BLUE MARBLE] 📊 First valid pixel in image: imagen(${x}, ${y})`);
          log(`[BLUE MARBLE] 📊 Calculated global position: (${globalX}, ${globalY})`);
          log(`[BLUE MARBLE] ❓ ¿Debería ser: user_click_global + offset_in_image?`);
        }

        // Calcular coordenadas de tile (usar actualTileSize detectado)
        const tileX = Math.floor(globalX / this.actualTileSize);
        const tileY = Math.floor(globalY / this.actualTileSize);
        const localX = globalX % this.actualTileSize;
        const localY = globalY % this.actualTileSize;

        // Obtener metadatos del color
        const colorMeta = this.rgbToMeta.get(colorKey) || { id: 0, name: 'Unknown' };

        queue.push({
          // Coordenadas de imagen (relativas)
          imageX: x,
          imageY: y,
          // Coordenadas globales
          globalX: globalX,
          globalY: globalY,
          // Coordenadas de tile/local
          tileX: tileX,
          tileY: tileY,
          localX: localX,
          localY: localY,
          // Información de color
          color: {
            r: r,
            g: g,
            b: b,
            id: colorMeta.id,
            name: colorMeta.name,
          },
          originalColor: { r, g, b, alpha },
        });

        // Log primer píxel válido como ejemplo
        if (queue.length === 1) {
          log(
            `[BLUE MARBLE] 🎨 Primer píxel válido: imagen(${x},${y}) → global(${globalX},${globalY}) → tile(${tileX},${tileY}) local(${localX},${localY}) color(${r},${g},${b})`,
          );
        }
      }
    }

    log(`[BLUE MARBLE] ✅ Cola generada: ${queue.length} píxeles válidos`);
    log(
      `[BLUE MARBLE] 📊 Rango de píxeles: X(${baseX}-${baseX + this.imageWidth - 1}), Y(${baseY}-${baseY + this.imageHeight - 1})`,
    );
    if (queue.length > 0) {
      const firstPixel = queue[0];
      const lastPixel = queue[queue.length - 1];
      log(`[BLUE MARBLE] 📋 Primer píxel: global(${firstPixel.globalX},${firstPixel.globalY})`);
      log(`[BLUE MARBLE] 📋 Último píxel: global(${lastPixel.globalX},${lastPixel.globalY})`);
    }
    return queue;
  }

  /**
   * Redimensiona la imagen (preserva proporciones por defecto)
   */
  async resize(newWidth, newHeight, keepAspectRatio = true) {
    if (!this.img) {
      throw new Error('Imagen no cargada. Llama a load() primero.');
    }

    const originalWidth = this.img.width;
    const originalHeight = this.img.height;

    if (keepAspectRatio) {
      const aspectRatio = originalWidth / originalHeight;
      if (newWidth / newHeight > aspectRatio) {
        newWidth = newHeight * aspectRatio;
      } else {
        newHeight = newWidth / aspectRatio;
      }
    }

    // Crear nueva imagen redimensionada
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = newWidth;
    tempCanvas.height = newHeight;
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.imageSmoothingEnabled = false; // Pixel art
    tempCtx.drawImage(this.img, 0, 0, newWidth, newHeight);

    // Actualizar imagen y bitmap
    const newDataUrl = tempCanvas.toDataURL();
    this.img.src = newDataUrl;
    this.imageSrc = newDataUrl;

    await new Promise((resolve) => {
      this.img.onload = async () => {
        this.bitmap = await createImageBitmap(this.img);
        this.imageWidth = this.bitmap.width;
        this.imageHeight = this.bitmap.height;
        this.totalPixels = this.imageWidth * this.imageHeight;
        resolve();
      };
    });

    log(
      `[BLUE MARBLE] Imagen redimensionada: ${originalWidth}×${originalHeight} → ${this.imageWidth}×${this.imageHeight}`,
    );

    return {
      width: this.imageWidth,
      height: this.imageHeight,
    };
  }

  /**
   * Obtiene información completa de la imagen procesada
   */
  getImageData() {
    return {
      width: this.imageWidth,
      height: this.imageHeight,
      totalPixels: this.totalPixels,
      requiredPixels: this.requiredPixelCount,
      defacePixels: this.defacePixelCount,
      colorPalette: this.colorPalette,
      coords: [...this.coords],
      originalName: this.originalName || 'image.png',
      // Para compatibilidad con Auto-Image actual
      pixels: this.generatePixelQueue(),
    };
  }

  /**
   * Genera preview de la imagen
   */
  generatePreview(maxWidth = 200, maxHeight = 200) {
    if (!this.img) return null;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const { width: origWidth, height: origHeight } = this.img;
    const aspectRatio = origWidth / origHeight;

    let newWidth, newHeight;
    if (maxWidth / maxHeight > aspectRatio) {
      newHeight = maxHeight;
      newWidth = maxHeight * aspectRatio;
    } else {
      newWidth = maxWidth;
      newHeight = maxWidth / aspectRatio;
    }

    canvas.width = newWidth;
    canvas.height = newHeight;
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(this.img, 0, 0, newWidth, newHeight);

    return canvas.toDataURL();
  }

  getDimensions() {
    return {
      width: this.imageWidth,
      height: this.imageHeight,
    };
  }
}

// Mantener exports de funciones para compatibilidad
export { detectAvailableColors } from './processor.js';

export function findClosestColor(rgb, palette) {
  if (!palette || palette.length === 0) return null;

  let closestColor = null;
  let minDistance = Infinity;

  for (const color of palette) {
    const colorRgb = color.rgb || color;
    const distance = Math.sqrt(
      Math.pow(rgb.r - colorRgb.r, 2) +
        Math.pow(rgb.g - colorRgb.g, 2) +
        Math.pow(rgb.b - colorRgb.b, 2),
    );

    if (distance < minDistance) {
      minDistance = distance;
      closestColor = color;
    }
  }

  return closestColor;
}

export function generatePixelQueue(imageData, startPosition, tileX, tileY) {
  // Esta función ahora es manejada por BlueMarblelImageProcessor.generatePixelQueue()
  // Mantenida para compatibilidad
  const { width, height, pixels } = imageData;
  const { x: localStartX, y: localStartY } = startPosition;
  const queue = [];

  for (const pixelData of pixels) {
    if (!pixelData) continue;

    const globalX = localStartX + pixelData.imageX;
    const globalY = localStartY + pixelData.imageY;

    queue.push({
      imageX: pixelData.imageX,
      imageY: pixelData.imageY,
      localX: globalX,
      localY: globalY,
      tileX: tileX,
      tileY: tileY,
      color: pixelData.color,
      originalColor: pixelData.originalColor,
    });
  }

  log(`Cola de píxeles generada (compatibilidad): ${queue.length} píxeles`);
  return queue;
}
