/* Peekom landing — comparison sections i18n (extends compare.js) */
(function () {
    "use strict";

    var SECTIONS_BY_LANG = {
        ko: [
            {
                id: "edge",
                title: "가장자리에서 빼꼼",
                image: "screenshots/scene-1.svg",
                rows: [
                    { feature: "가장자리 손잡이·메모", free: "✓", plus: "✓" },
                    { feature: "인덱스(슬롯) 개수", free: "3개", plus: "10개" },
                    { feature: "손잡이 위치", free: "3개 묶음 이동", plus: "슬롯별 독립" },
                    { feature: "PEEK / ICE 모드", free: "✓", plus: "✓" },
                    { feature: "자동 접힘 딜레이 (0.25초)", free: "✓", plus: "✓" }
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
                    { feature: "마크다운 · 체크박스", free: "✓", plus: "✓" },
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
        ],
        en: [
            {
                id: "edge",
                title: "Peek from the edge",
                image: "screenshots/scene-1.svg",
                rows: [
                    { feature: "Edge handle & memos", free: "✓", plus: "✓" },
                    { feature: "Index (slot) count", free: "3", plus: "10" },
                    { feature: "Handle placement", free: "3 move together", plus: "Independent per slot" },
                    { feature: "PEEK / ICE mode", free: "✓", plus: "✓" },
                    { feature: "Hover delay (0.25s)", free: "✓", plus: "✓" }
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
                    { feature: "Memo aspect 1:1 / 3:4", free: "✓", plus: "✓" },
                    { feature: "Shortcut — recent memo toggle", free: "✓", plus: "✓" },
                    { feature: "Shortcut — open prev/next index", free: "✓", plus: "✓" },
                    { feature: "Mouse control — ↑↓ index switch", free: "✓", plus: "✓" },
                    { feature: "Ctrl+1~9 index jump", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "edit",
                title: "Editing & content",
                image: "screenshots/scene-2.svg",
                rows: [
                    { feature: "Markdown · checkboxes", free: "✓", plus: "✓" },
                    { feature: "Formatting toolbar", free: "✓", plus: "✓" },
                    { feature: "Image insert", free: "✓", plus: "✓" },
                    { feature: "Images per memo", free: "1", plus: "5" },
                    { feature: "Font size adjustment", free: "—", plus: "✓" },
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
        ],
        ja: [
            {
                id: "edge",
                title: "画面端からひょっこり",
                image: "screenshots/scene-1.svg",
                rows: [
                    { feature: "端のハンドル・メモ", free: "✓", plus: "✓" },
                    { feature: "インデックス（スロット）数", free: "3", plus: "10" },
                    { feature: "ハンドル位置", free: "3つ一括移動", plus: "スロット別に独立" },
                    { feature: "PEEK / ICE モード", free: "✓", plus: "✓" },
                    { feature: "自動折りたたみ遅延（0.25秒）", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "hint",
                title: "スマートヒントメモ",
                image: "screenshots/scene-2.svg",
                reverse: true,
                rows: [
                    { feature: "シングル / デュアルモニター", free: "✓", plus: "✓" },
                    { feature: "表示モニター選択", free: "✓", plus: "✓" },
                    { feature: "メモ比率 1:1 / 3:4", free: "✓", plus: "✓" },
                    { feature: "ショートカット — 直近メモの切り替え", free: "✓", plus: "✓" },
                    { feature: "ショートカット — 前後インデックスを開く", free: "✓", plus: "✓" },
                    { feature: "マウス操作 — ↑↓ でインデックス切替", free: "✓", plus: "✓" },
                    { feature: "Ctrl+1~9 インデックスジャンプ", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "edit",
                title: "編集・コンテンツ",
                image: "screenshots/scene-2.svg",
                rows: [
                    { feature: "マークダウン · チェックボックス", free: "✓", plus: "✓" },
                    { feature: "書式バー", free: "✓", plus: "✓" },
                    { feature: "画像挿入", free: "✓", plus: "✓" },
                    { feature: "メモあたりの画像", free: "1", plus: "5" },
                    { feature: "文字サイズ調整", free: "—", plus: "✓" },
                    { feature: "画像サイズ調整（50–150%）", free: "—", plus: "✓" },
                    { feature: "カスタムフォント", free: "—", plus: "✓" }
                ]
            },
            {
                id: "plus",
                title: "Plus カスタマイズ",
                image: "screenshots/scene-3.svg",
                reverse: true,
                rows: [
                    { feature: "スロット別独立ハンドル配置", free: "—", plus: "✓" },
                    { feature: "メモ既定の不透明度", free: "—", plus: "✓" },
                    { feature: "プリセットテーマ", free: "✓", plus: "✓" },
                    { feature: "カスタム背景・文字色", free: "—", plus: "✓" },
                    { feature: "書き出し · JSONバックアップ", free: "—", plus: "✓" },
                    { feature: "価格", free: "無料", plus: "$9.99" },
                    { feature: "デバイス数", free: "—", plus: "最大2台" }
                ]
            }
        ],
        "zh-CN": [
            {
                id: "edge",
                title: "从屏幕边缘窥视",
                image: "screenshots/scene-1.svg",
                rows: [
                    { feature: "边缘手柄·备忘", free: "✓", plus: "✓" },
                    { feature: "索引（槽位）数量", free: "3个", plus: "10个" },
                    { feature: "手柄位置", free: "3个成组移动", plus: "各槽位独立" },
                    { feature: "PEEK / ICE 模式", free: "✓", plus: "✓" },
                    { feature: "自动折叠延迟（0.25秒）", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "hint",
                title: "智能提示备忘",
                image: "screenshots/scene-2.svg",
                reverse: true,
                rows: [
                    { feature: "单 / 双显示器", free: "✓", plus: "✓" },
                    { feature: "目标显示器选择", free: "✓", plus: "✓" },
                    { feature: "备忘比例 1:1 / 3:4", free: "✓", plus: "✓" },
                    { feature: "快捷键 — 最近备忘开关", free: "✓", plus: "✓" },
                    { feature: "快捷键 — 打开上/下索引", free: "✓", plus: "✓" },
                    { feature: "鼠标操作 — ↑↓ 切换索引", free: "✓", plus: "✓" },
                    { feature: "Ctrl+1~9 索引跳转", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "edit",
                title: "编辑·内容",
                image: "screenshots/scene-2.svg",
                rows: [
                    { feature: "Markdown · 复选框", free: "✓", plus: "✓" },
                    { feature: "格式工具栏", free: "✓", plus: "✓" },
                    { feature: "插入图片", free: "✓", plus: "✓" },
                    { feature: "每条备忘图片数", free: "1张", plus: "5张" },
                    { feature: "字体大小调节", free: "—", plus: "✓" },
                    { feature: "图片大小调节（50–150%）", free: "—", plus: "✓" },
                    { feature: "自定义字体", free: "—", plus: "✓" }
                ]
            },
            {
                id: "plus",
                title: "Plus 自定义",
                image: "screenshots/scene-3.svg",
                reverse: true,
                rows: [
                    { feature: "各槽位独立手柄布局", free: "—", plus: "✓" },
                    { feature: "备忘默认不透明度", free: "—", plus: "✓" },
                    { feature: "预设主题", free: "✓", plus: "✓" },
                    { feature: "自定义背景·文字颜色", free: "—", plus: "✓" },
                    { feature: "导出 · JSON 备份", free: "—", plus: "✓" },
                    { feature: "价格", free: "免费", plus: "$9.99" },
                    { feature: "设备数量", free: "—", plus: "最多2台" }
                ]
            }
        ],
        "zh-TW": [
            {
                id: "edge",
                title: "從螢幕邊緣窺視",
                image: "screenshots/scene-1.svg",
                rows: [
                    { feature: "邊緣手柄·備忘", free: "✓", plus: "✓" },
                    { feature: "索引（槽位）數量", free: "3個", plus: "10個" },
                    { feature: "手柄位置", free: "3個成組移動", plus: "各槽位獨立" },
                    { feature: "PEEK / ICE 模式", free: "✓", plus: "✓" },
                    { feature: "自動摺疊延遲（0.25秒）", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "hint",
                title: "智慧提示備忘",
                image: "screenshots/scene-2.svg",
                reverse: true,
                rows: [
                    { feature: "單 / 雙顯示器", free: "✓", plus: "✓" },
                    { feature: "目標顯示器選擇", free: "✓", plus: "✓" },
                    { feature: "備忘比例 1:1 / 3:4", free: "✓", plus: "✓" },
                    { feature: "快捷鍵 — 最近備忘開關", free: "✓", plus: "✓" },
                    { feature: "快捷鍵 — 開啟上/下索引", free: "✓", plus: "✓" },
                    { feature: "滑鼠操作 — ↑↓ 切換索引", free: "✓", plus: "✓" },
                    { feature: "Ctrl+1~9 索引跳轉", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "edit",
                title: "編輯·內容",
                image: "screenshots/scene-2.svg",
                rows: [
                    { feature: "Markdown · 核取方塊", free: "✓", plus: "✓" },
                    { feature: "格式工具列", free: "✓", plus: "✓" },
                    { feature: "插入圖片", free: "✓", plus: "✓" },
                    { feature: "每則備忘圖片數", free: "1張", plus: "5張" },
                    { feature: "字體大小調整", free: "—", plus: "✓" },
                    { feature: "圖片大小調整（50–150%）", free: "—", plus: "✓" },
                    { feature: "自訂字型", free: "—", plus: "✓" }
                ]
            },
            {
                id: "plus",
                title: "Plus 自訂",
                image: "screenshots/scene-3.svg",
                reverse: true,
                rows: [
                    { feature: "各槽位獨立手柄配置", free: "—", plus: "✓" },
                    { feature: "備忘預設不透明度", free: "—", plus: "✓" },
                    { feature: "預設主題", free: "✓", plus: "✓" },
                    { feature: "自訂背景·文字顏色", free: "—", plus: "✓" },
                    { feature: "匯出 · JSON 備份", free: "—", plus: "✓" },
                    { feature: "價格", free: "免費", plus: "$9.99" },
                    { feature: "裝置數量", free: "—", plus: "最多2台" }
                ]
            }
        ],
        es: [
            {
                id: "edge",
                title: "Asomar desde el borde",
                image: "screenshots/scene-1.svg",
                rows: [
                    { feature: "Asa del borde y notas", free: "✓", plus: "✓" },
                    { feature: "Cantidad de índices (ranuras)", free: "3", plus: "10" },
                    { feature: "Posición del asa", free: "3 se mueven juntas", plus: "Independiente por ranura" },
                    { feature: "Modo PEEK / ICE", free: "✓", plus: "✓" },
                    { feature: "Retraso al plegar (0,25 s)", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "hint",
                title: "Notas de sugerencia inteligentes",
                image: "screenshots/scene-2.svg",
                reverse: true,
                rows: [
                    { feature: "Monitor único / dual", free: "✓", plus: "✓" },
                    { feature: "Pantalla de destino", free: "✓", plus: "✓" },
                    { feature: "Proporción de nota 1:1 / 3:4", free: "✓", plus: "✓" },
                    { feature: "Atajo — alternar nota reciente", free: "✓", plus: "✓" },
                    { feature: "Atajo — abrir índice ant./sig.", free: "✓", plus: "✓" },
                    { feature: "Ratón — ↑↓ cambiar índice", free: "✓", plus: "✓" },
                    { feature: "Ctrl+1~9 salto de índice", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "edit",
                title: "Edición y contenido",
                image: "screenshots/scene-2.svg",
                rows: [
                    { feature: "Markdown · casillas", free: "✓", plus: "✓" },
                    { feature: "Barra de formato", free: "✓", plus: "✓" },
                    { feature: "Insertar imagen", free: "✓", plus: "✓" },
                    { feature: "Imágenes por nota", free: "1", plus: "5" },
                    { feature: "Tamaño de fuente", free: "—", plus: "✓" },
                    { feature: "Redimensionar imagen (50–150%)", free: "—", plus: "✓" },
                    { feature: "Fuentes personalizadas", free: "—", plus: "✓" }
                ]
            },
            {
                id: "plus",
                title: "Personalización Plus",
                image: "screenshots/scene-3.svg",
                reverse: true,
                rows: [
                    { feature: "Asa independiente por ranura", free: "—", plus: "✓" },
                    { feature: "Opacidad predeterminada de nota", free: "—", plus: "✓" },
                    { feature: "Temas predefinidos", free: "✓", plus: "✓" },
                    { feature: "Colores de fondo y texto", free: "—", plus: "✓" },
                    { feature: "Exportar · copia JSON", free: "—", plus: "✓" },
                    { feature: "Precio", free: "Gratis", plus: "$9.99" },
                    { feature: "Dispositivos", free: "—", plus: "Hasta 2" }
                ]
            }
        ],
        fr: [
            {
                id: "edge",
                title: "Jeter un œil depuis le bord",
                image: "screenshots/scene-1.svg",
                rows: [
                    { feature: "Poignée de bord et notes", free: "✓", plus: "✓" },
                    { feature: "Nombre d'index (emplacements)", free: "3", plus: "10" },
                    { feature: "Position de la poignée", free: "3 se déplacent ensemble", plus: "Indépendant par emplacement" },
                    { feature: "Mode PEEK / ICE", free: "✓", plus: "✓" },
                    { feature: "Délai de repli (0,25 s)", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "hint",
                title: "Notes d'indice intelligentes",
                image: "screenshots/scene-2.svg",
                reverse: true,
                rows: [
                    { feature: "Moniteur simple / double", free: "✓", plus: "✓" },
                    { feature: "Écran cible", free: "✓", plus: "✓" },
                    { feature: "Format de note 1:1 / 3:4", free: "✓", plus: "✓" },
                    { feature: "Raccourci — basculer note récente", free: "✓", plus: "✓" },
                    { feature: "Raccourci — index préc./suiv.", free: "✓", plus: "✓" },
                    { feature: "Souris — ↑↓ changer d'index", free: "✓", plus: "✓" },
                    { feature: "Ctrl+1~9 saut d'index", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "edit",
                title: "Édition et contenu",
                image: "screenshots/scene-2.svg",
                rows: [
                    { feature: "Markdown · cases à cocher", free: "✓", plus: "✓" },
                    { feature: "Barre de formatage", free: "✓", plus: "✓" },
                    { feature: "Insertion d'image", free: "✓", plus: "✓" },
                    { feature: "Images par note", free: "1", plus: "5" },
                    { feature: "Taille de police", free: "—", plus: "✓" },
                    { feature: "Redimensionnement image (50–150%)", free: "—", plus: "✓" },
                    { feature: "Polices personnalisées", free: "—", plus: "✓" }
                ]
            },
            {
                id: "plus",
                title: "Personnalisation Plus",
                image: "screenshots/scene-3.svg",
                reverse: true,
                rows: [
                    { feature: "Poignée indépendante par emplacement", free: "—", plus: "✓" },
                    { feature: "Opacité par défaut des notes", free: "—", plus: "✓" },
                    { feature: "Thèmes prédéfinis", free: "✓", plus: "✓" },
                    { feature: "Couleurs de fond et de texte", free: "—", plus: "✓" },
                    { feature: "Export · sauvegarde JSON", free: "—", plus: "✓" },
                    { feature: "Prix", free: "Gratuit", plus: "$9.99" },
                    { feature: "Appareils", free: "—", plus: "Jusqu'à 2" }
                ]
            }
        ],
        de: [
            {
                id: "edge",
                title: "Vom Bildschirmrand hervorschauen",
                image: "screenshots/scene-1.svg",
                rows: [
                    { feature: "Randgriff & Notizen", free: "✓", plus: "✓" },
                    { feature: "Anzahl Indexe (Slots)", free: "3", plus: "10" },
                    { feature: "Griffposition", free: "3 bewegen sich gemeinsam", plus: "Pro Slot unabhängig" },
                    { feature: "PEEK / ICE-Modus", free: "✓", plus: "✓" },
                    { feature: "Einklapp-Verzögerung (0,25 s)", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "hint",
                title: "Intelligente Hinweis-Notizen",
                image: "screenshots/scene-2.svg",
                reverse: true,
                rows: [
                    { feature: "Einzel- / Dualmonitor", free: "✓", plus: "✓" },
                    { feature: "Zielmonitor", free: "✓", plus: "✓" },
                    { feature: "Notizformat 1:1 / 3:4", free: "✓", plus: "✓" },
                    { feature: "Tastenkürzel — letzte Notiz umschalten", free: "✓", plus: "✓" },
                    { feature: "Tastenkürzel — vorher./nächst. Index", free: "✓", plus: "✓" },
                    { feature: "Maus — ↑↓ Index wechseln", free: "✓", plus: "✓" },
                    { feature: "Ctrl+1~9 Index-Sprung", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "edit",
                title: "Bearbeitung & Inhalt",
                image: "screenshots/scene-2.svg",
                rows: [
                    { feature: "Markdown · Kontrollkästchen", free: "✓", plus: "✓" },
                    { feature: "Formatleiste", free: "✓", plus: "✓" },
                    { feature: "Bild einfügen", free: "✓", plus: "✓" },
                    { feature: "Bilder pro Notiz", free: "1", plus: "5" },
                    { feature: "Schriftgröße", free: "—", plus: "✓" },
                    { feature: "Bildgröße (50–150%)", free: "—", plus: "✓" },
                    { feature: "Eigene Schriftarten", free: "—", plus: "✓" }
                ]
            },
            {
                id: "plus",
                title: "Plus-Anpassung",
                image: "screenshots/scene-3.svg",
                reverse: true,
                rows: [
                    { feature: "Unabhängiger Griff pro Slot", free: "—", plus: "✓" },
                    { feature: "Standard-Deckkraft der Notiz", free: "—", plus: "✓" },
                    { feature: "Voreingestellte Themes", free: "✓", plus: "✓" },
                    { feature: "Eigene Hintergrund- & Textfarben", free: "—", plus: "✓" },
                    { feature: "Export · JSON-Backup", free: "—", plus: "✓" },
                    { feature: "Preis", free: "Kostenlos", plus: "$9.99" },
                    { feature: "Geräte", free: "—", plus: "Bis zu 2" }
                ]
            }
        ],
        pt: [
            {
                id: "edge",
                title: "Espreitar pela borda",
                image: "screenshots/scene-1.svg",
                rows: [
                    { feature: "Alça da borda e notas", free: "✓", plus: "✓" },
                    { feature: "Quantidade de índices (slots)", free: "3", plus: "10" },
                    { feature: "Posição da alça", free: "3 movem juntas", plus: "Independente por slot" },
                    { feature: "Modo PEEK / ICE", free: "✓", plus: "✓" },
                    { feature: "Atraso ao recolher (0,25 s)", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "hint",
                title: "Notas de dica inteligentes",
                image: "screenshots/scene-2.svg",
                reverse: true,
                rows: [
                    { feature: "Monitor único / duplo", free: "✓", plus: "✓" },
                    { feature: "Monitor de destino", free: "✓", plus: "✓" },
                    { feature: "Proporção da nota 1:1 / 3:4", free: "✓", plus: "✓" },
                    { feature: "Atalho — alternar nota recente", free: "✓", plus: "✓" },
                    { feature: "Atalho — abrir índice ant./próx.", free: "✓", plus: "✓" },
                    { feature: "Mouse — ↑↓ trocar índice", free: "✓", plus: "✓" },
                    { feature: "Ctrl+1~9 salto de índice", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "edit",
                title: "Edição e conteúdo",
                image: "screenshots/scene-2.svg",
                rows: [
                    { feature: "Markdown · caixas de seleção", free: "✓", plus: "✓" },
                    { feature: "Barra de formatação", free: "✓", plus: "✓" },
                    { feature: "Inserir imagem", free: "✓", plus: "✓" },
                    { feature: "Imagens por nota", free: "1", plus: "5" },
                    { feature: "Tamanho da fonte", free: "—", plus: "✓" },
                    { feature: "Redimensionar imagem (50–150%)", free: "—", plus: "✓" },
                    { feature: "Fontes personalizadas", free: "—", plus: "✓" }
                ]
            },
            {
                id: "plus",
                title: "Personalização Plus",
                image: "screenshots/scene-3.svg",
                reverse: true,
                rows: [
                    { feature: "Alça independente por slot", free: "—", plus: "✓" },
                    { feature: "Opacidade padrão da nota", free: "—", plus: "✓" },
                    { feature: "Temas predefinidos", free: "✓", plus: "✓" },
                    { feature: "Cores de fundo e texto", free: "—", plus: "✓" },
                    { feature: "Exportar · backup JSON", free: "—", plus: "✓" },
                    { feature: "Preço", free: "Grátis", plus: "$9.99" },
                    { feature: "Dispositivos", free: "—", plus: "Até 2" }
                ]
            }
        ],
        it: [
            {
                id: "edge",
                title: "Sbirciare dal bordo",
                image: "screenshots/scene-1.svg",
                rows: [
                    { feature: "Maniglia del bordo e note", free: "✓", plus: "✓" },
                    { feature: "Numero di indici (slot)", free: "3", plus: "10" },
                    { feature: "Posizione maniglia", free: "3 si muovono insieme", plus: "Indipendente per slot" },
                    { feature: "Modalità PEEK / ICE", free: "✓", plus: "✓" },
                    { feature: "Ritardo di chiusura (0,25 s)", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "hint",
                title: "Note suggerimento intelligenti",
                image: "screenshots/scene-2.svg",
                reverse: true,
                rows: [
                    { feature: "Monitor singolo / doppio", free: "✓", plus: "✓" },
                    { feature: "Schermo di destinazione", free: "✓", plus: "✓" },
                    { feature: "Proporzione nota 1:1 / 3:4", free: "✓", plus: "✓" },
                    { feature: "Scorciatoia — alterna nota recente", free: "✓", plus: "✓" },
                    { feature: "Scorciatoia — indice prec./succ.", free: "✓", plus: "✓" },
                    { feature: "Mouse — ↑↓ cambia indice", free: "✓", plus: "✓" },
                    { feature: "Ctrl+1~9 salto indice", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "edit",
                title: "Modifica e contenuti",
                image: "screenshots/scene-2.svg",
                rows: [
                    { feature: "Markdown · caselle di spunta", free: "✓", plus: "✓" },
                    { feature: "Barra di formattazione", free: "✓", plus: "✓" },
                    { feature: "Inserimento immagine", free: "✓", plus: "✓" },
                    { feature: "Immagini per nota", free: "1", plus: "5" },
                    { feature: "Dimensione carattere", free: "—", plus: "✓" },
                    { feature: "Ridimensionamento immagine (50–150%)", free: "—", plus: "✓" },
                    { feature: "Font personalizzati", free: "—", plus: "✓" }
                ]
            },
            {
                id: "plus",
                title: "Personalizzazione Plus",
                image: "screenshots/scene-3.svg",
                reverse: true,
                rows: [
                    { feature: "Maniglia indipendente per slot", free: "—", plus: "✓" },
                    { feature: "Opacità predefinita nota", free: "—", plus: "✓" },
                    { feature: "Temi predefiniti", free: "✓", plus: "✓" },
                    { feature: "Colori sfondo e testo", free: "—", plus: "✓" },
                    { feature: "Esporta · backup JSON", free: "—", plus: "✓" },
                    { feature: "Prezzo", free: "Gratis", plus: "$9.99" },
                    { feature: "Dispositivi", free: "—", plus: "Fino a 2" }
                ]
            }
        ],
        ru: [
            {
                id: "edge",
                title: "Подглядывать с края экрана",
                image: "screenshots/scene-1.svg",
                rows: [
                    { feature: "Ручка на краю и заметки", free: "✓", plus: "✓" },
                    { feature: "Количество индексов (слотов)", free: "3", plus: "10" },
                    { feature: "Положение ручки", free: "3 двигаются вместе", plus: "Независимо по слотам" },
                    { feature: "Режим PEEK / ICE", free: "✓", plus: "✓" },
                    { feature: "Задержка сворачивания (0,25 с)", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "hint",
                title: "Умные подсказки-заметки",
                image: "screenshots/scene-2.svg",
                reverse: true,
                rows: [
                    { feature: "Один / два монитора", free: "✓", plus: "✓" },
                    { feature: "Целевой монитор", free: "✓", plus: "✓" },
                    { feature: "Соотношение заметки 1:1 / 3:4", free: "✓", plus: "✓" },
                    { feature: "Горячая клавиша — переключить последнюю", free: "✓", plus: "✓" },
                    { feature: "Горячая клавиша — пред./след. индекс", free: "✓", plus: "✓" },
                    { feature: "Мышь — ↑↓ смена индекса", free: "✓", plus: "✓" },
                    { feature: "Ctrl+1~9 переход к индексу", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "edit",
                title: "Редактирование и контент",
                image: "screenshots/scene-2.svg",
                rows: [
                    { feature: "Markdown · флажки", free: "✓", plus: "✓" },
                    { feature: "Панель форматирования", free: "✓", plus: "✓" },
                    { feature: "Вставка изображения", free: "✓", plus: "✓" },
                    { feature: "Изображений на заметку", free: "1", plus: "5" },
                    { feature: "Размер шрифта", free: "—", plus: "✓" },
                    { feature: "Размер изображения (50–150%)", free: "—", plus: "✓" },
                    { feature: "Свои шрифты", free: "—", plus: "✓" }
                ]
            },
            {
                id: "plus",
                title: "Настройка Plus",
                image: "screenshots/scene-3.svg",
                reverse: true,
                rows: [
                    { feature: "Независимая ручка для каждого слота", free: "—", plus: "✓" },
                    { feature: "Непрозрачность заметки по умолчанию", free: "—", plus: "✓" },
                    { feature: "Готовые темы", free: "✓", plus: "✓" },
                    { feature: "Свои цвета фона и текста", free: "—", plus: "✓" },
                    { feature: "Экспорт · резервная копия JSON", free: "—", plus: "✓" },
                    { feature: "Цена", free: "Бесплатно", plus: "$9.99" },
                    { feature: "Устройства", free: "—", plus: "До 2" }
                ]
            }
        ],
        vi: [
            {
                id: "edge",
                title: "Nhìn trộm từ cạnh màn hình",
                image: "screenshots/scene-1.svg",
                rows: [
                    { feature: "Tay cầm cạnh & ghi chú", free: "✓", plus: "✓" },
                    { feature: "Số lượng chỉ mục (slot)", free: "3", plus: "10" },
                    { feature: "Vị trí tay cầm", free: "3 di chuyển cùng nhau", plus: "Độc lập theo slot" },
                    { feature: "Chế độ PEEK / ICE", free: "✓", plus: "✓" },
                    { feature: "Độ trễ thu gọn (0,25 giây)", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "hint",
                title: "Ghi chú gợi ý thông minh",
                image: "screenshots/scene-2.svg",
                reverse: true,
                rows: [
                    { feature: "Một / hai màn hình", free: "✓", plus: "✓" },
                    { feature: "Chọn màn hình hiển thị", free: "✓", plus: "✓" },
                    { feature: "Tỷ lệ ghi chú 1:1 / 3:4", free: "✓", plus: "✓" },
                    { feature: "Phím tắt — bật/tắt ghi chú gần nhất", free: "✓", plus: "✓" },
                    { feature: "Phím tắt — mở chỉ mục trước/sau", free: "✓", plus: "✓" },
                    { feature: "Chuột — ↑↓ chuyển chỉ mục", free: "✓", plus: "✓" },
                    { feature: "Ctrl+1~9 nhảy chỉ mục", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "edit",
                title: "Chỉnh sửa & nội dung",
                image: "screenshots/scene-2.svg",
                rows: [
                    { feature: "Markdown · hộp kiểm", free: "✓", plus: "✓" },
                    { feature: "Thanh định dạng", free: "✓", plus: "✓" },
                    { feature: "Chèn hình ảnh", free: "✓", plus: "✓" },
                    { feature: "Hình ảnh mỗi ghi chú", free: "1", plus: "5" },
                    { feature: "Cỡ chữ", free: "—", plus: "✓" },
                    { feature: "Thay đổi kích thước ảnh (50–150%)", free: "—", plus: "✓" },
                    { feature: "Phông chữ tùy chỉnh", free: "—", plus: "✓" }
                ]
            },
            {
                id: "plus",
                title: "Tùy chỉnh Plus",
                image: "screenshots/scene-3.svg",
                reverse: true,
                rows: [
                    { feature: "Tay cầm độc lập theo slot", free: "—", plus: "✓" },
                    { feature: "Độ mờ mặc định của ghi chú", free: "—", plus: "✓" },
                    { feature: "Chủ đề có sẵn", free: "✓", plus: "✓" },
                    { feature: "Màu nền & chữ tùy chỉnh", free: "—", plus: "✓" },
                    { feature: "Xuất · sao lưu JSON", free: "—", plus: "✓" },
                    { feature: "Giá", free: "Miễn phí", plus: "$9.99" },
                    { feature: "Thiết bị", free: "—", plus: "Tối đa 2" }
                ]
            }
        ],
        th: [
            {
                id: "edge",
                title: "แอบมองจากขอบจอ",
                image: "screenshots/scene-1.svg",
                rows: [
                    { feature: "ที่จับขอบจอและบันทึก", free: "✓", plus: "✓" },
                    { feature: "จำนวนดัชนี (สล็อต)", free: "3", plus: "10" },
                    { feature: "ตำแหน่งที่จับ", free: "3 ตัวเคลื่อนพร้อมกัน", plus: "แยกตามสล็อต" },
                    { feature: "โหมด PEEK / ICE", free: "✓", plus: "✓" },
                    { feature: "หน่วงเวลาพับ (0.25 วินาที)", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "hint",
                title: "บันทึกคำใบ้อัจฉริยะ",
                image: "screenshots/scene-2.svg",
                reverse: true,
                rows: [
                    { feature: "จอเดียว / สองจอ", free: "✓", plus: "✓" },
                    { feature: "เลือกจอแสดงผล", free: "✓", plus: "✓" },
                    { feature: "สัดส่วนบันทึก 1:1 / 3:4", free: "✓", plus: "✓" },
                    { feature: "ทางลัด — สลับบันทึกล่าสุด", free: "✓", plus: "✓" },
                    { feature: "ทางลัด — เปิดดัชนีก่อนหน้า/ถัดไป", free: "✓", plus: "✓" },
                    { feature: "เมาส์ — ↑↓ สลับดัชนี", free: "✓", plus: "✓" },
                    { feature: "Ctrl+1~9 กระโดดดัชนี", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "edit",
                title: "แก้ไขและเนื้อหา",
                image: "screenshots/scene-2.svg",
                rows: [
                    { feature: "Markdown · ช่องทำเครื่องหมาย", free: "✓", plus: "✓" },
                    { feature: "แถบจัดรูปแบบ", free: "✓", plus: "✓" },
                    { feature: "แทรกรูปภาพ", free: "✓", plus: "✓" },
                    { feature: "รูปภาพต่อบันทึก", free: "1", plus: "5" },
                    { feature: "ปรับขนาดตัวอักษร", free: "—", plus: "✓" },
                    { feature: "ปรับขนาดรูป (50–150%)", free: "—", plus: "✓" },
                    { feature: "ฟอนต์กำหนดเอง", free: "—", plus: "✓" }
                ]
            },
            {
                id: "plus",
                title: "ปรับแต่ง Plus",
                image: "screenshots/scene-3.svg",
                reverse: true,
                rows: [
                    { feature: "ที่จับแยกตามสล็อต", free: "—", plus: "✓" },
                    { feature: "ความทึบเริ่มต้นของบันทึก", free: "—", plus: "✓" },
                    { feature: "ธีมสำเร็จรูป", free: "✓", plus: "✓" },
                    { feature: "สีพื้นหลังและตัวอักษร", free: "—", plus: "✓" },
                    { feature: "ส่งออก · สำรอง JSON", free: "—", plus: "✓" },
                    { feature: "ราคา", free: "ฟรี", plus: "$9.99" },
                    { feature: "อุปกรณ์", free: "—", plus: "สูงสุด 2 เครื่อง" }
                ]
            }
        ],
        id: [
            {
                id: "edge",
                title: "Mengintip dari tepi layar",
                image: "screenshots/scene-1.svg",
                rows: [
                    { feature: "Gagang tepi & memo", free: "✓", plus: "✓" },
                    { feature: "Jumlah indeks (slot)", free: "3", plus: "10" },
                    { feature: "Posisi gagang", free: "3 bergerak bersama", plus: "Independen per slot" },
                    { feature: "Mode PEEK / ICE", free: "✓", plus: "✓" },
                    { feature: "Penundaan lipat (0,25 dtk)", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "hint",
                title: "Memo petunjuk pintar",
                image: "screenshots/scene-2.svg",
                reverse: true,
                rows: [
                    { feature: "Monitor tunggal / ganda", free: "✓", plus: "✓" },
                    { feature: "Pilih monitor tampilan", free: "✓", plus: "✓" },
                    { feature: "Rasio memo 1:1 / 3:4", free: "✓", plus: "✓" },
                    { feature: "Pintasan — alih memo terbaru", free: "✓", plus: "✓" },
                    { feature: "Pintasan — buka indeks sebelum/sesudah", free: "✓", plus: "✓" },
                    { feature: "Mouse — ↑↓ ganti indeks", free: "✓", plus: "✓" },
                    { feature: "Ctrl+1~9 lompat indeks", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "edit",
                title: "Pengeditan & konten",
                image: "screenshots/scene-2.svg",
                rows: [
                    { feature: "Markdown · kotak centang", free: "✓", plus: "✓" },
                    { feature: "Bilah pemformatan", free: "✓", plus: "✓" },
                    { feature: "Sisipkan gambar", free: "✓", plus: "✓" },
                    { feature: "Gambar per memo", free: "1", plus: "5" },
                    { feature: "Ukuran font", free: "—", plus: "✓" },
                    { feature: "Ubah ukuran gambar (50–150%)", free: "—", plus: "✓" },
                    { feature: "Font kustom", free: "—", plus: "✓" }
                ]
            },
            {
                id: "plus",
                title: "Kustomisasi Plus",
                image: "screenshots/scene-3.svg",
                reverse: true,
                rows: [
                    { feature: "Gagang independen per slot", free: "—", plus: "✓" },
                    { feature: "Opasitas default memo", free: "—", plus: "✓" },
                    { feature: "Tema preset", free: "✓", plus: "✓" },
                    { feature: "Warna latar & teks kustom", free: "—", plus: "✓" },
                    { feature: "Ekspor · cadangan JSON", free: "—", plus: "✓" },
                    { feature: "Harga", free: "Gratis", plus: "$9.99" },
                    { feature: "Perangkat", free: "—", plus: "Hingga 2" }
                ]
            }
        ],
        hi: [
            {
                id: "edge",
                title: "स्क्रीन किनारे से झाँकना",
                image: "screenshots/scene-1.svg",
                rows: [
                    { feature: "किनारे का हैंडल और मेमो", free: "✓", plus: "✓" },
                    { feature: "इंडेक्स (स्लॉट) संख्या", free: "3", plus: "10" },
                    { feature: "हैंडल की स्थिति", free: "3 एक साथ चलते हैं", plus: "प्रति स्लॉट स्वतंत्र" },
                    { feature: "PEEK / ICE मोड", free: "✓", plus: "✓" },
                    { feature: "स्वतः मोड़ने की देरी (0.25 सेकंड)", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "hint",
                title: "स्मार्ट संकेत मेमो",
                image: "screenshots/scene-2.svg",
                reverse: true,
                rows: [
                    { feature: "एकल / दोहरा मॉनिटर", free: "✓", plus: "✓" },
                    { feature: "लक्ष्य डिस्प्ले चयन", free: "✓", plus: "✓" },
                    { feature: "मेमो अनुपात 1:1 / 3:4", free: "✓", plus: "✓" },
                    { feature: "शॉर्टकट — हाल का मेमो टॉगल", free: "✓", plus: "✓" },
                    { feature: "शॉर्टकट — पिछला/अगला इंडेक्स खोलें", free: "✓", plus: "✓" },
                    { feature: "माउस — ↑↓ इंडेक्स बदलें", free: "✓", plus: "✓" },
                    { feature: "Ctrl+1~9 इंडेक्स जंप", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "edit",
                title: "संपादन और सामग्री",
                image: "screenshots/scene-2.svg",
                rows: [
                    { feature: "Markdown · चेकबॉक्स", free: "✓", plus: "✓" },
                    { feature: "फ़ॉर्मेटिंग टूलबार", free: "✓", plus: "✓" },
                    { feature: "छवि सम्मिलित करें", free: "✓", plus: "✓" },
                    { feature: "प्रति मेमो छवियाँ", free: "1", plus: "5" },
                    { feature: "फ़ॉन्ट आकार", free: "—", plus: "✓" },
                    { feature: "छवि आकार (50–150%)", free: "—", plus: "✓" },
                    { feature: "कस्टम फ़ॉन्ट", free: "—", plus: "✓" }
                ]
            },
            {
                id: "plus",
                title: "Plus अनुकूलन",
                image: "screenshots/scene-3.svg",
                reverse: true,
                rows: [
                    { feature: "प्रति स्लॉट स्वतंत्र हैंडल", free: "—", plus: "✓" },
                    { feature: "मेमो की डिफ़ॉल्ट अपारदर्शिता", free: "—", plus: "✓" },
                    { feature: "प्रीसेट थीम", free: "✓", plus: "✓" },
                    { feature: "कस्टम पृष्ठभूमि और टेक्स्ट रंग", free: "—", plus: "✓" },
                    { feature: "निर्यात · JSON बैकअप", free: "—", plus: "✓" },
                    { feature: "कीमत", free: "मुफ़्त", plus: "$9.99" },
                    { feature: "डिवाइस", free: "—", plus: "अधिकतम 2" }
                ]
            }
        ],
        ar: [
            {
                id: "edge",
                title: "التطلع من حافة الشاشة",
                image: "screenshots/scene-1.svg",
                rows: [
                    { feature: "مقبض الحافة والملاحظات", free: "✓", plus: "✓" },
                    { feature: "عدد الفهارس (الفتحات)", free: "3", plus: "10" },
                    { feature: "موضع المقبض", free: "3 تتحرك معًا", plus: "مستقل لكل فتحة" },
                    { feature: "وضع PEEK / ICE", free: "✓", plus: "✓" },
                    { feature: "تأخير الطي (0.25 ثانية)", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "hint",
                title: "ملاحظات تلميح ذكية",
                image: "screenshots/scene-2.svg",
                reverse: true,
                rows: [
                    { feature: "شاشة واحدة / مزدوجة", free: "✓", plus: "✓" },
                    { feature: "اختيار الشاشة المعروضة", free: "✓", plus: "✓" },
                    { feature: "نسبة الملاحظة 1:1 / 3:4", free: "✓", plus: "✓" },
                    { feature: "اختصار — تبديل آخر ملاحظة", free: "✓", plus: "✓" },
                    { feature: "اختصار — فتح الفهرس السابق/التالي", free: "✓", plus: "✓" },
                    { feature: "الفأرة — ↑↓ تبديل الفهرس", free: "✓", plus: "✓" },
                    { feature: "Ctrl+1~9 قفز إلى الفهرس", free: "✓", plus: "✓" }
                ]
            },
            {
                id: "edit",
                title: "التحرير والمحتوى",
                image: "screenshots/scene-2.svg",
                rows: [
                    { feature: "Markdown · مربعات اختيار", free: "✓", plus: "✓" },
                    { feature: "شريط التنسيق", free: "✓", plus: "✓" },
                    { feature: "إدراج صورة", free: "✓", plus: "✓" },
                    { feature: "صور لكل ملاحظة", free: "1", plus: "5" },
                    { feature: "حجم الخط", free: "—", plus: "✓" },
                    { feature: "تغيير حجم الصورة (50–150%)", free: "—", plus: "✓" },
                    { feature: "خطوط مخصصة", free: "—", plus: "✓" }
                ]
            },
            {
                id: "plus",
                title: "تخصيص Plus",
                image: "screenshots/scene-3.svg",
                reverse: true,
                rows: [
                    { feature: "مقبض مستقل لكل فتحة", free: "—", plus: "✓" },
                    { feature: "الشفافية الافتراضية للملاحظة", free: "—", plus: "✓" },
                    { feature: "سمات جاهزة", free: "✓", plus: "✓" },
                    { feature: "ألوان خلفية ونص مخصصة", free: "—", plus: "✓" },
                    { feature: "تصدير · نسخ احتياطي JSON", free: "—", plus: "✓" },
                    { feature: "السعر", free: "مجاني", plus: "$9.99" },
                    { feature: "الأجهزة", free: "—", plus: "حتى جهازين" }
                ]
            }
        ]
    };

    function getCompareSections(lang) {
        return SECTIONS_BY_LANG[lang] || SECTIONS_BY_LANG.en;
    }

    window.PeekomCompareLocales = {
        SECTIONS_BY_LANG: SECTIONS_BY_LANG,
        getCompareSections: getCompareSections
    };

    if (window.PeekomCompare) {
        window.PeekomCompare.SECTIONS_BY_LANG = SECTIONS_BY_LANG;
        window.PeekomCompare.getCompareSections = getCompareSections;
    }
})();
