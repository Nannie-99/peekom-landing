/**
 * Memo image compression for localStorage — keeps display quality, shrinks payload.
 */
(function (global) {
  const JPEG_QUALITY = 0.86;
  const WEBP_QUALITY = 0.85;
  const MAX_LONG_EDGE = 2048;
  const RETINA_FACTOR = 2;
  /** Rough base64 string length above which we try to compress (~300 KB file). */
  const COMPRESS_THRESHOLD_CHARS = 280000;
  /** Target max base64 length per image (~450 KB on disk). */
  const TARGET_MAX_CHARS = 620000;

  let webpSupported = null;

  function supportsWebpExport() {
    if (webpSupported !== null) return webpSupported;
    try {
      const c = document.createElement("canvas");
      c.width = 2;
      c.height = 2;
      webpSupported = c.toDataURL("image/webp").startsWith("data:image/webp");
    } catch {
      webpSupported = false;
    }
    return webpSupported;
  }

  function loadImageElement(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  }

  function estimateDataUrlBytes(dataUrl) {
    if (!dataUrl || typeof dataUrl !== "string") return 0;
    const comma = dataUrl.indexOf(",");
    if (comma < 0) return dataUrl.length;
    return Math.floor((dataUrl.length - comma - 1) * 0.75);
  }

  function shouldCompressDataUrl(dataUrl) {
    if (!dataUrl || !dataUrl.startsWith("data:image/")) return false;
    if (dataUrl.startsWith("data:image/jpeg") || dataUrl.startsWith("data:image/webp")) {
      return dataUrl.length > COMPRESS_THRESHOLD_CHARS;
    }
    return true;
  }

  function resolveStorageLongEdge(displayWidth, displayHeight, sourceWidth, sourceHeight) {
    const displayLong = Math.max(displayWidth || 0, displayHeight || 0);
    const sourceLong = Math.max(sourceWidth || 0, sourceHeight || 0);
    let cap = MAX_LONG_EDGE;
    if (displayLong > 0) {
      cap = Math.min(MAX_LONG_EDGE, Math.max(Math.round(displayLong * RETINA_FACTOR), 480));
    }
    if (sourceLong > 0) {
      return Math.min(cap, sourceLong);
    }
    return cap;
  }

  function resizeCanvasToLongEdge(canvas, maxLongEdge) {
    const longEdge = Math.max(canvas.width, canvas.height);
    if (longEdge <= maxLongEdge) return canvas;
    const scale = maxLongEdge / longEdge;
    const out = document.createElement("canvas");
    out.width = Math.max(1, Math.round(canvas.width * scale));
    out.height = Math.max(1, Math.round(canvas.height * scale));
    const ctx = out.getContext("2d");
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(canvas, 0, 0, out.width, out.height);
    return out;
  }

  function canvasHasAlpha(canvas) {
    try {
      const ctx = canvas.getContext("2d");
      const sampleW = Math.min(canvas.width, 32);
      const sampleH = Math.min(canvas.height, 32);
      const data = ctx.getImageData(0, 0, sampleW, sampleH).data;
      for (let i = 3; i < data.length; i += 4) {
        if (data[i] < 250) return true;
      }
    } catch {
      /* ignore */
    }
    return false;
  }

  function encodeCanvas(canvas, preferLossy) {
    if (preferLossy) {
      const useWebp = supportsWebpExport();
      const mime = useWebp ? "image/webp" : "image/jpeg";
      let quality = useWebp ? WEBP_QUALITY : JPEG_QUALITY;
      let dataUrl = canvas.toDataURL(mime, quality);

      while (dataUrl.length > TARGET_MAX_CHARS && quality > 0.52) {
        quality = Math.max(0.52, quality - 0.08);
        dataUrl = canvas.toDataURL(mime, quality);
      }

      if (dataUrl.length > TARGET_MAX_CHARS) {
        const smaller = resizeCanvasToLongEdge(
          canvas,
          Math.max(320, Math.round(Math.max(canvas.width, canvas.height) * 0.75))
        );
        quality = useWebp ? WEBP_QUALITY : JPEG_QUALITY;
        dataUrl = smaller.toDataURL(mime, quality);
        while (dataUrl.length > TARGET_MAX_CHARS && quality > 0.52) {
          quality = Math.max(0.52, quality - 0.08);
          dataUrl = smaller.toDataURL(mime, quality);
        }
        return dataUrl;
      }

      return dataUrl;
    }

    let dataUrl = canvas.toDataURL("image/png");
    if (dataUrl.length <= TARGET_MAX_CHARS) return dataUrl;

    const smaller = resizeCanvasToLongEdge(
      canvas,
      Math.max(320, Math.round(Math.max(canvas.width, canvas.height) * 0.85))
    );
    return smaller.toDataURL("image/png");
  }

  function compressCanvasForMemoStorage(canvas, options = {}) {
    const {
      displayWidth = 0,
      displayHeight = 0,
      maxLongEdge = resolveStorageLongEdge(
        displayWidth,
        displayHeight,
        canvas.width,
        canvas.height
      )
    } = options;

    const sized = resizeCanvasToLongEdge(canvas, maxLongEdge);
    const hasAlpha = canvasHasAlpha(sized);
    return encodeCanvas(sized, !hasAlpha);
  }

  async function compressDataUrlForMemo(dataUrl, options = {}) {
    if (!dataUrl || !dataUrl.startsWith("data:image/")) return dataUrl;
    if (!shouldCompressDataUrl(dataUrl)) return dataUrl;

    try {
      const img = await loadImageElement(dataUrl);
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, img.naturalWidth);
      canvas.height = Math.max(1, img.naturalHeight);
      const ctx = canvas.getContext("2d");
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0);
      return compressCanvasForMemoStorage(canvas, {
        displayWidth: options.displayWidth || canvas.width,
        displayHeight: options.displayHeight || canvas.height,
        maxLongEdge: options.maxLongEdge
      });
    } catch {
      return dataUrl;
    }
  }

  global.PeekomMemoImage = {
    JPEG_QUALITY,
    WEBP_QUALITY,
    MAX_LONG_EDGE,
    COMPRESS_THRESHOLD_CHARS,
    TARGET_MAX_CHARS,
    estimateDataUrlBytes,
    shouldCompressDataUrl,
    loadImageElement,
    compressCanvasForMemoStorage,
    compressDataUrlForMemo
  };
})(typeof window !== "undefined" ? window : globalThis);
