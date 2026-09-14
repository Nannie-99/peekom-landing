const fs = require('fs');
const vm = require('vm');

const LANGS = ['ja','zh-CN','zh-TW','es','fr','de','pt','it','ru','vi','th','id','hi','ar'];
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('docs/js/i18n-site-extra.js', 'utf8'), sandbox);
const L = sandbox.window.PeekomI18nLocales;

function balance(html) {
    const stack = [];
    const re = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)([^>]*?)(\/?)>/g;
    const VOID = new Set(['br', 'hr', 'img', 'input', 'meta', 'link']);
    let m;
    while ((m = re.exec(html)) !== null) {
        const [, close, tag, , selfClose] = m;
        if (VOID.has(tag) || selfClose) continue;
        if (close) {
            if (stack.pop() !== tag) return 'MISMATCH at </' + tag + '>';
        } else {
            stack.push(tag);
        }
    }
    return stack.length ? 'UNCLOSED: ' + stack.join(',') : 'ok';
}

let fail = 0;
for (const lang of LANGS) {
    for (const key of ['faq12a', 'faq13a']) {
        const v = L[lang] && L[lang][key];
        if (typeof v !== 'string') { console.log(lang, key, 'MISSING'); fail++; continue; }
        const b = balance(v);
        const checks = [];
        if (key === 'faq12a') {
            checks.push(['Single', v.includes('Single')]);
            checks.push(['Double', v.includes('Double')]);
            checks.push(['Family', v.includes('Family')]);
            checks.push(['Inactive', v.includes('Inactive')]);
        } else {
            checks.push(['GitHub Releases', v.includes('GitHub Releases')]);
            checks.push(['github.com', v.includes('github.com')]);
            checks.push(['+2 paragraphs', (v.match(/<p>/g) || []).length >= 5]);
            checks.push(['ul closed before new paragraphs', /<\/ul><p>/.test(v)]);
        }
        checks.push(['/contact/ or /download/ clean paths', !/\.html/.test(v)]);
        const bad = checks.filter(function (c) { return !c[1]; }).map(function (c) { return c[0]; });
        if (b !== 'ok' || bad.length) { fail++; }
        console.log(
            (b === 'ok' && !bad.length ? 'PASS' : 'FAIL') +
            '  ' + lang.padEnd(6) + key + '  tags=' + b +
            (bad.length ? '  missing=' + bad.join('|') : '')
        );
    }
}
console.log(fail === 0 ? '\nALL CHECKS PASSED' : '\n' + fail + ' FAILURES');
