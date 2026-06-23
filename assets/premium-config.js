/**
 * Peekom premium / branding constants (shared renderer + main via duplicate or require)
 */
(function (root, factory) {
  if (typeof module !== "object" || !module.exports) {
    root.PeekomPremiumConfig = factory();
    return;
  }
  module.exports = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  const FREE_MAX_SLOTS = 3;
  const PREMIUM_MAX_SLOTS = 10;
  const LEMON_SQUEEZY_BUY_URL =
    "https://peekom.lemonsqueezy.com/checkout/buy/b8f36320-f95e-4ce2-a49c-2c28e2d4c20d";
  const GITHUB_RELEASES_URL = "https://github.com/Nannie-99/peekom-landing/releases/latest";
  const PRIVACY_URL = "https://www.peekom.com/privacy.html";
  const DOCS_URL = "https://www.peekom.com/";
  const CONTACT_EMAIL = "hello.peekom@gmail.com";
  const PLUS_PRICE_USD = "9.99";

  return {
    FREE_MAX_SLOTS,
    PREMIUM_MAX_SLOTS,
    LEMON_SQUEEZY_BUY_URL,
    GITHUB_RELEASES_URL,
    PRIVACY_URL,
    DOCS_URL,
    CONTACT_EMAIL,
    PLUS_PRICE_USD,
    APP_NAME_FREE: "Peekom",
    APP_NAME_PLUS: "Peekom Plus"
  };
});
