import { log } from './logger.js';

/**
 * Utility để detect kích thước tile thực tế của WPlace
 */
export class TileDetector {
  constructor() {
    this.detectedSize = null;
    this.confidence = 0;
  }

  /**
   * Detect tile size từ URL patterns
   */
  detectFromUrl() {
    try {
      // Kiểm tra current URL
      const url = window.location.href;
      const params = new URLSearchParams(window.location.search);
      const hash = window.location.hash;

      // Thử extract coordinates từ URL
      let coords = null;

      if (params.has('x') && params.has('y')) {
        coords = [parseInt(params.get('x')), parseInt(params.get('y'))];
      } else if (hash) {
        const hashMatch = hash.match(/#(-?\d+),(-?\d+)/);
        if (hashMatch) {
          coords = [parseInt(hashMatch[1]), parseInt(hashMatch[2])];
        }
      }

      if (coords) {
        // Nếu coordinates lớn hơn 10000, có thể đó là global coords
        if (Math.abs(coords[0]) > 10000 || Math.abs(coords[1]) > 10000) {
          // Test với tile sizes phổ biến
          const testSizes = [3000, 4000, 2048, 5000];

          for (const size of testSizes) {
            const tileX = Math.floor(coords[0] / size);
            const tileY = Math.floor(coords[1] / size);
            const localX = coords[0] % size;
            const localY = coords[1] % size;

            // Kiểm tra xem có reasonable không (local coords trong phạm vi tile)
            if (localX >= 0 && localX < size && localY >= 0 && localY < size) {
              log(
                `[TILE DETECTOR] URL suggests tile size: ${size} (tile: ${tileX},${tileY} local: ${localX},${localY})`,
              );
              return size;
            }
          }
        }
      }
    } catch (error) {
      log('[TILE DETECTOR] Error detecting from URL:', error);
    }
    return null;
  }

  /**
   * Detect tile size từ DOM elements
   */
  detectFromDOM() {
    try {
      // Tìm các elements có thể chứa tile info
      const selectors = ['[data-tile-size]', '.tile-info', '.coordinates', '.position-info'];

      for (const selector of selectors) {
        const elements = document.querySelectorAll(selector);
        for (const el of elements) {
          const tileSize =
            el.getAttribute('data-tile-size') ||
            el.dataset.tileSize ||
            el.textContent.match(/tile.*?(\d{4,})/i)?.[1];

          if (tileSize) {
            const size = parseInt(tileSize);
            if (size >= 1000 && size <= 10000) {
              log(`[TILE DETECTOR] DOM suggests tile size: ${size}`);
              return size;
            }
          }
        }
      }

      // Tìm trong text content
      const textContent = document.body.textContent || '';
      const sizeMatch =
        textContent.match(/tile.*?(\d{4,})/i) || textContent.match(/(\d{4,}).*?tile/i);

      if (sizeMatch) {
        const size = parseInt(sizeMatch[1]);
        if (size >= 1000 && size <= 10000) {
          log(`[TILE DETECTOR] Text content suggests tile size: ${size}`);
          return size;
        }
      }
    } catch (error) {
      log('[TILE DETECTOR] Error detecting from DOM:', error);
    }
    return null;
  }

  /**
   * Detect tile size bằng cách intercept network requests
   */
  async detectFromNetwork(timeout = 10000) {
    return new Promise((resolve) => {
      const originalFetch = window.fetch;
      let resolved = false;

      // Timeout
      const timeoutId = setTimeout(() => {
        if (!resolved) {
          resolved = true;
          window.fetch = originalFetch;
          resolve(null);
        }
      }, timeout);

      window.fetch = async function (url, options) {
        try {
          // Intercept pixel requests
          if (url.includes('/s0/pixel/') && options && options.body) {
            const tileMatch = url.match(/\/s0\/pixel\/(-?\d+)\/(-?\d+)/);
            let body;

            try {
              body = JSON.parse(options.body);
            } catch {
              body = options.body;
            }

            if (tileMatch && body && body.coords) {
              const tileX = parseInt(tileMatch[1]);
              const tileY = parseInt(tileMatch[2]);
              const localX = body.coords[0];
              const localY = body.coords[1];

              // Test different tile sizes
              const testSizes = [3000, 4000, 2048, 5000];

              for (const size of testSizes) {
                const expectedGlobalX = tileX * size + localX;
                const expectedGlobalY = tileY * size + localY;

                // Validate if this makes sense
                if (localX >= 0 && localX < size && localY >= 0 && localY < size) {
                  if (!resolved) {
                    resolved = true;
                    clearTimeout(timeoutId);
                    window.fetch = originalFetch;
                    log(
                      `[TILE DETECTOR] Network request suggests tile size: ${size} (tile: ${tileX},${tileY} local: ${localX},${localY})`,
                    );
                    resolve(size);
                    return;
                  }
                }
              }
            }
          }
        } catch (error) {
          log('[TILE DETECTOR] Error intercepting network:', error);
        }

        return originalFetch(url, options);
      };
    });
  }

  /**
   * Auto-detect tile size sử dụng nhiều methods
   */
  async autoDetect() {
    log('[TILE DETECTOR] Auto-detecting tile size...');

    // Method 1: URL
    let size = this.detectFromUrl();
    if (size) {
      this.detectedSize = size;
      this.confidence = 0.8;
      return size;
    }

    // Method 2: DOM
    size = this.detectFromDOM();
    if (size) {
      this.detectedSize = size;
      this.confidence = 0.6;
      return size;
    }

    // Method 3: Network (với timeout ngắn)
    size = await this.detectFromNetwork(5000);
    if (size) {
      this.detectedSize = size;
      this.confidence = 0.9;
      return size;
    }

    // Fallback: based on common sizes, prioritize 4000 over 3000 for newer sites
    log('[TILE DETECTOR] Could not auto-detect, trying common sizes...');

    // Heuristic: if site looks modern, probably 4000, otherwise 3000
    const isModernSite =
      document.querySelector('meta[name="viewport"]') ||
      document.querySelector('[class*="modern"]') ||
      document.querySelector('[class*="v2"]') ||
      window.location.href.includes('v2');

    const defaultSize = isModernSite ? 4000 : 3000;
    this.detectedSize = defaultSize;
    this.confidence = 0.3;

    log(`[TILE DETECTOR] Using fallback size: ${defaultSize} (confidence: ${this.confidence})`);
    return defaultSize;
  }

  /**
   * Get detected tile size
   */
  getDetectedSize() {
    return this.detectedSize;
  }

  /**
   * Get confidence level (0-1)
   */
  getConfidence() {
    return this.confidence;
  }
}

// Export singleton instance
export const tileDetector = new TileDetector();
