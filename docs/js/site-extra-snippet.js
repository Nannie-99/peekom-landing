const RELEASE_HISTORY = [
    {
        version: "1.2.0",
        date: "2026/06/26",
        latest: true,
        winUrl: "https://github.com/Nannie-99/peekom-landing/releases/download/v1.2.0/Peekom-Setup.exe",
        macUrl: "https://github.com/Nannie-99/peekom-landing/releases/download/v1.2.0/Peekom-macOS.dmg"
    }
];

const CHANGELOG = {
    ko: [{
        version: "1.2.0",
        date: "2026.06.26",
        items: [
            "빼꼼 인덱스가 Peekom으로 돌아왔습니다",
            "가장자리 손잡이·얼음 모드·듀얼 모니터 지원",
            "마크다운 입력·서식바·이미지 삽입 (무료·Plus 공통)",
            "Peekom Plus: 10슬롯 독립 배치, 커스텀 테마·글꼴·불투명도, 보내기·JSON 백업"
        ]
    }],
    en: [{
        version: "1.2.0",
        date: "2026.06.26",
        items: [
            "Peekom rebrand from legacy edge memo app",
            "Edge handle, Ice mode, dual monitor support",
            "Markdown, formatting toolbar, image insert (free & Plus)",
            "Peekom Plus: 10 slots, custom theme, export & JSON backup"
        ]
    }]
};

function getPromoDiscountPct() {
    return Math.round((1 - PRICING.sale / PRICING.list) * 100);
}

function buildPromoTagHtml(d) {
    const pct = getPromoDiscountPct();
    const vat = d.promoVat || "(VAT 별도)";
    const label = d.promoLaunchLabel || "출시 기념";
    const note = d.promoNote || "";
    return (
        '<div class="promo-tag">' +
            '<span class="promo-tag__pct">' + pct + '% OFF</span>' +
            '<div class="promo-tag__body">' +
                '<div class="promo-tag__prices">' +
                    '<span class="pricing-was">$' + PRICING.list.toFixed(2) + '</span>' +
                    '<span class="promo-tag__now">$' + PRICING.sale.toFixed(2) + '</span>' +
                    '<span class="pricing-vat">' + vat + '</span>' +
                '</div>' +
                '<span class="promo-tag__label">' + label + '</span>' +
            '</div>' +
            (note ? '<p class="promo-tag__note">' + note + '</p>' : '') +
        '</div>'
    );
}

function renderVersionHistory(d) {
    const host = document.getElementById("versionHistoryHost");
    if (!host) return;
    const latestLabel = d.versionLatest || "Latest";
    const winLabel = d.versionWin || "Setup (x64)";
    const macLabel = d.versionMac || "macOS";
    const rows = RELEASE_HISTORY.map(function (r) {
        const badge = r.latest ? ' <span class="badge-latest">' + latestLabel + '</span>' : "";
        return (
            "<tr>" +
                "<td><strong>v" + r.version + "</strong>" + badge + "</td>" +
                "<td>" + r.date + "</td>" +
                '<td><span class="os-icon">Win</span> <a href="' + r.winUrl + '" target="_blank" rel="noopener">' + winLabel + "</a></td>" +
                '<td><span class="os-icon">Mac</span> <a href="' + r.macUrl + '" target="_blank" rel="noopener">' + macLabel + "</a></td>" +
            "</tr>"
        );
    }).join("");
    host.innerHTML =
        '<table class="version-table">' +
            "<thead><tr>" +
                "<th>" + (d.versionColVersion || "Version") + "</th>" +
                "<th>" + (d.versionColDate || "Release Date") + "</th>" +
                "<th>" + (d.versionColWin || "Windows") + "</th>" +
                "<th>" + (d.versionColMac || "macOS") + "</th>" +
            "</tr></thead>" +
            "<tbody>" + rows + "</tbody>" +
        "</table>";
}

function renderChangelog(d) {
    const host = document.getElementById("changelogHost");
    if (!host) return;
    const lang = resolveLang(currentLang);
    const entries = (CHANGELOG[lang] || CHANGELOG.en || []);
    host.innerHTML = entries.map(function (entry) {
        const items = entry.items.map(function (item) {
            return "<li>" + item + "</li>";
        }).join("");
        return (
            '<div class="changelog-entry">' +
                '<div class="changelog-entry__head">v' + entry.version + '<span>(' + entry.date + ")</span></div>" +
                "<ul>" + items + "</ul>" +
            "</div>"
        );
    }).join("");
}

