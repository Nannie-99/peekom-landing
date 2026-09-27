/* Peekom landing — shared site logic */
(function () {
"use strict";

/* ── Download URLs ── */
const PLUS_TIERS = {
    single: {
        list: 6.99,
        sale: 5.99,
        link: "https://peekom.lemonsqueezy.com/checkout/buy/8b4a9b92-e815-43b9-916d-8072cff6c35a",
        devices: 1
    },
    double: {
        list: 12.99,
        sale: 9.99,
        link: "https://peekom.lemonsqueezy.com/checkout/buy/97457035-6963-4cc0-9348-63dbb738e6a8",
        devices: 2
    },
    family: {
        list: 29.99,
        sale: 19.99,
        link: "https://peekom.lemonsqueezy.com/checkout/buy/55e7b539-687f-4af0-b6bc-65196fcf9d18",
        devices: 5
    }
};

const LINKS = {
    win: "https://github.com/Nannie-99/peekom-landing/releases/latest/download/Peekom-Setup.exe",
    mac: "https://github.com/Nannie-99/peekom-landing/releases/latest/download/Peekom-macOS.dmg",
    buy: PLUS_TIERS.double.link,
    buySingle: PLUS_TIERS.single.link,
    buyDouble: PLUS_TIERS.double.link,
    buyFamily: PLUS_TIERS.family.link,
    reviewForm: "https://forms.gle/RZVnm6pCL7CRd5AY7"
};

const WIN_SETUP_FILENAME = "Peekom-Setup.exe";
const MAC_DMG_FILENAME = "Peekom-macOS.dmg";

const PRICING = { list: PLUS_TIERS.double.list, sale: PLUS_TIERS.double.sale, currency: "USD" };

const CONTACT_EMAIL = "hello.peekom@gmail.com";

const RELEASE_HISTORY = [
    {
        version: "1.2.4",
        date: "2026/09/27",
        latest: true,
        macAvailable: true,
        winUrl: "https://github.com/Nannie-99/peekom-landing/releases/download/v1.2.4/Peekom-Setup.exe",
        macUrl: "https://github.com/Nannie-99/peekom-landing/releases/download/v1.2.4/Peekom-macOS.dmg"
    },
    {
        version: "1.2.3",
        date: "2026/07/24",
        macAvailable: true,
        winUrl: "https://github.com/Nannie-99/peekom-landing/releases/download/v1.2.3/Peekom-Setup.exe",
        macUrl: "https://github.com/Nannie-99/peekom-landing/releases/download/v1.2.3/Peekom-macOS.dmg"
    },
    {
        version: "1.2.2",
        date: "2026/07/11",
        winUrl: "https://github.com/Nannie-99/peekom-landing/releases/download/v1.2.2/Peekom-Setup.exe",
        macUrl: "https://github.com/Nannie-99/peekom-landing/releases/download/v1.2.2/Peekom-macOS.dmg"
    },
    {
        version: "1.2.1",
        date: "2026/07/01",
        winUrl: "https://github.com/Nannie-99/peekom-landing/releases/download/v1.2.1/Peekom-Setup.exe",
        macUrl: "https://github.com/Nannie-99/peekom-landing/releases/download/v1.2.1/Peekom-macOS.dmg"
    },
    {
        version: "1.2.0",
        date: "2026/06/26",
        winUrl: "https://github.com/Nannie-99/peekom-landing/releases/download/v1.2.0/Peekom-Setup.exe",
        macUrl: "https://github.com/Nannie-99/peekom-landing/releases/download/v1.2.0/Peekom-macOS.dmg"
    }
];

const CHANGELOG_V124 = {
    ko: [
        "제거 시 시작 프로그램·바로가기 자동 정리 (메모는 기본 보존, 선택 시만 삭제)",
        "메모 크기 옵션 조정 (2×2·2×3·3×2 추가, 5×5·5×3 제거)",
        "메모를 외부로 복사할 때 배경·글자 크기·체크리스트 UI 누출 수정",
        "작업표시줄/Dock에서 숨기기 옵션 (트레이·메뉴바 아이콘은 항상 표시)",
        "작업표시줄·Dock 우클릭에 환경설정·도움말 추가 (Peekom 아이콘)",
        "듀얼 모니터「표시 모니터 고정」왼쪽 모니터 위치 오류 수정",
        "표시 위치: 오른쪽(무료)·왼쪽·위쪽(Plus), 아래쪽 제거",
        "위쪽 표시 시 가장자리 12등분·메모 크기 선택 제한, 손잡이 위치 유지 개선",
        "서식바가 인덱스에 가리지 않도록 여백 조정, 작은 메모에서 빼꼼/얼음 점 표시",
        "이미지 넣기 슬라이더 기본값을 가운데로 (더 작게·크게 조절 가능)",
        "macOS: 자동 실행·Dock 메뉴·완전 제거 흐름 개선"
    ],
    en: [
        "Uninstall clears startup entries and shortcuts (memos kept by default; optional full wipe)",
        "Memo sizes: added 2×2 / 2×3 / 3×2; removed 5×5 / 5×3",
        "Fixed background/font-size/checklist UI leaking when copying memos outward",
        "Hide from taskbar/Dock option (tray/menu bar icon always shown)",
        "Settings and Help on taskbar Jump List and Dock menu (Peekom icons)",
        "Fixed dual-monitor attach when the left display is selected",
        "Panel edges: right (free), left & top (Plus); bottom removed",
        "Top edge uses 12 position slots with size limits; handle positions preserved better",
        "Format bar spacing so index handles don’t cover controls; compact peek/ice dot on small memos",
        "Image staging scale slider defaults to the middle (can go smaller or larger)",
        "macOS: improved login item, Dock menu, and uninstall flow"
    ]
};

const CHANGELOG_V123 = {
    ko: [
        "Peekom Plus: 인덱스에 이미지를 여러 장 넣은 뒤 재부팅해도 이미지가 유지되도록 수정",
        "Peekom Plus: 체크리스트 취소선 켜기/끄기 추가",
        "글자 크기 조절 시 텍스트 색상이 저장되지 않던 오류 개선",
        "설정 변경이 재실행·재부팅 후에도 더 안정적으로 유지되도록 개선",
        "첫 줄 텍스트 정렬이 어긋나던 문제 수정",
        "macOS: 메뉴 막대 아이콘·Dock 아이콘 표시 개선",
        "macOS: 시스템 글꼴 목록·고급 색상 선택 사용성 개선",
        "macOS 정식 배포 (Universal: Intel · Apple Silicon)"
    ],
    en: [
        "Peekom Plus: Fixed multi-image memos losing images after reboot",
        "Peekom Plus: Checklist strikethrough on/off",
        "Fixed text color not saving when changing font size",
        "Settings now persist more reliably across relaunch/reboot",
        "Fixed first-line text alignment issues",
        "macOS: Improved menu bar and Dock icon appearance",
        "macOS: Better system font list and advanced color picker",
        "macOS signed & notarized Universal release (Intel · Apple Silicon)"
    ]
};

const CHANGELOG_V122 = {
    ko: [
        "체크리스트 기능 추가 (Peekom Plus)",
        "맞춤법 검사 켜기/끄기 (설정, 기본값: 끄기)",
        "여러 문단 블록 선택 시 정렬 일괄 적용",
        "붙여넣기 시 배경색·글자색 제거",
        "커서 위치 유지 및 메모 재오픈 시 복원",
        "표시 모니터 고정 설정 유지 개선 (Plus)",
        "바탕화면 바로가기 삭제 후 재생성 방지",
        "설정 공통 탭 UI 개선 (초기화 버튼, 맞춤법 안내)"
    ],
    en: [
        "Checklist feature (Peekom Plus)",
        "Spell check on/off toggle (Settings, default: off)",
        "Align all block-selected paragraphs at once",
        "Paste strips background and text color",
        "Cursor position preserved when typing and reopening memos",
        "Fixed display monitor setting persists after reboot (Plus)",
        "Desktop shortcut no longer recreates after deletion",
        "Settings Common tab UI updates (Reset button, spell check hint)"
    ],
    ja: [
        "チェックリスト機能追加（Peekom Plus）",
        "スペルチェックのオン/オフ（設定、既定：オフ）",
        "複数段落のブロック選択時に一括配置",
        "貼り付け時に背景色・文字色を除去",
        "カーソル位置の維持とメモ再オープン時の復元",
        "表示モニター固定設定の再起動後も維持（Plus）",
        "デスクトップショートカット削除後の再作成を防止",
        "設定の共通タブUI改善（リセットボタン、スペルチェック案内）"
    ],
    "zh-CN": [
        "新增清单功能（Peekom Plus）",
        "拼写检查开关（设置，默认：关闭）",
        "多段落块选时批量对齐",
        "粘贴时移除背景色和文字颜色",
        "保持光标位置，重新打开备忘录时恢复",
        "固定显示器设置在重启后保持（Plus）",
        "删除桌面快捷方式后不再自动重建",
        "设置通用选项卡 UI 改进（重置按钮、拼写检查说明）"
    ],
    "zh-TW": [
        "新增清單功能（Peekom Plus）",
        "拼寫檢查開關（設定，預設：關閉）",
        "多段落區塊選取時批次對齊",
        "貼上時移除背景色和文字顏色",
        "保持游標位置，重新開啟備忘錄時還原",
        "固定顯示器設定在重啟後保持（Plus）",
        "刪除桌面捷徑後不再自動重建",
        "設定通用分頁 UI 改進（重設按鈕、拼寫檢查說明）"
    ],
    es: [
        "Función de lista de tareas (Peekom Plus)",
        "Activar/desactivar corrector ortográfico (Ajustes, predeterminado: desactivado)",
        "Alinear todos los párrafos seleccionados en bloque",
        "Al pegar se eliminan color de fondo y de texto",
        "Posición del cursor conservada al escribir y al reabrir notas",
        "El monitor fijo se mantiene tras reiniciar (Plus)",
        "El acceso directo del escritorio ya no se recrea al eliminarlo",
        "Mejoras en la pestaña Común de Ajustes (botón Restablecer, aviso de ortografía)"
    ],
    fr: [
        "Fonction liste de contrôle (Peekom Plus)",
        "Activation/désactivation de la vérification orthographique (Réglages, par défaut : désactivé)",
        "Alignement groupé des paragraphes sélectionnés en bloc",
        "Suppression des couleurs de fond et de texte lors du collage",
        "Position du curseur conservée à la saisie et à la réouverture des notes",
        "Le moniteur fixe est conservé après redémarrage (Plus)",
        "Le raccourci bureau ne se recrée plus après suppression",
        "Améliorations de l'onglet Commun (bouton Réinitialiser, aide orthographe)"
    ],
    de: [
        "Checklisten-Funktion (Peekom Plus)",
        "Rechtschreibprüfung ein/aus (Einstellungen, Standard: aus)",
        "Ausrichtung aller blockweise ausgewählten Absätze",
        "Hintergrund- und Textfarbe beim Einfügen entfernen",
        "Cursorposition beim Tippen und erneuten Öffnen beibehalten",
        "Fester Monitor bleibt nach Neustart erhalten (Plus)",
        "Desktop-Verknüpfung wird nach Löschen nicht mehr neu erstellt",
        "Verbesserungen im Tab „Allgemein“ (Zurücksetzen, Rechtschreibhinweis)"
    ],
    pt: [
        "Função de lista de tarefas (Peekom Plus)",
        "Ativar/desativar verificação ortográfica (Configurações, padrão: desativado)",
        "Alinhar todos os parágrafos selecionados em bloco",
        "Colar remove cor de fundo e de texto",
        "Posição do cursor mantida ao digitar e ao reabrir notas",
        "Monitor fixo permanece após reinício (Plus)",
        "Atalho da área de trabalho não é mais recriado após exclusão",
        "Melhorias na aba Comum (botão Redefinir, dica de ortografia)"
    ],
    it: [
        "Funzione checklist (Peekom Plus)",
        "Attivazione/disattivazione controllo ortografico (Impostazioni, predefinito: disattivo)",
        "Allineamento in blocco di più paragrafi selezionati",
        "Incolla rimuove colore di sfondo e del testo",
        "Posizione del cursore mantenuta durante la digitazione e alla riapertura",
        "Monitor fisso mantenuto dopo il riavvio (Plus)",
        "Collegamento desktop non viene più ricreato dopo l'eliminazione",
        "Miglioramenti scheda Comune (pulsante Reimposta, nota ortografia)"
    ],
    ru: [
        "Функция чек-листа (Peekom Plus)",
        "Вкл./выкл. проверки орфографии (Настройки, по умолчанию: выкл.)",
        "Выравнивание всех выбранных блоком абзацев",
        "При вставке удаляются цвет фона и текста",
        "Сохранение позиции курсора при наборе и повторном открытии",
        "Закреплённый монитор сохраняется после перезагрузки (Plus)",
        "Ярлык на рабочем столе больше не воссоздаётся после удаления",
        "Улучшения вкладки «Общие» (кнопка сброса, подсказка орфографии)"
    ],
    vi: [
        "Tính năng checklist (Peekom Plus)",
        "Bật/tắt kiểm tra chính tả (Cài đặt, mặc định: tắt)",
        "Căn chỉnh tất cả đoạn văn được chọn theo khối",
        "Dán loại bỏ màu nền và màu chữ",
        "Giữ vị trí con trỏ khi gõ và khi mở lại ghi chú",
        "Màn hình cố định được giữ sau khi khởi động lại (Plus)",
        "Lối tắt màn hình nền không còn được tạo lại sau khi xóa",
        "Cải thiện tab Chung (nút Đặt lại, gợi ý chính tả)"
    ],
    th: [
        "ฟีเจอร์เช็กลิสต์ (Peekom Plus)",
        "เปิด/ปิดตรวจสอบการสะกด (การตั้งค่า ค่าเริ่มต้น: ปิด)",
        "จัดแนวย่อหน้าที่เลือกเป็นบล็อกพร้อมกัน",
        "วางข้อความลบสีพื้นหลังและสีตัวอักษร",
        "คงตำแหน่งเคอร์เซอร์เมื่อพิมพ์และเปิดโน้ตใหม่",
        "จอที่กำหนดคงอยู่หลังรีสตาร์ท (Plus)",
        "ทางลัดเดสก์ท็อปไม่ถูกสร้างใหม่หลังลบ",
        "ปรับปรุงแท็บทั่วไป (ปุ่มรีเซ็ต คำอธิบายสะกด)"
    ],
    id: [
        "Fitur checklist (Peekom Plus)",
        "Aktif/nonaktif pemeriksaan ejaan (Pengaturan, default: mati)",
        "Sejajarkan semua paragraf yang dipilih blok",
        "Tempel menghapus warna latar dan teks",
        "Posisi kursor dipertahankan saat mengetik dan membuka ulang memo",
        "Monitor tetap bertahan setelah reboot (Plus)",
        "Pintasan desktop tidak dibuat ulang setelah dihapus",
        "Perbaikan tab Umum (tombol Atur ulang, petunjuk ejaan)"
    ],
    hi: [
        "चेकलिस्ट सुविधा (Peekom Plus)",
        "वर्तनी जाँच चालू/बंद (सेटिंग्स, डिफ़ॉल्ट: बंद)",
        "ब्लॉक चयनित सभी अनुच्छेदों को एक साथ संरेखित करें",
        "पेस्ट पर पृष्ठभूमि और टेक्स्ट रंग हटाएँ",
        "टाइप करते और मेमो दोबारा खोलते समय कर्सर स्थिति बनाए रखें",
        "तय मॉनिटर रीबूट के बाद भी बना रहे (Plus)",
        "डेस्कटॉप शॉर्टकट हटाने के बाद दोबारा नहीं बनता",
        "सामान्य टैब UI सुधार (रीसेट बटन, वर्तनी संकेत)"
    ],
    ar: [
        "ميزة قائمة المهام (Peekom Plus)",
        "تشغيل/إيقاف التدقيق الإملائي (الإعدادات، الافتراضي: إيقاف)",
        "محاذاة جميع الفقرات المحددة ككتلة",
        "اللصق يزيل لون الخلفية ولون النص",
        "الحفاظ على موضع المؤشر عند الكتابة وإعادة فتح الملاحظة",
        "الشاشة الثابتة تبقى بعد إعادة التشغيل (Plus)",
        "اختصار سطح المكتب لا يُعاد إنشاؤه بعد الحذف",
        "تحسينات تبويب عام (زر إعادة التعيين، تلميح الإملاء)"
    ]
};

const CHANGELOG_V121 = {
    ko: [
        "단축키 ‘위/아래 메모 열기’가 손잡이 위치 순서대로 동작하도록 수정",
        "바로가기 더블클릭으로 설정창 열기 (앱이 꺼져 있으면 메모·설정 함께, 켜져 있으면 설정만 추가)",
        "Windows 시작 시 자동 실행 안정성 개선 (Plus 포함)"
    ],
    en: [
        "Up/Down memo shortcuts now follow handle position order",
        "Double-click the shortcut to open Settings (memo + settings when closed, settings only when running)",
        "More reliable launch-at-startup on Windows (including Plus)"
    ],
    ja: [
        "「上/下でメモを開く」ショートカットがハンドル位置の順序に従うよう修正",
        "ショートカットのダブルクリックで設定を開く（終了時はメモと設定、起動中は設定のみ）",
        "Windows 起動時の自動実行の安定性を改善（Plus 含む）"
    ],
    "zh-CN": [
        "“上/下打开备忘录”快捷键现按手柄位置顺序切换",
        "双击快捷方式打开设置（应用关闭时同时打开备忘录与设置，运行中仅打开设置）",
        "改进 Windows 开机自启动的稳定性（含 Plus）"
    ],
    "zh-TW": [
        "「上/下開啟備忘錄」快捷鍵改為依手柄位置順序切換",
        "雙擊捷徑開啟設定（應用程式關閉時同時開啟備忘錄與設定，執行中僅開啟設定）",
        "改善 Windows 開機自動啟動的穩定性（含 Plus）"
    ],
    es: [
        "Los atajos arriba/abajo siguen el orden de posición del mango",
        "Doble clic en el acceso directo abre Ajustes (nota + ajustes si está cerrado; solo ajustes si está en ejecución)",
        "Inicio automático en Windows más fiable (incluido Plus)"
    ],
    fr: [
        "Les raccourcis haut/bas suivent l’ordre des positions du poignée",
        "Double-clic sur le raccourci pour ouvrir Réglages (mémo + réglages si fermé ; réglages seuls si l’app tourne)",
        "Démarrage automatique Windows plus fiable (Plus inclus)"
    ],
    de: [
        "Auf/Ab-Shortcuts folgen jetzt der Griff-Positionsreihenfolge",
        "Doppelklick auf Verknüpfung öffnet Einstellungen (Notiz + Einstellungen wenn geschlossen; nur Einstellungen wenn aktiv)",
        "Zuverlässigerer Autostart unter Windows (inkl. Plus)"
    ],
    pt: [
        "Atalhos cima/baixo seguem a ordem de posição do indicador",
        "Duplo clique no atalho abre Configurações (nota + configurações se fechado; só configurações se em execução)",
        "Inicialização automática no Windows mais confiável (inclui Plus)"
    ],
    it: [
        "Le scorciatoie su/giù seguono l’ordine di posizione della maniglia",
        "Doppio clic sul collegamento apre Impostazioni (nota + impostazioni se chiuso; solo impostazioni se in esecuzione)",
        "Avvio automatico su Windows più affidabile (Plus incluso)"
    ],
    ru: [
        "Горячие клавиши вверх/вниз следуют порядку позиций ручки",
        "Двойной щелчок по ярлыку открывает настройки (заметка + настройки если закрыто; только настройки если запущено)",
        "Более надёжный автозапуск в Windows (включая Plus)"
    ],
    vi: [
        "Phím tắt lên/xuống theo thứ tự vị trí tay cầm",
        "Nhấp đúp lối tắt mở Cài đặt (ghi chú + cài đặt khi đóng; chỉ cài đặt khi đang chạy)",
        "Tự khởi động Windows ổn định hơn (gồm Plus)"
    ],
    th: [
        "ทางลัดขึ้น/ลงตามลำดับตำแหน่งที่จับ",
        "ดับเบิลคลิกทางลัดเปิดการตั้งค่า (โน้ต + การตั้งค่าเมื่อปิดแอป; เฉพาะการตั้งค่าเมื่อกำลังทำงาน)",
        "เริ่มอัตโนมัติบน Windows เสถียรขึ้น (รวม Plus)"
    ],
    id: [
        "Pintasan atas/bawah mengikuti urutan posisi pegangan",
        "Klik ganda pintasan membuka Pengaturan (memo + pengaturan jika tertutup; hanya pengaturan jika berjalan)",
        "Peluncuran otomatis Windows lebih andal (termasuk Plus)"
    ],
    hi: [
        "ऊपर/नीचे शॉर्टकट अब हैंडल स्थिति क्रम का पालन करते हैं",
        "शॉर्टकट पर डबल-क्लिक से सेटिंग्स खुलती हैं (बंद होने पर मेमो + सेटिंग्स; चलने पर केवल सेटिंग्स)",
        "Windows पर ऑटो-स्टार्ट अधिक विश्वसनीय (Plus सहित)"
    ],
    ar: [
        "اختصارات أعلى/أسفل تتبع ترتيب موضع المقبض",
        "النقر المزدوج على الاختصار يفتح الإعدادات (ملاحظة + إعدادات عند الإغلاق؛ إعدادات فقط عند التشغيل)",
        "تشغيل تلقائي أوثق عند بدء Windows (يشمل Plus)"
    ]
};

const CHANGELOG_V120 = {
    ko: [
        "빼꼼 인덱스가 Peekom으로 돌아왔습니다",
        "가장자리 손잡이·얼음 모드·듀얼 모니터 지원",
        "서식바: 글자색·목록(점/네모/숫자) 드롭다운, 순서 개편",
        "무료 메모당 이미지 1장 · Plus 5장, 크기 조절·비율 자르기",
        "Peekom Plus: 10슬롯 독립 배치, 커스텀 테마·글꼴·불투명도, 왼쪽 패널, 보내기·JSON 백업"
    ],
    en: [
        "Peekom rebrand from legacy edge memo app",
        "Edge handle, Ice mode, dual monitor support",
        "Toolbar: color & list dropdowns, reordered controls",
        "Free: 1 image per memo · Plus: 5, resize & aspect crop",
        "Peekom Plus: 10 slots, custom theme, left panel, export & JSON backup"
    ],
    ja: [
        "レガシーエッジメモアプリから Peekom へリブランド",
        "端ハンドル・ICE モード・デュアルモニター対応",
        "書式バー：文字色・リスト（箇条書き/番号）ドロップダウン、並び替え",
        "無料：メモあたり画像1枚 · Plus：5枚、サイズ調整・比率トリミング",
        "Peekom Plus：10スロット独立配置、カスタムテーマ・フォント・不透明度、左パネル、エクスポート・JSONバックアップ"
    ],
    "zh-CN": [
        "从旧版边缘备忘录应用更名为 Peekom",
        "边缘手柄、ICE 模式、双显示器支持",
        "格式工具栏：颜色与列表下拉菜单、控件重新排序",
        "免费每条备忘录 1 张图片 · Plus 5 张，可缩放与裁剪比例",
        "Peekom Plus：10 个槽位、自定义主题、左侧面板、导出与 JSON 备份"
    ],
    "zh-TW": [
        "舊版邊緣備忘錄應用程式更名為 Peekom",
        "邊緣手柄、ICE 模式、雙螢幕支援",
        "格式工具列：顏色與清單下拉選單、控制項重新排序",
        "免費每則備忘錄 1 張圖片 · Plus 5 張，可縮放與裁剪比例",
        "Peekom Plus：10 個槽位、自訂主題、左側面板、匯出與 JSON 備份"
    ],
    es: [
        "Peekom: nueva marca del antiguo app de notas en el borde",
        "Mango en el borde, modo ICE, soporte de doble monitor",
        "Barra de formato: menús de color y listas, controles reordenados",
        "Gratis: 1 imagen por nota · Plus: 5, redimensionar y recortar proporción",
        "Peekom Plus: 10 ranuras, tema personalizado, panel izquierdo, exportar y copia JSON"
    ],
    fr: [
        "Peekom : nouveau nom de l’ancienne app mémo au bord d’écran",
        "Poignée au bord, mode ICE, support double écran",
        "Barre de formatage : menus couleur et listes, contrôles réorganisés",
        "Gratuit : 1 image par note · Plus : 5, redimensionnement et recadrage",
        "Peekom Plus : 10 emplacements, thème personnalisé, panneau gauche, export et sauvegarde JSON"
    ],
    de: [
        "Peekom: Rebrand der früheren Rand-Notiz-App",
        "Rand-Griff, ICE-Modus, Dual-Monitor-Unterstützung",
        "Formatleiste: Farb- und Listen-Dropdowns, neu angeordnete Steuerelemente",
        "Kostenlos: 1 Bild pro Notiz · Plus: 5, Größe & Seitenverhältnis zuschneiden",
        "Peekom Plus: 10 Slots, eigenes Theme, linkes Panel, Export & JSON-Backup"
    ],
    pt: [
        "Peekom: nova marca do antigo app de notas na borda",
        "Indicador na borda, modo ICE, suporte a dois monitores",
        "Barra de formatação: menus de cor e listas, controles reordenados",
        "Grátis: 1 imagem por nota · Plus: 5, redimensionar e cortar proporção",
        "Peekom Plus: 10 slots, tema personalizado, painel esquerdo, exportar e backup JSON"
    ],
    it: [
        "Peekom: rebrand dall’app memo sul bordo",
        "Maniglia sul bordo, modalità ICE, supporto doppio monitor",
        "Barra formattazione: menu colore e elenchi, controlli riordinati",
        "Gratis: 1 immagine per nota · Plus: 5, ridimensiona e ritaglia proporzione",
        "Peekom Plus: 10 slot, tema personalizzato, pannello sinistro, esporta e backup JSON"
    ],
    ru: [
        "Peekom: ребрендинг прежнего приложения заметок у края экрана",
        "Ручка у края, режим ICE, поддержка двух мониторов",
        "Панель форматирования: выпадающие меню цвета и списков, новый порядок элементов",
        "Бесплатно: 1 изображение на заметку · Plus: 5, изменение размера и обрезка",
        "Peekom Plus: 10 слотов, своя тема, левая панель, экспорт и JSON-резервная копия"
    ],
    vi: [
        "Peekom: đổi tên từ ứng dụng ghi chú cạnh màn hình cũ",
        "Tay cầm cạnh màn hình, chế độ ICE, hỗ trợ hai màn hình",
        "Thanh định dạng: menu màu & danh sách, sắp xếp lại điều khiển",
        "Miễn phí: 1 ảnh/ghi chú · Plus: 5, đổi kích thước & cắt tỷ lệ",
        "Peekom Plus: 10 slot, chủ đề tùy chỉnh, bảng trái, xuất & sao lưu JSON"
    ],
    th: [
        "Peekom: เปลี่ยนชื่อจากแอปโน้ตขอบจอเดิม",
        "ที่จับขอบจอ โหมด ICE รองรับจอคู่",
        "แถบจัดรูปแบบ: เมนูสีและรายการ จัดลำดับใหม่",
        "ฟรี: 1 รูปต่อโน้ต · Plus: 5 ปรับขนาดและครอปสัดส่วน",
        "Peekom Plus: 10 สล็อต ธีมกำหนดเอง แผงซ้าย ส่งออกและสำรอง JSON"
    ],
    id: [
        "Peekom: rebrand dari app memo tepi layar lama",
        "Pegangan tepi, mode ICE, dukungan dual monitor",
        "Bilah format: dropdown warna & daftar, kontrol diurutkan ulang",
        "Gratis: 1 gambar per memo · Plus: 5, ubah ukuran & crop proporsi",
        "Peekom Plus: 10 slot, tema kustom, panel kiri, ekspor & cadangan JSON"
    ],
    hi: [
        "Peekom: पुराने एज मेमो ऐप से रीब्रांड",
        "किनारे का हैंडल, ICE मोड, डुअल मॉनिटर समर्थन",
        "फ़ॉर्मेटिंग टूलबार: रंग और सूची ड्रॉपडाउन, नियंत्रण पुनर्क्रमित",
        "मुफ़्त: प्रति मेमो 1 छवि · Plus: 5, आकार बदलें और अनुपात क्रॉप",
        "Peekom Plus: 10 स्लॉट, कस्टम थीम, बायाँ पैनल, निर्यात और JSON बैकअप"
    ],
    ar: [
        "Peekom: إعادة تسمية من تطبيق الملاحظات القديم على حافة الشاشة",
        "مقبض الحافة، وضع ICE، دعم شاشتين",
        "شريط التنسيق: قوائم اللون والقوائم، إعادة ترتيب عناصر التحكم",
        "مجاني: صورة واحدة لكل ملاحظة · Plus: 5، تغيير الحجم وقص النسبة",
        "Peekom Plus: 10 فتحات، سمة مخصصة، لوحة يسار، تصدير ونسخ JSON احتياطي"
    ]
};

function buildChangelogForLang(lang) {
    const v124 = CHANGELOG_V124[lang] || CHANGELOG_V124.en;
    const v123 = CHANGELOG_V123[lang] || CHANGELOG_V123.en;
    const v122 = CHANGELOG_V122[lang] || CHANGELOG_V122.en;
    const v121 = CHANGELOG_V121[lang] || CHANGELOG_V121.en;
    const v120 = CHANGELOG_V120[lang] || CHANGELOG_V120.en;
    return [
        { version: "1.2.4", date: "2026.09.27", items: v124 },
        { version: "1.2.3", date: "2026.07.24", items: v123 },
        { version: "1.2.2", date: "2026.07.11", items: v122 },
        { version: "1.2.1", date: "2026.07.01", items: v121 },
        { version: "1.2.0", date: "2026.06.26", items: v120 }
    ];
}

const CHANGELOG = {
    ko: buildChangelogForLang("ko"),
    en: buildChangelogForLang("en"),
    ja: buildChangelogForLang("ja"),
    "zh-CN": buildChangelogForLang("zh-CN"),
    "zh-TW": buildChangelogForLang("zh-TW"),
    es: buildChangelogForLang("es"),
    fr: buildChangelogForLang("fr"),
    de: buildChangelogForLang("de"),
    pt: buildChangelogForLang("pt"),
    it: buildChangelogForLang("it"),
    ru: buildChangelogForLang("ru"),
    vi: buildChangelogForLang("vi"),
    th: buildChangelogForLang("th"),
    id: buildChangelogForLang("id"),
    hi: buildChangelogForLang("hi"),
    ar: buildChangelogForLang("ar")
};

function getPromoDiscountPct() {
    return getTierDiscountPct("double");
}

function getTierDiscountPct(tier) {
    const t = PLUS_TIERS[tier];
    if (!t) return 0;
    return Math.round((1 - t.sale / t.list) * 100);
}

function getPlusTierDomIds(prefix, tier) {
    if (tier === "single") {
        return {
            buy: prefix + "PlusBuyBtn",
            title: prefix + "PlusCardTitle",
            badge: prefix + "PlusCardBadge",
            os: prefix + "PlusCardOs",
            meta: prefix + "PlusCardMeta",
            pct: prefix + "PlusPct",
            was: prefix + "PlusWas",
            now: prefix + "PlusNow",
            label: prefix + "PlusBuyBtnLabel"
        };
    }
    const cap = tier.charAt(0).toUpperCase() + tier.slice(1);
    return {
        buy: prefix + "Plus" + cap + "BuyBtn",
        title: prefix + "Plus" + cap + "CardTitle",
        badge: prefix + "Plus" + cap + "CardBadge",
        os: prefix + "Plus" + cap + "CardOs",
        meta: prefix + "Plus" + cap + "CardMeta",
        pct: prefix + "Plus" + cap + "Pct",
        was: prefix + "Plus" + cap + "Was",
        now: prefix + "Plus" + cap + "Now",
        label: prefix + "Plus" + cap + "BuyBtnLabel"
    };
}

function getPlusTierLocaleKeys(tier) {
    const cap = tier.charAt(0).toUpperCase() + tier.slice(1);
    return {
        title: "heroPlus" + cap + "CardTitle",
        meta: "heroPlus" + cap + "CardMeta"
    };
}

function updatePlusTierCards(prefix, d) {
    ["single", "double", "family"].forEach(function (tier) {
        const ids = getPlusTierDomIds(prefix, tier);
        const pricing = PLUS_TIERS[tier];
        const localeKeys = getPlusTierLocaleKeys(tier);
        const buyLabel = d.heroPlusBuyBtn || d.compareCta || "구입하기";
        const osLabel = d.heroPlusCardOsCompat || "Windows / Mac 호환";
        const badgeLabel = d.heroPlusCardBadge || "PAID";
        const titleFallback = "Peekom Plus - " + tier.charAt(0).toUpperCase() + tier.slice(1);
        const metaFallback = "1회 구매 · " + pricing.devices + "대 기기 · 영구 사용";

        if (!document.getElementById(ids.buy)) return;

        setText(ids.pct, getTierDiscountPct(tier) + "% OFF");
        setText(ids.was, "$" + pricing.list.toFixed(2));
        setText(ids.now, "$" + pricing.sale.toFixed(2));
        setText(ids.title, d[localeKeys.title] || titleFallback);
        setText(ids.badge, badgeLabel);
        setText(ids.os, osLabel);
        setText(ids.meta, d[localeKeys.meta] || metaFallback);
        setText(ids.label, buyLabel);

        const card = document.getElementById(ids.buy);
        if (card) card.setAttribute("aria-label", buyLabel);
    });
}

function buildPromoTagHtml(d, opts) {
    opts = opts || {};
    const variant = opts.variant || "default";
    const showHead = opts.showHead !== false;
    const pct = getPromoDiscountPct();
    const vat = d.promoVat || "(VAT 별도)";
    const label = (d.promoLaunchLabel || "출시 기념\n프로모션가\n적용 중").replace(/\\n/g, "\n");
    const note = opts.showNote === false ? "" : (d.promoNote || "");
    const noteInline = note && opts.noteInline !== false;
    const sectionTitle = d.promoSectionTitle || "Peekom Plus(유료)";
    const tagClass = variant === "compare" ? " promo-tag--compare" : "";
    const headHtml = showHead
        ? (
            '<div class="promo-section__head">' +
                '<span class="promo-section__line" aria-hidden="true"></span>' +
                '<span class="promo-section__title">' + sectionTitle + '</span>' +
                '<span class="promo-section__line" aria-hidden="true"></span>' +
            '</div>'
        )
        : "";
    const sectionClass = variant === "compare" ? "promo-section promo-section--compare" : "promo-section";
    const labelHtml = label
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\n/g, "<br>");
    const pctRowHtml =
        '<div class="promo-tag__pct-row">' +
            '<span class="promo-tag__pct">' + pct + '% OFF</span>' +
            (noteInline && note ? '<span class="promo-tag__note-inline' + (variant === "compare" ? " promo-tag__note-inline--alert" : "") + '">' + note + "</span>" : "") +
        "</div>";
    return (
        '<div class="' + sectionClass + '">' +
            headHtml +
            '<div class="promo-tag' + tagClass + '">' +
                '<div class="promo-tag__card">' +
                    '<div class="promo-tag__prices">' +
                        pctRowHtml +
                        '<div class="promo-tag__price-row">' +
                            '<span class="pricing-was">$' + PRICING.list.toFixed(2) + '</span>' +
                            '<span class="promo-tag__now">$' + PRICING.sale.toFixed(2) + '</span>' +
                        '</div>' +
                        '<span class="pricing-vat">' + vat + '</span>' +
                    '</div>' +
                    '<span class="promo-tag__label">' + labelHtml + '</span>' +
                '</div>' +
                (note && !noteInline ? '<p class="promo-tag__note">' + note + '</p>' : '') +
            '</div>' +
        '</div>'
    );
}

function buildGuidePlusHtml(d) {
    const buyLink = LINKS.buy;
    const cta = d.compareCta || "Peekom Plus 구입";
    return (
        '<div class="guide-plus-steps">' +
            "<p>" + (d.guidePlusStep1 || "1. 아래 버튼에서 Peekom Plus를 구매합니다.") + "</p>" +
            '<p class="guide-plus-cta"><a href="' + buyLink + '" class="btn btn--buy btn--plus" target="_blank" rel="noopener">' + cta + "</a></p>" +
            "<p>" + (d.guidePlusStep2 || "2. 이메일로 받은 라이선스 키를 확인합니다.") + "</p>" +
            "<p>" + (d.guidePlusStep3 || "3. Peekom을 실행한 뒤 <strong>설정창</strong> 또는 <strong>설정</strong>에서 키를 입력합니다.") + "</p>" +
            "<p>" + (d.guidePlusStep4 || "4. Peekom Plus 활성화가 완료됩니다.") + "</p>" +
        "</div>"
    );
}

function buildPromoSectionHeadHtml(title) {
    return (
        '<div class="promo-section__head">' +
            '<span class="promo-section__line" aria-hidden="true"></span>' +
            '<span class="promo-section__title">' + title + '</span>' +
            '<span class="promo-section__line" aria-hidden="true"></span>' +
        '</div>'
    );
}

function updateOfferCardSet(d, ids) {
    if (!document.getElementById(ids.winBtn)) return;
    const downloadLabel = d.heroFreeDownloadLabel || "다운로드";
    setText(ids.winTitle, d.heroFreeCardTitle || "Peekom");
    if (ids.winBadge) setText(ids.winBadge, d.heroFreeCardBadge || "FREE");
    setText(ids.winMeta, d.heroWinCardMeta || "Windows 10 · 11 (64-bit)");
    setText(ids.winBtnLabel, downloadLabel);
    const winCard = document.getElementById(ids.winBtn);
    if (winCard) winCard.setAttribute("aria-label", downloadLabel);
    setText(ids.macFreeTitle, d.heroMacFreeCardTitle || d.heroFreeCardTitle || "Peekom");
    if (ids.macFreeBadge) setText(ids.macFreeBadge, d.heroMacFreeCardBadge || d.heroFreeCardBadge || "FREE");
    setText(ids.macFreeMeta, d.heroMacFreeCardMeta || "macOS");
    setText(ids.macBtnLabel, downloadLabel);
    const macFreeCard = document.getElementById(ids.macBtn);
    if (macFreeCard) macFreeCard.setAttribute("aria-label", downloadLabel);
}

function updateHeroOfferCards(d) {
    updatePlusTierCards("hero", d);
    updatePlusTierCards("dl", d);
    updateOfferCardSet(d, {
        winBtn: "heroWinBtn",
        winTitle: "heroWinCardTitle",
        winBadge: "heroFreeCardBadge",
        winMeta: "heroWinCardMeta",
        winBtnLabel: "heroWinBtnLabel",
        macBtn: "heroMacBtn",
        macFreeTitle: "heroMacFreeCardTitle",
        macFreeBadge: "heroMacFreeCardBadge",
        macFreeMeta: "heroMacFreeCardMeta",
        macBtnLabel: "heroMacBtnLabel"
    });
    updateOfferCardSet(d, {
        winBtn: "dlWinBtn",
        winTitle: "dlWinCardTitle",
        winBadge: "dlFreeCardBadge",
        winMeta: "dlWinCardMeta",
        winBtnLabel: "dlWinBtnLabel",
        macBtn: "dlMacBtn",
        macFreeTitle: "dlMacFreeCardTitle",
        macFreeBadge: "dlMacFreeCardBadge",
        macFreeMeta: "dlMacFreeCardMeta",
        macBtnLabel: "dlMacBtnLabel"
    });
    setText("heroFreeCardTitle", d.heroFreeCardTitle || "Peekom");
}

function buildComparePricingBoxHtml(d) {
    const buyLink = LINKS.buy;
    const cta = d.compareCta || "Get Peekom Plus";
    return (
        '<div class="compare-pricing-layout">' +
            '<div class="compare-pricing-layout__main">' +
                buildPromoTagHtml(d, { variant: "compare", showHead: false, showNote: true, noteInline: true }) +
                '<p class="compare-pricing-extra">' + (d.comparePricingExtra || "") + "</p>" +
            "</div>" +
            '<div class="compare-pricing-layout__cta">' +
                '<a href="' + buyLink + '" class="btn btn--buy btn--plus compare-pricing-buy-btn" target="_blank" rel="noopener">' + cta + "</a>" +
            "</div>" +
        "</div>"
    );
}

function renderVersionHistory(d) {
    const host = document.getElementById("versionHistoryHost");
    if (!host) return;
    const latestLabel = d.versionLatest || "Latest";
    const winLabel = d.versionWin || "Setup (x64)";
    const macDownloadLabel = d.versionMac || "macOS";
    const macSoonLabel = d.versionMacSoon || "Coming soon";
    const rows = RELEASE_HISTORY.map(function (r) {
        const badge = r.latest ? ' <span class="badge-latest">' + latestLabel + '</span>' : "";
        const macCell = r.macAvailable
            ? '<td><span class="os-icon">Mac</span> <a href="' + r.macUrl + '" target="_blank" rel="noopener">' + macDownloadLabel + "</a></td>"
            : '<td><span class="version-na" title="' + macSoonLabel + '" aria-label="' + macSoonLabel + '">&#10007;</span></td>';
        return (
            "<tr>" +
                "<td><strong>v" + r.version + "</strong>" + badge + "</td>" +
                "<td>" + r.date + "</td>" +
                '<td><span class="os-icon">Win</span> <a href="' + r.winUrl + '" target="_blank" rel="noopener">' + winLabel + "</a></td>" +
                macCell +
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

const LANG_META = [
    { code: "ko", label: "한국어" },
    { code: "en", label: "English" },
    { code: "ja", label: "日本語" },
    { code: "zh-CN", label: "简体中文" },
    { code: "zh-TW", label: "繁體中文" },
    { code: "es", label: "Español" },
    { code: "fr", label: "Français" },
    { code: "de", label: "Deutsch" },
    { code: "pt", label: "Português" },
    { code: "it", label: "Italiano" },
    { code: "ru", label: "Русский" },
    { code: "vi", label: "Tiếng Việt" },
    { code: "th", label: "ไทย" },
    { code: "id", label: "Bahasa Indonesia" },
    { code: "hi", label: "हिन्दी" },
    { code: "ar", label: "العربية" }
];

const i18n = {
    ko: {
        navHome: "홈", navFeatures: "기능", navDownload: "다운로드", navFaq: "자주 묻는 질문", navHelp: "가이드", navContact: "연락",
        searchPlaceholder: "검색...",
        heroTitleMain: "Peekom",
        heroTagline: "빼꼼 인덱스가 <strong>Peekom</strong>으로 돌아왔습니다.<br>가볍고 빠르게—업무 흐름을 이어가세요.",
        heroPlusNote: '무료 앱 설치 후 설정에서 Peekom Plus로 업그레이드할 수 있습니다.<br><a href="/features/#compare">기능 표에서 무료·Plus 차이</a>를 확인하세요.',
        heroUpgradeNote: "무료 앱 설치 후 설정에서 Peekom Plus로 업그레이드할 수 있습니다.",
        heroFreeCompareNote: '<a href="/features/#compare">무료와 Plus 차이</a>를 확인하세요.',
        heroWinBtn: "Windows 다운로드", heroMacBtn: "macOS 다운로드",
        heroPlusBuyBtn: "구입하기",
        heroPlusSingleCardTitle: "Peekom Plus - Single",
        heroPlusDoubleCardTitle: "Peekom Plus - Double",
        heroPlusFamilyCardTitle: "Peekom Plus - Family",
        heroPlusCardBadge: "유료",
        heroPlusCardOsCompat: "Windows / Mac 호환",
        heroPlusSingleCardMeta: "1회 구매 · 1대 기기 · 영구 사용",
        heroPlusDoubleCardMeta: "1회 구매 · 2대 기기 · 영구 사용",
        heroPlusFamilyCardMeta: "1회 구매 · 5대 기기 · 영구 사용",
        heroFreeCardTitle: "Peekom",
        heroFreeCardBadge: "프리웨어",
        heroMacFreeCardBadge: "프리웨어",
        heroWinCardMeta: "Windows 10 · 11 (64-bit)",
        heroMacFreeCardMeta: "macOS (Universal)",
        heroFreeDownloadLabel: "다운로드",
        carouselCap1: "모니터 가장자리 손잡이",
        carouselCap2: "클릭·단축키로 메모 열기",
        carouselCap3: "얼음 모드 · 자동 접힘 딜레이",
        reviewBtnLabel: "후기 남기기",
        reviewEmpty: "첫 후기를 남겨주세요!",
        reviewAnonymous: "익명",
        detectWin: "현재 환경: <strong>Windows</strong> — Windows 버튼 권장",
        detectMac: "현재 환경: <strong>macOS</strong> — macOS 버튼 권장",
        detectGeneric: "운영체제를 자동으로 감지하지 못했습니다. 직접 선택해 주세요.",
        featuresTitle: "기능", featuresSub: "Peekom이 하는 일을 한눈에 확인할 수 있습니다.",
        compareTitle: "Peekom vs Peekom Plus", compareSub: "같은 앱 하나로 시작하고, Plus는 앱 안에서 잠금 해제합니다.",
        comparePricing: '<span class="pricing-was">$' + PLUS_TIERS.single.sale.toFixed(2) + '–$' + PLUS_TIERS.family.sale.toFixed(2) + '</span> <span class="pricing-vat">(VAT 별도)</span> · <span class="pricing-launch">출시 기념 가격</span> · 1회 구매 · 1~5대 기기(요금제별) · 소버전 업데이트 포함 · 30일 환불 (<a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>)',
        guidePlusP: "1) Lemon Squeezy에서 요금제 선택 후 구매 → 2) 이메일 라이선스 키 수신 → 3) Peekom 실행 → 잠금 UI 또는 설정에서 키 입력 → 4) Peekom Plus + plus.png로 전환. 30일 환불: <a href=\"mailto:" + CONTACT_EMAIL + "\">" + CONTACT_EMAIL + "</a>",
        dlSub: "Peekom 하나만 설치하시면 됩니다. Plus는 앱 안에서 업그레이드합니다.",
        purchaseSuccessTitle: "Peekom Plus 구매가 완료되었습니다!",
        purchaseSuccessLead: "아래 라이선스 키를 복사한 뒤, Peekom 앱에서 Plus를 활성화해 주세요.",
        purchaseSuccessKeyLabel: "라이선스 키",
        purchaseSuccessCopyBtn: "복사",
        purchaseSuccessCopied: "복사됨",
        purchaseSuccessStep1: "아래 <strong>Windows 다운로드</strong> 버튼으로 Peekom을 설치합니다.",
        purchaseSuccessStep2: "앱을 실행한 뒤 <strong>설정(⚙)</strong> 또는 Plus 잠금 화면에서 키를 붙여넣고 <strong>인증</strong>합니다.",
        purchaseSuccessStep3: "인증이 완료되면 앱 이름이 <strong>Peekom Plus</strong>로 바뀌고 유료 기능이 열립니다.",
        purchaseSuccessDownloadBtn: "Windows 앱 다운로드",
        purchaseSuccessEmailNote: "이 키는 구매 영수증 이메일에도 포함되어 있습니다.",
        dlWin: "Peekom Setup (Windows)", dlMac: "Peekom Setup (macOS)",
        dlPlusHint: 'Peekom Plus: Single <strong>$' + PLUS_TIERS.single.sale.toFixed(2) + '</strong> · Double <strong>$' + PLUS_TIERS.double.sale.toFixed(2) + '</strong> · Family <strong>$' + PLUS_TIERS.family.sale.toFixed(2) + '</strong> (VAT 별도) · <a href="' + LINKS.buyDouble + '" id="dlBuyLinkInner">Lemon Squeezy에서 구입</a> → 앱에서 라이선스 키 입력',
        featureGifPending: "데모 GIF 예정",
        compareNoLabel: "미지원",
        faqSub: "Peekom 사용 중 자주 묻는 내용입니다.",
        faqTitle: "자주 묻는 질문",
        faqGroupProductLabel: "제품·기능",
        faqGroupLicenseLabel: "라이선스",
        faqGroupInstallLabel: "설치",
        faqGroupTroubleshootLabel: "문제 해결",
        refundPolicyTitle: "Peekom Plus 환불 정책",
        refundPolicyBody:
            "<p>Peekom Plus의 결제와 환불은 공식 판매자(Merchant of Record)인 <strong>Lemon Squeezy</strong>를 통해 처리됩니다.</p>" +
            '<ul class="faq-refund-list">' +
            "<li><strong>신청 기간</strong> — 구입일로부터 <strong>30일 이내</strong>에 신청하신 건을 검토합니다.</li>" +
            "<li><strong>환불 대상</strong> — 아래에 해당하면 환불해 드립니다." +
            "<ul>" +
            "<li>앱이 정상적으로 실행·작동하지 않는 <strong>제품 결함</strong></li>" +
            "<li><strong>동일 주문의 중복 결제</strong></li>" +
            "</ul></li>" +
            "<li><strong>환불 대상이 아닌 경우</strong> — 아래는 환불해 드리지 않습니다." +
            "<ul>" +
            "<li><strong>단순 변심</strong> — 구매 후 마음이 바뀐 경우</li>" +
            "<li><strong>요금제 변경·선택 변경</strong> — Single ↔ Double·Family 등 요금제를 바꾸고 싶은 경우입니다. 차액만 내는 업그레이드는 제공하지 않습니다. 더 많은 기기가 필요하시면 상위 요금제를 <strong>새로 구매</strong>하셔야 하며, 기존 요금제가 자동으로 환불되거나 차액이 정산되지는 않습니다.</li>" +
            "<li><strong>라이선스를 이미 활성화(Activated)한 뒤의 환불</strong> — 여기서 활성화란 인증이 정상적으로 완료되어 해당 기기에서 Plus를 쓸 수 있는 상태로 등록된 것을 말합니다. 인증이 성공했다는 것은 제품이 정상 작동했다는 뜻이므로 <strong>제품 결함으로 보지 않습니다</strong>.</li>" +
            "<li><strong>이용 환경만이 원인인 경우</strong> — 회사·학교의 방화벽, 보안 프로그램, 인터넷이 연결되지 않는 폐쇄망, GitHub 다운로드 차단, <code>api.lemonsqueezy.com</code> 차단 등입니다. 특히 라이선스가 <strong>이미 활성화된 경우</strong>에는 환불 대상이 아닙니다.</li>" +
            "<li><strong>기기 대수 한도나 PC 교체에 따른 불편</strong> — 기기를 옮겨야 하신다면 <a href=\"/contact/\">문의</a>해 주세요. 기존 기기 비활성화를 도와드립니다.</li>" +
            "</ul></li>" +
            "</ul>" +
            "<p><strong>구매 전에 확인해 주세요 (인증·네트워크)</strong></p>" +
            '<ul class="faq-refund-list">' +
            "<li>Plus <strong>최초 인증</strong>에는 인터넷 연결과 <code>https://api.lemonsqueezy.com</code> 접속이 필요합니다.</li>" +
            "<li>일반 웹사이트가 열리더라도 이 주소만 차단되어 있으면 인증에 실패할 수 있습니다.</li>" +
            "<li>인터넷이 전혀 연결되지 않는 <strong>완전 폐쇄망</strong>에서만 쓰는 PC는 인증이 불가능할 수 있습니다.</li>" +
            "<li>설치 파일은 GitHub Releases에서 제공되므로, github.com이 차단된 환경에서는 다운로드가 되지 않을 수 있습니다.</li>" +
            "<li>회사 PC에서만 사용하실 계획이라면 구매 전에 위 항목을 먼저 확인해 보시기를 권해 드립니다.</li>" +
            "</ul>" +
            "<p><strong>이용 환경 때문에 쓰기 어려운 경우 — 검토 기준</strong></p>" +
            '<ul class="faq-refund-list">' +
            "<li>구입일로부터 <strong>30일 이내</strong>이고,</li>" +
            "<li>라이선스가 <strong>Inactive(활성화된 기기 0대)</strong> 상태이거나 제품 결함·중복 결제에 해당하며,</li>" +
            "<li>문의로 주문번호와 상황을 알려 주신 경우 — <strong>개별적으로 검토</strong>해 드립니다.</li>" +
            "<li>다만 라이선스를 <strong>이미 활성화한 상태</strong>에서 회사망 제한만이 이유라면, 원칙적으로 환불 대상이 아닙니다.</li>" +
            "</ul>" +
            "<p><strong>환불 시 라이선스와 절차</strong></p>" +
            '<ul class="faq-refund-list">' +
            "<li><strong>라이선스</strong> — 환불이 완료되면 Peekom Plus 라이선스 키가 비활성화되며, 다음에 온라인 상태로 앱을 실행할 때 자동으로 무료 버전으로 전환됩니다.</li>" +
            '<li><strong>신청 방법</strong> — <a href="https://forms.gle/fbzSb2Gf1THnFwGD6" target="_blank" rel="noopener">문의 폼(또는 이메일)</a>으로 <strong>Order #(주문번호)</strong>와 상황을 보내 주세요. 가능하면 결제에 사용하신 이메일 주소도 함께 적어 주시면 확인이 빠릅니다. 전화번호만으로는 주문을 조회할 수 없습니다.</li>' +
            "<li><strong>처리</strong> — 검토 후 Lemon Squeezy 대시보드에서 환불을 실행하며, 카드사·결제수단에 따라 실제 반영까지 영업일이 소요될 수 있습니다.</li>" +
            "</ul>",
        faqR1q: "Peekom Plus 환불은 어떻게 신청하나요?",
        faqR1a:
            '<p><a href="https://forms.gle/fbzSb2Gf1THnFwGD6" target="_blank" rel="noopener">문의 폼(또는 이메일)</a>으로 <strong>Order #(주문번호)</strong>와 함께 신청해 주세요.</p>' +
            "<p>가능하면 <strong>결제에 사용하신 이메일 주소</strong>도 같이 알려 주시면 주문 확인이 빨라집니다. 전화번호만으로는 주문을 조회할 수 없습니다.</p>" +
            "<p>어떤 상황인지(앱이 실행되지 않음, 중복 결제 등)도 함께 적어 주세요.</p>" +
            "<p>검토 후 환불 대상에 해당하면 Lemon Squeezy 대시보드에서 환불을 실행하며, 카드사·결제수단에 따라 실제 반영까지 영업일이 소요될 수 있습니다.</p>",
        faqR2q: "어떤 경우에 환불받을 수 있나요?",
        faqR2a:
            "<p><strong>환불 대상</strong> — 구입일로부터 <strong>30일 이내</strong>이고, 앱이 정상적으로 실행·작동하지 않는 <strong>제품 결함</strong>이거나 <strong>동일 주문의 중복 결제</strong>인 경우입니다.</p>" +
            "<p><strong>환불 대상이 아닌 경우</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>단순 변심</strong></li>" +
            "<li><strong>요금제 변경·선택 변경</strong>(Single ↔ Double·Family) — 차액 업그레이드는 없으며, 상위 요금제는 신규 구매가 필요합니다.</li>" +
            "<li>라이선스를 <strong>이미 활성화(Activated)</strong>한 뒤의 환불</li>" +
            "<li>회사·학교 방화벽, 폐쇄망, GitHub 차단 등 <strong>이용 환경만이 원인인 경우</strong> — 특히 <strong>이미 활성화된 라이선스</strong>라면 환불 대상이 아닙니다.</li>" +
            "<li>기기 대수 한도나 PC 교체에 따른 불편 — 기기 이전은 문의로 도와드립니다.</li>" +
            "</ul>" +
            "<p>구입 30일 이내이고 라이선스가 <strong>Inactive(활성화된 기기 0대)</strong>라면, 문의로 주문번호와 상황을 알려 주세요. 개별적으로 <strong>검토</strong>해 드립니다.</p>" +
            "<p>결제·환불은 공식 판매자인 Lemon Squeezy를 통해 처리됩니다.</p>",
        faqR3q: "환불 후 라이선스는 어떻게 되나요?",
        faqR3a:
            "<p>환불이 완료되면 Peekom Plus 라이선스 키가 <strong>비활성화</strong>됩니다.</p>" +
            "<p>다음에 온라인 상태로 앱을 실행하면 자동으로 <strong>무료 버전</strong>으로 전환되고, Plus 전용 기능은 사용할 수 없게 됩니다.</p>" +
            "<p>메모 자체는 PC에 남지만 무료 버전 범위(인덱스 3개 등)로 돌아가므로, 필요한 내용은 환불 신청 전에 <strong>보내기(내보내기)</strong>로 백업해 두세요.</p>" +
            "<p>환불을 신청하시기 전에 Plus 사용을 중단해도 괜찮은지 꼭 확인해 주세요.</p>",
        faqR4q: "회사 방화벽이나 폐쇄망에서도 Peekom Plus를 쓸 수 있나요?",
        faqR4a:
            "<p>무료 버전은 인터넷 연결 없이도 사용할 수 있습니다.</p>" +
            "<p>다만 <strong>Peekom Plus 최초 인증</strong>에는 인터넷 연결과 <code>https://api.lemonsqueezy.com</code>(HTTPS 443) 접속이 필요합니다.</p>" +
            "<p>일반 웹사이트가 열려도 이 주소만 막혀 있으면 인증에 실패할 수 있고, 인터넷이 전혀 연결되지 않는 <strong>완전 폐쇄망</strong> PC에서는 인증이 불가능할 수 있습니다.</p>" +
            "<p>설치 파일도 GitHub Releases에서 제공되므로, github.com이 차단된 환경에서는 다운로드 자체가 되지 않을 수 있습니다.</p>" +
            "<p><strong>이렇게 해보세요</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>집 Wi‑Fi나 휴대폰 핫스팟 등 <strong>다른 네트워크에서 한 번 인증</strong>합니다. 인증이 끝나면 이후에는 인터넷 없이도 Plus를 사용할 수 있습니다(온라인이 되면 라이선스 유효성을 다시 확인합니다).</li>" +
            "<li>IT 담당자에게 <code>https://api.lemonsqueezy.com</code> <strong>HTTPS(443) 허용</strong>을 요청합니다.</li>" +
            "<li>회사 VPN·프록시를 사용 중이면 잠시 끄거나 허용된 네트워크에서 다시 시도합니다.</li>" +
            "</ul>" +
            "<p><strong>구매 전에 확인해 주세요.</strong> 회사 PC 전용으로 사용하실 계획이라면 위 제한 때문에 인증이 어려울 수 있습니다. 라이선스를 <strong>이미 활성화한 뒤</strong> 회사망 제한만을 이유로 환불을 요청하시는 경우는 환불 대상이 아닙니다.</p>",
        faqR5q: "라이선스를 활성화한 뒤에도 환불받을 수 있나요?",
        faqR5a:
            "<p>원칙적으로는 <strong>환불 대상이 아닙니다.</strong></p>" +
            "<p><strong>활성화(Activated)</strong>란 라이선스 인증이 정상적으로 완료되어 해당 기기에서 Plus를 사용할 수 있는 상태로 등록된 것을 말합니다. 인증이 성공했다는 것은 제품이 정상 작동했다는 뜻이므로 <strong>제품 결함으로 보지 않습니다</strong>.</p>" +
            "<p>활성화 이후라도 아래에 해당하면 환불해 드립니다.</p>" +
            '<ul class="guide-step-list">' +
            "<li>앱이 정상적으로 실행·작동하지 않는 <strong>제품 결함</strong>이 있는 경우</li>" +
            "<li><strong>동일 주문의 중복 결제</strong>가 발생한 경우</li>" +
            "</ul>" +
            "<p>아직 활성화하지 않으셨고(라이선스 <strong>Inactive</strong>, 활성화된 기기 0대) 구입일로부터 30일 이내라면, <a href=\"/contact/\">문의</a>로 주문번호와 상황을 알려 주세요. 개별적으로 검토해 드립니다.</p>" +
            "<p>기기를 옮겨야 하는 상황이라면 환불 대신 <strong>기존 기기 비활성화</strong>를 도와드릴 수 있습니다.</p>",
        faq1q: "Peekom과 Peekom Plus의 차이는 무엇인가요?",
        faq1a:
            "<p>무료는 3개 인덱스·묶음 이동·얼음 모드·자동 접힘 딜레이·모니터 선택·서식바·이미지 삽입을 포함합니다.</p>" +
            "<p>Peekom Plus(Single $5.99 · Double $9.99 · Family $19.99)는 10슬롯 독립 배치, 커스텀 색·글꼴·불투명도, 왼쪽 패널, 이미지 크기 조절, 보내기 등을 앱 안에서 잠금 해제합니다.</p>" +
            '<p><a href="/features/#compare">상세 비교표</a>를 참고하세요.</p>',
        compareFreeName: "Peekom (무료)",
        comparePlusName: "Peekom Plus (유료)",
        compareCta: "Peekom Plus 구입",
        comparePromoBanner: "현재 출시 기념 · {pct}% 할인 중",
        faq2q: "듀얼 모니터에서 어떻게 동작하나요?",
        faq2a:
            "<p>설정 → 표시 모니터에서 현재 마우스 모니터(자동) 또는 특정 모니터를 고정할 수 있습니다.</p>" +
            "<p>무료·Peekom Plus 모두 사용할 수 있습니다.</p>",
        faq8q: "Peekom은 모니터 오른쪽 가장자리에서만 사용 가능한가요?",
        faq8a:
            "<p>무료: <strong>오른쪽</strong> 가장자리</p>" +
            "<p>Peekom Plus: <strong>왼쪽</strong>·<strong>위쪽</strong> 가장자리도 사용 가능합니다.</p>" +
            "<p>설정 → 표시 위치에서 바꿀 수 있습니다.</p>",
        faq9q: "실수로 Peekom Plus를 삭제하면 유료 기능은 어떻게 되나요?",
        faq9a:
            "<p>앱을 삭제해도 Lemon Squeezy에 등록된 라이선스는 그대로 남습니다.</p>" +
            "<p>아래 순서대로 진행하면 Peekom Plus와 모든 유료 기능을 다시 사용할 수 있습니다.</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>1. Peekom 재설치</strong> — <a href=\"/download/\">peekom.com</a>에서 무료 버전(<code>Peekom-Setup.exe</code>)을 다시 다운로드해 설치합니다.</li>" +
            "<li><strong>2. 라이선스 키 확인</strong> — 결제 당시 Lemon Squeezy에서 받은 영수증 이메일을 열어 <strong>[License Key]</strong>를 복사합니다. 이메일을 분실했다면 Lemon Squeezy 구매 확인(주문 내역) 페이지에서 동일 이메일로 로그인해 키를 다시 확인할 수 있습니다.</li>" +
            "<li><strong>3. 라이선스 재인증</strong> — 앱 우측 상단 톱니바퀴(설정)를 연 뒤 <strong>플러스 인증</strong>에 키를 붙여넣고 인증합니다. 즉시 앱 이름이 Peekom Plus로 바뀌고 10개 슬롯·커스텀 테마 등 유료 기능이 복구됩니다.</li>" +
            "</ul>" +
            "<p><strong>기기 수 제한(요금제별)</strong> — 같은 PC에서 삭제 후 재설치하면 동일 기기로 인식되어 인증 횟수에 문제가 없습니다.</p>" +
            "<p>Single 1대 · Double 2대 · Family 5대까지 등록할 수 있습니다(예: Double — 업무 PC 1대 + 개인 PC 1대).</p>",
        faq3q: "Peekom Plus 라이선스는 어떻게 인증하나요?",
        faq3a:
            "<p>먼저 <strong>무료 앱을 설치</strong>한 뒤, Lemon Squeezy에서 구매하신 라이선스 키를 설정 또는 Plus 잠금 화면에 입력하면 Peekom Plus가 활성화됩니다. 별도의 Plus 전용 설치 파일은 없습니다.</p>" +
            "<p><strong>최초 인증에는 인터넷 연결</strong>과 <code>https://api.lemonsqueezy.com</code> 접속이 필요합니다. 인증이 끝나면 이후에는 인터넷 없이도 사용할 수 있습니다.</p>" +
            "<p>인증이 정상적으로 완료되면 라이선스가 해당 기기에 <strong>활성화(Activated)</strong>된 것으로 등록됩니다. 활성화 이후에는 단순 변심·요금제 변경·회사망 제한을 이유로 한 환불이 어려우니, 위 환불 정책을 미리 확인해 주세요.</p>",
        faq3bq: "한 라이선스 키로 여러 대의 PC에서 사용할 수 있나요?",
        faq3ba:
            "<p>회사 PC(Windows)와 집 MacBook처럼 <strong>서로 다른 운영체제</strong>에 쓰더라도 Plus는 <strong>한 번만 구매</strong>하시면 됩니다.</p>" +
            "<p>Windows용·macOS용 설치 파일만 다르고, <strong>같은 라이선스 키</strong>를 각 기기 설정에 입력하시면 됩니다.</p>" +
            "<p>동시에 쓸 수 있는 기기 수는 구매하신 요금제에 따라 다릅니다.</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Single</strong> — 1대</li>" +
            "<li><strong>Double</strong> — 2대 (예: 회사 Windows PC + 집 MacBook)</li>" +
            "<li><strong>Family</strong> — 5대</li>" +
            "</ul>" +
            "<p>예: Double 요금제 → 회사 Windows PC에 Peekom 설치 후 설정에서 Plus 키 입력 → MacBook에는 macOS 버전 설치 후 <strong>같은 키</strong>를 입력합니다.</p>",
        faq3cq: "회사 PC를 바꾸거나 이직한 경우에도 계속 사용할 수 있나요?",
        faq3ca:
            "<p>Peekom Plus는 요금제에 따라 1대(Single)·2대(Double)·5대(Family)까지 사용할 수 있습니다.</p>" +
            "<p>같은 기기에서 삭제 후 다시 설치하는 것은 가능하며, 새로운 기기로 변경이 필요한 경우에는 문의를 통해 확인 후 지원해드리고 있습니다.</p>" +
            "<p>상황에 따라 기존 활성화 기기 초기화 후 새 기기에서 다시 인증을 안내드릴 수 있습니다.</p>" +
            "<p>기기 대수 한도나 PC 교체에 따른 불편만을 이유로 한 <strong>환불은 대상이 아니지만</strong>, 기기 이전은 문의해 주시면 비활성화로 도와드립니다.</p>",
        faq3dq: "기기 변경이 필요할 때는 무엇을 보내면 되나요?",
        faq3da:
            "<p>빠른 확인을 위해 구매 시 사용한 이메일 주소, 주문번호, 라이선스 키, 그리고 기기 변경 사유를 함께 보내주시면 됩니다.</p>" +
            "<p>요금제별 기기 한도(Single 1대 · Double 2대 · Family 5대)를 모두 사용 중이라면 기존 활성 기기를 초기화한 뒤 다시 인증을 안내드릴 수 있으므로, 필요한 내용은 미리 백업해 두신 후 문의해 주세요.</p>" +
            "<p>기기 변경은 <strong>환불이 아니라 기존 기기 비활성화</strong>로 도와드립니다. 기기 대수 한도나 PC 교체에 따른 불편만을 이유로 한 환불은 대상이 아닙니다.</p>",
        faq4q: 'Edge에서 "일반적으로 다운로드되지 않습니다"라는 메시지가 뜹니다.',
        faq4a:
            '<p>Microsoft Edge로 설치 파일을 받을 때 <strong>"일반적으로 다운로드되지 않습니다"</strong>라는 메시지가 나올 수 있습니다.</p>' +
            "<p>새로 배포된 앱에서 흔히 나타나는 안내입니다.</p>" +
            '<ol class="guide-step-list">' +
            "<li>키보드 <kbd>Ctrl</kbd> + <kbd>J</kbd>로 <strong>다운로드 기록</strong> 창을 엽니다.</li>" +
            "<li>차단된 <code>Peekom-Setup.exe</code> 항목 오른쪽 <strong>점 세 개(…)</strong>를 클릭하고 <strong>유지</strong>를 선택합니다.</li>" +
            "<li>경고 창에서 <strong>그래도 계속</strong>을 클릭하면 설치 파일을 실행할 수 있습니다.</li>" +
            "</ol>" +
            '<p>같은 메시지가 반복되면 <strong>Chrome 브라우저</strong>로 다운로드를 다시 시도해 보세요.</p>' +
            '<p>자세한 순서는 <a href="#" onclick="openModal(); return false;">설치 가이드</a>를 참고하세요.</p>',
        faq5q: "Windows 몇부터 사용할 수 있나요?",
        faq5a:
            "<p>Windows 10 및 Windows 11 (64-bit)에서 사용할 수 있습니다.</p>" +
            "<p>설치 파일은 64-bit 전용입니다.</p>" +
            "<p>Windows 7 / 8 / 8.1은 지원하지 않습니다.</p>" +
            "<p>(Electron 36 기준)</p>",
        faq6q: "인덱스를 추가했는데 설정창에 안 보여요.",
        faq6a:
            "<p>메인 화면과 설정창이 동시에 열려 있으면 목록이 잠시 어긋날 수 있습니다.</p>" +
            "<p>설정창을 다시 열거나 포커스를 주면 최신 인덱스 목록이 반영됩니다.</p>",
        faq7q: "Peekom(또는 구버전)을 지웠는데 부팅할 때 이상한 글자·오류·Electron 창이 뜹니다. 어떻게 하나요?",
        faq7a:
            "<p><strong>Peekom 1.2.4 이상</strong>을 <strong>설정 → 앱 → 제거</strong>로 정상 삭제하면 시작 프로그램은 자동으로 정리됩니다. 제거 화면에서 「메모·설정도 함께 삭제」는 <strong>기본이 아니오</strong>이며, 예를 선택한 경우에만 메모가 지워집니다.</p>" +
            "<p>그래도 부팅 시 <strong>깨진 글자·CSS 코드 창·작업 표시줄에 Electron만 보이는 창</strong>이 뜨면, 예전에 앱이 켜진 채로 지워져 잔여물이 남은 경우입니다. 아래를 한 번만 정리해 보세요.</p>" +
            "<p><strong>1. 지금 실행 중인 앱 완전히 끄기</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> → 작업 관리자 → <strong>Peekom</strong> 또는 <strong>Electron</strong>이 있으면 <strong>작업 끝내기</strong></li>" +
            "<li>작업 표시줄 아이콘 우클릭 → <strong>작업 표시줄에서 제거</strong>(고정 해제)</li>" +
            "</ul>" +
            "<p><strong>2. 시작 프로그램에서 끄기</strong></p>" +
            "<p><strong>Windows 11</strong> — 설정 → 앱 → 시작 프로그램</p>" +
            "<p><strong>Windows 10</strong> — 작업 관리자 → 시작 프로그램 탭</p>" +
            '<ul class="guide-step-list">' +
            "<li>목록에서 다음이 있으면 <strong>끔 / 사용 안 함</strong>: Peekom, Peekom Plus, com.peekom.app, 빼꼼 인덱스, 이름이 깨져 보이는 항목</li>" +
            "</ul>" +
            "<p><strong>3. 남은 폴더 직접 삭제</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li><code>%LocalAppData%\\Programs</code> → <strong>Peekom</strong>(또는 빼꼼) 폴더가 있으면 삭제</li>" +
            "<li><code>%AppData%\\Peekom</code> — 메모가 들어 있습니다. <strong>완전 삭제할 때만</strong> 지우세요</li>" +
            "<li>구버전만 해당: <code>%AppData%\\빼꼼</code></li>" +
            "</ol>" +
            "<p><strong>4. 재부팅 후 확인</strong> — 이상한 창이 없고 작업 표시줄에도 없으면 정리된 것입니다.</p>" +
            "<p>이후 <a href=\"/download/\">Peekom(무료)</a>을 새로 설치해 사용하시면 됩니다.</p>" +
            '<p class="privacy-doc__note">구버전(빼꼼 인덱스) 메모는 Peekom과 저장 위치가 달라 <strong>자동 이전되지 않습니다.</strong></p>',
        faq10q: "Peekom 설정(환경설정)은 어디서 열나요?",
        faq10a:
            "<p>작업 표시줄(트레이)의 Peekom 아이콘을 <strong>우클릭 → 환경설정</strong>으로 열 수 있습니다.</p>" +
            "<p>또는 트레이 아이콘을 <strong>더블클릭</strong>하거나, 바탕화면 <strong>Peekom 바로가기 더블클릭</strong>으로도 열립니다(앱이 꺼져 있으면 메모와 함께 열림).</p>" +
            '<p>자세한 내용은 <a href="/help/">가이드</a>를 참고하세요.</p>',
        faq11q: "라이선스 키는 어떻게 입력하나요? 입력창 예시와 메일의 키가 달라요.",
        faq11a:
            "<p>Peekom Plus는 Lemon Squeezy 구매 확인 메일에 있는 <strong>라이선스 키 전체</strong>를 사용합니다.</p>" +
            '<ol class="guide-step-list">' +
            "<li><a href=\"" + LINKS.buy + "\" target=\"_blank\" rel=\"noopener\">Peekom Plus 구매</a> 후 메일에서 <strong>[License Key]</strong> 복사 (<strong>하이픈 포함 전체</strong>)</li>" +
            "<li>Peekom 실행 → <strong>환경설정</strong> 또는 <strong>Plus 잠금 화면</strong> → 라이선스 키 붙여넣기 → <strong>인증</strong></li>" +
            "<li>인터넷 연결 상태에서 진행 (회사망은 아래 FAQ 참고)</li>" +
            "</ol>" +
            "<p>입력창에 보이는 <code>XXXX-XXXX-XXXX-XXXX</code>는 <strong>형식 예시</strong>일 뿐입니다.</p>" +
            "<p><strong>16자리만 넣지 마시고</strong>, 메일에 적힌 <strong>전체 키</strong>를 그대로 입력하세요.</p>" +
            "<p>키를 잃어버리셨다면 <a href=\"https://app.lemonsqueezy.com/my-orders\" target=\"_blank\" rel=\"noopener\">Lemon Squeezy 주문 내역</a>에서 같은 이메일로 다시 확인할 수 있습니다.</p>",
        faq12q: "인터넷은 되는데 라이선스 인증이 안 됩니다. 「Lemon Squeezy 서버에 연결하지 못했습니다」가 뜹니다.",
        faq12a:
            "<p>PC가 온라인이어도 Plus 인증은 <strong>Lemon Squeezy 서버(<code>api.lemonsqueezy.com</code>)</strong>에 별도로 접속해야 합니다.</p>" +
            "<p>회사 <strong>방화벽·보안 프로그램·VPN·프록시</strong>가 이 주소만 막으면 위 메시지가 나올 수 있습니다.</p>" +
            "<p><strong>시도해 보세요</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>집 Wi‑Fi·휴대폰 핫스팟</strong> 등 다른 네트워크에서 한 번 활성화</li>" +
            "<li>IT에 <strong><code>https://api.lemonsqueezy.com</code> HTTPS(443) 허용</strong> 요청</li>" +
            "<li>회사 VPN 사용 중이면 끄거나, 허용된 VPN으로 재시도</li>" +
            "</ul>" +
            "<p><strong>활성화 한도(요금제별: Single 1대 · Double 2대 · Family 5대) 초과</strong> 메시지가 나오면 <a href=\"/contact/\">문의</a>로 구매 이메일·주문번호·라이선스 키를 보내 주세요.</p>" +
            "<p>기기 초기화를 안내해 드릴 수 있습니다.</p>" +
            "<p>설치 파일을 다시 받아도, <strong>서버 접속이 막혀 있으면</strong> 같은 오류가 날 수 있습니다.</p>" +
            "<p><strong>환불과의 관계</strong> — 이 오류는 회사·학교의 <strong>네트워크 환경 제한</strong>에서 비롯된 것이라 제품 결함과는 다릅니다. 라이선스를 <strong>이미 활성화한 상태</strong>라면 이를 이유로 한 환불은 대상이 아닙니다. 아직 활성화 전(<strong>Inactive</strong>, 활성화된 기기 0대)이고 구입일로부터 30일 이내라면, 문의로 주문번호와 상황을 알려 주시면 위 환불 정책에 따라 개별적으로 검토해 드립니다.</p>",
        faq13q: "Peekom은 프리웨어인가요? 회사 PC에 설치할 수 있나요?",
        faq13a:
            "<p><strong>Peekom 무료 버전</strong>은 별도 라이선스 비용 없이 설치·사용할 수 있는 <strong>프리웨어(무료 소프트웨어)</strong>입니다.</p>" +
            "<p>유료 기능인 <strong>Peekom Plus</strong>는 선택 사항입니다.</p>" +
            "<p>구매하지 않아도 무료 버전만으로 계속 사용할 수 있습니다.</p>" +
            "<p>(※ Microsoft Windows <strong>공식 인증 프로그램</strong>을 의미하는 것은 아닙니다.)</p>" +
            "<p>회사 PC에서는 보안 정책에 따라 설치·실행 경로가 제한될 수 있습니다.</p>" +
            "<p>Peekom은 프로그램 폴더 외에 <code>%AppData%\\Roaming\\Peekom</code>에 메모·설정을 저장하므로, IT에 아래를 함께 허용 요청해 주세요.</p>" +
            '<ul class="guide-step-list">' +
            "<li>공식 설치 파일: <a href=\"/download/\">peekom.com/download</a>의 <code>Peekom-Setup.exe</code> (GitHub Releases에서 제공)</li>" +
            "<li>데이터 폴더: <code>C:\\Users\\(사용자명)\\AppData\\Roaming\\Peekom</code></li>" +
            "<li>Plus 인증 시: <code>https://api.lemonsqueezy.com</code></li>" +
            "</ul>" +
            "<p>무료 버전은 인터넷 없이도 쓸 수 있지만, <strong>Plus 최초 인증</strong>에는 인터넷과 위 주소 접속이 필요합니다.</p>" +
            "<p>github.com과 <code>api.lemonsqueezy.com</code>이 모두 막혀 있는 환경이라면, <strong>Plus 구매 전에</strong> IT 담당자에게 허용 가능 여부를 먼저 확인해 주세요. 활성화 이후 회사망 제한만을 이유로 한 환불은 대상이 아닙니다.</p>",
        faq14q: "메모가 사라졌어요. 복구할 수 있나요?",
        faq14a:
            "<p>Peekom은 메모를 <strong>사용 중인 PC에만 저장</strong>합니다.</p>" +
            "<p>서버(클라우드)에 올려 두지 않습니다.</p>" +
            "<p>저희가 원격으로 PC 안의 메모를 조회하거나 복구해 드릴 수 없습니다.</p>" +
            "<p><strong>자동 백업 기능은 없습니다.</strong></p>" +
            "<p>Peekom Plus에서는 <strong>보내기</strong>(.txt / .md / .json)나 <strong>JSON 백업·복원</strong>으로 내용을 따로 저장할 수 있지만, <strong>미리 백업해 두지 않으면</strong> PC 재시작·재설치·데이터 폴더 삭제 등 이후에는 복구가 어렵습니다.</p>" +
            "<p>다음을 한 번 확인해 보세요.</p>" +
            '<ul class="guide-step-list">' +
            "<li>Peekom을 <strong>삭제 후 재설치</strong>하셨는지</li>" +
            "<li><strong>다른 Windows 사용자 계정</strong>으로 로그인하셨는지</li>" +
            "<li>회사 보안 프로그램이 <strong>AppData</strong> 폴더를 정리했는지</li>" +
            "</ul>" +
            "<p>앞으로는 주기적으로 Plus <strong>JSON 백업</strong> 또는 <strong>보내기</strong>로 내용을 저장해 두시는 것을 권장합니다.</p>",
        faq15q: "Plus 구매 후 라이선스 키 메일이 오지 않아요.",
        faq15a:
            "<p>결제 직후 Lemon Squeezy에서 <strong>구매 확인 메일</strong>이 발송됩니다.</p>" +
            "<p>아래를 확인해 주세요.</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>스팸·프로모션·소셜</strong> 메일함</li>" +
            "<li>발신자 <strong>Lemon Squeezy</strong> 또는 제목에 <strong>Peekom / License</strong>가 포함된 메일</li>" +
            "<li>결제 시 입력한 <strong>이메일 주소</strong>가 맞는지 (회사·개인 메일 혼동 여부)</li>" +
            "</ul>" +
            "<p><a href=\"https://app.lemonsqueezy.com/my-orders\" target=\"_blank\" rel=\"noopener\">Lemon Squeezy 주문 내역</a>에서 결제에 사용한 이메일로 로그인하면 주문·라이선스 키를 다시 볼 수 있습니다.</p>" +
            "<p>그래도 찾기 어려우시면 <a href=\"/contact/\">문의</a>로 <strong>구매 이메일·결제 일시·영수증</strong>을 보내 주시면 확인 후 안내해 드리겠습니다.</p>",
        dlFreeFreewareNote: "무료 버전은 프리웨어(Freeware)이며, Peekom Plus는 선택 사항입니다.",
        helpTitle: "가이드", helpSub: "Peekom을 빠르게 시작하는 방법을 안내합니다.",
        guideStartBody:
            '<div class="guide-step">' +
                "<h3>1. 설치하기</h3>" +
                '<ul class="guide-step-list">' +
                    "<li><strong>다운로드 버튼</strong> — <a href=\"/download/\">다운로드</a> 페이지(또는 홈)에서 Windows·macOS용 설치 파일을 받습니다.</li>" +
                    "<li><strong>Peekom-Setup.exe 실행</strong> — 다운로드한 <code>Peekom-Setup.exe</code>를 더블클릭하고, 화면 안내에 따라 [다음]을 눌러 설치를 마칩니다.</li>" +
                    '<li><strong>Edge 다운로드가 막힐 때</strong> — "일반적으로 다운로드되지 않습니다" 메시지가 보이면 <a href="#" onclick="openModal(); return false;">설치 가이드</a>를 열고 다운로드 기록(<kbd>Ctrl</kbd>+<kbd>J</kbd>)에서 <strong>유지</strong> → <strong>그래도 계속</strong> 순서로 진행하세요. Chrome으로 재시도할 수도 있습니다.</li>' +
                "</ul>" +
            "</div>" +
            '<div class="guide-step">' +
                "<h3>2. 공통 / 인덱스별 설정하기</h3>" +
                '<p class="guide-step-lead">작업 표시줄(트레이)의 Peekom 아이콘을 우클릭 → <strong>설정</strong>을 엽니다.</p>' +
                '<h4 class="guide-step-sub">공통 설정에서 할 수 있는 것</h4>' +
                '<ul class="guide-step-list">' +
                    "<li>메모가 나타날 <strong>모니터</strong> 선택 (자동·고정)</li>" +
                    "<li><strong>동작 방식</strong> — <strong>마우스 조작</strong> / <strong>단축키 조작</strong> 선택, 단축키 3종(열기·닫기·위/아래 인덱스) 변경</li>" +
                    "<li>손잡이 <strong>자동 접힘 딜레이</strong> (기본 0.3초, 설정에서 조절 가능)</li>" +
                "</ul>" +
                '<div class="guide-plus-card"><span class="guide-plus-card__label">Plus</span> 커스텀 글꼴, 메모 기본 불투명도, JSON 백업·복원, 보내기(.txt/.md/.json) 등은 Plus에서 이용할 수 있습니다.</div>' +
                '<h4 class="guide-step-sub">인덱스(슬롯) 설정에서 할 수 있는 것</h4>' +
                '<ul class="guide-step-list">' +
                    "<li>인덱스 <strong>추가·삭제</strong> (무료 3개)</li>" +
                    "<li>각 인덱스 <strong>제목·색상</strong> 지정</li>" +
                    "<li>메모 <strong>비율</strong> (1:1 / 3:4) 선택</li>" +
                "</ul>" +
                '<div class="guide-plus-card"><span class="guide-plus-card__label">Plus</span> 최대 10개 슬롯, 슬롯마다 손잡이 위치를 따로 저장할 수 있습니다.</div>' +
            "</div>" +
            '<div class="guide-step">' +
                "<h3>3. 메모하기</h3>" +
                '<ul class="guide-step-list">' +
                    "<li><strong>인덱스 위치 조절</strong> — 모니터 가장자리 손잡이를 드래그해 원하는 높이로 옮깁니다.</li>" +
                    "<li><strong>빼꼼 / 얼음 모드</strong> — 메모 상단 칩으로 전환합니다. <em>빼꼼</em>은 클릭·단축키로 열고, <em>얼음</em>은 항상 화면에 고정됩니다.</li>" +
                    '<li><strong>메모 텍스트 커스텀</strong> — 서식바·이미지로 꾸밀 수 있습니다. 아래 <a href="#guide-edit">편집</a> 섹션을 참고하세요.</li>' +
                "</ul>" +
            "</div>" +
            '<div class="guide-step guide-step--last">' +
                "<h3>4. Peekom Plus 업그레이드</h3>" +
                '<ul class="guide-step-list">' +
                    "<li>앱의 <strong>Plus 업그레이드</strong> 버튼(또는 처음 실행 시 설정창)에서 라이선스 키를 입력하면 업그레이드됩니다.</li>" +
                    '<li>자세한 순서는 아래 <a href="#guide-plus">Plus 활성화</a> 섹션을 확인하세요.</li>' +
                "</ul>" +
            "</div>",
        compareColFeature: "기능",
        contactTitle: "연락", contactSub: "문의와 피드백을 보내실 수 있습니다.",
        contactFeedbackTitle: "피드백 보내기",
        contactFeedbackDesc: "버그 신고, 기능 제안, 라이선스 문의",
        contactFeedbackBtn: "피드백 폼 열기",
        contactReviewTitle: "후기 남기기",
        contactReviewDesc: "사용 경험을 들려주세요. 홈페이지에 소개될 수 있어요.",
        contactReviewBtn: "후기 폼 열기",
        contactEmailTitle: "이메일 연락",
        contactEmailDesc: "직접 연락이 필요할 때",
        contactNote: "문의는 영업일 기준 10일 이내에 답변드리도록 노력하겠습니다. 이메일보다 구글 폼이 더 빠르게 전달되니 가능하면 폼을 이용해 주세요.",
        contactEmail: "hello.peekom@gmail.com",
        footerCopy: "© 2026. Peekom All rights reserved.",
        footerPrivacy: "개인정보 처리방침",
        guideTitle: "Edge 다운로드 차단 해제 가이드",
        step1: 'Microsoft Edge로 설치 파일을 받을 때 <b>"일반적으로 다운로드되지 않습니다"</b>라는 메시지가 나올 수 있습니다. 새로 배포된 앱에서 흔히 나타나는 안내입니다.',
        step2: "키보드 <kbd>Ctrl</kbd> + <kbd>J</kbd>로 <b>다운로드 기록</b> 창을 연 뒤, 차단된 <code>Peekom-Setup.exe</code> 항목 오른쪽 <b>점 세 개(…)</b>를 클릭하고 <b>유지</b>를 선택합니다.",
        step3: "경고 창에서 <b>그래도 계속</b>을 클릭하면 설치 파일을 실행할 수 있습니다. 같은 메시지가 반복되면 <b>Chrome 브라우저</b>로 다운로드를 다시 시도해 보세요.",
        searchNoResults: "결과 없음",
        modalClose: "닫기",
        dlTitle: "다운로드",
        dlWinNote: "Windows 10 · 11 (64-bit)",
        dlWinLabel: "Windows x64 · Windows 10 · 11 (64-bit)",
        dlMacLabel: "macOS",
        winGuideBtn: 'Edge에서 "일반적으로 다운로드되지 않습니다"라는 메시지가 떴나요?',
        settingsGuideTitle: "설정창은 어떻게 여나요?",
        settingsGuideText: "작업표시줄 오른쪽 끝의 <strong>∧</strong> 를 눌러 Peekom 아이콘을 찾은 뒤, 아이콘을 더블클릭하거나 우클릭 → ‘설정’을 선택하세요.",
        settingsGuideThumbAria: "설정 여는 위치 확대 보기",
        promoNote: "프로모션 종료 후 가격 인상 예정",
        promoSectionTitle: "Peekom Plus(유료)",
        promoFreeTitle: "Peekom(무료)",
        promoVat: "(VAT 별도)",
        promoLaunchLabel: "출시 기념\n프로모션가\n적용 중",
        comparePricingExtra: " · 1회 구매 · 1~5대 기기(요금제별) · 소버전 업데이트 포함 · 30일 환불 (<a href=\"mailto:" + CONTACT_EMAIL + "\">" + CONTACT_EMAIL + "</a>)",
        dlPlusHintExtra: ' · <a href="' + LINKS.buy + '" id="dlBuyLinkInner">Lemon Squeezy에서 구입</a> → 앱에서 라이선스 키 입력',
        fz1Title: "테두리에서 빼꼼",
        fz1Items: [
            { text: "인덱스 클릭으로 빠르게 메모" },
            { text: "인덱스 드래그로 위치 조절" },
            { text: "메모 빼꼼 / 얼음 모드 스위치" },
            { text: "(빼꼼 모드 시) 자동 접힘 기능" }
        ],
        fz2Title: "효율적인 일처리",
        fz2Items: [
            { text: "단축키로 최근 메모 열기" },
            { text: "타겟 모니터 고정" },
            { text: "모드 전환 방식 선택" },
            { text: "이미지 삽입" }
        ],
        fz3Title: "나만의 커스텀 메모",
        fz3Items: [
            { text: "서식바 사용" },
            { text: "인덱스 제목 변경" },
            { text: "메모 비율 변경 (1:1, 3:4)" },
            { text: "메모 기본 배경 색상 지원" }
        ],
        fz4Title: "Plus로 더욱 강력하게",
        fz4Items: [
            { text: "최대 10개의 독립 인덱스", plus: true },
            { text: "보내기 · JSON 백업", plus: true },
            { text: "메모당 최대 5개의 이미지 삽입", plus: true },
            { text: "이미지 크기 조절 · 비율 자르기", plus: true },
            { text: "모니터 왼쪽 패널 지원", plus: true }
        ],
        fz5Title: "Plus만의 커스터마이즈",
        fz5Items: [
            { text: "글자 크기 조절", plus: true },
            { text: "메모 기본 불투명도 조절", plus: true },
            { text: "메모 배경색 / 글자 색 변경", plus: true },
            { text: "글꼴 변경", plus: true }
        ],
        footerLangLabel: "언어",
        themeLight: "Light",
        themeDark: "Dark",
        themeAuto: "Auto",
        themeLightLabel: "라이트 모드",
        themeDarkLabel: "다크 모드",
        themeAutoLabel: "시스템 설정 따르기",
        themeAriaLabel: "테마",
        pageCtaDownload: "다운로드",
        pageCtaCompare: "비교표 보기",
        featuresCtaTitle: "Peekom Plus로 확장하기",
        featuresCtaDesc: "10슬롯·커스텀 테마·보내기 등 Plus 기능을 앱 안에서 잠금 해제하세요.",
        helpCtaTitle: "바로 시작해 보세요",
        helpCtaDesc: "Peekom을 설치하고 가장자리 메모를 써 보세요.",
        faqCtaTitle: "더 궁금하신가요?",
        faqCtaDesc: "기능 비교표에서 무료와 Plus 차이를 확인하세요.",
        contactCtaTitle: "Peekom을 아직 안 써 보셨나요?",
        contactCtaDesc: "무료로 설치하고 바로 사용할 수 있습니다.",
        downloadCtaTitle: "Plus가 필요하신가요?",
        downloadCtaDesc: "같은 앱에서 라이선스 키만 입력하면 Plus가 활성화됩니다.",
        help4t: "4. 메모 작성", help4p: "패널에 텍스트를 입력하고, 설정에서 인덱스를 추가·제목·색상을 지정합니다.",
        help5t: "5. 얼음 모드", help5p: "메모 상단 <strong>빼꼼/얼음</strong> 칩을 클릭해 Pin 모드로 전환합니다. 호버 없이 고정 표시됩니다 (무료·Plus 공통).",
        help6t: "6. 설정 · Plus", help6p: "트레이 → 환경설정 → 공통 탭에서 동작 방식·단축키를 바꿀 수 있습니다. Plus 업그레이드 버튼에서 키를 입력하면 앱 이름·아이콘이 Peekom Plus로 바뀝니다.",
        guideKeysTitle: "단축키",
        guideKeysIntro: '설정 → 공통 → <strong>동작 방식</strong>에서 <strong>마우스 조작</strong> 또는 <strong>단축키 조작</strong>을 선택할 수 있습니다. macOS에서는 Ctrl 대신 ⌘(Command)를 사용합니다.',
        gkColAction: "동작", gkColKey: "기본", gkColNote: "비고",
        gk1a: "메모 열기/닫기", gk1k: "Ctrl+Shift+M",
        gk1n: "최근 메모 1개 토글. 단축키 조작 모드에서 동작. 설정 → 공통 → 동작 방식에서 변경 가능",
        gk2a: "위쪽 인덱스 메모 열기", gk2k: "Ctrl+Shift+↑",
        gk2n: "이전 인덱스를 열고 패널 표시. 단축키 조작 모드. 설정에서 변경 가능",
        gk3a: "아래쪽 인덱스 메모 열기", gk3k: "Ctrl+Shift+↓",
        gk3n: "다음 인덱스를 열고 패널 표시. 단축키 조작 모드. 설정에서 변경 가능",
        gk4a: "인덱스 전환", gk4k: "↑ / ↓",
        gk4n: "마우스 조작 모드. 패널이 열린 상태에서만",
        gk5a: "특정 인덱스로 이동", gk5k: "Ctrl+1 ~ 9 (Ctrl+0 = 10번)",
        gk5n: "해당 인덱스 메모를 바로 엽니다",
        gk6a: "글자 크기", gk6k: "Ctrl + 휠", gk6n: "메모 영역에서. Plus 전용",
        markdownGuideTitle: "마크다운으로 메모하기",
        markdownGuideBody:
            '<p class="guide-table-intro">코드를 외울 필요 없이, 평소 글처럼 입력한 뒤 <strong>Enter</strong>를 누르면 자동으로 서식이 바뀝니다.</p>' +
            '<table class="compare-table guide-table"><thead><tr><th>입력 형식</th><th>Enter 후 결과</th></tr></thead><tbody>' +
            '<tr><td><code># 회의 안건</code></td><td class="guide-md-result"><h1 class="guide-md-h1">회의 안건</h1></td></tr>' +
            '<tr><td><code>## 메모</code></td><td class="guide-md-result"><h2 class="guide-md-h2">메모</h2></td></tr>' +
            '<tr><td><code>### 참고</code></td><td class="guide-md-result"><h3 class="guide-md-h3">참고</h3></td></tr>' +
            '<tr><td><code>- 할 일</code></td><td class="guide-md-result"><ul class="guide-md-ul"><li>할 일</li></ul></td></tr>' +
            '<tr><td><code>- [ ] 할 일</code></td><td class="guide-md-result"><label class="guide-md-task"><input type="checkbox" disabled> 할 일</label></td></tr>' +
            '<tr><td><code>**중요**</code></td><td class="guide-md-result"><strong>중요</strong></td></tr>' +
            '<tr><td><code>*강조*</code></td><td class="guide-md-result"><em>강조</em></td></tr>' +
            "</tbody></table>",
        formatBarGuideTitle: "서식바로 메모하기",
        formatBarGuideBody:
            '<p class="guide-table-intro">메모 상단 서식바에서 마우스로 클릭만 하면 됩니다. 키보드 단축키를 외울 필요가 없어요.</p>' +
            '<table class="compare-table guide-table"><thead><tr><th>기능</th><th>설명</th></tr></thead><tbody>' +
            "<tr><td>글자 색 · 굵게 · 기울임 · 밑줄 · 취소선</td><td>텍스트를 드래그해 선택한 뒤 버튼을 클릭</td></tr>" +
            "<tr><td>줄 정렬 (왼쪽/가운데/오른쪽/양쪽)</td><td>단락 정렬을 한 번에 변경</td></tr>" +
            "<tr><td>목록 (점/네모/숫자/원래 텍스트)</td><td>목록 스타일을 드롭다운에서 선택</td></tr>" +
            "<tr><td>이미지 삽입</td><td>무료 1장 · Plus 5장 (Plus는 크기 조절·자르기 가능)</td></tr>" +
            "</tbody></table>",
        guidePlusTitle: "Plus 활성화",
        guidePlusStep1: "1. 아래 버튼에서 Peekom Plus를 구매합니다.",
        guidePlusStep2: "2. 이메일로 받은 라이선스 키를 확인합니다.",
        guidePlusStep3: "3. Peekom을 실행한 뒤 <strong>설정창</strong> 또는 <strong>설정</strong>에서 키를 입력합니다.",
        macComingSoonTitle: "macOS 안내",
        macComingSoonBody: "macOS 버전은 현재 개발 중입니다.<br><strong>2026년 7월</strong> 중 배포 예정입니다.",
        guidePlusStep4: "4. Peekom Plus 활성화가 완료됩니다.",
        guideNavStart: "시작하기", guideNavKeys: "단축키", guideNavEdit: "편집", guideNavPlus: "Plus 활성화",
        guideSectionEditTitle: "편집",
        versionHistoryTitle: "버전 기록",
        versionColVersion: "버전",
        versionColDate: "출시일",
        versionColWin: "Windows",
        versionColMac: "macOS",
        versionLatest: "최신",
        versionWin: "64-bit",
        versionMac: "Universal",
        versionMacSoon: "출시 예정",
        changelogTitle: "변경 기록",
        linkChangelog: "Changelog / Releases", linkPrev: "Previous Versions", linkSmartScreen: "SmartScreen Guide"
    },
    en: {
        navHome: "Home", navFeatures: "Features", navDownload: "Download", navFaq: "FAQ", navHelp: "Guide", navContact: "Contact",
        searchPlaceholder: "Search...",
        heroTitleMain: "Peekom",
        heroTagline: "The edge memo app is back as <strong>Peekom</strong>.<br>Light, fast notes at your screen edge—stay organized without breaking your work or presentation flow.",
        heroPlusNote: 'After installing the free app, upgrade to Peekom Plus in Settings.<br><a href="/features/#compare">See free vs Plus</a> in the comparison table.',
        heroUpgradeNote: "After installing the free app, upgrade to Peekom Plus in Settings.",
        heroFreeCompareNote: '<a href="/features/#compare">See free vs Plus</a>.',
        heroWinBtn: "Download for Windows", heroMacBtn: "Download for macOS",
        heroPlusBuyBtn: "Buy now",
        heroPlusSingleCardTitle: "Peekom Plus - Single",
        heroPlusDoubleCardTitle: "Peekom Plus - Double",
        heroPlusFamilyCardTitle: "Peekom Plus - Family",
        heroPlusCardBadge: "PAID",
        heroPlusCardOsCompat: "Windows / Mac compatible",
        heroPlusSingleCardMeta: "One-time · 1 device · lifetime",
        heroPlusDoubleCardMeta: "One-time · 2 devices · lifetime",
        heroPlusFamilyCardMeta: "One-time · 5 devices · lifetime",
        heroFreeCardTitle: "Peekom",
        heroFreeCardBadge: "FREE",
        heroMacFreeCardBadge: "FREE",
        heroWinCardMeta: "Windows 10 · 11 (64-bit)",
        heroMacFreeCardMeta: "macOS (Universal)",
        heroFreeDownloadLabel: "Download",
        carouselCap1: "Edge handle on your monitor",
        carouselCap2: "Open memo via click or shortcut",
        carouselCap3: "Ice mode · auto-collapse delay",
        reviewBtnLabel: "Leave a Review",
        reviewEmpty: "Be the first to share your experience!",
        reviewAnonymous: "Anonymous",
        detectWin: "Detected: <strong>Windows</strong> — Windows recommended",
        detectMac: "Detected: <strong>macOS</strong> — macOS recommended",
        detectGeneric: "OS not detected — choose manually",
        featuresTitle: "Features", featuresSub: "What Peekom does at a glance.",
        compareTitle: "Peekom vs Peekom Plus", compareSub: "One app — Peekom Plus unlocks inside the app.",
        comparePricing: '<span class="pricing-was">$' + PLUS_TIERS.single.sale.toFixed(2) + '–$' + PLUS_TIERS.family.sale.toFixed(2) + '</span> <span class="pricing-vat">(excl. VAT)</span> · <span class="pricing-launch">Launch price</span> · one-time · 1–5 devices (by plan) · minor updates included · 30-day refund (<a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>)',
        guidePlusP: "1) Choose a plan on Lemon Squeezy and purchase → 2) Receive license key by email → 3) Open Peekom → enter key in lock UI or Settings → 4) Peekom Plus activation complete. 30-day refund: <a href=\"mailto:" + CONTACT_EMAIL + "\">" + CONTACT_EMAIL + "</a>",
        dlSub: "Install Peekom once. Upgrade to Peekom Plus inside the app.",
        dlWin: "Peekom Setup (Windows)", dlMac: "Peekom Setup (macOS)",
        dlPlusHint: 'Peekom Plus: Single <strong>$' + PLUS_TIERS.single.sale.toFixed(2) + '</strong> · Double <strong>$' + PLUS_TIERS.double.sale.toFixed(2) + '</strong> · Family <strong>$' + PLUS_TIERS.family.sale.toFixed(2) + '</strong> (excl. VAT) · <a href="' + LINKS.buyDouble + '" id="dlBuyLinkInner">Buy on Lemon Squeezy</a> → enter license key in app',
        featureGifPending: "Demo GIF coming soon",
        compareNoLabel: "Not supported",
        faqSub: "Common questions about Peekom.",
        refundPolicyTitle: "Peekom Plus Refund Policy",
        refundPolicyBody:
            "<p>Payments and refunds for Peekom Plus are processed by <strong>Lemon Squeezy</strong>, our Merchant of Record.</p>" +
            '<ul class="faq-refund-list">' +
            "<li><strong>Request window</strong> — We review requests submitted within <strong>30 days</strong> of purchase.</li>" +
            "<li><strong>Eligible for a refund</strong> — We refund the following:" +
            "<ul>" +
            "<li>A <strong>product defect</strong> — the app does not launch or does not work correctly.</li>" +
            "<li>A <strong>duplicate payment</strong> for the same order.</li>" +
            "</ul></li>" +
            "<li><strong>Not eligible for a refund</strong> — We cannot refund the following:" +
            "<ul>" +
            "<li><strong>Change of mind</strong> after purchase.</li>" +
            "<li><strong>Changing plans</strong> — for example Single ↔ Double/Family. We do not offer prorated upgrades. If you need more devices, you must <strong>buy the higher plan separately</strong>; the original plan is not automatically refunded and no price difference is credited.</li>" +
            "<li><strong>A refund after the license has already been activated.</strong> \"Activated\" means the key was verified successfully and registered so Plus can be used on that device. A successful activation shows the product works, so it is <strong>not treated as a product defect</strong>.</li>" +
            "<li><strong>Issues caused only by your environment</strong> — a company or school firewall, security software, a fully offline (air-gapped) network, blocked GitHub downloads, or a blocked <code>api.lemonsqueezy.com</code>. This is especially true once the license has <strong>already been activated</strong>.</li>" +
            "<li><strong>Device-limit or PC-replacement inconvenience.</strong> If you need to move to another device, please <a href=\"/contact/\">contact us</a> — we can deactivate the old device for you.</li>" +
            "</ul></li>" +
            "</ul>" +
            "<p><strong>Before you buy (activation &amp; network)</strong></p>" +
            '<ul class="faq-refund-list">' +
            "<li><strong>First-time Plus activation</strong> requires an internet connection and access to <code>https://api.lemonsqueezy.com</code>.</li>" +
            "<li>Even if ordinary websites load, activation can fail when only this address is blocked.</li>" +
            "<li>A PC used exclusively on a <strong>fully offline (air-gapped) network</strong> may not be able to activate at all.</li>" +
            "<li>The installer is hosted on GitHub Releases, so the download can fail where github.com is blocked.</li>" +
            "<li>If you plan to use Peekom only on a company PC, we recommend checking the items above before buying.</li>" +
            "</ul>" +
            "<p><strong>If your environment makes Plus unusable — how we review it</strong></p>" +
            '<ul class="faq-refund-list">' +
            "<li>The purchase was made within the last <strong>30 days</strong>, and</li>" +
            "<li>the license is <strong>Inactive (0 activated devices)</strong>, or the case is a product defect or duplicate payment, and</li>" +
            "<li>you contact us with your order number and a description — we then <strong>review the case individually</strong>.</li>" +
            "<li>However, if the license is <strong>already activated</strong> and the company network is the only reason, it is generally not eligible for a refund.</li>" +
            "</ul>" +
            "<p><strong>Your license and the refund process</strong></p>" +
            '<ul class="faq-refund-list">' +
            "<li><strong>License</strong> — Once a refund is completed, your Peekom Plus license key is disabled and the app reverts to the free version the next time it launches while online.</li>" +
            '<li><strong>How to request</strong> — Use the <a href="https://forms.gle/fbzSb2Gf1THnFwGD6" target="_blank" rel="noopener">contact form (or email)</a> and include your <strong>Order #</strong> and a short description. Adding the email address used for payment helps us find the order faster. We cannot look up an order from a phone number alone.</li>' +
            "<li><strong>Processing</strong> — After our review we issue the refund from the Lemon Squeezy dashboard; it may take several business days to appear, depending on your card issuer or payment method.</li>" +
            "</ul>",
        faqR1q: "How do I request a Peekom Plus refund?",
        faqR1a:
            '<p>Send your <strong>Order #</strong> through the <a href="https://forms.gle/fbzSb2Gf1THnFwGD6" target="_blank" rel="noopener">contact form (or email)</a>.</p>' +
            "<p>Adding the <strong>email address used for payment</strong> helps us find your order faster. We cannot look up an order from a phone number alone.</p>" +
            "<p>Please also describe what happened (the app won't launch, a duplicate payment, and so on).</p>" +
            "<p>If the request is eligible, we issue the refund from the Lemon Squeezy dashboard. It may take a few business days to appear, depending on your card issuer or payment method.</p>",
        faqR2q: "What is eligible for a refund?",
        faqR2a:
            "<p><strong>Eligible</strong> — the purchase was made within <strong>30 days</strong> and the case is a <strong>product defect</strong> (the app does not launch or work correctly) or a <strong>duplicate payment</strong> for the same order.</p>" +
            "<p><strong>Not eligible</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Change of mind.</strong></li>" +
            "<li><strong>Changing plans</strong> (Single ↔ Double/Family) — there is no prorated upgrade, and a higher plan must be purchased separately.</li>" +
            "<li>A refund after the license has <strong>already been activated</strong>.</li>" +
            "<li>Issues caused <strong>only by your environment</strong>, such as a company or school firewall, an offline network, or blocked GitHub downloads — especially when the license is <strong>already activated</strong>.</li>" +
            "<li>Device-limit or PC-replacement inconvenience — contact us instead and we can help you move devices.</li>" +
            "</ul>" +
            "<p>If you are within 30 days of purchase and the license is <strong>Inactive (0 activated devices)</strong>, contact us with your order number and a description and we will <strong>review</strong> the case individually.</p>" +
            "<p>Payments and refunds are handled by Lemon Squeezy, our Merchant of Record.</p>",
        faqR3q: "What happens to my license after a refund?",
        faqR3a:
            "<p>Once a refund is completed, your Peekom Plus license key is <strong>disabled</strong>.</p>" +
            "<p>The app automatically reverts to the <strong>free version</strong> the next time it launches while online, and Plus-only features stop working.</p>" +
            "<p>Your memos stay on your PC, but you return to the free feature set (3 indexes and so on), so export anything you need <strong>before</strong> requesting a refund.</p>" +
            "<p>Please make sure you intend to stop using Plus before you submit the request.</p>",
        faqR4q: "Can I use Peekom Plus behind a company firewall or on an offline network?",
        faqR4a:
            "<p>The free version works without an internet connection.</p>" +
            "<p>However, <strong>first-time Plus activation</strong> requires an internet connection and access to <code>https://api.lemonsqueezy.com</code> over HTTPS (443).</p>" +
            "<p>Even if ordinary websites load, activation can fail when only this address is blocked, and a PC used exclusively on a <strong>fully offline (air-gapped) network</strong> may not be able to activate at all.</p>" +
            "<p>The installer is also hosted on GitHub Releases, so the download itself can fail where github.com is blocked.</p>" +
            "<p><strong>Try this</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Activate once on another network</strong>, such as home Wi‑Fi or a mobile hotspot. After activation you can use Plus without internet access (the license is re-checked whenever you are back online).</li>" +
            "<li>Ask IT to allow <code>https://api.lemonsqueezy.com</code> over <strong>HTTPS (443)</strong>.</li>" +
            "<li>If you use a corporate VPN or proxy, turn it off briefly or retry on an allowed network.</li>" +
            "</ul>" +
            "<p><strong>Please check before buying.</strong> If you plan to use Peekom only on a company PC, these restrictions may prevent activation. A refund requested <strong>after the license has been activated</strong>, where the company network is the only reason, is not eligible.</p>",
        faqR5q: "Can I get a refund after activating my license?",
        faqR5a:
            "<p>Generally, <strong>no — it is not eligible for a refund.</strong></p>" +
            "<p><strong>Activated</strong> means the key was verified successfully and registered so Plus can be used on that device. A successful activation shows the product works, so it is <strong>not treated as a product defect</strong>.</p>" +
            "<p>Even after activation, we do refund the following:</p>" +
            '<ul class="guide-step-list">' +
            "<li>A <strong>product defect</strong> — the app does not launch or work correctly.</li>" +
            "<li>A <strong>duplicate payment</strong> for the same order.</li>" +
            "</ul>" +
            "<p>If you have <strong>not</strong> activated yet (license <strong>Inactive</strong>, 0 activated devices) and you are within 30 days of purchase, <a href=\"/contact/\">contact us</a> with your order number and a description and we will review the case individually.</p>" +
            "<p>If you simply need to move to another device, we can <strong>deactivate the old device</strong> instead of refunding.</p>",
        faq1q: "What's the difference between free and Plus?",
        faq1a:
            "<p>Free includes 3 indexes, group handle move, Ice mode, hover delay, monitor selection, formatting toolbar, and image insert.</p>" +
            "<p>Peekom Plus (Single $5.99 · Double $9.99 · Family $19.99) unlocks 10 slots, custom theme, fonts, opacity, left panel, image resize, and export in-app.</p>" +
            '<p>See the <a href="/features/#compare">comparison table</a>.</p>',
        compareFreeName: "Peekom (Free)",
        comparePlusName: "Peekom Plus",
        compareCta: "Get Peekom Plus",
        comparePromoBanner: "Launch promo · {pct}% off now",
        helpTitle: "Guide", helpSub: "Get started with Peekom.",
        guideStartBody:
            '<div class="guide-step">' +
                "<h3>1. Install</h3>" +
                '<ul class="guide-step-list">' +
                    '<li><strong>Download</strong> — Get the Windows or macOS installer from the <a href="/download/">Download</a> page (or home).</li>' +
                    "<li><strong>Run Peekom-Setup.exe</strong> — Double-click the installer and follow the prompts.</li>" +
                    '<li><strong>Edge download blocked</strong> — If you see "This file isn\'t commonly downloaded," open the <a href="#" onclick="openModal(); return false;">install guide</a> and use Downloads (<kbd>Ctrl</kbd>+<kbd>J</kbd>) → <strong>Keep</strong> → <strong>Keep anyway</strong>. You can also retry in Chrome.</li>' +
                "</ul>" +
            "</div>" +
            '<div class="guide-step">' +
                "<h3>2. Common &amp; per-index settings</h3>" +
                '<p class="guide-step-lead">Right-click the tray icon → <strong>Settings</strong>.</p>' +
                '<h4 class="guide-step-sub">Common settings</h4>' +
                '<ul class="guide-step-list">' +
                    "<li>Choose <strong>display monitor</strong> (auto or fixed)</li>" +
                    "<li><strong>Trigger mode</strong> — <strong>Mouse control</strong> / <strong>Shortcut control</strong>; customize three shortcuts (toggle, prev/next index)</li>" +
                    "<li>Handle <strong>auto-collapse delay</strong> (default 0.3s, adjustable in Settings)</li>" +
                "</ul>" +
                '<div class="guide-plus-card"><span class="guide-plus-card__label">Plus</span> Custom fonts, default opacity, JSON backup/restore, export (.txt/.md/.json), and more.</div>' +
                '<h4 class="guide-step-sub">Per-index settings</h4>' +
                '<ul class="guide-step-list">' +
                    "<li>Add/remove <strong>indexes</strong> (3 free)</li>" +
                    "<li>Set <strong>title and color</strong> per index</li>" +
                    "<li>Choose memo <strong>aspect ratio</strong> (1:1 / 3:4)</li>" +
                "</ul>" +
                '<div class="guide-plus-card"><span class="guide-plus-card__label">Plus</span> Up to 10 slots with independent handle positions.</div>' +
            "</div>" +
            '<div class="guide-step">' +
                "<h3>3. Write memos</h3>" +
                '<ul class="guide-step-list">' +
                    "<li><strong>Reposition</strong> — Drag the edge handle to your preferred height.</li>" +
                    "<li><strong>Peek / Ice</strong> — Toggle at the top of the memo. Peek opens via click or shortcut; Ice stays pinned.</li>" +
                    '<li><strong>Customize text</strong> — Use the formatting toolbar and images. See <a href="#guide-edit">Editing</a> below.</li>' +
                "</ul>" +
            "</div>" +
            '<div class="guide-step guide-step--last">' +
                "<h3>4. Upgrade to Peekom Plus</h3>" +
                '<ul class="guide-step-list">' +
                    "<li>Enter your license key via the in-app <strong>Upgrade to Plus</strong> button (or the <strong>Settings</strong> window on first launch).</li>" +
                    '<li>See <a href="#guide-plus">Activate Plus</a> for step-by-step instructions.</li>' +
                "</ul>" +
            "</div>",
        help1t: "1. Install", help1p: "Download and run Peekom Setup. SmartScreen may appear on Windows.",
        help2t: "2. Open a memo", help2p: "Click the handle or, in <strong>shortcut control</strong> mode, press <strong>Ctrl+Shift+M</strong> (default) to toggle the <strong>most recently opened</strong> memo.",
        help3t: "3. Switch memos", help3p: "In <strong>mouse control</strong> mode, press <strong>↑ / ↓</strong> while the panel is open. In <strong>shortcut control</strong> mode, use <strong>Ctrl+Shift+↑ / ↓</strong> (even when closed). <strong>Ctrl+1–9</strong> jumps to an index.",
        help4t: "4. Write", help4p: "Type in the panel; add indexes and titles in Settings.",
        help5t: "5. Ice mode", help5p: "Click the <strong>Peek / Ice</strong> chip to pin the memo without hover (free & Plus).",
        help6t: "6. Settings · Plus", help6p: "Tray → Settings → Common tab to change trigger mode and shortcuts. Use the Upgrade to Plus button to enter a license key and switch branding to Peekom Plus.",
        winGuideBtn: 'Does Edge say the file "isn\'t commonly downloaded"?',
        settingsGuideTitle: "How do I open Settings?",
        settingsGuideText: "Click the <strong>∧</strong> at the right end of the taskbar to find the Peekom icon, then double-click it (or right-click → \u201CSettings\u201D).",
        settingsGuideThumbAria: "Zoom in on where to open Settings",
        dlTitle: "Download", dlWinNote: "Windows 10 & 11 (64-bit)",
        dlWinLabel: "Windows x64 · Windows 10 & 11 (64-bit)",
        dlMacLabel: "macOS",
        linkChangelog: "Changelog / Releases", linkPrev: "Previous Versions", linkSmartScreen: "SmartScreen Guide",
        faqTitle: "FAQ",
        faqGroupProductLabel: "Product & features",
        faqGroupLicenseLabel: "License",
        faqGroupInstallLabel: "Installation",
        faqGroupTroubleshootLabel: "Troubleshooting",
        faq2q: "How does dual monitor support work?",
        faq2a:
            "<p>In Settings → Display monitor, choose auto (follow mouse) or a fixed monitor.</p>" +
            "<p>Available on Free and Plus.</p>",
        faq8q: "Can Peekom only be used on the right edge of the monitor?",
        faq8a:
            "<p>Free: <strong>right</strong> edge.</p>" +
            "<p>Peekom Plus: also <strong>left</strong> and <strong>top</strong>.</p>" +
            "<p>Change this in Settings → Panel side.</p>",
        faq9q: "I accidentally uninstalled Peekom Plus. What happens to my paid features?",
        faq9a:
            "<p>Uninstalling the app does not remove your Lemon Squeezy license.</p>" +
            "<p>Follow these steps to restore Peekom Plus and all paid features.</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>1. Reinstall Peekom</strong> — Download the free version (<code>Peekom-Setup.exe</code>) from <a href=\"/download/\">peekom.com</a> and install it.</li>" +
            "<li><strong>2. Find your license key</strong> — Open the Lemon Squeezy receipt email from your purchase and copy the <strong>[License Key]</strong>. If you lost the email, sign in to your Lemon Squeezy order history with the same email to view the key again.</li>" +
            "<li><strong>3. Reactivate Plus</strong> — Open Settings (gear icon, top right), paste the key under <strong>Plus activation</strong>, and confirm. The app switches to Peekom Plus and restores 10 slots, custom themes, and other Plus features.</li>" +
            "</ul>" +
            "<p><strong>Device limit (by plan)</strong> — Reinstalling on the same PC counts as the same device.</p>" +
            "<p>Single allows 1 device · Double 2 · Family 5 (e.g. Double — work PC + personal PC).</p>",
        faq3q: "How is Plus activated?",
        faq3a:
            "<p>Install the <strong>free app</strong> first, then enter the license key you bought on Lemon Squeezy in Settings or on the Plus lock screen. There is no separate Plus installer and no reinstall is needed.</p>" +
            "<p><strong>First-time activation needs an internet connection</strong> and access to <code>https://api.lemonsqueezy.com</code>. After that, you can keep using Plus offline.</p>" +
            "<p>Once activation succeeds, the license is registered as <strong>Activated</strong> on that device. After activation, refunds for change of mind, plan changes, or company-network restrictions are generally not available, so please read the refund policy above first.</p>",
        faq3bq: "Can I use one license key on more than one PC?",
        faq3ba:
            "<p>Even if you use different operating systems—such as a work Windows PC and a home MacBook—you only need to <strong>purchase Plus once</strong>.</p>" +
            "<p>Install files differ by OS, but enter the <strong>same license key</strong> in Settings on each device.</p>" +
            "<p>How many devices you can use at once depends on your plan:</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Single</strong> — 1 device</li>" +
            "<li><strong>Double</strong> — 2 devices (e.g. work Windows PC + home MacBook)</li>" +
            "<li><strong>Family</strong> — 5 devices</li>" +
            "</ul>" +
            "<p>Example with Double: install Peekom on your work Windows PC and enter your Plus key in Settings → install the macOS build on your MacBook and enter the <strong>same key</strong>.</p>",
        faq3cq: "Can I keep using Peekom if I change my work PC or switch jobs?",
        faq3ca:
            "<p>Depending on your plan, Peekom Plus can be used on 1 device (Single), 2 (Double), or 5 (Family).</p>" +
            "<p>Reinstalling on the same device is allowed.</p>" +
            "<p>If you need to move to a new device, please contact us and we will review and assist you.</p>" +
            "<p>Depending on the situation, we may guide you to reactivate on the new device after resetting previously activated devices.</p>" +
            "<p>A refund based only on the device limit or on replacing a PC is <strong>not eligible</strong>, but we are happy to help you move devices by deactivating the old one — just contact us.</p>",
        faq3dq: "What information should I send if I need a device change?",
        faq3da:
            "<p>For a faster review, please send the email address used for purchase, your order number, your license key, and the reason for the device change.</p>" +
            "<p>If you have used all slots for your plan (Single 1 · Double 2 · Family 5), we may need to reset existing activated devices before reactivation, so please back up anything you need in advance before contacting us.</p>" +
            "<p>We handle device changes by <strong>deactivating the old device, not by refunding</strong>. A refund based only on the device limit or on replacing a PC is not eligible.</p>",
        faq4q: 'Microsoft Edge says the file "isn\'t commonly downloaded."',
        faq4a:
            '<p>When downloading the installer in <strong>Microsoft Edge</strong>, you may see <strong>"This file isn\'t commonly downloaded"</strong>.</p>' +
            "<p>This is common for newly distributed apps.</p>" +
            '<ol class="guide-step-list">' +
            "<li>Press <kbd>Ctrl</kbd> + <kbd>J</kbd> to open <strong>Downloads</strong>.</li>" +
            "<li>Next to the blocked <code>Peekom-Setup.exe</code> entry, click the <strong>three dots (…)</strong> and choose <strong>Keep</strong>.</li>" +
            "<li>In the warning dialog, click <strong>Keep anyway</strong> to run the installer.</li>" +
            "</ol>" +
            '<p>If the message keeps appearing, try downloading again in <strong>Google Chrome</strong>.</p>' +
            '<p>See the <a href="#" onclick="openModal(); return false;">install guide</a> for details.</p>',
        faq5q: "Which Windows versions are supported?",
        faq5a:
            "<p>Peekom runs on Windows 10 and 11 (64-bit).</p>" +
            "<p>The installer is 64-bit only.</p>" +
            "<p>Windows 7, 8, and 8.1 are not supported (Electron 36).</p>",
        faq6q: "I added an index but it doesn't show in Settings.",
        faq6a:
            "<p>Reopen Settings to refresh the list.</p>" +
            "<p>Recent versions sync automatically.</p>",
        faq7q: "I uninstalled Peekom (or the legacy app) but still see garbled text, errors, or an Electron window at startup. What should I do?",
        faq7a:
            "<p>With <strong>Peekom 1.2.4+</strong>, a normal uninstall via <strong>Settings → Apps → Uninstall</strong> clears startup entries automatically. The “also delete memos &amp; settings” option defaults to <strong>No</strong>; memos are removed only if you choose Yes.</p>" +
            "<p>If you still see a <strong>broken/CSS window</strong> or a taskbar entry labeled only <strong>Electron</strong>, leftovers from an interrupted uninstall remain. Clean up once as follows.</p>" +
            "<p><strong>1. Fully quit any running instance</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> → Task Manager → end <strong>Peekom</strong> or <strong>Electron</strong></li>" +
            "<li>Right-click the taskbar icon → <strong>Unpin from taskbar</strong></li>" +
            "</ul>" +
            "<p><strong>2. Turn off startup entries</strong></p>" +
            "<p><strong>Windows 11</strong> — Settings → Apps → Startup</p>" +
            "<p><strong>Windows 10</strong> — Task Manager → Startup tab</p>" +
            '<ul class="guide-step-list">' +
            "<li>Disable if present: Peekom, Peekom Plus, com.peekom.app, 빼꼼 인덱스, or garbled names</li>" +
            "</ul>" +
            "<p><strong>3. Delete leftover folders</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li><code>%LocalAppData%\\Programs</code> → delete <strong>Peekom</strong> (or legacy 빼꼼) if present</li>" +
            "<li><code>%AppData%\\Peekom</code> — contains memos; delete <strong>only</strong> for a full wipe</li>" +
            "<li>Legacy only: <code>%AppData%\\빼꼼</code></li>" +
            "</ol>" +
            "<p><strong>4. Restart and verify</strong></p>" +
            "<p>Then install <a href=\"/download/\">Peekom (free)</a> fresh if needed.</p>" +
            '<p class="privacy-doc__note">Legacy app memos are <strong>not migrated automatically</strong>.</p>',
        faq10q: "Where do I open Peekom Settings?",
        faq10a:
            "<p>Right-click the Peekom icon in the <strong>system tray</strong> → <strong>Settings</strong>.</p>" +
            "<p>You can also <strong>double-click</strong> the tray icon, or <strong>double-click</strong> the desktop shortcut (if the app was closed, the memo and Settings open together).</p>" +
            '<p>See the <a href="/help/">guide</a> for details.</p>',
        faq11q: "How do I enter my license key? The placeholder doesn't match the email key.",
        faq11a:
            "<p>Use the <strong>full license key</strong> from your Lemon Squeezy receipt email.</p>" +
            '<ol class="guide-step-list">' +
            "<li>After <a href=\"" + LINKS.buy + "\" target=\"_blank\" rel=\"noopener\">purchasing Plus</a>, copy <strong>[License Key]</strong> from the email (<strong>including all hyphens</strong>)</li>" +
            "<li>Launch Peekom → <strong>Settings</strong> or the <strong>Plus lock screen</strong> → paste the key → <strong>Activate</strong></li>" +
            "<li>Use a working internet connection (see corporate network FAQ below if needed)</li>" +
            "</ol>" +
            "<p>The <code>XXXX-XXXX-XXXX-XXXX</code> placeholder is only an <strong>example</strong>.</p>" +
            "<p>Do <strong>not</strong> enter 16 characters only—paste the <strong>entire key</strong> from your email.</p>" +
            "<p>Lost the email? Sign in at <a href=\"https://app.lemonsqueezy.com/my-orders\" target=\"_blank\" rel=\"noopener\">Lemon Squeezy My Orders</a> with the same address.</p>",
        faq12q: "I'm online but activation fails with \"Could not reach Lemon Squeezy.\"",
        faq12a:
            "<p>Even when your PC is online, Plus activation must reach <strong>Lemon Squeezy (<code>api.lemonsqueezy.com</code>)</strong>.</p>" +
            "<p>Corporate <strong>firewalls, security software, VPNs, or proxies</strong> may block only that server.</p>" +
            "<p><strong>Try this</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>Activate once on another network (home Wi‑Fi, mobile hotspot)</li>" +
            "<li>Ask IT to allow <strong><code>https://api.lemonsqueezy.com</code> over HTTPS (443)</strong></li>" +
            "<li>Turn off a corporate VPN, or try an allowed VPN</li>" +
            "</ul>" +
            "<p>If you see an <strong>activation limit</strong> message (Single 1 device · Double 2 · Family 5), <a href=\"/contact/\">contact us</a> with your purchase email, order number, and license key—we can help reset devices.</p>" +
            "<p>Downloading the installer again will <strong>not</strong> fix this if the server is still blocked.</p>" +
            "<p><strong>How this relates to refunds</strong> — this error comes from a <strong>network restriction in your environment</strong>, not from a product defect. If your license is <strong>already activated</strong>, a refund for this reason is not eligible. If it is still <strong>Inactive</strong> (0 activated devices) and you are within 30 days of purchase, contact us with your order number and a description and we will review the case individually under the refund policy above.</p>",
        faq13q: "Is Peekom freeware? Can I install it on a company PC?",
        faq13a:
            "<p><strong>Peekom (free)</strong> is <strong>freeware</strong>—you can install and use it without a separate license fee.</p>" +
            "<p><strong>Peekom Plus</strong> is optional paid functionality.</p>" +
            "<p>(This describes the <strong>license type</strong>, not Microsoft Windows official certification.)</p>" +
            "<p>Company PCs may restrict install or data paths.</p>" +
            "<p>Besides the program folder, Peekom stores memos and settings under <code>%AppData%\\Roaming\\Peekom</code>.</p>" +
            "<p>Ask IT to allow:</p>" +
            '<ul class="guide-step-list">' +
            "<li>Official installer: <code>Peekom-Setup.exe</code> from <a href=\"/download/\">peekom.com/download</a> (hosted on GitHub Releases)</li>" +
            "<li>Data folder: <code>C:\\Users\\(username)\\AppData\\Roaming\\Peekom</code></li>" +
            "<li>For Plus activation: <code>https://api.lemonsqueezy.com</code></li>" +
            "</ul>" +
            "<p>The free version works without internet access, but <strong>first-time Plus activation</strong> needs an internet connection and access to the address above.</p>" +
            "<p>If both github.com and <code>api.lemonsqueezy.com</code> are blocked, please confirm with IT <strong>before buying Plus</strong>. A refund requested after activation, where the company network is the only reason, is not eligible.</p>",
        faq14q: "My memo disappeared. Can I recover it?",
        faq14a:
            "<p>Peekom stores memos <strong>only on your PC</strong>.</p>" +
            "<p>There is no cloud server, and we cannot remotely view or restore your data.</p>" +
            "<p>There is <strong>no automatic backup</strong>.</p>" +
            "<p>Peekom Plus offers <strong>Export</strong> (.txt / .md / .json) and <strong>JSON backup/restore</strong>, but without a prior backup, recovery is difficult after reinstall, account change, or AppData cleanup.</p>" +
            "<p>Please check:</p>" +
            '<ul class="guide-step-list">' +
            "<li>Did you <strong>uninstall and reinstall</strong> Peekom?</li>" +
            "<li>Are you signed in to a <strong>different Windows user account</strong>?</li>" +
            "<li>Did company security software clean <strong>AppData</strong>?</li>" +
            "</ul>" +
            "<p>We recommend periodic Plus <strong>JSON backups</strong> or <strong>Export</strong> going forward.</p>",
        faq15q: "I bought Plus but didn't receive the license key email.",
        faq15a:
            "<p>Lemon Squeezy sends a <strong>purchase confirmation email</strong> after payment.</p>" +
            "<p>Please check:</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Spam, Promotions, or Social</strong> folders</li>" +
            "<li>Sender <strong>Lemon Squeezy</strong> or subject containing <strong>Peekom / License</strong></li>" +
            "<li>The <strong>email address</strong> used at checkout (work vs personal)</li>" +
            "</ul>" +
            "<p>Sign in at <a href=\"https://app.lemonsqueezy.com/my-orders\" target=\"_blank\" rel=\"noopener\">Lemon Squeezy My Orders</a> with that email to view your key again.</p>" +
            "<p>Still stuck? <a href=\"/contact/\">Contact us</a> with your <strong>purchase email, payment time, and receipt</strong>.</p>",
        dlFreeFreewareNote: "Peekom (free) is freeware; Plus is optional.",
        heroFreeCardBadge: "Freeware",
        heroMacFreeCardBadge: "Freeware",
        heroWinCardMeta: "Windows 10 · 11 (64-bit) · Freeware",
        heroMacFreeCardMeta: "macOS (Universal)",
        compareColFeature: "Feature",
        contactTitle: "Contact", contactSub: "Send us your feedback.",
        contactFeedbackTitle: "Send feedback",
        contactFeedbackDesc: "Bug reports, feature ideas, license inquiries",
        contactFeedbackBtn: "Open feedback form",
        contactReviewTitle: "Leave a review",
        contactReviewDesc: "Share your experience — it may be featured on our website.",
        contactReviewBtn: "Open review form",
        contactEmailTitle: "Email us",
        contactEmailDesc: "When you need to reach us directly",
        contactNote: "We aim to reply within about 10 business days. Google Forms are faster than email, so please use a form when you can.",
        contactEmail: "hello.peekom@gmail.com",
        footerCopy: "© 2026. Peekom All rights reserved.",
        footerPrivacy: "Privacy",
        guideTitle: "Edge Download Unblock Guide",
        step1: 'When downloading in <b>Microsoft Edge</b>, you may see <b>"This file isn\'t commonly downloaded."</b> This is common for newly distributed apps.',
        step2: "Press <kbd>Ctrl</kbd> + <kbd>J</kbd> to open <b>Downloads</b>, click the <b>three dots (…)</b> next to blocked <code>Peekom-Setup.exe</code>, and choose <b>Keep</b>.",
        step3: "Click <b>Keep anyway</b> in the warning dialog to run the installer. If the message repeats, try downloading again in <b>Google Chrome</b>.",
        searchNoResults: "No results",
        modalClose: "Close",
        promoNote: "Price increase planned after promotion ends",
        promoSectionTitle: "Peekom Plus (Paid)",
        promoFreeTitle: "Peekom (Free)",
        promoVat: "(excl. VAT)",
        promoLaunchLabel: "Launch promo\nprice\napplied",
        comparePricingExtra: " · one-time · 1–5 devices (by plan) · minor updates included · 30-day refund (<a href=\"mailto:" + CONTACT_EMAIL + "\">" + CONTACT_EMAIL + "</a>)",
        dlPlusHintExtra: ' · <a href="' + LINKS.buy + '" id="dlBuyLinkInner">Buy on Lemon Squeezy</a> → enter license key in app',
        markdownGuideTitle: "Notes with Markdown",
        markdownGuideBody:
            '<p class="guide-table-intro">Type naturally—press <strong>Enter</strong> and formatting applies automatically.</p>' +
            '<table class="compare-table guide-table"><thead><tr><th>Input format</th><th>After Enter</th></tr></thead><tbody>' +
            '<tr><td><code># Meeting agenda</code></td><td class="guide-md-result"><h1 class="guide-md-h1">Meeting agenda</h1></td></tr>' +
            '<tr><td><code>## Notes</code></td><td class="guide-md-result"><h2 class="guide-md-h2">Notes</h2></td></tr>' +
            '<tr><td><code>### Reference</code></td><td class="guide-md-result"><h3 class="guide-md-h3">Reference</h3></td></tr>' +
            '<tr><td><code>- To-do</code></td><td class="guide-md-result"><ul class="guide-md-ul"><li>To-do</li></ul></td></tr>' +
            '<tr><td><code>- [ ] To-do</code></td><td class="guide-md-result"><label class="guide-md-task"><input type="checkbox" disabled> To-do</label></td></tr>' +
            '<tr><td><code>**Important**</code></td><td class="guide-md-result"><strong>Important</strong></td></tr>' +
            '<tr><td><code>*Emphasis*</code></td><td class="guide-md-result"><em>Emphasis</em></td></tr>' +
            "</tbody></table>",
        formatBarGuideTitle: "Notes with toolbar",
        formatBarGuideBody:
            '<p class="guide-table-intro">Click buttons above the memo—no keyboard shortcuts required.</p>' +
            '<table class="compare-table guide-table"><thead><tr><th>Feature</th><th>How to use</th></tr></thead><tbody>' +
            "<tr><td>Color · bold · italic · underline · strikethrough</td><td>Select text, then click a button</td></tr>" +
            "<tr><td>Alignment (left/center/right/justify)</td><td>Change paragraph alignment</td></tr>" +
            "<tr><td>Lists (bullet/square/numbered/plain)</td><td>Pick a list style from the dropdown</td></tr>" +
            "<tr><td>Image insert</td><td>Free: 1 per memo · Plus: 5 (resize &amp; crop on Plus)</td></tr>" +
            "</tbody></table>",
        guideKeysTitle: "Shortcuts",
        guideKeysIntro: 'In Settings → Common → <strong>Trigger mode</strong>, choose <strong>Mouse control</strong> or <strong>Shortcut control</strong>. On macOS, use ⌘ (Command) instead of Ctrl.',
        gkColAction: "Action", gkColKey: "Default", gkColNote: "Note",
        gk1a: "Toggle memo open/close", gk1k: "Ctrl+Shift+M",
        gk1n: "Most recent memo. Shortcut control mode only. Customizable in Settings → Common → Trigger mode",
        gk2a: "Open previous index", gk2k: "Ctrl+Shift+↑",
        gk2n: "Opens previous index and shows panel. Shortcut control mode. Customizable in Settings",
        gk3a: "Open next index", gk3k: "Ctrl+Shift+↓",
        gk3n: "Opens next index and shows panel. Shortcut control mode. Customizable in Settings",
        gk4a: "Switch index", gk4k: "↑ / ↓",
        gk4n: "Mouse control mode only, panel must be open",
        gk5a: "Jump to index", gk5k: "Ctrl+1–9 (Ctrl+0 = index 10)",
        gk5n: "Opens that index memo directly",
        gk6a: "Font size", gk6k: "Ctrl + wheel", gk6n: "In memo area. Plus only",
        guidePlusTitle: "Activate Plus",
        guidePlusStep1: "1. Buy Peekom Plus using the button below.",
        guidePlusStep2: "2. Check your email for the license key.",
        guidePlusStep3: "3. Open Peekom and enter the key in the <strong>Settings</strong> window or in <strong>Settings</strong>.",
        macComingSoonTitle: "macOS",
        macComingSoonBody: "The macOS version is in development.<br>Expected release: <strong>July 2026</strong>.",
        guidePlusStep4: "4. Peekom Plus activation is complete.",
        guideNavStart: "Getting started", guideNavKeys: "Shortcuts", guideNavEdit: "Editing", guideNavPlus: "Activate Plus",
        guideSectionEditTitle: "Editing",
        versionHistoryTitle: "History Versions",
        versionColVersion: "Version", versionColDate: "Release Date", versionColWin: "Windows", versionColMac: "macOS",
        versionLatest: "Latest", versionWin: "64-bit", versionMac: "Universal", versionMacSoon: "Coming soon",
        changelogTitle: "Changelog",
        fz1Title: "Peek from the edge",
        fz1Items: [
            { text: "Click index to open memo quickly" },
            { text: "Drag index to reposition" },
            { text: "Peek / Ice mode switch" },
            { text: "Auto-collapse in peek mode" }
        ],
        fz2Title: "Work more efficiently",
        fz2Items: [
            { text: "Shortcut to open recent memo" },
            { text: "Target display pinning" },
            { text: "Peek / Ice toggle mode" },
            { text: "Image insert" }
        ],
        fz3Title: "Your custom memo",
        fz3Items: [
            { text: "Formatting toolbar" },
            { text: "Custom index titles" },
            { text: "Memo aspect (1:1, 3:4)" },
            { text: "Default background colors" }
        ],
        fz4Title: "Go further with Plus",
        fz4Items: [
            { text: "Up to 10 independent indexes", plus: true },
            { text: "Export · JSON backup", plus: true },
            { text: "Up to 5 images per memo", plus: true },
            { text: "Image resize · aspect crop", plus: true },
            { text: "Left-edge panel (Plus)", plus: true }
        ],
        fz5Title: "Plus-only customization",
        fz5Items: [
            { text: "Font size control", plus: true },
            { text: "Default memo opacity", plus: true },
            { text: "Custom background & text colors", plus: true },
            { text: "Custom fonts", plus: true }
        ],
        footerLangLabel: "Language",
        themeLight: "Light",
        themeDark: "Dark",
        themeAuto: "Auto",
        themeLightLabel: "Light mode",
        themeDarkLabel: "Dark mode",
        themeAutoLabel: "Follow system",
        themeAriaLabel: "Theme",
        pageCtaDownload: "Download",
        pageCtaCompare: "View comparison",
        featuresCtaTitle: "Expand with Peekom Plus",
        featuresCtaDesc: "Unlock 10 slots, custom themes, export, and more inside the app.",
        helpCtaTitle: "Get started now",
        helpCtaDesc: "Install Peekom and try edge memos on your monitor.",
        faqCtaTitle: "Still have questions?",
        faqCtaDesc: "See the feature comparison for free vs Plus.",
        contactCtaTitle: "Haven't tried Peekom yet?",
        contactCtaDesc: "Install for free and start right away.",
        downloadCtaTitle: "Need Plus?",
        downloadCtaDesc: "Enter your license key in the same app to activate Plus.",
        purchaseSuccessTitle: "Thank you for purchasing Peekom Plus!",
        purchaseSuccessLead: "Copy your license key below and activate Plus inside the Peekom app.",
        purchaseSuccessKeyLabel: "License key",
        purchaseSuccessCopyBtn: "Copy",
        purchaseSuccessCopied: "Copied",
        purchaseSuccessStep1: "Install Peekom using the <strong>Windows download</strong> button below.",
        purchaseSuccessStep2: "Open the app, go to <strong>Settings (⚙)</strong> or the Plus lock screen, paste your key, and tap <strong>Activate</strong>.",
        purchaseSuccessStep3: "Once verified, the app becomes <strong>Peekom Plus</strong> and premium features unlock.",
        purchaseSuccessDownloadBtn: "Download for Windows",
        purchaseSuccessEmailNote: "This key is also included in your Lemon Squeezy receipt email."
    }
};
if (window.PeekomI18nLocales) Object.assign(i18n, window.PeekomI18nLocales);



let currentLang = 'ko';
let userOS = 'generic';

function resolveLang(lang) {
    if (lang && i18n[lang]) return lang;
    if (lang) {
        const short = lang.split('-')[0];
        if (i18n[short]) return short;
        if (short === 'zh') {
            const lower = lang.toLowerCase();
            if (lower.includes('tw') || lower.includes('hk') || lower.includes('hant')) return 'zh-TW';
            return 'zh-CN';
        }
    }
    return 'en';
}

const SITE_OFFER_BADGES = {
    ko: { paid: "유료", free: "프리웨어" },
    en: { paid: "PAID", free: "Freeware" },
    ja: { paid: "有料", free: "フリーウェア" },
    "zh-CN": { paid: "付费", free: "免费软件" },
    "zh-TW": { paid: "付費", free: "免費軟體" },
    es: { paid: "DE PAGO", free: "Freeware" },
    fr: { paid: "PAYANT", free: "Freeware" },
    de: { paid: "KOSTENPFL.", free: "Freeware" },
    pt: { paid: "PAGO", free: "Freeware" },
    it: { paid: "A PAGAMENTO", free: "Freeware" },
    ru: { paid: "ПЛАТНО", free: "Freeware" },
    vi: { paid: "TRẢ PHÍ", free: "Freeware" },
    th: { paid: "เสียเงิน", free: "Freeware" },
    id: { paid: "BERBAYAR", free: "Freeware" },
    hi: { paid: "सशुल्क", free: "Freeware" },
    ar: { paid: "مدفوع", free: "Freeware" }
};

function enrichLocaleData(data, lang) {
    const isKo = lang === "ko";
    const ref = isKo ? i18n.ko : i18n.en;
    const en = i18n.en;
    const next = Object.assign({}, ref, data);

    Object.keys(en).forEach(function (key) {
        const val = next[key];
        if (val === undefined || val === null || val === "") {
            const enVal = en[key];
            if (enVal !== undefined && enVal !== null && enVal !== "") {
                next[key] = enVal;
            }
        }
    });

    next.compareFreeName = next.compareFreeName || en.compareFreeName || "Peekom (Free)";
    next.comparePlusName = next.comparePlusName || en.comparePlusName || "Peekom Plus";
    next.compareColFeature = next.compareColFeature || en.compareColFeature;
    if (!next.compareRows || next.compareRows.length < 15) {
        next.compareRows = en.compareRows || ref.compareRows;
    }
    next.compareCta = next.compareCta || en.compareCta;
    next.navFeatures = next.navFeatures || en.navFeatures;
    next.navGuide = next.navGuide || en.navGuide || en.navHelp;
    next.heroUpgradeNote = next.heroUpgradeNote || en.heroUpgradeNote;
    next.heroFreeCompareNote = next.heroFreeCompareNote || en.heroFreeCompareNote;
    next.comparePricing = next.comparePricing || en.comparePricing;
    next.compareNoLabel = next.compareNoLabel || en.compareNoLabel;
    next.featureGifPending = next.featureGifPending || en.featureGifPending;
    next.guidePlusP = next.guidePlusP || en.guidePlusP;
    next.guideStartBody = next.guideStartBody || en.guideStartBody;
    next.guidePlusStep1 = next.guidePlusStep1 || en.guidePlusStep1;
    next.guidePlusStep2 = next.guidePlusStep2 || en.guidePlusStep2;
    next.guidePlusStep3 = next.guidePlusStep3 || en.guidePlusStep3;
    next.guidePlusStep4 = next.guidePlusStep4 || en.guidePlusStep4;
    next.versionMacSoon = next.versionMacSoon || en.versionMacSoon;
    next.macComingSoonTitle = next.macComingSoonTitle || en.macComingSoonTitle;
    next.macComingSoonBody = next.macComingSoonBody || en.macComingSoonBody;
    next.featuresTitle = next.featuresTitle || en.featuresTitle;
    next.featuresSub = next.featuresSub || en.featuresSub;
    next.compareTitle = next.compareTitle || en.compareTitle;
    next.compareSub = next.compareSub || en.compareSub;
    next.faq1a = next.faq1a || en.faq1a;
    next.contactEmail = CONTACT_EMAIL;
    next.contactFeedbackTitle = next.contactFeedbackTitle || en.contactFeedbackTitle;
    next.contactFeedbackDesc = next.contactFeedbackDesc || en.contactFeedbackDesc;
    next.contactFeedbackBtn = next.contactFeedbackBtn || en.contactFeedbackBtn;
    next.contactReviewTitle = next.contactReviewTitle || en.contactReviewTitle;
    next.contactReviewDesc = next.contactReviewDesc || en.contactReviewDesc;
    next.contactReviewBtn = next.contactReviewBtn || en.contactReviewBtn;
    next.contactEmailTitle = next.contactEmailTitle || en.contactEmailTitle;
    next.contactEmailDesc = next.contactEmailDesc || en.contactEmailDesc;
    next.contactNote = next.contactNote || en.contactNote;
    next.footerCopy = next.footerCopy || "© 2026. Peekom All rights reserved.";
    next.dlWinNote = next.dlWinNote || en.dlWinNote;
    next.faq5q = next.faq5q || en.faq5q;
    next.faq5a = next.faq5a || en.faq5a;
    next.faq6q = next.faq6q || en.faq6q;
    next.faq6a = next.faq6a || en.faq6a;
    [
        'faq3bq', 'faq3ba', 'faq3cq', 'faq3ca', 'faq3dq', 'faq3da', 'faq4q', 'faq4a',
        'faq7q', 'faq7a', 'faq10q', 'faq10a', 'faq11q', 'faq11a',
        'faq12q', 'faq12a', 'faq13q', 'faq13a', 'faq14q', 'faq14a',
        'faq15q', 'faq15a', 'dlFreeFreewareNote',
        'refundPolicyTitle', 'refundPolicyBody',
        'faqR1q', 'faqR1a', 'faqR2q', 'faqR2a', 'faqR3q', 'faqR3a',
        'faqR4q', 'faqR4a', 'faqR5q', 'faqR5a',
        'settingsGuideTitle', 'settingsGuideText', 'settingsGuideThumbAria'
    ].forEach(function (key) {
        if (!next[key] && en[key]) next[key] = en[key];
    });
    next.faqGroupProductLabel = next.faqGroupProductLabel || en.faqGroupProductLabel;
    next.faqGroupLicenseLabel = next.faqGroupLicenseLabel || en.faqGroupLicenseLabel;
    next.faqGroupInstallLabel = next.faqGroupInstallLabel || en.faqGroupInstallLabel;
    next.faqGroupTroubleshootLabel = next.faqGroupTroubleshootLabel || en.faqGroupTroubleshootLabel;
    next.faq8q = next.faq8q || en.faq8q;
    next.faq8a = next.faq8a || en.faq8a;
    next.faq9q = next.faq9q || en.faq9q;
    next.faq9a = next.faq9a || en.faq9a;
    next.heroTitleMain = next.heroTitleMain || en.heroTitleMain || "Peekom";
    next.heroWinBtn = next.heroWinBtn || en.heroWinBtn;
    next.heroMacBtn = next.heroMacBtn || en.heroMacBtn;
    next.heroPlusBuyBtn = next.heroPlusBuyBtn || en.heroPlusBuyBtn;
    next.heroPlusSingleCardTitle = next.heroPlusSingleCardTitle || en.heroPlusSingleCardTitle;
    next.heroPlusDoubleCardTitle = next.heroPlusDoubleCardTitle || en.heroPlusDoubleCardTitle;
    next.heroPlusFamilyCardTitle = next.heroPlusFamilyCardTitle || en.heroPlusFamilyCardTitle;
    next.heroPlusCardBadge = next.heroPlusCardBadge || en.heroPlusCardBadge;
    next.heroPlusCardOsCompat = next.heroPlusCardOsCompat || en.heroPlusCardOsCompat;
    next.heroPlusSingleCardMeta = next.heroPlusSingleCardMeta || en.heroPlusSingleCardMeta;
    next.heroPlusDoubleCardMeta = next.heroPlusDoubleCardMeta || en.heroPlusDoubleCardMeta;
    next.heroPlusFamilyCardMeta = next.heroPlusFamilyCardMeta || en.heroPlusFamilyCardMeta;
    next.heroFreeCardTitle = next.heroFreeCardTitle || en.heroFreeCardTitle;
    next.heroFreeCardBadge = next.heroFreeCardBadge || en.heroFreeCardBadge;
    next.heroMacFreeCardBadge = next.heroMacFreeCardBadge || en.heroMacFreeCardBadge;
    next.heroWinCardMeta = next.heroWinCardMeta || en.heroWinCardMeta;
    next.heroMacFreeCardMeta = next.heroMacFreeCardMeta || en.heroMacFreeCardMeta;
    next.heroFreeDownloadLabel = next.heroFreeDownloadLabel || en.heroFreeDownloadLabel;
    next.dlWin = next.dlWin || en.dlWin;
    next.dlMac = next.dlMac || en.dlMac;
    next.dlPlusHint = next.dlPlusHint || en.dlPlusHint;
    next.dlTitle = next.dlTitle || en.dlTitle;
    next.dlSub = next.dlSub || en.dlSub;
    next.purchaseSuccessTitle = next.purchaseSuccessTitle || en.purchaseSuccessTitle;
    next.purchaseSuccessLead = next.purchaseSuccessLead || en.purchaseSuccessLead;
    next.purchaseSuccessKeyLabel = next.purchaseSuccessKeyLabel || en.purchaseSuccessKeyLabel;
    next.purchaseSuccessCopyBtn = next.purchaseSuccessCopyBtn || en.purchaseSuccessCopyBtn;
    next.purchaseSuccessCopied = next.purchaseSuccessCopied || en.purchaseSuccessCopied;
    next.purchaseSuccessStep1 = next.purchaseSuccessStep1 || en.purchaseSuccessStep1;
    next.purchaseSuccessStep2 = next.purchaseSuccessStep2 || en.purchaseSuccessStep2;
    next.purchaseSuccessStep3 = next.purchaseSuccessStep3 || en.purchaseSuccessStep3;
    next.purchaseSuccessDownloadBtn = next.purchaseSuccessDownloadBtn || en.purchaseSuccessDownloadBtn;
    next.purchaseSuccessEmailNote = next.purchaseSuccessEmailNote || en.purchaseSuccessEmailNote;
    next.faqTitle = next.faqTitle || en.faqTitle;
    next.faqSub = next.faqSub || en.faqSub;
    next.faq1q = next.faq1q || en.faq1q;
    next.winGuideBtn = next.winGuideBtn || en.winGuideBtn;
    next.settingsGuideTitle = next.settingsGuideTitle || en.settingsGuideTitle;
    next.settingsGuideText = next.settingsGuideText || en.settingsGuideText;
    next.linkChangelog = next.linkChangelog || en.linkChangelog;
    next.linkPrev = next.linkPrev || en.linkPrev;
    next.linkSmartScreen = next.linkSmartScreen || en.linkSmartScreen;
    next.helpTitle = next.helpTitle || en.helpTitle || en.navHelp;
    next.helpSub = next.helpSub || en.helpSub;
    next.promoNote = next.promoNote || en.promoNote;
    next.promoSectionTitle = next.promoSectionTitle || en.promoSectionTitle;
    next.promoFreeTitle = next.promoFreeTitle || en.promoFreeTitle;
    next.promoVat = next.promoVat || en.promoVat;
    next.promoLaunchLabel = next.promoLaunchLabel || en.promoLaunchLabel;
    next.comparePromoBanner = next.comparePromoBanner || en.comparePromoBanner;
    next.comparePricingExtra = next.comparePricingExtra || en.comparePricingExtra;
    next.dlPlusHintExtra = next.dlPlusHintExtra || en.dlPlusHintExtra;
    next.markdownGuideTitle = next.markdownGuideTitle || en.markdownGuideTitle;
    next.markdownGuideBody = next.markdownGuideBody || en.markdownGuideBody;
    next.formatBarGuideTitle = next.formatBarGuideTitle || en.formatBarGuideTitle;
    next.formatBarGuideBody = next.formatBarGuideBody || en.formatBarGuideBody;
    next.versionHistoryTitle = next.versionHistoryTitle || en.versionHistoryTitle;
    next.versionColVersion = next.versionColVersion || en.versionColVersion;
    next.versionColDate = next.versionColDate || en.versionColDate;
    next.versionColWin = next.versionColWin || en.versionColWin;
    next.versionColMac = next.versionColMac || en.versionColMac;
    next.versionLatest = next.versionLatest || en.versionLatest;
    next.versionWin = next.versionWin || en.versionWin;
    next.versionMac = next.versionMac || en.versionMac;
    next.changelogTitle = next.changelogTitle || en.changelogTitle;
    next.guideKeysTitle = next.guideKeysTitle || en.guideKeysTitle;
    next.guideKeysIntro = next.guideKeysIntro || en.guideKeysIntro;
    next.gkColAction = next.gkColAction || en.gkColAction;
    next.gkColKey = next.gkColKey || en.gkColKey;
    next.gkColNote = next.gkColNote || en.gkColNote;
    for (let gi = 1; gi <= 6; gi++) {
        next["gk" + gi + "a"] = next["gk" + gi + "a"] || en["gk" + gi + "a"];
        next["gk" + gi + "k"] = next["gk" + gi + "k"] || en["gk" + gi + "k"];
        next["gk" + gi + "n"] = next["gk" + gi + "n"] || en["gk" + gi + "n"];
    }
    next.guidePlusTitle = next.guidePlusTitle || en.guidePlusTitle;
    next.guideNavStart = next.guideNavStart || en.guideNavStart;
    next.guideNavKeys = next.guideNavKeys || en.guideNavKeys;
    next.guideNavEdit = next.guideNavEdit || en.guideNavEdit;
    next.guideNavPlus = next.guideNavPlus || en.guideNavPlus;
    next.guideSectionEditTitle = next.guideSectionEditTitle || en.guideSectionEditTitle;
    next.fz3Title = next.fz3Title || en.fz3Title;
    for (let n = 1; n <= 5; n++) {
        const key = "fz" + n + "Items";
        if (!next[key] || !next[key].length) next[key] = en[key];
        next["fz" + n + "Title"] = next["fz" + n + "Title"] || en["fz" + n + "Title"];
    }
    next.dlWinLabel = next.dlWinLabel || en.dlWinLabel;
    next.dlMacLabel = next.dlMacLabel || en.dlMacLabel;
    next.footerLangLabel = next.footerLangLabel || en.footerLangLabel;
    next.themeLight = next.themeLight || en.themeLight;
    next.themeDark = next.themeDark || en.themeDark;
    next.themeAuto = next.themeAuto || en.themeAuto;
    next.themeLightLabel = next.themeLightLabel || en.themeLightLabel;
    next.themeDarkLabel = next.themeDarkLabel || en.themeDarkLabel;
    next.themeAutoLabel = next.themeAutoLabel || en.themeAutoLabel;
    next.themeAriaLabel = next.themeAriaLabel || en.themeAriaLabel;
    next.pageCtaDownload = next.pageCtaDownload || en.pageCtaDownload;
    next.pageCtaCompare = next.pageCtaCompare || en.pageCtaCompare;
    ["features", "help", "faq", "contact", "download"].forEach(function (p) {
        const tKey = p + "CtaTitle";
        const dKey = p + "CtaDesc";
        next[tKey] = next[tKey] || en[tKey];
        next[dKey] = next[dKey] || en[dKey];
    });
    if (!next.compareSections || !next.compareSections.length) {
        const cmp = window.PeekomCompare || {};
        next.compareSections = (cmp.getCompareSections && cmp.getCompareSections(lang)) || cmp.SECTIONS_EN;
    }
    if (lang !== "ko" && !isKo) {
        next.privacyTitle = next.privacyTitle || en.privacyTitle;
        next.privacyUpdated = next.privacyUpdated || en.privacyUpdated;
        next.privacyBody = next.privacyBody || en.privacyBody;
        next.privacyBackLink = next.privacyBackLink || en.privacyBackLink;
    }
    for (let i = 1; i <= 6; i++) {
        next["help" + i + "t"] = next["help" + i + "t"] || en["help" + i + "t"];
        next["help" + i + "p"] = next["help" + i + "p"] || en["help" + i + "p"];
    }

    return next;
}

function getLocaleData() {
    const lang = resolveLang(currentLang);
    let raw;
    if (lang === "ko") {
        raw = i18n.ko;
    } else if (lang === "en") {
        raw = Object.assign({}, i18n.ko, i18n.en);
    } else {
        const badge = SITE_OFFER_BADGES[lang] || SITE_OFFER_BADGES.en;
        raw = Object.assign({}, i18n.en, i18n[lang] || {}, {
            heroPlusCardBadge: badge.paid,
            heroFreeCardBadge: badge.free,
            heroMacFreeCardBadge: badge.free
        });
    }
    const base = enrichLocaleData(raw, lang);
    const privacyPack = window.PeekomPrivacyI18n || {};
    const privacyLang = lang === "ko" ? "ko" : "en";
    const privacyData = privacyPack[privacyLang] || privacyPack.en || {};
    Object.assign(base, privacyData);
    const cmp = window.PeekomCompare || {};
    const sections = (cmp.getCompareSections && cmp.getCompareSections(lang)) || cmp.SECTIONS_EN;
    base.compareSections = sections;
    base.compareRows = cmp.flattenCompareRows
        ? cmp.flattenCompareRows(sections)
        : [];
    return base;
}

function getSearchSections(d) {
    return [
        { label: d.navHome, href: '/', keywords: 'home peekom 홈' },
        { label: d.navFeatures || 'Features', href: '/features/', keywords: 'features function compare plus free 비교 peekom plus' },
        { label: d.navDownload, href: '/download/', keywords: 'download windows mac setup 다운로드' },
        { label: d.navFaq, href: '/faq/', keywords: 'faq license smartscreen 자주 묻는 질문' },
        { label: d.navHelp, href: '/help/', keywords: 'guide help install shortcut 마크다운 서식바' },
        { label: d.navContact, href: '/contact/', keywords: 'contact email support 연락' }
    ];
}

function populateLangSelect() {
    const sel = document.getElementById('langSelect');
    if (!sel) return;
    sel.innerHTML = LANG_META.map(function(m) {
        return '<option value="' + m.code + '">' + m.label + '</option>';
    }).join('');
}

function detectBrowserLanguage() {
    try {
        const saved = localStorage.getItem('ppaekkom-lang');
        if (saved) return resolveLang(saved);
    } catch (e) {}
    const langs = navigator.languages || [navigator.language || 'en'];
    for (let i = 0; i < langs.length; i++) {
        const resolved = resolveLang(langs[i]);
        if (i18n[resolved]) return resolved;
    }
    return 'en';
}

function detectOS() {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('win') !== -1) return 'win';
    if (ua.indexOf('mac') !== -1) return 'mac';
    return 'generic';
}

function setLanguage(lang) {
    currentLang = resolveLang(lang);
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    try { localStorage.setItem('ppaekkom-lang', currentLang); } catch (e) {}
    updateUI();
}

function applyLinks() {
    const winDownloadIds = ["heroWinBtn", "dlWinBtn"];
    winDownloadIds.forEach(function (id) {
        const el = document.getElementById(id);
        if (!el) return;
        el.href = LINKS.win;
        el.setAttribute("download", WIN_SETUP_FILENAME);
        el.removeAttribute("target");
    });

    const macDownloadIds = ["heroMacBtn", "dlMacBtn"];
    macDownloadIds.forEach(function (id) {
        const el = document.getElementById(id);
        if (!el) return;
        el.href = LINKS.mac;
        el.setAttribute("download", MAC_DMG_FILENAME);
        el.removeAttribute("target");
    });

    const plusBuyMap = [
        { id: "heroPlusBuyBtn", link: LINKS.buySingle },
        { id: "heroPlusDoubleBuyBtn", link: LINKS.buyDouble },
        { id: "heroPlusFamilyBuyBtn", link: LINKS.buyFamily },
        { id: "dlPlusBuyBtn", link: LINKS.buySingle },
        { id: "dlPlusDoubleBuyBtn", link: LINKS.buyDouble },
        { id: "dlPlusFamilyBuyBtn", link: LINKS.buyFamily }
    ];
    plusBuyMap.forEach(function (item) {
        const el = document.getElementById(item.id);
        if (!el) return;
        el.href = item.link;
        el.target = "_blank";
        el.rel = "noopener noreferrer";
        el.removeAttribute("download");
    });

    const buyOnlyIds = ["dlBuyLink"];
    buyOnlyIds.forEach(function (id) {
        const el = document.getElementById(id);
        if (el) el.href = LINKS.buy;
    });

    const reviewBtn = document.getElementById("reviewFormBtn");
    if (reviewBtn && LINKS.reviewForm) {
        reviewBtn.href = LINKS.reviewForm;
        reviewBtn.target = "_blank";
        reviewBtn.rel = "noopener noreferrer";
    }
}

function triggerWinSetupDownload() {
    const a = document.createElement("a");
    a.href = LINKS.win;
    a.download = WIN_SETUP_FILENAME;
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
}

let purchaseSuccessLicenseKey = "";

function sanitizePurchaseLicenseKey(raw) {
    const text = String(raw || "").trim();
    if (!text) return "";
    if (/^\[license_key\]$/i.test(text)) return "";
    if (text.length < 8 || text.length > 80) return "";
    if (!/^[A-Za-z0-9-]+$/.test(text)) return "";
    return text;
}

function parsePurchaseLicenseKeyFromUrl() {
    try {
        const params = new URLSearchParams(window.location.search);
        return sanitizePurchaseLicenseKey(params.get("key"));
    } catch (e) {
        return "";
    }
}

function stripPurchaseKeyFromUrl() {
    try {
        const url = new URL(window.location.href);
        if (!url.searchParams.has("key")) return;
        url.searchParams.delete("key");
        const next = url.pathname + (url.searchParams.toString() ? "?" + url.searchParams.toString() : "") + url.hash;
        window.history.replaceState({}, "", next);
    } catch (e) {
        /* ignore */
    }
}

function renderPurchaseSuccessBanner(d, licenseKey) {
    const host = document.getElementById("purchaseSuccessHost");
    if (!host || !licenseKey) {
        if (host) {
            host.hidden = true;
            host.innerHTML = "";
        }
        return;
    }

    const esc = function (s) {
        return String(s)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    };

    host.hidden = false;
    host.innerHTML =
        '<section class="purchase-success" id="purchaseSuccessPanel">' +
            '<div class="purchase-success__aurora" aria-hidden="true"></div>' +
            '<div class="purchase-success__card">' +
                '<div class="purchase-success__hero">' +
                    '<img class="purchase-success__icon" src="images/plus.png" alt="" width="72" height="72">' +
                    '<span class="purchase-success__badge" aria-hidden="true">' +
                        '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>' +
                    "</span>" +
                "</div>" +
                '<h2 class="purchase-success__title">' + esc(d.purchaseSuccessTitle) + "</h2>" +
                '<p class="purchase-success__lead">' + esc(d.purchaseSuccessLead) + "</p>" +
                '<div class="purchase-success__key-wrap">' +
                    '<label class="purchase-success__key-label" for="purchaseLicenseKeyValue">' + esc(d.purchaseSuccessKeyLabel) + "</label>" +
                    '<div class="purchase-success__key-row">' +
                        '<code class="purchase-success__key" id="purchaseLicenseKeyValue">' + esc(licenseKey) + "</code>" +
                        '<button type="button" class="purchase-success__copy" id="purchaseLicenseCopyBtn">' + esc(d.purchaseSuccessCopyBtn) + "</button>" +
                    "</div>" +
                "</div>" +
                '<ol class="purchase-success__steps">' +
                    "<li>" + (d.purchaseSuccessStep1 || "") + "</li>" +
                    "<li>" + (d.purchaseSuccessStep2 || "") + "</li>" +
                    "<li>" + (d.purchaseSuccessStep3 || "") + "</li>" +
                "</ol>" +
                '<p class="purchase-success__email-note">' + esc(d.purchaseSuccessEmailNote) + "</p>" +
                '<div class="purchase-success__actions">' +
                    '<a href="' + LINKS.win + '" class="btn btn--buy btn--plus purchase-success__dl" download="' + WIN_SETUP_FILENAME + '">' + esc(d.purchaseSuccessDownloadBtn) + "</a>" +
                "</div>" +
            "</div>" +
        "</section>";

    const copyBtn = document.getElementById("purchaseLicenseCopyBtn");
    const keyEl = document.getElementById("purchaseLicenseKeyValue");
    if (copyBtn && keyEl) {
        copyBtn.addEventListener("click", function () {
            const keyText = keyEl.textContent || "";
            const copiedLabel = d.purchaseSuccessCopied || "Copied";
            const defaultLabel = d.purchaseSuccessCopyBtn || "Copy";
            function markCopied() {
                copyBtn.textContent = copiedLabel;
                copyBtn.classList.add("purchase-success__copy--done");
                setTimeout(function () {
                    copyBtn.textContent = defaultLabel;
                    copyBtn.classList.remove("purchase-success__copy--done");
                }, 2000);
            }
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(keyText).then(markCopied).catch(function () {
                    window.prompt(d.purchaseSuccessKeyLabel || "License key", keyText);
                });
            } else {
                window.prompt(d.purchaseSuccessKeyLabel || "License key", keyText);
                markCopied();
            }
        });
    }

    const panel = document.getElementById("purchaseSuccessPanel");
    if (panel && panel.scrollIntoView) {
        requestAnimationFrame(function () {
            panel.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }
}

function initPurchaseSuccess(d) {
    if (document.body.getAttribute("data-page") !== "download") return;
    if (!purchaseSuccessLicenseKey) {
        purchaseSuccessLicenseKey = parsePurchaseLicenseKeyFromUrl();
        if (purchaseSuccessLicenseKey) stripPurchaseKeyFromUrl();
    }
    renderPurchaseSuccessBanner(d, purchaseSuccessLicenseKey);
}

function restoreModalGuideView() {
    const overlay = document.getElementById("modalOverlay");
    if (!overlay) return;
    const list = overlay.querySelector(".guide-list");
    const infoEl = document.getElementById("modalInfoBody");
    if (list) list.hidden = false;
    if (infoEl) infoEl.hidden = true;
    const d = getLocaleData();
    const guideTitleEl = document.getElementById("guideTitle");
    if (guideTitleEl && d.guideTitle) guideTitleEl.textContent = d.guideTitle;
}

function showMacComingSoon(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    const d = getLocaleData();
    const overlay = document.getElementById("modalOverlay");
    if (!overlay) return;
    const titleEl = document.getElementById("guideTitle");
    const list = overlay.querySelector(".guide-list");
    let infoEl = document.getElementById("modalInfoBody");
    if (!infoEl) {
        infoEl = document.createElement("p");
        infoEl.id = "modalInfoBody";
        infoEl.className = "modal-info-body";
        if (list) list.parentNode.insertBefore(infoEl, list);
        else overlay.querySelector(".modal")?.appendChild(infoEl);
    }
    if (titleEl) titleEl.textContent = d.macComingSoonTitle || "macOS";
    infoEl.innerHTML = d.macComingSoonBody || "macOS version is in development.";
    infoEl.hidden = false;
    if (list) list.hidden = true;
    openModal({ mode: "info" });
}

var heroOfferActionsBound = false;

function initHeroOfferActions() {
    if (heroOfferActionsBound) return;
    heroOfferActionsBound = true;
    // Mac/Windows free cards are direct download links (href set in applyLinks).
}

function setThemeBtnA11y(id, label) {
    const el = document.getElementById(id);
    if (!el || !label) return;
    el.setAttribute("aria-label", label);
    el.setAttribute("title", label);
}

function setText(id, value) {
    const el = document.getElementById(id);
    if (el && value != null) {
        if (id === 'heroFreeCompareNote' || id === 'dlFreeCompareNote' || id === 'faq1a' || id === 'dlPlusHint' || id === 'faq2a' || id === 'faq3a' || id === 'faq3ba' || id === 'faq3ca' || id === 'faq3da' || id === 'faq5a' || id === 'faq6a' || id === 'faq7a' || id === 'faq8a' || id === 'faq9a' || id === 'faq10a' || id === 'faq11a' || id === 'faq12a' || id === 'faq13a' || id === 'faq14a' || id === 'faq15a' || id === 'refundPolicyBody' || id === 'faqR1a' || id === 'faqR2a' || id === 'faqR3a' || id === 'faqR4a' || id === 'faqR5a' || id === 'settingsGuideText') {
            el.innerHTML = value;
        } else {
            el.textContent = value;
        }
    }
}

function renderFeatureListItems(items) {
    return (items || []).map(function (item) {
        const badge = item.plus ? ' <span class="plus-badge-inline">Plus</span>' : "";
        return "<li>" + item.text + badge + "</li>";
    }).join("");
}

function renderFeatureBlocks(d) {
    for (let n = 1; n <= 5; n++) {
        const titleEl = document.getElementById("fz" + n + "Title");
        const listEl = document.getElementById("fz" + n + "List");
        const titleKey = "fz" + n + "Title";
        const itemsKey = "fz" + n + "Items";
        if (titleEl && d[titleKey]) titleEl.textContent = d[titleKey];
        if (listEl && d[itemsKey]) listEl.innerHTML = renderFeatureListItems(d[itemsKey]);
    }
}

var faqAccordionBound = false;

function setFaqAccordionOpen(item, open) {
    if (!item) return;
    const trigger = item.querySelector(".faq-accordion__trigger");
    const panel = item.querySelector(".faq-accordion__panel");
    if (!trigger || !panel) return;
    item.classList.toggle("is-open", open);
    trigger.setAttribute("aria-expanded", open ? "true" : "false");
    panel.hidden = !open;
}

function initFaqAccordion() {
    const items = document.querySelectorAll(".faq-accordion");
    if (!items.length) return;
    if (!faqAccordionBound) {
        faqAccordionBound = true;
        items.forEach(function (item) {
            const trigger = item.querySelector(".faq-accordion__trigger");
            if (!trigger) return;
            trigger.addEventListener("click", function () {
                const willOpen = !item.classList.contains("is-open");
                items.forEach(function (other) {
                    setFaqAccordionOpen(other, other === item && willOpen);
                });
            });
        });
    }
}

function renderPageCtaStrip(d) {
    const host = document.getElementById("pageCtaStrip");
    if (!host) return;
    const page = document.body.getAttribute("data-page") || "";
    if (page === "features") {
        host.innerHTML = "";
        host.style.display = "none";
        return;
    }
    const titleKey = page + "CtaTitle";
    const descKey = page + "CtaDesc";
    const title = d[titleKey];
    const desc = d[descKey];
    if (!title) {
        host.innerHTML = "";
        host.style.display = "none";
        return;
    }
    host.style.display = "";
    let actions = "";
    if (page === "features" || page === "faq" || page === "download") {
        actions += '<a href="' + LINKS.buy + '" class="btn btn--buy btn--plus" target="_blank" rel="noopener">' + d.compareCta + "</a>";
    }
    if (page === "features" || page === "faq" || page === "help" || page === "download") {
        actions += '<a href="/features/#compare" class="btn">' + d.pageCtaCompare + "</a>";
    }
    if (page !== "download") {
        actions += '<a href="/download/" class="btn">' + d.pageCtaDownload + "</a>";
    }
    host.innerHTML =
        '<div class="page-cta-strip__text">' +
            '<div class="page-cta-strip__title">' + title + "</div>" +
            '<div class="page-cta-strip__desc">' + desc + "</div>" +
        "</div>" +
        '<div class="page-cta-strip__actions">' + actions + "</div>";
}

function renderPrivacyPage(d) {
    if (document.body.getAttribute("data-page") !== "privacy") return;
    setText("privacyTitle", d.privacyTitle);
    setText("privacyUpdated", d.privacyUpdated);
    const bodyEl = document.getElementById("privacyBody");
    if (bodyEl && d.privacyBody) bodyEl.innerHTML = d.privacyBody;
    const backEl = document.getElementById("privacyBackLink");
    if (backEl && d.privacyBackLink) {
        backEl.textContent = d.privacyBackLink;
        backEl.href = "/";
    }
}

function updateUI() {
    const d = getLocaleData();
    const en = i18n.en;

    setText('navHome', d.navHome);
    setText('navFeatures', d.navFeatures);
    setText('navDownload', d.navDownload);
    setText('navFaq', d.navFaq);
    setText('navHelp', d.navHelp || d.navGuide);
    setText('navContact', d.navContact);
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.value = currentLang;
        langSelect.setAttribute('aria-label', d.footerLangLabel || 'Language');
    }
    setThemeBtnA11y('themeLightBtn', d.themeLightLabel);
    setThemeBtnA11y('themeDarkBtn', d.themeDarkLabel);
    setThemeBtnA11y('themeAutoBtn', d.themeAutoLabel);
    const themeSwitch = document.getElementById('themeSwitch');
    if (themeSwitch) themeSwitch.setAttribute('aria-label', d.themeAriaLabel);
    if (window.PeekomTheme) window.PeekomTheme.init();

    const heroTitleEl = document.getElementById('heroTitle');
    if (heroTitleEl) {
        heroTitleEl.innerHTML =
            '<img class="hero__title-icon" src="images/index.png" alt="Peekom" id="heroIcon">' +
            '<span class="hero__title-text"><span class="purple">' + (d.heroTitleMain || 'Peekom') + '</span></span>';
    }

    const heroTaglineEl = document.getElementById('heroTagline');
    if (heroTaglineEl) heroTaglineEl.innerHTML = d.heroTagline;
    updateHeroOfferCards(d);
    setText('heroPlusHeadTitle', d.promoSectionTitle || "Peekom Plus(유료)");
    setText('heroFreeTitle', d.promoFreeTitle || "Peekom(무료)");
    setText('heroFreeCompareNote', d.heroFreeCompareNote);
    setText('heroUpgradeNote', d.heroUpgradeNote);

    setText('carouselCap1', d.carouselCap1);
    setText('reviewBtnLabel', d.reviewBtnLabel);

    if (window.PeekomReviews) {
        window.PeekomReviews.refresh({
            reviewEmpty: d.reviewEmpty,
            reviewAnonymous: d.reviewAnonymous
        });
    }

    const detectedOsEl = document.getElementById('detectedOs');
    const winGuideBtnEl = document.getElementById('winGuideBtn');
    const winGuideFooterEl = document.getElementById('winGuideFooter');
    if (detectedOsEl) {
        if (userOS === 'win') {
            detectedOsEl.innerHTML = d.detectWin;
            if (winGuideBtnEl) winGuideBtnEl.style.display = 'inline-block';
            if (winGuideFooterEl) winGuideFooterEl.style.display = 'block';
        } else if (userOS === 'mac') {
            detectedOsEl.innerHTML = d.detectMac;
            if (winGuideBtnEl) winGuideBtnEl.style.display = 'none';
            if (winGuideFooterEl) winGuideFooterEl.style.display = 'none';
        } else {
            detectedOsEl.textContent = d.detectGeneric.replace(/<[^>]+>/g, '');
            if (winGuideBtnEl) winGuideBtnEl.style.display = 'none';
            if (winGuideFooterEl) winGuideFooterEl.style.display = 'none';
        }
    }

    setText('featuresTitle', d.featuresTitle);
    setText('featuresSub', d.featuresSub);
    setText('compareTitle', d.compareTitle);
    setText('compareSub', d.compareSub);
    const compareHost = document.getElementById('compareTableHost');
    if (compareHost && window.PeekomCompare) {
        compareHost.innerHTML = window.PeekomCompare.buildCompareTable(d);
    }

    setText('winGuideBtn', d.winGuideBtn);
    setText('settingsGuideTitle', d.settingsGuideTitle);
    setText('settingsGuideText', d.settingsGuideText);
    const settingsGuideThumb = document.getElementById('settingsGuideThumb');
    if (settingsGuideThumb && d.settingsGuideThumbAria) {
        settingsGuideThumb.setAttribute('aria-label', d.settingsGuideThumbAria);
    }
    setText('dlTitle', d.dlTitle);
    setText('dlSub', d.dlSub);
    setText('dlPlusHeadTitle', d.promoSectionTitle || "Peekom Plus(유료)");
    setText('dlFreeTitle', d.promoFreeTitle || "Peekom(무료)");
    setText('dlFreeCompareNote', d.heroFreeCompareNote);
    setText('dlFreeFreewareNote', d.dlFreeFreewareNote);
    setText('linkChangelog', d.linkChangelog);
    setText('linkPrev', d.linkPrev);
    setText('linkSmartScreen', d.linkSmartScreen);

    setText('faqTitle', d.faqTitle);
    setText('faqSub', d.faqSub);
    setText('faqGroupProductLabel', d.faqGroupProductLabel);
    setText('faqGroupLicenseLabel', d.faqGroupLicenseLabel);
    setText('faqGroupInstallLabel', d.faqGroupInstallLabel);
    setText('faqGroupTroubleshootLabel', d.faqGroupTroubleshootLabel);
    setText('refundPolicyTitle', d.refundPolicyTitle);
    setText('refundPolicyBody', d.refundPolicyBody);
    setText('faqR1q', d.faqR1q);
    setText('faqR1a', d.faqR1a);
    setText('faqR2q', d.faqR2q);
    setText('faqR2a', d.faqR2a);
    setText('faqR3q', d.faqR3q);
    setText('faqR3a', d.faqR3a);
    setText('faqR4q', d.faqR4q);
    setText('faqR4a', d.faqR4a);
    setText('faqR5q', d.faqR5q);
    setText('faqR5a', d.faqR5a);
    setText('faq1q', d.faq1q);
    setText('faq1a', d.faq1a);
    setText('faq10q', d.faq10q);
    setText('faq10a', d.faq10a);
    setText('faq2q', d.faq2q);
    setText('faq2a', d.faq2a);
    setText('faq8q', d.faq8q);
    setText('faq8a', d.faq8a);
    setText('faq9q', d.faq9q);
    setText('faq9a', d.faq9a);
    setText('faq3q', d.faq3q);
    setText('faq3a', d.faq3a);
    setText('faq3bq', d.faq3bq);
    setText('faq3ba', d.faq3ba);
    setText('faq3cq', d.faq3cq);
    setText('faq3ca', d.faq3ca);
    setText('faq3dq', d.faq3dq);
    setText('faq3da', d.faq3da);
    setText('faq11q', d.faq11q);
    setText('faq11a', d.faq11a);
    setText('faq12q', d.faq12q);
    setText('faq12a', d.faq12a);
    setText('faq15q', d.faq15q);
    setText('faq15a', d.faq15a);
    setText('faq13q', d.faq13q);
    setText('faq13a', d.faq13a);
    setText('faq4q', d.faq4q);
    const faq4aEl = document.getElementById('faq4a');
    if (faq4aEl) faq4aEl.innerHTML = d.faq4a;
    setText('faq5q', d.faq5q);
    setText('faq5a', d.faq5a);
    if (d.faq6q) {
        setText('faq6q', d.faq6q);
        setText('faq6a', d.faq6a);
        setText('faq7q', d.faq7q);
        setText('faq7a', d.faq7a);
        setText('faq14q', d.faq14q);
        setText('faq14a', d.faq14a);
    }

    setText('helpTitle', d.helpTitle || d.navGuide);
    setText('helpSub', d.helpSub);
    const guideStartEl = document.getElementById('guideStartBody');
    if (guideStartEl && d.guideStartBody) guideStartEl.innerHTML = d.guideStartBody;

    const guideKeysIntroEl = document.getElementById('guideKeysIntro');
    if (guideKeysIntroEl && d.guideKeysIntro) guideKeysIntroEl.innerHTML = d.guideKeysIntro;

    const gkTextIds = ['gkColAction', 'gkColKey', 'gkColNote'];
    for (let gi = 1; gi <= 6; gi++) {
        gkTextIds.push('gk' + gi + 'a', 'gk' + gi + 'k', 'gk' + gi + 'n');
    }
    gkTextIds.forEach(function(id) {
        setText(id, d[id]);
    });
    setText('formatBarGuideTitle', d.formatBarGuideTitle);
    const formatBarGuideBody = document.getElementById('formatBarGuideBody');
    if (formatBarGuideBody && d.formatBarGuideBody) formatBarGuideBody.innerHTML = d.formatBarGuideBody;
    const markdownGuideTitle = document.getElementById('markdownGuideTitle');
    const markdownGuideBody = document.getElementById('markdownGuideBody');
    if (markdownGuideTitle) markdownGuideTitle.hidden = true;
    if (markdownGuideBody) { markdownGuideBody.hidden = true; markdownGuideBody.innerHTML = ''; }
    const guidePlusEl = document.getElementById('guidePlusBody');
    if (guidePlusEl) guidePlusEl.innerHTML = buildGuidePlusHtml(d);
    ['guidePlusTitle','guideNavStart','guideNavKeys','guideNavEdit','guideNavPlus'].forEach(function(id) {
        setText(id, d[id]);
    });
    setText('guideSectionStartTitle', d.guideNavStart);
    setText('guideSectionKeysTitle', d.guideKeysTitle || d.guideNavKeys);
    setText('guideSectionEditTitle', d.guideSectionEditTitle);
    setText('guideSectionPlusTitle', d.guidePlusTitle || d.guideNavPlus);
    ['versionHistoryTitle','changelogTitle'].forEach(function(id) { setText(id, d[id]); });
    renderVersionHistory(d);
    renderChangelog(d);
    renderFeatureBlocks(d);
    renderPageCtaStrip(d);
    initPurchaseSuccess(d);
    initFaqAccordion();

    setText('contactTitle', d.contactTitle);
    setText('contactSub', d.contactSub);
    setText('contactFeedbackTitle', d.contactFeedbackTitle);
    setText('contactFeedbackDesc', d.contactFeedbackDesc);
    setText('contactFeedbackBtn', d.contactFeedbackBtn);
    setText('contactReviewTitle', d.contactReviewTitle);
    setText('contactReviewDesc', d.contactReviewDesc);
    setText('contactReviewBtn', d.contactReviewBtn);
    setText('contactEmailTitle', d.contactEmailTitle);
    setText('contactEmailDesc', d.contactEmailDesc);
    setText('contactNote', d.contactNote);
    const emailEl = document.getElementById('contactEmail');
    if (emailEl) {
        emailEl.textContent = d.contactEmail;
        emailEl.href = 'mailto:' + d.contactEmail;
    }
    setText('footerCopy', d.footerCopy);
    setText('footerPrivacy', d.footerPrivacy);

    const guideTitleEl = document.getElementById('guideTitle');
    if (guideTitleEl) guideTitleEl.textContent = d.guideTitle;
    const step1El = document.getElementById('step1');
    if (step1El) step1El.innerHTML = d.step1;
    const step2El = document.getElementById('step2');
    if (step2El) step2El.innerHTML = d.step2;
    const step3El = document.getElementById('step3');
    if (step3El) step3El.innerHTML = d.step3;
    const modalCloseBtn = document.querySelector('.modal__close');
    if (modalCloseBtn) modalCloseBtn.setAttribute('aria-label', d.modalClose);

    const brandIcon = document.getElementById('brandIcon');
    if (brandIcon) brandIcon.alt = 'Peekom';
    applyLinks();
    highlightOSButtons();
    renderPrivacyPage(d);
    syncHeroHeights();
}

function syncHeroHeights() {
    const textCol = document.getElementById('heroTextCol');
    const carousel = document.getElementById('heroCarousel');
    const viewport = carousel && carousel.querySelector('.hero-carousel__viewport');
    if (!textCol || !carousel || !viewport) return;

    const CAROUSEL_SCALE = 0.8;

    if (window.innerWidth <= 700) {
        carousel.style.width = '';
        viewport.style.height = '';
        viewport.style.width = '';
        const footerEl = document.getElementById('winGuideFooter');
        if (footerEl) footerEl.style.width = '';
        return;
    }

    const h = textCol.offsetHeight;
    const dotsEl = carousel.querySelector('.hero-carousel__dots');
    let chromeH = 8;
    if (dotsEl) chromeH += dotsEl.offsetHeight;
    const viewportH = Math.max(200, Math.round((h - chromeH) * CAROUSEL_SCALE));
    const viewportW = Math.round(viewportH * 4 / 3);
    viewport.style.height = viewportH + 'px';
    viewport.style.width = viewportW + 'px';
    carousel.style.width = viewportW + 'px';
    const footerEl = document.getElementById('winGuideFooter');
    if (footerEl) footerEl.style.width = viewportW + 'px';
}

window.addEventListener('resize', syncHeroHeights);

function highlightOSButtons() {
    document.querySelectorAll(".hero-offer-card--download[data-os]").forEach(function(btn) {
        btn.classList.remove("btn--recommended");
    });
    if (userOS === "win" || userOS === "mac") {
        document.querySelectorAll('.hero-offer-card--download[data-os="' + userOS + '"]').forEach(function(btn) {
            btn.classList.add("btn--recommended");
        });
    }
    applyPlusRecommended();
}

function applyPlusRecommended() {
    document.querySelectorAll("[data-tier]").forEach(function(btn) {
        btn.classList.toggle("btn--recommended", btn.getAttribute("data-tier") === "double");
    });
}

/* ── Search ── */
function runSearch(query) {
    const resultsEl = document.getElementById('searchResults');
    if (!query.trim()) {
        resultsEl.classList.remove('open');
        resultsEl.innerHTML = '';
        return;
    }

    const q = query.toLowerCase();
    const d = getLocaleData();
    const hits = [];

    getSearchSections(d).forEach(function(s) {
        if (s.label.toLowerCase().includes(q) || s.keywords.includes(q)) {
            hits.push({ label: s.label, href: s.href });
        }
    });

    document.querySelectorAll('.faq-accordion').forEach(function(item) {
        const text = item.textContent.toLowerCase();
        const kw = (item.getAttribute('data-search') || '') + ' ' + text;
        if (kw.includes(q)) {
            const qEl = item.querySelector('[id^="faq"][id$="q"]');
            hits.push({ label: qEl ? qEl.textContent : text.slice(0, 60), href: '/faq/' });
            setFaqAccordionOpen(item, true);
        }
    });

    if (hits.length === 0) {
        resultsEl.innerHTML = '<a href="#">' + d.searchNoResults + '</a>';
    } else {
        const seen = new Set();
        resultsEl.innerHTML = hits.filter(function(h) {
            const key = h.label + h.href;
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        }).slice(0, 6).map(function(h) {
            return '<a href="' + h.href + '" onclick="closeSearch()">' + h.label + '</a>';
        }).join('');
    }
    resultsEl.classList.add('open');
}

function closeSearch() {
    document.getElementById('searchResults').classList.remove('open');
}

document.getElementById('searchInput')?.addEventListener('input', function(e) {
    runSearch(e.target.value);
});

document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-wrap')) closeSearch();
});

/* ── Modal ── */
function openModal(options) {
    options = options || {};
    if (options.mode !== "info") {
        restoreModalGuideView();
    }
    document.getElementById("modalOverlay").classList.add("active");
}

function closeModal() {
    document.getElementById("modalOverlay").classList.remove("active");
    restoreModalGuideView();
}

function closeModalOnBackdrop(e) {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
}

/* ── Image zoom lightbox ── */
function openImgZoom(src) {
    const overlay = document.getElementById('imgZoomOverlay');
    const img = document.getElementById('imgZoomImg');
    if (!overlay || !img) return;
    if (src) img.src = src;
    overlay.classList.add('active');
}

function closeImgZoom() {
    const overlay = document.getElementById('imgZoomOverlay');
    if (overlay) overlay.classList.remove('active');
}

function closeImgZoomOnBackdrop(e) {
    if (e.target === document.getElementById('imgZoomOverlay')) closeImgZoom();
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { closeModal(); closeImgZoom(); }
});

function updateActiveNav() {
    const page = document.body.getAttribute("data-page") || "home";
    document.querySelectorAll(".navbar__links a").forEach(function (a) {
        a.classList.toggle("active", a.getAttribute("data-nav") === page);
    });
}

window.onload = function() {
    userOS = detectOS();
    populateLangSelect();
    currentLang = detectBrowserLanguage();
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    applyLinks();
    updateUI();
    updateActiveNav();
    initFaqAccordion();
    initHeroOfferActions();
    if (window.PeekomCarousel) window.PeekomCarousel.init();
    if (window.PeekomReviews) {
        const d = enrichLocaleData(i18n[currentLang] || i18n.en, currentLang);
        window.PeekomReviews.init({
            reviewEmpty: d.reviewEmpty,
            reviewAnonymous: d.reviewAnonymous
        });
    }
};
    window.PeekomSite = {
        LINKS: LINKS,
        PLUS_TIERS: PLUS_TIERS,
        PRICING: PRICING,
        setLanguage: setLanguage,
        openModal: openModal,
        closeModal: closeModal,
        closeModalOnBackdrop: closeModalOnBackdrop,
        closeSearch: closeSearch,
        showMacComingSoon: showMacComingSoon
    };
    window.setLanguage = setLanguage;
    window.openModal = openModal;
    window.closeModal = closeModal;
    window.closeModalOnBackdrop = closeModalOnBackdrop;
    window.openImgZoom = openImgZoom;
    window.closeImgZoom = closeImgZoom;
    window.closeImgZoomOnBackdrop = closeImgZoomOnBackdrop;
    window.closeSearch = closeSearch;
})();
