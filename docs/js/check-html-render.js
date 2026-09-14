/**
 * Finds i18n keys whose value contains markup but that setText() renders with
 * textContent — those show raw tags like "<p>" to the visitor.
 * Run from the repo root: node docs/js/check-html-render.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const JS_DIR = __dirname;
const siteSrc = fs.readFileSync(path.join(JS_DIR, "site.js"), "utf8");

function captureAll(source, re) {
    const out = new Set();
    let m;
    while ((m = re.exec(source)) !== null) out.add(m[1]);
    return out;
}

// The allow-list lives in a single `if (id === '…' || …)` line inside setText().
const setTextBody = siteSrc.slice(siteSrc.indexOf("function setText("));
const conditionLine = (setTextBody.match(/^.*if \(id === .*$/m) || [""])[0];
const allowed = captureAll(conditionLine, /id === '([^']+)'/g);
if (allowed.size === 0) {
    console.error("Could not parse the setText() allow-list — check this script against site.js.");
    process.exit(2);
}

// Only keys actually routed through setText() are affected.
const setTextKeys = captureAll(siteSrc, /setText\('([^']+)'/g);

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

// ko/en live in site.js, which needs a DOM, so scan their source text instead.
function siteBlockKeysWithHtml(lang) {
    const start = siteSrc.indexOf("\n    " + lang + ": {");
    const block = siteSrc.slice(start, siteSrc.indexOf("\n    },\n", start));
    const found = new Set();
    const re = /\n {8}([a-zA-Z0-9_]+):((?:[^\n]|\n(?! {8}[a-zA-Z0-9_]+:))*)/g;
    let m;
    while ((m = re.exec(block)) !== null) {
        if (/<(p|ul|ol|li|strong|code|a|br)[ >]/.test(m[2])) found.add(m[1]);
    }
    return found;
}

const offenders = new Map();
function record(key, lang) {
    if (!setTextKeys.has(key) || allowed.has(key)) return;
    if (!offenders.has(key)) offenders.set(key, new Set());
    offenders.get(key).add(lang);
}

["ko", "en"].forEach(function (lang) {
    siteBlockKeysWithHtml(lang).forEach(function (key) { record(key, lang); });
});
Object.keys(locales).forEach(function (lang) {
    const dict = locales[lang] || {};
    Object.keys(dict).forEach(function (key) {
        if (typeof dict[key] === "string" && /<(p|ul|ol|li|strong|code|a|br)[ >]/.test(dict[key])) record(key, lang);
    });
});

if (offenders.size === 0) {
    console.log("ok — every key containing markup is rendered with innerHTML.");
    process.exit(0);
}
offenders.forEach(function (langs, key) {
    console.log("FAIL  " + key + " — has markup but rendered as text (" + Array.from(langs).join(", ") + ")");
});
process.exit(1);
