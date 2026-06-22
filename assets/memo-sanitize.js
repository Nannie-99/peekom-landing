// Memo HTML sanitization (renderer-safe, no Node required)
(function (global) {
  const FORBIDDEN_TAGS = new Set([
    "SCRIPT",
    "IFRAME",
    "OBJECT",
    "EMBED",
    "LINK",
    "META",
    "BASE",
    "FORM"
  ]);

  const FORBIDDEN_ATTR_PREFIX = /^on/i;

  function isUnsafeUrl(value) {
    if (!value || typeof value !== "string") return false;
    const trimmed = value.trim().toLowerCase();
    return trimmed.startsWith("javascript:") || trimmed.startsWith("data:text/html");
  }

  function sanitizeMemoHtml(html) {
    if (html == null || html === "") return "";
    if (typeof html !== "string") return "";

    const template = document.createElement("template");
    template.innerHTML = html;
    const root = template.content;

    root.querySelectorAll("*").forEach((el) => {
      if (FORBIDDEN_TAGS.has(el.tagName)) {
        el.remove();
        return;
      }
      [...el.attributes].forEach((attr) => {
        const name = attr.name;
        const value = attr.value;
        if (FORBIDDEN_ATTR_PREFIX.test(name) || name === "srcdoc") {
          el.removeAttribute(name);
          return;
        }
        if ((name === "href" || name === "src") && isUnsafeUrl(value)) {
          el.removeAttribute(name);
        }
      });
    });

    return root.innerHTML;
  }

  global.PeekomMemoSanitize = { sanitizeMemoHtml };
})(typeof window !== "undefined" ? window : global);
