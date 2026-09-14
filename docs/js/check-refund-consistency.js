/**
 * Verifies that the FAQs neighbouring the refund policy stay consistent with it
 * in every non-Korean/English locale.
 * Run from the repo root: node docs/js/check-refund-consistency.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const JS_DIR = __dirname;
const sandbox = { window: {} };
vm.createContext(sandbox);

[
    "i18n-locales-part1.js",
    "i18n-locales-part2.js",
    "i18n-locales-part3.js",
    "i18n-locales-part4.js",
    "i18n-site-extra.js"
].forEach(function (file) {
    vm.runInContext(fs.readFileSync(path.join(JS_DIR, file), "utf8"), sandbox, { filename: file });
});

const locales = sandbox.window.PeekomI18nLocales || {};
const LANGS = ["ja", "zh-CN", "zh-TW", "es", "fr", "de", "pt", "it", "ru", "vi", "th", "id", "hi", "ar"];

let failures = 0;
LANGS.forEach(function (lang) {
    const d = locales[lang] || {};
    const problems = [];

    if (!/api\.lemonsqueezy\.com/.test(d.faq12a || "")) problems.push("faq12a: activation host missing");
    if (!/Activated|Inactive/.test(d.faq12a || "")) problems.push("faq12a: activation-state wording missing");
    if (!/Single/.test(d.faq12a || "")) problems.push("faq12a: per-plan activation limits missing");
    if (!/github\.com|GitHub Releases/i.test(d.faq13a || "")) problems.push("faq13a: GitHub hosting note missing");
    if (!/api\.lemonsqueezy\.com/.test(d.faq13a || "")) problems.push("faq13a: activation host missing");
    if (!/Family/.test(d.faq3ca || "")) problems.push("faq3ca: plan tiers missing");
    if (!/Family/.test(d.faq3da || "")) problems.push("faq3da: plan tiers missing");
    if (!/Activated|activ/i.test(d.faq3a || "")) problems.push("faq3a: activation wording missing");

    if (problems.length) {
        failures += 1;
        console.log("FAIL  " + lang + " — " + problems.join(" | "));
    } else {
        console.log("ok    " + lang);
    }
});

if (failures) {
    console.log("\n" + failures + " locale(s) inconsistent.");
    process.exit(1);
}
console.log("\nAll " + LANGS.length + " locales consistent with the refund policy.");
