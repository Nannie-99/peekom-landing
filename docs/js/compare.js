/* Peekom landing — comparison sections (4 cards) */
(function () {
    var SECTIONS_KO = [
        {
            id: "edge",
            title: "가장자리에서 빼꼼",
            image: "screenshots/scene-1.svg",
            rows: [
                { feature: "가장자리 손잡이·메모", free: "✓", plus: "✓" },
                { feature: "인덱스(슬롯) 개수", free: "3개", plus: "10개" },
                { feature: "손잡이 위치", free: "3개 묶음 이동", plus: "슬롯별 독립" },
                { feature: "PEEK / ICE 모드", free: "✓", plus: "✓" },
                { feature: "자동 접힘 딜레이", free: "✓", plus: "✓" }
            ]
        },
        {
            id: "hint",
            title: "스마트한 힌트 메모",
            image: "screenshots/scene-2.svg",
            reverse: true,
            rows: [
                { feature: "단일 / 듀얼 모니터", free: "✓", plus: "✓" },
                { feature: "표시 모니터 선택", free: "✓", plus: "✓" },
                { feature: "표시 위치 (왼쪽/오른쪽)", free: "오른쪽", plus: "왼쪽 / 오른쪽" },
                { feature: "메모 비율 1:1 / 3:4", free: "✓", plus: "✓" },
                { feature: "단축키 — 최근 메모 토글", free: "✓", plus: "✓" },
                { feature: "단축키 — 위/아래 인덱스 열기", free: "✓", plus: "✓" },
                { feature: "마우스 조작 — ↑↓ 인덱스 전환", free: "✓", plus: "✓" },
                { feature: "Ctrl+1~9 인덱스 바로가기", free: "✓", plus: "✓" }
            ]
        },
        {
            id: "edit",
            title: "편집·콘텐츠",
            image: "screenshots/scene-2.svg",
            rows: [
                { feature: "모드 전환 방식 선택", free: "✓", plus: "✓" },
                { feature: "서식바", free: "✓", plus: "✓" },
                { feature: "이미지 삽입", free: "✓", plus: "✓" },
                { feature: "메모당 이미지", free: "1개", plus: "5개" },
                { feature: "글자 크기 조절", free: "—", plus: "✓" },
                { feature: "이미지 크기 조절 (50–150%)", free: "—", plus: "✓" },
                { feature: "커스텀 글꼴", free: "—", plus: "✓" }
            ]
        },
        {
            id: "plus",
            title: "Plus 커스터마이즈",
            image: "screenshots/scene-3.svg",
            reverse: true,
            rows: [
                { feature: "슬롯별 독립 손잡이 배치", free: "—", plus: "✓" },
                { feature: "메모 기본 불투명도", free: "—", plus: "✓" },
                { feature: "프리셋 테마", free: "✓", plus: "✓" },
                { feature: "커스텀 배경·글자 색", free: "—", plus: "✓" },
                { feature: "보내기 · JSON 백업", free: "—", plus: "✓" },
                { feature: "가격", free: "무료", plus: "$9.99" },
                { feature: "기기 수", free: "—", plus: "최대 2대" }
            ]
        }
    ];

    var SECTIONS_EN = [
        {
            id: "edge",
            title: "Peek from the edge",
            image: "screenshots/scene-1.svg",
            rows: [
                { feature: "Edge handle & memos", free: "✓", plus: "✓" },
                { feature: "Index (slot) count", free: "3", plus: "10" },
                { feature: "Handle placement", free: "3 move together", plus: "Independent per slot" },
                { feature: "PEEK / ICE mode", free: "✓", plus: "✓" },
                { feature: "Hover delay", free: "✓", plus: "✓" }
            ]
        },
        {
            id: "hint",
            title: "Smart hint memos",
            image: "screenshots/scene-2.svg",
            reverse: true,
            rows: [
                { feature: "Single / dual monitor", free: "✓", plus: "✓" },
                { feature: "Target display", free: "✓", plus: "✓" },
                { feature: "Panel side (left/right)", free: "Right", plus: "Left / Right" },
                { feature: "Memo aspect 1:1 / 3:4", free: "✓", plus: "✓" },
                { feature: "Shortcut — recent memo toggle", free: "✓", plus: "✓" },
                { feature: "Shortcut — open prev/next index", free: "✓", plus: "✓" },
                { feature: "Mouse control — ↑↓ index switch", free: "✓", plus: "✓" },
                { feature: "Ctrl+1–9 index jump", free: "✓", plus: "✓" }
            ]
        },
        {
            id: "edit",
            title: "Editing & content",
            image: "screenshots/scene-2.svg",
            rows: [
                { feature: "Peek / Ice toggle mode", free: "✓", plus: "✓" },
                { feature: "Formatting toolbar", free: "✓", plus: "✓" },
                { feature: "Image insert", free: "✓", plus: "✓" },
                { feature: "Images per memo", free: "1", plus: "5" },
                { feature: "Font size (Ctrl+wheel)", free: "—", plus: "✓" },
                { feature: "Image resize (50–150%)", free: "—", plus: "✓" },
                { feature: "Custom fonts", free: "—", plus: "✓" }
            ]
        },
        {
            id: "plus",
            title: "Plus customization",
            image: "screenshots/scene-3.svg",
            reverse: true,
            rows: [
                { feature: "Independent handle per slot", free: "—", plus: "✓" },
                { feature: "Default memo opacity", free: "—", plus: "✓" },
                { feature: "Preset themes", free: "✓", plus: "✓" },
                { feature: "Custom bg & text colors", free: "—", plus: "✓" },
                { feature: "Export · JSON backup", free: "—", plus: "✓" },
                { feature: "Price", free: "Free", plus: "$9.99" },
                { feature: "Devices", free: "—", plus: "Up to 2" }
            ]
        }
    ];

    function renderCompareCell(value, noLabel) {
        if (value === "—" || value === "-" || value === "✗") {
            return '<span class="compare-no" aria-label="' + (noLabel || "Not supported") + '">✗</span>';
        }
        return value;
    }

    function buildMiniTable(section, d) {
        var noLabel = d.compareNoLabel || "Not supported";
        var rows = section.rows.map(function (row) {
            return (
                "<tr><td>" + row.feature + '</td><td class="compare-cell">' +
                renderCompareCell(row.free, noLabel) + '</td><td class="compare-cell compare-cell--plus">' +
                renderCompareCell(row.plus, noLabel) + "</td></tr>"
            );
        }).join("");
        return (
            '<div class="compare-mini-scroll">' +
                '<table class="compare-table compare-table--mini">' +
                    "<thead><tr>" +
                        '<th scope="col">' + d.compareColFeature + "</th>" +
                        '<th scope="col">' + d.compareFreeName + "</th>" +
                        '<th scope="col" class="compare-th--plus">' + d.comparePlusName + "</th>" +
                    "</tr></thead>" +
                    "<tbody>" + rows + "</tbody>" +
                "</table>" +
            "</div>"
        );
    }

    function buildCompareSections(d) {
        var sections = d.compareSections || SECTIONS_EN;
        var buyLink = (window.PeekomSite && window.PeekomSite.LINKS) ? window.PeekomSite.LINKS.buy : "#";
        var cards = sections.map(function (section) {
            var reverseClass = section.reverse ? " compare-section-card--reverse" : "";
            return (
                '<article class="compare-section-card' + reverseClass + '" id="compare-' + section.id + '">' +
                    '<div class="compare-section-card__body">' +
                        '<h3 class="compare-section-card__title">' + section.title + "</h3>" +
                        buildMiniTable(section, d) +
                    "</div>" +
                    '<div class="compare-section-card__media">' +
                        '<img src="' + section.image + '" alt="" loading="lazy">' +
                    "</div>" +
                "</article>"
            );
        }).join("");

        return (
            '<div class="compare-sections">' + cards + "</div>" +
            '<div class="compare-cta">' +
                '<a href="' + buyLink + '" class="btn btn--buy btn--plus compare-cta-btn" target="_blank" rel="noopener">' + d.compareCta + "</a>" +
            "</div>"
        );
    }

    function flattenCompareRows(sections) {
        var rows = [];
        (sections || []).forEach(function (section) {
            (section.rows || []).forEach(function (row) {
                rows.push(row);
            });
        });
        return rows;
    }

    function buildCompareTable(d) {
        var sections = d.compareSections || SECTIONS_EN;
        var rows = d.compareRows && d.compareRows.length ? d.compareRows : flattenCompareRows(sections);
        var noLabel = d.compareNoLabel || "Not supported";
        var buyLink = (window.PeekomSite && window.PeekomSite.LINKS) ? window.PeekomSite.LINKS.buy : "#";
        var body = rows.map(function (row) {
            return (
                "<tr><td>" + row.feature + '</td><td class="compare-cell">' +
                renderCompareCell(row.free, noLabel) + '</td><td class="compare-cell compare-cell--plus">' +
                renderCompareCell(row.plus, noLabel) + "</td></tr>"
            );
        }).join("");
        return (
            '<div class="compare-wrap">' +
                '<div class="compare-scroll">' +
                    '<table class="compare-table">' +
                        "<thead><tr>" +
                            '<th scope="col">' + d.compareColFeature + "</th>" +
                            '<th scope="col">' + d.compareFreeName + "</th>" +
                            '<th scope="col" class="compare-th--plus">' + d.comparePlusName + "</th>" +
                        "</tr></thead>" +
                        "<tbody>" + body + "</tbody>" +
                    "</table>" +
                "</div>" +
                '<div class="compare-cta">' +
                    '<a href="' + buyLink + '" class="btn btn--buy btn--plus compare-cta-btn" target="_blank" rel="noopener">' + d.compareCta + "</a>" +
                "</div>" +
            "</div>"
        );
    }

    window.PeekomCompare = {
        SECTIONS_KO: SECTIONS_KO,
        SECTIONS_EN: SECTIONS_EN,
        EXTENDED_COMPARE_EN: SECTIONS_EN,
        EXTENDED_COMPARE_KO: SECTIONS_KO,
        flattenCompareRows: flattenCompareRows,
        buildCompareSections: buildCompareSections,
        buildCompareTable: buildCompareTable,
        getCompareSections: function (lang) {
            if (lang === "ko") return SECTIONS_KO;
            return SECTIONS_EN;
        }
    };
})();
