const fs = require("fs");
const path = require("path");

const E = "hello.peekom@gmail.com";
const B = "https://peekom.lemonsqueezy.com/checkout/buy/b8f36320-f95e-4ce2-a49c-2c28e2d4c20d";
const PW = '<span class="pricing-was">$12.99</span>';
const PN = '<span class="pricing-now">$9.99 USD</span>';

function pricingBlock(vat, launch, extra) {
    return PW + " " + PN + ' <span class="pricing-vat">' + vat + '</span> · <span class="pricing-launch">' + launch + "</span>" + extra;
}

function mailLink() {
    return '(<a href="mailto:' + E + '">' + E + "</a>)";
}

function buyLink(text) {
    return '<a href="' + B + '" id="dlBuyLinkInner">' + text + "</a>";
}

const viTh = require("./gen-i18n-part3-vi-th");

const locales = {
    it: buildIt(),
    ru: buildRu(),
    vi: viTh.buildVi(E, B, PW, PN, pricingBlock, mailLink, buyLink, sharedFz),
    th: viTh.buildTh(E, B, PW, PN, pricingBlock, mailLink, buyLink, sharedFz)
};

function buildIt() {
    const cpExtra = " · pagamento unico · fino a 2 dispositivi · aggiornamenti minori inclusi · rimborso 30 giorni " + mailLink();
    return {
        navHome: "Home", navFeatures: "Funzionalità", navDownload: "Download", navFaq: "FAQ", navHelp: "Guida", navContact: "Contatti",
        searchPlaceholder: "Cerca...",
        heroTitleMain: "Peekom",
        heroTagline: "L'app memo sul bordo è tornata come <strong>Peekom</strong>.<br>Note leggere e veloci sul bordo dello schermo—resta organizzato senza interrompere lavoro o presentazioni.",
        heroPlusNote: 'Dopo aver installato l\'app gratuita, passa a Peekom Plus nelle Impostazioni.<br><a href="features.html#compare">Confronta gratuito e Plus</a> nella tabella comparativa.',
        heroUpgradeNote: "Dopo aver installato l'app gratuita, passa a Peekom Plus nelle Impostazioni.",
        heroFreeCompareNote: '<a href="features.html#compare">Confronta gratuito e Plus</a>.',
        heroWinBtn: "Scarica per Windows", heroMacBtn: "Scarica per macOS",
        heroPlusBuyBtn: "Acquista ora",
        heroPlusCardTitle: "Peekom Plus",
        heroPlusCardBadge: "A PAGAMENTO",
        heroPlusCardOs: "Windows",
        heroMacPlusCardTitle: "Peekom Plus",
        heroMacPlusCardBadge: "A PAGAMENTO",
        heroPlusCardMeta: "Pagamento unico · fino a 2 dispositivi · a vita",
        heroFreeCardTitle: "Peekom",
        heroFreeCardBadge: "GRATIS",
        heroMacFreeCardBadge: "GRATIS",
        heroWinCardMeta: "Windows 10 · 11 (64-bit)",
        heroMacFreeCardMeta: "macOS",
        heroFreeDownloadLabel: "Scarica",
        carouselCap1: "Maniglia sul bordo del monitor",
        carouselCap2: "Apri memo con clic o scorciatoia",
        carouselCap3: "ICE mode · ritardo auto-chiusura",
        detectWin: "Rilevato: <strong>Windows</strong> — consigliato Windows",
        detectMac: "Rilevato: <strong>macOS</strong> — consigliato macOS",
        detectGeneric: "OS non rilevato — scegli manualmente",
        featuresTitle: "Funzionalità", featuresSub: "Cosa fa Peekom in sintesi.",
        compareTitle: "Peekom vs Peekom Plus", compareSub: "Un'app sola — Peekom Plus si sblocca nell'app.",
        comparePricing: pricingBlock("(IVA esclusa)", "Prezzo di lancio", cpExtra),
        guidePlusP: "1) Acquista a $9.99 di lancio su Lemon Squeezy → 2) Ricevi la chiave di licenza via email → 3) Apri Peekom → inserisci la chiave nell'interfaccia di blocco o nelle Impostazioni → 4) Attivazione Peekom Plus completata. Rimborso 30 giorni: <a href=\"mailto:" + E + "\">" + E + "</a>",
        dlSub: "Installa Peekom una volta. Passa a Peekom Plus nell'app.",
        dlWin: "Peekom Setup (Windows)", dlMac: "Peekom Setup (macOS)",
        dlPlusHint: 'Peekom Plus: Era ' + PW + ' → Lancio <strong>$9.99</strong> (IVA esclusa) · ' + buyLink("Acquista su Lemon Squeezy") + " → inserisci la chiave nell'app",
        featureGifPending: "GIF demo in arrivo",
        compareNoLabel: "Non supportato",
        faqSub: "Domande frequenti su Peekom.",
        faq1q: "Qual è la differenza tra gratuito e Plus?",
        faq1a: 'Il gratuito include 3 indici, spostamento maniglia di gruppo, ICE mode, ritardo hover, selezione monitor, Markdown, barra formattazione e inserimento immagini. Peekom Plus (lancio $9.99, listino $12.99) sblocca 10 slot, tema personalizzato, font, opacità, ridimensionamento immagini ed export nell\'app. Vedi la <a href="features.html#compare">tabella comparativa</a>.',
        compareFreeName: "Peekom (Gratuito)",
        comparePlusName: "Peekom Plus",
        compareCta: "Ottieni Peekom Plus",
        comparePromoBanner: "Promo di lancio · {pct}% di sconto ora",
        helpTitle: "Guida", helpSub: "Inizia con Peekom.",
        guideStartBody: guideStartBodyIt(),
        help1t: "1. Installazione", help1p: "Scarica ed esegui Peekom Setup. SmartScreen può apparire su Windows.",
        help2t: "2. Apri un memo", help2p: "Clicca la maniglia oppure, in modalità <strong>controllo scorciatoie</strong>, premi <strong>Ctrl+Shift+M</strong> (predefinito) per aprire/chiudere il memo <strong>aperto più di recente</strong>.",
        help3t: "3. Cambia memo", help3p: "In modalità <strong>controllo mouse</strong>, premi <strong>↑ / ↓</strong> con il pannello aperto. In modalità <strong>controllo scorciatoie</strong>, usa <strong>Ctrl+Shift+↑ / ↓</strong> (anche chiuso). <strong>Ctrl+1–9</strong> salta a un indice.",
        help4t: "4. Scrivi", help4p: "Digita nel pannello; aggiungi indici e titoli nelle Impostazioni.",
        help5t: "5. ICE mode", help5p: "Clicca il chip <strong>Peek / ICE</strong> per fissare il memo senza hover (gratuito e Plus).",
        help6t: "6. Impostazioni · Plus", help6p: "Tray → Impostazioni → scheda Comune per cambiare modalità trigger e scorciatoie. Usa il pulsante Upgrade to Plus per inserire la chiave di licenza.",
        winGuideBtn: "Vedi un avviso SmartScreen blu durante l'installazione su Windows?",
        dlTitle: "Download", dlWinNote: "Windows 10 e 11 (64-bit)",
        dlWinLabel: "Windows x64 · Windows 10 e 11 (64-bit)",
        dlMacLabel: "macOS",
        linkChangelog: "Changelog / Release", linkPrev: "Versioni precedenti", linkSmartScreen: "Guida SmartScreen",
        faqTitle: "FAQ",
        faq2q: "Come funziona il supporto dual monitor?",
        faq2a: "In Impostazioni → Monitor display, scegli auto (segui mouse) o un monitor fisso. Disponibile su Gratuito e Plus.",
        faq8q: "Peekom può essere usato solo sul bordo destro del monitor?",
        faq8a: "Attualmente Peekom funziona solo sul bordo destro. Prevediamo di aggiungere supporto per i bordi sinistro, superiore e inferiore in un aggiornamento futuro.",
        faq3q: "Come si attiva Plus?",
        faq3a: "Acquista su Lemon Squeezy, poi inserisci la chiave di licenza nell'app per sbloccare Peekom Plus (nessuna reinstallazione).",
        faq3bq: "Posso usare una chiave di licenza su più PC?",
        faq3ba: "Sì. Puoi inserire la stessa chiave a 16 caratteri una volta su ciascuno di massimo due PC—ad esempio PC lavoro e personale—per usare Peekom Plus su entrambi.",
        faq4q: "Compare un avviso blu durante l'installazione su Windows.",
        faq4a: 'Gli avvisi SmartScreen sono comuni per app non firmate. Vedi la <a href="#" onclick="openModal(); return false;">guida installazione</a>: [Ulteriori informazioni] → [Esegui comunque].',
        faq5q: "Quali versioni di Windows sono supportate?",
        faq5a: "Peekom funziona su Windows 10 e 11 (64-bit). L'installer è solo 64-bit. Windows 7, 8 e 8.1 non sono supportati (Electron 36).",
        faq6q: "Ho aggiunto un indice ma non compare nelle Impostazioni.",
        faq6a: "Riapri le Impostazioni per aggiornare l'elenco; le versioni recenti si sincronizzano automaticamente.",
        faq7q: "Testo strano all'avvio dopo la disinstallazione.",
        faq7a: "Disabilita le voci di avvio Peekom residue in Gestione attività, oppure reinstalla e disinstalla di nuovo.",
        compareColFeature: "Funzionalità",
        contactTitle: "Contatti", contactSub: "Inviaci il tuo feedback.",
        contactBody: "Per segnalazioni bug, richieste funzionalità o domande sulla licenza, scrivici via email.",
        contactEmail: E,
        footerCopy: "© 2026. Peekom All rights reserved.",
        footerPrivacy: "Privacy",
        guideTitle: "Guida installazione SmartScreen Windows",
        step1: 'Eseguendo l\'installer, può apparire una finestra SmartScreen blu con <b>"App non riconosciuta"</b>.',
        step2: "Clicca su <b>[Ulteriori informazioni]</b> in alto nella descrizione.",
        step3: "Clicca su <b>[Esegui comunque]</b> in basso a destra per completare l'installazione.",
        searchNoResults: "Nessun risultato",
        modalClose: "Chiudi",
        promoNote: "Aumento di prezzo previsto dopo la fine della promozione",
        promoSectionTitle: "Peekom Plus (A pagamento)",
        promoFreeTitle: "Peekom (Gratuito)",
        promoVat: "(IVA esclusa)",
        promoLaunchLabel: "Promo di lancio\nprezzo\napplicato",
        comparePricingExtra: cpExtra,
        dlPlusHintExtra: " · " + buyLink("Acquista su Lemon Squeezy") + " → inserisci la chiave nell'app",
        markdownGuideTitle: "Note con Markdown",
        markdownGuideBody: markdownBodyIt(),
        formatBarGuideTitle: "Note con barra strumenti",
        formatBarGuideBody: formatBarBodyIt(),
        guideKeysTitle: "Scorciatoie",
        guideKeysIntro: 'In Impostazioni → Comune → <strong>Modalità trigger</strong>, scegli <strong>Controllo mouse</strong> o <strong>Controllo scorciatoie</strong>. Su macOS, usa ⌘ (Command) al posto di Ctrl.',
        gkColAction: "Azione", gkColKey: "Predefinito", gkColNote: "Nota",
        gk1a: "Apri/chiudi memo", gk1k: "Ctrl+Shift+M",
        gk1n: "Memo più recente. Solo modalità scorciatoie. Personalizzabile in Impostazioni → Comune → Modalità trigger",
        gk2a: "Apri indice precedente", gk2k: "Ctrl+Shift+↑",
        gk2n: "Apre l'indice precedente e mostra il pannello. Modalità scorciatoie. Personalizzabile in Impostazioni",
        gk3a: "Apri indice successivo", gk3k: "Ctrl+Shift+↓",
        gk3n: "Apre l'indice successivo e mostra il pannello. Modalità scorciatoie. Personalizzabile in Impostazioni",
        gk4a: "Cambia indice", gk4k: "↑ / ↓",
        gk4n: "Solo modalità mouse, pannello deve essere aperto",
        gk5a: "Salta a indice", gk5k: "Ctrl+1–9 (Ctrl+0 = indice 10)",
        gk5n: "Apre direttamente il memo di quell'indice",
        gk6a: "Dimensione font", gk6k: "Ctrl + rotella", gk6n: "Nell'area memo. Solo Plus",
        guidePlusTitle: "Attiva Plus",
        guidePlusStep1: "1. Acquista Peekom Plus con il pulsante qui sotto.",
        guidePlusStep2: "2. Controlla la tua email per la chiave di licenza.",
        guidePlusStep3: "3. Apri Peekom e inserisci la chiave nella finestra <strong>Impostazioni</strong> o in <strong>Impostazioni</strong>.",
        macComingSoonTitle: "macOS",
        macComingSoonBody: "La versione macOS è in sviluppo.<br>Rilascio previsto: <strong>luglio 2026</strong>.",
        guidePlusStep4: "4. Attivazione Peekom Plus completata.",
        guideNavStart: "Per iniziare", guideNavKeys: "Scorciatoie", guideNavEdit: "Modifica", guideNavPlus: "Attiva Plus",
        guideSectionEditTitle: "Modifica",
        versionHistoryTitle: "Versioni precedenti",
        versionColVersion: "Versione", versionColDate: "Data di rilascio", versionColWin: "Windows", versionColMac: "macOS",
        versionLatest: "Ultima", versionWin: "64-bit", versionMac: "Universal",
        changelogTitle: "Changelog",
        fz1Title: "Peek dal bordo",
        fz1Items: [
            { text: "Clicca indice per aprire memo rapidamente" },
            { text: "Trascina indice per riposizionare" },
            { text: "Interruttore Peek / ICE mode" },
            { text: "Auto-chiusura in modalità peek" }
        ],
        fz2Title: "Lavora più efficientemente",
        fz2Items: [
            { text: "Scorciatoia per aprire memo recente" },
            { text: "Fissaggio display target" },
            { text: "Supporto sintassi Markdown" },
            { text: "Inserimento immagini" }
        ],
        fz3Title: "Il tuo memo personalizzato",
        fz3Items: [
            { text: "Barra formattazione" },
            { text: "Titoli indice personalizzati" },
            { text: "Proporzioni memo (1:1, 3:4)" },
            { text: "Colori sfondo predefiniti" }
        ],
        fz4Title: "Vai oltre con Plus",
        fz4Items: [
            { text: "Fino a 10 indici indipendenti", plus: true },
            { text: "Export · backup JSON", plus: true },
            { text: "Fino a 5 immagini per memo", plus: true },
            { text: "Ridimensionamento · ritaglio immagini", plus: true }
        ],
        fz5Title: "Personalizzazione solo Plus",
        fz5Items: [
            { text: "Controllo dimensione font", plus: true },
            { text: "Opacità memo predefinita", plus: true },
            { text: "Colori sfondo e testo personalizzati", plus: true },
            { text: "Font personalizzati", plus: true }
        ],
        footerLangLabel: "Lingua",
        themeLight: "Light", themeDark: "Dark", themeAuto: "Auto",
        themeLightLabel: "Modalità chiara", themeDarkLabel: "Modalità scura", themeAutoLabel: "Segui sistema",
        themeAriaLabel: "Tema",
        pageCtaDownload: "Scarica", pageCtaCompare: "Vedi confronto",
        featuresCtaTitle: "Espandi con Peekom Plus",
        featuresCtaDesc: "Sblocca 10 slot, temi personalizzati, export e altro nell'app.",
        helpCtaTitle: "Inizia subito",
        helpCtaDesc: "Installa Peekom e prova i memo sul bordo del monitor.",
        faqCtaTitle: "Hai ancora domande?",
        faqCtaDesc: "Vedi il confronto funzionalità gratuito vs Plus.",
        contactCtaTitle: "Non hai ancora provato Peekom?",
        contactCtaDesc: "Installa gratis e inizia subito.",
        downloadCtaTitle: "Ti serve Plus?",
        downloadCtaDesc: "Inserisci la chiave di licenza nella stessa app per attivare Plus."
    };
}

function guideStartBodyIt() {
    return '<div class="guide-step"><h3>1. Installazione</h3><ul class="guide-step-list"><li><strong>Download</strong> — Scarica l\'installer Windows o macOS dalla pagina <a href="download.html">Download</a> (o home).</li><li><strong>Esegui Peekom-Setup.exe</strong> — Doppio clic sull\'installer e segui le istruzioni.</li><li><strong>Avviso SmartScreen</strong> — Se appare una finestra blu, apri la <a href="#" onclick="openModal(); return false;">guida installazione</a> e scegli <strong>Ulteriori informazioni</strong> → <strong>Esegui comunque</strong>.</li></ul></div><div class="guide-step"><h3>2. Impostazioni comuni e per indice</h3><p class="guide-step-lead">Clic destro sull\'icona tray → <strong>Impostazioni</strong>.</p><h4 class="guide-step-sub">Impostazioni comuni</h4><ul class="guide-step-list"><li>Scegli <strong>monitor display</strong> (auto o fisso)</li><li><strong>Modalità trigger</strong> — <strong>Controllo mouse</strong> / <strong>Controllo scorciatoie</strong>; personalizza tre scorciatoie (toggle, indice prec/succ)</li><li><strong>Ritardo auto-chiusura</strong> maniglia (predefinito 0.3s, regolabile in Impostazioni)</li></ul><div class="guide-plus-card"><span class="guide-plus-card__label">Plus</span> Font personalizzati, opacità predefinita, backup/ripristino JSON, export (.txt/.md/.json) e altro.</div><h4 class="guide-step-sub">Impostazioni per indice</h4><ul class="guide-step-list"><li>Aggiungi/rimuovi <strong>indici</strong> (3 gratuiti)</li><li>Imposta <strong>titolo e colore</strong> per indice</li><li>Scegli <strong>proporzioni memo</strong> (1:1 / 3:4)</li></ul><div class="guide-plus-card"><span class="guide-plus-card__label">Plus</span> Fino a 10 slot con posizioni maniglia indipendenti.</div></div><div class="guide-step"><h3>3. Scrivi memo</h3><ul class="guide-step-list"><li><strong>Riposiziona</strong> — Trascina la maniglia sul bordo all\'altezza preferita.</li><li><strong>Peek / ICE</strong> — Interruttore in alto nel memo. Peek si apre con clic o scorciatoia; ICE resta fissato.</li><li><strong>Personalizza testo</strong> — Usa Markdown, barra strumenti e immagini. Vedi <a href="#guide-edit">Modifica</a> sotto.</li></ul></div><div class="guide-step guide-step--last"><h3>4. Passa a Peekom Plus</h3><ul class="guide-step-list"><li>Inserisci la chiave di licenza tramite il pulsante <strong>Upgrade to Plus</strong> nell\'app (o la finestra <strong>Impostazioni</strong> al primo avvio).</li><li>Vedi <a href="#guide-plus">Attiva Plus</a> per istruzioni passo passo.</li></ul></div>';
}

function markdownBodyIt() {
    return '<p class="guide-table-intro">Scrivi naturalmente—premi <strong>Invio</strong> e la formattazione si applica automaticamente.</p><table class="compare-table guide-table"><thead><tr><th>Formato input</th><th>Dopo Invio</th></tr></thead><tbody><tr><td><code># Ordine del giorno</code></td><td class="guide-md-result"><h1 class="guide-md-h1">Ordine del giorno</h1></td></tr><tr><td><code>## Note</code></td><td class="guide-md-result"><h2 class="guide-md-h2">Note</h2></td></tr><tr><td><code>### Riferimento</code></td><td class="guide-md-result"><h3 class="guide-md-h3">Riferimento</h3></td></tr><tr><td><code>- Da fare</code></td><td class="guide-md-result"><ul class="guide-md-ul"><li>Da fare</li></ul></td></tr><tr><td><code>- [ ] Da fare</code></td><td class="guide-md-result"><label class="guide-md-task"><input type="checkbox" disabled> Da fare</label></td></tr><tr><td><code>**Importante**</code></td><td class="guide-md-result"><strong>Importante</strong></td></tr><tr><td><code>*Enfasi*</code></td><td class="guide-md-result"><em>Enfasi</em></td></tr></tbody></table>';
}

function formatBarBodyIt() {
    return '<p class="guide-table-intro">Clicca i pulsanti sopra il memo—nessuna scorciatoia da tastiera richiesta.</p><table class="compare-table guide-table"><thead><tr><th>Funzionalità</th><th>Come usare</th></tr></thead><tbody><tr><td>Colore · grassetto · corsivo · sottolineato · barrato</td><td>Seleziona il testo, poi clicca un pulsante</td></tr><tr><td>Allineamento (sinistra/centro/destra/giustificato)</td><td>Cambia allineamento paragrafo</td></tr><tr><td>Elenchi (puntato/quadrato/numerato/plain)</td><td>Scegli uno stile dal menu</td></tr><tr><td>Inserimento immagini</td><td>Gratuito: 1 per memo · Plus: 5 (ridimensiona e ritaglia su Plus)</td></tr></tbody></table>';
}

function buildRu() {
    const cpExtra = " · разовая оплата · до 2 устройств · минорные обновления включены · возврат за 30 дней " + mailLink();
    return Object.assign(sharedFz("ru"), {
        navHome: "Главная", navFeatures: "Функции", navDownload: "Загрузка", navFaq: "Вопросы", navHelp: "Руководство", navContact: "Контакты",
        searchPlaceholder: "Поиск...",
        heroTitleMain: "Peekom",
        heroTagline: "Приложение для заметок на краю экрана вернулось как <strong>Peekom</strong>.<br>Лёгкие быстрые заметки у края экрана—будьте организованы, не прерывая работу или презентацию.",
        heroPlusNote: 'После установки бесплатного приложения перейдите на Peekom Plus в Настройках.<br><a href="features.html#compare">Сравните бесплатную и Plus</a> в таблице.',
        heroUpgradeNote: "После установки бесплатного приложения перейдите на Peekom Plus в Настройках.",
        heroFreeCompareNote: '<a href="features.html#compare">Сравнить бесплатную и Plus</a>.',
        heroWinBtn: "Скачать для Windows", heroMacBtn: "Скачать для macOS",
        heroPlusBuyBtn: "Купить",
        heroPlusCardTitle: "Peekom Plus", heroPlusCardBadge: "ПЛАТНО", heroPlusCardOs: "Windows",
        heroMacPlusCardTitle: "Peekom Plus", heroMacPlusCardBadge: "ПЛАТНО",
        heroPlusCardMeta: "Разовая оплата · до 2 устройств · навсегда",
        heroFreeCardTitle: "Peekom", heroFreeCardBadge: "БЕСПЛ.", heroMacFreeCardBadge: "БЕСПЛ.",
        heroWinCardMeta: "Windows 10 · 11 (64-bit)", heroMacFreeCardMeta: "macOS",
        heroFreeDownloadLabel: "Скачать",
        carouselCap1: "Ручка у края монитора", carouselCap2: "Открыть заметку кликом или сочетанием", carouselCap3: "ICE mode · задержка автосворачивания",
        detectWin: "Обнаружено: <strong>Windows</strong> — рекомендуем Windows",
        detectMac: "Обнаружено: <strong>macOS</strong> — рекомендуем macOS",
        detectGeneric: "ОС не определена — выберите вручную",
        featuresTitle: "Функции", featuresSub: "Что делает Peekom — кратко.",
        compareTitle: "Peekom vs Peekom Plus", compareSub: "Одно приложение — Peekom Plus разблокируется внутри.",
        comparePricing: pricingBlock("(без НДС)", "Цена запуска", cpExtra),
        guidePlusP: "1) Купите по цене запуска $9.99 на Lemon Squeezy → 2) Получите ключ по email → 3) Откройте Peekom → введите ключ в интерфейсе блокировки или Настройках → 4) Активация Peekom Plus завершена. Возврат 30 дней: <a href=\"mailto:" + E + "\">" + E + "</a>",
        dlSub: "Установите Peekom один раз. Перейдите на Peekom Plus в приложении.",
        dlWin: "Peekom Setup (Windows)", dlMac: "Peekom Setup (macOS)",
        dlPlusHint: 'Peekom Plus: Было ' + PW + ' → Запуск <strong>$9.99</strong> (без НДС) · ' + buyLink("Купить на Lemon Squeezy") + " → введите ключ в приложении",
        featureGifPending: "Демо GIF скоро", compareNoLabel: "Не поддерживается",
        faqSub: "Частые вопросы о Peekom.",
        faq1q: "В чём разница между бесплатной и Plus версией?",
        faq1a: 'Бесплатная включает 3 индекса, перемещение ручки группы, ICE mode, задержку наведения, выбор монитора, Markdown, панель форматирования и вставку изображений. Peekom Plus (запуск $9.99, список $12.99) открывает 10 слотов, свою тему, шрифты, прозрачность, изменение размера и экспорт. См. <a href="features.html#compare">таблицу сравнения</a>.',
        compareFreeName: "Peekom (Бесплатно)", comparePlusName: "Peekom Plus", compareCta: "Получить Peekom Plus",
        comparePromoBanner: "Акция запуска · скидка {pct}% сейчас",
        helpTitle: "Руководство", helpSub: "Начните работу с Peekom.",
        guideStartBody: guideStartBodyRu(),
        help1t: "1. Установка", help1p: "Скачайте и запустите Peekom Setup. На Windows может появиться SmartScreen.",
        help2t: "2. Открыть заметку", help2p: "Нажмите на ручку или в режиме <strong>управления сочетаниями</strong> нажмите <strong>Ctrl+Shift+M</strong> (по умолчанию) для переключения <strong>последней открытой</strong> заметки.",
        help3t: "3. Переключить заметки", help3p: "В режиме <strong>управления мышью</strong> нажмите <strong>↑ / ↓</strong> при открытой панели. В режиме <strong>сочетаний</strong> — <strong>Ctrl+Shift+↑ / ↓</strong> (даже закрыто). <strong>Ctrl+1–9</strong> переходит к индексу.",
        help4t: "4. Писать", help4p: "Вводите текст в панели; добавляйте индексы и заголовки в Настройках.",
        help5t: "5. ICE mode", help5p: "Нажмите чип <strong>Peek / ICE</strong>, чтобы закрепить заметку без наведения (бесплатно и Plus).",
        help6t: "6. Настройки · Plus", help6p: "Трей → Настройки → вкладка Общие для режима и сочетаний. Кнопка Upgrade to Plus для ввода ключа лицензии.",
        winGuideBtn: "Появляется синее предупреждение SmartScreen при установке в Windows?",
        dlTitle: "Загрузка", dlWinNote: "Windows 10 и 11 (64-bit)", dlWinLabel: "Windows x64 · Windows 10 и 11 (64-bit)", dlMacLabel: "macOS",
        linkChangelog: "Changelog / Релизы", linkPrev: "Предыдущие версии", linkSmartScreen: "Руководство SmartScreen",
        faqTitle: "Вопросы",
        faq2q: "Как работает поддержка двух мониторов?", faq2a: "В Настройках → Монитор выберите авто (следовать мыши) или фиксированный. Доступно в бесплатной и Plus.",
        faq8q: "Peekom можно использовать только у правого края монитора?", faq8a: "Сейчас Peekom работает только у правого края. Планируем добавить левый, верхний и нижний края в будущем обновлении.",
        faq3q: "Как активировать Plus?", faq3a: "Купите на Lemon Squeezy, затем введите ключ в приложении для разблокировки Peekom Plus (переустановка не нужна).",
        faq3bq: "Можно ли использовать один ключ на нескольких ПК?", faq3ba: "Да. Один 16-значный ключ можно ввести по разу на каждом из двух ПК—например, рабочем и личном.",
        faq4q: "При установке в Windows появляется синее предупреждение.",
        faq4a: 'Предупреждения SmartScreen часты для неподписанных приложений. См. <a href="#" onclick="openModal(); return false;">руководство</a>: [Подробнее] → [Выполнить в любом случае].',
        faq5q: "Какие версии Windows поддерживаются?", faq5a: "Peekom работает на Windows 10 и 11 (64-bit). Установщик только 64-bit. Windows 7, 8 и 8.1 не поддерживаются (Electron 36).",
        faq6q: "Добавил индекс, но он не виден в Настройках.", faq6a: "Переоткройте Настройки для обновления списка; новые версии синхронизируют автоматически.",
        faq7q: "Странный текст при запуске после удаления.", faq7a: "Отключите оставшиеся записи автозапуска Peekom в диспетчере задач или переустановите и удалите снова.",
        compareColFeature: "Функция",
        contactTitle: "Контакты", contactSub: "Отправьте нам отзыв.", contactBody: "По ошибкам, предложениям или вопросам лицензии пишите на email ниже.",
        contactEmail: E, footerCopy: "© 2026. Peekom All rights reserved.", footerPrivacy: "Конфиденциальность",
        guideTitle: "Руководство по установке SmartScreen в Windows",
        step1: 'При запуске установщика может появиться синее окно SmartScreen <b>«Непроверенное приложение»</b>.',
        step2: "Нажмите <b>[Дополнительные сведения]</b> вверху описания.", step3: "Нажмите <b>[Выполнить в любом случае]</b> внизу справа.",
        searchNoResults: "Нет результатов", modalClose: "Закрыть",
        promoNote: "Повышение цены после окончания акции", promoSectionTitle: "Peekom Plus (Платно)", promoFreeTitle: "Peekom (Бесплатно)",
        promoVat: "(без НДС)", promoLaunchLabel: "Акция\nзапуска\nприменена",
        comparePricingExtra: cpExtra, dlPlusHintExtra: " · " + buyLink("Купить на Lemon Squeezy") + " → введите ключ в приложении",
        markdownGuideTitle: "Заметки с Markdown", markdownGuideBody: markdownBodyRu(),
        formatBarGuideTitle: "Заметки с панелью", formatBarGuideBody: formatBarBodyRu(),
        guideKeysTitle: "Сочетания клавиш",
        guideKeysIntro: 'В Настройках → Общие → <strong>Режим триггера</strong> выберите <strong>Управление мышью</strong> или <strong>Сочетания</strong>. На macOS используйте ⌘ вместо Ctrl.',
        gkColAction: "Действие", gkColKey: "По умолчанию", gkColNote: "Примечание",
        gk1a: "Открыть/закрыть заметку", gk1k: "Ctrl+Shift+M", gk1n: "Последняя заметка. Только режим сочетаний. Настраивается в Настройках → Общие",
        gk2a: "Открыть предыдущий индекс", gk2k: "Ctrl+Shift+↑", gk2n: "Открывает предыдущий индекс. Режим сочетаний. Настраивается в Настройках",
        gk3a: "Открыть следующий индекс", gk3k: "Ctrl+Shift+↓", gk3n: "Открывает следующий индекс. Режим сочетаний. Настраивается в Настройках",
        gk4a: "Переключить индекс", gk4k: "↑ / ↓", gk4n: "Только режим мыши, панель должна быть открыта",
        gk5a: "Перейти к индексу", gk5k: "Ctrl+1–9 (Ctrl+0 = индекс 10)", gk5n: "Открывает заметку этого индекса",
        gk6a: "Размер шрифта", gk6k: "Ctrl + колёсико", gk6n: "В области заметки. Только Plus",
        guidePlusTitle: "Активировать Plus", guidePlusStep1: "1. Купите Peekom Plus кнопкой ниже.",
        guidePlusStep2: "2. Проверьте email с ключом лицензии.", guidePlusStep3: "3. Откройте Peekom и введите ключ в окне <strong>Настройки</strong>.",
        macComingSoonTitle: "macOS", macComingSoonBody: "Версия macOS в разработке.<br>Ожидаемый релиз: <strong>июль 2026</strong>.",
        guidePlusStep4: "4. Активация Peekom Plus завершена.",
        guideNavStart: "Начало", guideNavKeys: "Сочетания", guideNavEdit: "Редактирование", guideNavPlus: "Активировать Plus",
        guideSectionEditTitle: "Редактирование",
        versionHistoryTitle: "Предыдущие версии", versionColVersion: "Версия", versionColDate: "Дата выпуска", versionColWin: "Windows", versionColMac: "macOS",
        versionLatest: "Последняя", versionWin: "64-bit", versionMac: "Universal", changelogTitle: "Changelog",
        footerLangLabel: "Язык", themeLight: "Light", themeDark: "Dark", themeAuto: "Auto",
        themeLightLabel: "Светлая тема", themeDarkLabel: "Тёмная тема", themeAutoLabel: "Как в системе", themeAriaLabel: "Тема",
        pageCtaDownload: "Скачать", pageCtaCompare: "Сравнение",
        featuresCtaTitle: "Расширьте с Peekom Plus", featuresCtaDesc: "Откройте 10 слотов, темы, экспорт и другое в приложении.",
        helpCtaTitle: "Начните сейчас", helpCtaDesc: "Установите Peekom и попробуйте заметки у края экрана.",
        faqCtaTitle: "Остались вопросы?", faqCtaDesc: "См. сравнение бесплатной и Plus версий.",
        contactCtaTitle: "Ещё не пробовали Peekom?", contactCtaDesc: "Установите бесплатно и начните сразу.",
        downloadCtaTitle: "Нужен Plus?", downloadCtaDesc: "Введите ключ лицензии в том же приложении для активации Plus."
    });
}

function sharedFz(lang) {
    const t = {
        it: {
            fz1Title: "Peek dal bordo",
            fz1: ["Clicca indice per aprire memo rapidamente", "Trascina indice per riposizionare", "Interruttore Peek / ICE mode", "Auto-chiusura in modalità peek"],
            fz2Title: "Lavora più efficientemente",
            fz2: ["Scorciatoia per aprire memo recente", "Fissaggio display target", "Supporto sintassi Markdown", "Inserimento immagini"],
            fz3Title: "Il tuo memo personalizzato",
            fz3: ["Barra formattazione", "Titoli indice personalizzati", "Proporzioni memo (1:1, 3:4)", "Colori sfondo predefiniti"],
            fz4Title: "Vai oltre con Plus",
            fz4: ["Fino a 10 indici indipendenti", "Export · backup JSON", "Fino a 5 immagini per memo", "Ridimensionamento · ritaglio immagini"],
            fz5Title: "Personalizzazione solo Plus",
            fz5: ["Controllo dimensione font", "Opacità memo predefinita", "Colori sfondo e testo personalizzati", "Font personalizzati"]
        },
        ru: {
            fz1Title: "Peek с края экрана",
            fz1: ["Клик по индексу для быстрого открытия", "Перетаскивание индекса", "Переключатель Peek / ICE mode", "Автосворачивание в режиме peek"],
            fz2Title: "Работайте эффективнее",
            fz2: ["Сочетание для последней заметки", "Закрепление целевого монитора", "Поддержка Markdown", "Вставка изображений"],
            fz3Title: "Ваша заметка",
            fz3: ["Панель форматирования", "Свои заголовки индексов", "Пропорции (1:1, 3:4)", "Цвета фона по умолчанию"],
            fz4Title: "Больше с Plus",
            fz4: ["До 10 независимых индексов", "Экспорт · резерв JSON", "До 5 изображений на заметку", "Изменение размера · обрезка"],
            fz5Title: "Только в Plus",
            fz5: ["Размер шрифта", "Прозрачность по умолчанию", "Свои цвета фона и текста", "Свои шрифты"]
        },
        vi: {
            fz1Title: "Peek từ mép màn hình",
            fz1: ["Nhấp chỉ mục để mở ghi chú nhanh", "Kéo chỉ mục để đổi vị trí", "Chuyển Peek / ICE mode", "Tự thu gọn ở chế độ peek"],
            fz2Title: "Làm việc hiệu quả hơn",
            fz2: ["Phím tắt mở ghi chú gần nhất", "Ghim màn hình đích", "Hỗ trợ cú pháp Markdown", "Chèn hình ảnh"],
            fz3Title: "Ghi chú tùy chỉnh",
            fz3: ["Thanh định dạng", "Tiêu đề chỉ mục tùy chỉnh", "Tỷ lệ ghi chú (1:1, 3:4)", "Màu nền mặc định"],
            fz4Title: "Nâng cao với Plus",
            fz4: ["Tối đa 10 chỉ mục độc lập", "Xuất · sao lưu JSON", "Tối đa 5 ảnh mỗi ghi chú", "Đổi kích thước · cắt ảnh"],
            fz5Title: "Tùy chỉnh chỉ Plus",
            fz5: ["Điều chỉnh cỡ chữ", "Độ mờ mặc định", "Màu nền & chữ tùy chỉnh", "Phông chữ tùy chỉnh"]
        },
        th: {
            fz1Title: "Peek จากขอบจอ",
            fz1: ["คลิกดัชนีเพื่อเปิดบันทึกเร็ว", "ลากดัชนีเพื่อย้ายตำแหน่ง", "สลับ Peek / ICE mode", "ยุบอัตโนมัติในโหมด peek"],
            fz2Title: "ทำงานมีประสิทธิภาพ",
            fz2: ["ปุ่มลัดเปิดบันทึกล่าสุด", "ปักหมุดจอเป้าหมาย", "รองรับ Markdown", "แทรกรูปภาพ"],
            fz3Title: "บันทึกแบบกำหนดเอง",
            fz3: ["แถบจัดรูปแบบ", "ชื่อดัชนีกำหนดเอง", "สัดส่วนบันทึก (1:1, 3:4)", "สีพื้นหลังเริ่มต้น"],
            fz4Title: "ไปต่อด้วย Plus",
            fz4: ["สูงสุด 10 ดัชนีอิสระ", "ส่งออก · สำรอง JSON", "สูงสุด 5 รูปต่อบันทึก", "ปรับขนาด · ครอบตัดรูป"],
            fz5Title: "ปรับแต่งเฉพาะ Plus",
            fz5: ["ควบคุมขนาดตัวอักษร", "ความโปร่งใสเริ่มต้น", "สีพื้นหลังและข้อความกำหนดเอง", "ฟอนต์กำหนดเอง"]
        }
    }[lang];
    function items(arr, plus) {
        return arr.map(function (text) { return plus ? { text: text, plus: true } : { text: text }; });
    }
    return {
        fz1Title: t.fz1Title, fz1Items: items(t.fz1),
        fz2Title: t.fz2Title, fz2Items: items(t.fz2),
        fz3Title: t.fz3Title, fz3Items: items(t.fz3),
        fz4Title: t.fz4Title, fz4Items: items(t.fz4, true),
        fz5Title: t.fz5Title, fz5Items: items(t.fz5, true)
    };
}

function guideStartBodyRu() {
    return '<div class="guide-step"><h3>1. Установка</h3><ul class="guide-step-list"><li><strong>Загрузка</strong> — Скачайте установщик Windows или macOS на странице <a href="download.html">Загрузка</a> (или главной).</li><li><strong>Запустите Peekom-Setup.exe</strong> — Дважды щёлкните установщик и следуйте подсказкам.</li><li><strong>Предупреждение SmartScreen</strong> — Если появится синее окно, откройте <a href="#" onclick="openModal(); return false;">руководство</a> и выберите <strong>Дополнительные сведения</strong> → <strong>Выполнить в любом случае</strong>.</li></ul></div><div class="guide-step"><h3>2. Общие и настройки по индексам</h3><p class="guide-step-lead">Правый клик по иконке в трее → <strong>Настройки</strong>.</p><h4 class="guide-step-sub">Общие настройки</h4><ul class="guide-step-list"><li>Выберите <strong>монитор</strong> (авто или фиксированный)</li><li><strong>Режим триггера</strong> — <strong>Управление мышью</strong> / <strong>Сочетания</strong>; настройте три сочетания (переключение, пред/след индекс)</li><li><strong>Задержка автосворачивания</strong> ручки (по умолчанию 0.3с, настраивается)</li></ul><div class="guide-plus-card"><span class="guide-plus-card__label">Plus</span> Свои шрифты, прозрачность, резерв/восстановление JSON, экспорт (.txt/.md/.json) и другое.</div><h4 class="guide-step-sub">Настройки по индексам</h4><ul class="guide-step-list"><li>Добавить/удалить <strong>индексы</strong> (3 бесплатно)</li><li>Задать <strong>заголовок и цвет</strong> для индекса</li><li>Выбрать <strong>пропорции заметки</strong> (1:1 / 3:4)</li></ul><div class="guide-plus-card"><span class="guide-plus-card__label">Plus</span> До 10 слотов с независимым положением ручек.</div></div><div class="guide-step"><h3>3. Пишите заметки</h3><ul class="guide-step-list"><li><strong>Переместить</strong> — Перетащите ручку у края на нужную высоту.</li><li><strong>Peek / ICE</strong> — Переключатель вверху заметки. Peek открывается кликом или сочетанием; ICE закреплён.</li><li><strong>Настроить текст</strong> — Markdown, панель и изображения. См. <a href="#guide-edit">Редактирование</a> ниже.</li></ul></div><div class="guide-step guide-step--last"><h3>4. Перейти на Peekom Plus</h3><ul class="guide-step-list"><li>Введите ключ через кнопку <strong>Upgrade to Plus</strong> в приложении (или окно <strong>Настройки</strong> при первом запуске).</li><li>См. <a href="#guide-plus">Активировать Plus</a> для пошаговой инструкции.</li></ul></div>';
}

function markdownBodyRu() {
    return '<p class="guide-table-intro">Пишите естественно—нажмите <strong>Enter</strong> и форматирование применится автоматически.</p><table class="compare-table guide-table"><thead><tr><th>Формат ввода</th><th>После Enter</th></tr></thead><tbody><tr><td><code># Повестка</code></td><td class="guide-md-result"><h1 class="guide-md-h1">Повестка</h1></td></tr><tr><td><code>## Заметки</code></td><td class="guide-md-result"><h2 class="guide-md-h2">Заметки</h2></td></tr><tr><td><code>### Справка</code></td><td class="guide-md-result"><h3 class="guide-md-h3">Справка</h3></td></tr><tr><td><code>- Задача</code></td><td class="guide-md-result"><ul class="guide-md-ul"><li>Задача</li></ul></td></tr><tr><td><code>- [ ] Задача</code></td><td class="guide-md-result"><label class="guide-md-task"><input type="checkbox" disabled> Задача</label></td></tr><tr><td><code>**Важно**</code></td><td class="guide-md-result"><strong>Важно</strong></td></tr><tr><td><code>*Акцент*</code></td><td class="guide-md-result"><em>Акцент</em></td></tr></tbody></table>';
}

function formatBarBodyRu() {
    return '<p class="guide-table-intro">Нажимайте кнопки над заметкой—сочетания клавиш не нужны.</p><table class="compare-table guide-table"><thead><tr><th>Функция</th><th>Как использовать</th></tr></thead><tbody><tr><td>Цвет · жирный · курсив · подчёркивание · зачёркивание</td><td>Выделите текст и нажмите кнопку</td></tr><tr><td>Выравнивание (влево/центр/вправо/по ширине)</td><td>Изменить выравнивание абзаца</td></tr><tr><td>Списки (маркер/квадрат/номер/обычный)</td><td>Выберите стиль из меню</td></tr><tr><td>Вставка изображений</td><td>Бесплатно: 1 на заметку · Plus: 5 (изменение и обрезка на Plus)</td></tr></tbody></table>';
}

function serializeValue(val, indent) {
    if (typeof val === "string") {
        return JSON.stringify(val);
    }
    if (Array.isArray(val)) {
        const inner = val.map(function (item) {
            if (item.plus) {
                return '{ text: ' + JSON.stringify(item.text) + ", plus: true }";
            }
            return "{ text: " + JSON.stringify(item.text) + " }";
        }).join(", ");
        return "[\n" + indent + "            " + inner + "\n" + indent + "        ]";
    }
    return JSON.stringify(val);
}

function serializeLocale(code, obj, indent) {
    const keys = Object.keys(obj);
    const lines = keys.map(function (key) {
        const val = obj[key];
        if (Array.isArray(val)) {
            return indent + "        " + key + ": " + serializeValue(val, indent + "    ");
        }
        const s = JSON.stringify(val);
        if (s.length > 100) {
            return indent + "        " + key + ": " + s;
        }
        return indent + "        " + key + ": " + s;
    });
    return indent + "    " + code + ": {\n" + lines.join(",\n") + "\n" + indent + "    }";
}

function writeOutput() {
    const outPath = path.join(__dirname, "..", "docs", "js", "i18n-locales-part3.js");
    const parts = [
        '(function () {',
        '"use strict";',
        "window.PeekomI18nLocales = window.PeekomI18nLocales || {};",
        "Object.assign(window.PeekomI18nLocales, {",
        serializeLocale("it", locales.it, ""),
        ",",
        serializeLocale("ru", locales.ru, ""),
        ",",
        serializeLocale("vi", locales.vi, ""),
        ",",
        serializeLocale("th", locales.th, ""),
        "});",
        "})();",
        ""
    ];
    fs.writeFileSync(outPath, parts.join("\n"), "utf8");
    console.log("Wrote", outPath);

    const site = fs.readFileSync(path.join(__dirname, "..", "docs", "js", "site.js"), "utf8");
    const enKeys = [];
    const enStart = site.indexOf("    en: {");
    const enEnd = site.indexOf("\n    },\n    ja:", enStart);
    if (enStart >= 0 && enEnd > enStart) {
        site.slice(enStart, enEnd).replace(/^\s+([a-zA-Z0-9_]+):/gm, function (_, k) { enKeys.push(k); });
    }
    ["it", "ru", "vi", "th"].forEach(function (code) {
        const missing = enKeys.filter(function (k) { return locales[code][k] === undefined; });
        console.log(code + " keys:", Object.keys(locales[code]).length, "missing:", missing.length, missing.slice(0, 5).join(", "));
    });
}

writeOutput();
