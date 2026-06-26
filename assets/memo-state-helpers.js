// Shared memo merge helpers (renderer-safe, no Node required)
(function (global) {
  function isMemoHtmlEffectivelyEmpty(html) {
    if (!html || typeof html !== "string") return true;
    const trimmed = html.trim();
    if (!trimmed) return true;
    const probe = document.createElement("div");
    probe.innerHTML = trimmed;
    const text = (probe.textContent || "").trim();
    if (text) return false;
    return !probe.querySelector("img.peekom-memo-image");
  }

  function pickMemoHtml(dstHtml, srcHtml) {
    const dstEmpty = isMemoHtmlEffectivelyEmpty(dstHtml);
    const srcEmpty = isMemoHtmlEffectivelyEmpty(srcHtml);
    if (!dstEmpty) return dstHtml;
    if (!srcEmpty) return srcHtml;
    return typeof dstHtml === "string" ? dstHtml : (srcHtml || "");
  }

  function pickMemoImages(dstImages, srcImages) {
    const dst = Array.isArray(dstImages) ? dstImages : [];
    const src = Array.isArray(srcImages) ? srcImages : [];
    if (dst.length > 0) return dst.slice();
    if (src.length > 0) return src.slice();
    return dst;
  }

  global.PeekomMemoState = {
    isMemoHtmlEffectivelyEmpty,
    pickMemoHtml,
    pickMemoImages
  };
})(typeof window !== "undefined" ? window : globalThis);
