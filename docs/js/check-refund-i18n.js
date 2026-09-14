/**
 * Verifies that every supported locale defines the refund-policy and refund-FAQ keys.
 * Run from the repo root: node docs/js/check-refund-i18n.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const JS_DIR = __dirname;

const LANGS = [
    "ko", "en", "ja", "zh-CN", "zh-TW", "es", "fr", "de",
    "pt", "it", "ru", "vi", "th", "id", "hi", "ar"
];

const KEYS = [
    "refundPolicyTitle", "refundPolicyBody",
    "faqR1q", "faqR1a", "faqR2q", "faqR2a", "faqR3q", "faqR3a",
    "faqR4q", "faqR4a", "faqR5q", "faqR5a",
    "faq3a", "faq3ca", "faq3da", "faq12a", "faq13a"
];

// Locale bundles are plain IIFEs that only touch `window`, so a stub is enough.
const sandbox = { window: {} };
vm.createContext(sandbox);

[
    "i18n-locales-part1.js",
    "i18n-locales-part2.js",
    "i18n-locales-part3.js",
    "i18n-locales-part4.js",
    "i18n-site-extra.js"
].forEach(function (file) {
    const code = fs.readFileSync(path.join(JS_DIR, file), "utf8");
    vm.runInContext(code, sandbox, { filename: file });
});

const locales = sandbox.window.PeekomI18nLocales || {};

// site.js needs a DOM, so read ko/en straight out of the source text instead.
const siteSrc = fs.readFileSync(path.join(JS_DIR, "site.js"), "utf8");
function siteBlock(lang) {
    const start = siteSrc.indexOf("\n    " + lang + ": {");
    if (start === -1) return "";
    const next = siteSrc.indexOf("\n    },\n", start);
    return siteSrc.slice(start, next === -1 ? siteSrc.length : next);
}
const siteBlocks = { ko: siteBlock("ko"), en: siteBlock("en") };

// Pull the raw source of one key's value so its markup can be checked. The value is
// built by string concatenation, but that does not affect which tags appear.
function siteRawValue(lang, key) {
    const block = siteBlocks[lang];
    const start = block.search(new RegExp("\\n\\s{8}" + key + ":"));
    if (start === -1) return "";
    const rest = block.slice(start + 1);
    const end = rest.search(/\n {8}[a-zA-Z0-9_]+:/);
    return end === -1 ? rest : rest.slice(0, end);
}

const VOID_TAGS = new Set(["br", "hr", "img", "input", "kbd"]);

function tagBalanceError(html) {
    const stack = [];
    const re = /<(\/?)([a-zA-Z0-9]+)[^>]*?(\/?)>/g;
    let m;
    while ((m = re.exec(html)) !== null) {
        const closing = m[1] === "/";
        const name = m[2].toLowerCase();
        if (VOID_TAGS.has(name) || m[3] === "/") continue;
        if (closing) {
            if (stack.pop() !== name) return "unbalanced </" + name + ">";
        } else {
            stack.push(name);
        }
    }
    return stack.length ? "unclosed <" + stack[stack.length - 1] + ">" : null;
}

// Every locale must keep these intact — a dropped or translated URL breaks the page.
const REQUIRED_IN_BODY = [
    "https://forms.gle/fbzSb2Gf1THnFwGD6",
    'class="faq-refund-list"',
    "api.lemonsqueezy.com"
];

let failures = 0;
LANGS.forEach(function (lang) {
    const problems = [];
    const dict = locales[lang] || {};
    const isSiteJs = Boolean(siteBlocks[lang]);

    const missing = KEYS.filter(function (key) {
        if (isSiteJs) return !new RegExp("\\n\\s{8}" + key + ":").test(siteBlocks[lang]);
        return !dict[key] || String(dict[key]).trim() === "";
    });
    if (missing.length) problems.push("missing keys: " + missing.join(", "));

    KEYS.forEach(function (key) {
        const value = isSiteJs ? siteRawValue(lang, key) : dict[key];
        if (typeof value !== "string" || !value) return;
        const err = tagBalanceError(value);
        if (err) problems.push(key + ": " + err);
    });

    const body = isSiteJs ? siteRawValue(lang, "refundPolicyBody") : dict.refundPolicyBody;
    if (typeof body === "string" && body) {
        REQUIRED_IN_BODY.forEach(function (needle) {
            if (!body.includes(needle)) problems.push('refundPolicyBody missing "' + needle + '"');
        });
    }

    if (problems.length) {
        failures += 1;
        console.log("FAIL  " + lang + " — " + problems.join(" | "));
    } else {
        console.log("ok    " + lang);
    }
});

if (failures) {
    console.log("\n" + failures + " locale(s) incomplete.");
    process.exit(1);
}
console.log("\nAll " + LANGS.length + " locales define all " + KEYS.length + " keys.");
