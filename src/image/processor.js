import { log } from '../core/logger.js';

export class ImageProcessor {
  constructor(imageSrc) {
    this.imageSrc = imageSrc;
    this.img = new window.Image();
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d', { willReadFrequently: true });
    this.previewCanvas = document.createElement('canvas');
    this.previewCtx = this.previewCanvas.getContext('2d');
  }

  async load() {
    return new Promise((resolve, reject) => {
      this.img.onload = () => {
        this.canvas.width = this.img.width;
        this.canvas.height = this.img.height;
        this.ctx.drawImage(this.img, 0, 0);
        resolve();
      };
      this.img.onerror = reject;
      this.img.src = this.imageSrc;
    });
  }

  getPixelData() {
    return this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height).data;
  }

  getDimensions() {
    return { width: this.canvas.width, height: this.canvas.height };
  }

  resize(newWidth, newHeight) {
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = newWidth;
    tempCanvas.height = newHeight;
    const tempCtx = tempCanvas.getContext('2d');

    tempCtx.drawImage(this.img, 0, 0, newWidth, newHeight);

    this.canvas.width = newWidth;
    this.canvas.height = newHeight;
    this.ctx.drawImage(tempCanvas, 0, 0);

    return this.getPixelData();
  }

  generatePreview(newWidth, newHeight) {
    this.previewCanvas.width = newWidth;
    this.previewCanvas.height = newHeight;
    this.previewCtx.imageSmoothingEnabled = false;
    this.previewCtx.drawImage(this.img, 0, 0, newWidth, newHeight);

    return this.previewCanvas.toDataURL();
  }

  getImageData() {
    const { width, height } = this.getDimensions();
    const pixels = this.getPixelData();

    return {
      width,
      height,
      pixels,
      originalName: this.originalName || 'image.png',
    };
  }

  processImage(availableColors, config) {
    const { width, height } = this.getDimensions();
    const pixels = this.getPixelData();
    const processedPixels = [];
    let validPixelCount = 0;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (y * width + x) * 4;
        const r = pixels[idx];
        const g = pixels[idx + 1];
        const b = pixels[idx + 2];
        const alpha = pixels[idx + 3];

        // Filtrar píxeles transparentes
        if (alpha < config.TRANSPARENCY_THRESHOLD) {
          continue;
        }

        // Filtrar píxeles blancos/muy claros si está configurado
        const isWhite =
          r > config.WHITE_THRESHOLD && g > config.WHITE_THRESHOLD && b > config.WHITE_THRESHOLD;
        if (isWhite) {
          continue;
        }

        // Encontrar el color más cercano en la paleta
        const closestColor = this.findClosestColor({ r, g, b }, availableColors);
        if (closestColor) {
          processedPixels.push({
            x,
            y,
            originalColor: { r, g, b, alpha },
            targetColor: closestColor,
          });
          validPixelCount++;
        }
      }
    }

    return {
      width,
      height,
      pixels: processedPixels,
      validPixelCount,
      originalName: this.originalName || 'image.png',
    };
  }

  findClosestColor(rgb, palette) {
    if (!palette || palette.length === 0) return null;

    let closestColor = null;
    let minDistance = Infinity;

    for (const color of palette) {
      const distance = Math.sqrt(
        Math.pow(rgb.r - color.r, 2) + Math.pow(rgb.g - color.g, 2) + Math.pow(rgb.b - color.b, 2),
      );

      if (distance < minDistance) {
        minDistance = distance;
        closestColor = color;
      }
    }

    return closestColor;
  }
}

export function findClosestColor(rgb, palette) {
  if (!palette || palette.length === 0) return null;

  let closestColor = null;
  let minDistance = Infinity;

  for (const color of palette) {
    const distance = Math.sqrt(
      Math.pow(rgb.r - color.r, 2) + Math.pow(rgb.g - color.g, 2) + Math.pow(rgb.b - color.b, 2),
    );

    if (distance < minDistance) {
      minDistance = distance;
      closestColor = color;
    }
  }

  return closestColor;
}

export function generatePixelQueue(imageData, startPosition, tileX, tileY) {
  const { width, height, pixels } = imageData;
  const { x: localStartX, y: localStartY } = startPosition;
  const queue = [];

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pixelData = pixels.find((p) => p.x === x && p.y === y);
      if (!pixelData) continue;

      const globalX = localStartX + x;
      const globalY = localStartY + y;

      queue.push({
        imageX: x,
        imageY: y,
        localX: globalX,
        localY: globalY,
        tileX: tileX,
        tileY: tileY,
        color: pixelData.targetColor,
        originalColor: pixelData.originalColor,
      });
    }
  }

  log(`Cola de píxeles generada: ${queue.length} píxeles para pintar`);
  return queue;
}

export function detectAvailableColors() {
  log('🎨 Detectando colores disponibles...');

  // Buscar elementos de color usando el selector del original
  const colorElements = document.querySelectorAll('[id^="color-"]');
  const colors = [];

  for (const element of colorElements) {
    // Filtrar elementos que tienen SVG (probablemente iconos de bloqueo)
    if (element.querySelector('svg')) {
      continue;
    }

    const idStr = element.id.replace('color-', '');
    const id = parseInt(idStr);

    // Filtrar colores específicos (0 y 5 según el original)
    if (id === 0 || id === 5) {
      continue;
    }

    // Obtener color RGB del style
    const backgroundStyle = element.style.backgroundColor;
    if (backgroundStyle) {
      const rgbMatch = backgroundStyle.match(/\d+/g);
      if (rgbMatch && rgbMatch.length >= 3) {
        const rgb = {
          r: parseInt(rgbMatch[0]),
          g: parseInt(rgbMatch[1]),
          b: parseInt(rgbMatch[2]),
        };

        colors.push({
          id,
          element,
          ...rgb,
        });

        log(`Color detectado: id=${id}, rgb(${rgb.r},${rgb.g},${rgb.b})`);
      }
    }
  }

  log(`✅ ${colors.length} colores disponibles detectados`);
  return colors;
}
