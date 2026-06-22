const fs = require("fs");
const path = require("path");

const htmlPath = path.join(__dirname, "..", "index.html");
const lines = fs.readFileSync(htmlPath, "utf8").split(/\r?\n/);
let s = lines.slice(1319, 2786).map((l) => l.replace(/^        /, "")).join("\n");

console.log("extracted lines:", s.split("\n").length);

s = s.replace(
  /const EXTENDED_COMPARE_EN = \[[\s\S]*?\];\s*\n\s*const EXTENDED_COMPARE_KO = \[[\s\S]*?\];\s*\n/,
  ""
);
console.log("after compare remove:", s.split("\n").length);

s = s.replace(
  /function renderCompareCell[\s\S]*?function enrichLocaleData/,
  "function enrichLocaleData"
);
console.log("after renderCompare remove:", s.split("\n").length);

s = s.replace(
  /\/\* ── Hero carousel ── \*\/[\s\S]*?window\.onload = function/,
  "window.onload = function"
);
console.log("after carousel remove:", s.split("\n").length);

s = s.replace(/initCarousel\(\);\s*\n\s*\};/, "};");

const insertAfter = 'const CONTACT_EMAIL = "hello.peekom@gmail.com";\n\n';
const extra = require("fs").readFileSync(path.join(__dirname, "site-extra-snippet.js"), "utf8");
console.log("CONTACT_EMAIL occurrences:", (s.match(/const CONTACT_EMAIL = "hello\.peekom@gmail\.com";/g) || []).length);

if (!s.includes("RELEASE_HISTORY")) {
  s = s.replace(insertAfter, function () { return insertAfter + extra; });
}
console.log("after extra insert:", s.split("\n").length, "onload:", (s.match(/window\.onload/g) || []).length);

const header = `/* Peekom landing — shared site logic */
(function () {
"use strict";

`;

const footer = `
    window.PeekomSite = {
        LINKS: LINKS,
        PRICING: PRICING,
        setLanguage: setLanguage,
        openModal: openModal,
        closeModal: closeModal,
        closeModalOnBackdrop: closeModalOnBackdrop,
        closeSearch: closeSearch
    };
    window.setLanguage = setLanguage;
    window.openModal = openModal;
    window.closeModal = closeModal;
    window.closeModalOnBackdrop = closeModalOnBackdrop;
    window.closeSearch = closeSearch;
})();
`;

const finalContent = header + s.trim() + footer;
console.log("final content:", finalContent.split("\n").length, "onload:", (finalContent.match(/window\.onload/g) || []).length);
fs.writeFileSync(path.join(__dirname, "site.js"), finalContent);
console.log("final lines:", finalContent.split("\n").length);
