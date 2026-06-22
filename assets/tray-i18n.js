// Tray menu strings for main process (16 languages)
const TRAY_STRINGS = {
  ko: {
    toggleMemo: "메모 열기/닫기",
    addIndex: "인덱스 추가",
    settings: "환경설정",
    help: "도움말",
    upgradePlus: "✨ Plus로 업그레이드",
    restart: "재시작",
    quit: "종료",
    exportTitle: "보내기",
    importTitle: "백업 파일 불러오기",
    imagePickTitle: "이미지 선택"
  },
  en: {
    toggleMemo: "Open / close memo",
    addIndex: "Add index",
    settings: "Settings",
    help: "Help",
    upgradePlus: "✨ Upgrade to Plus",
    restart: "Restart",
    quit: "Quit",
    exportTitle: "Export",
    importTitle: "Load backup file",
    imagePickTitle: "Choose image"
  },
  ja: {
    toggleMemo: "メモを開く / 閉じる",
    addIndex: "インデックスを追加",
    settings: "設定",
    help: "ヘルプ",
    upgradePlus: "✨ Plusにアップグレード",
    restart: "再起動",
    quit: "終了",
    exportTitle: "エクスポート",
    importTitle: "バックアップを読み込む",
    imagePickTitle: "画像を選択"
  },
  "zh-CN": {
    toggleMemo: "打开 / 关闭备忘",
    addIndex: "添加索引",
    settings: "设置",
    help: "帮助",
    upgradePlus: "✨ 升级到 Plus",
    restart: "重新启动",
    quit: "退出",
    exportTitle: "导出",
    importTitle: "加载备份文件",
    imagePickTitle: "选择图片"
  },
  "zh-TW": {
    toggleMemo: "開啟 / 關閉備忘",
    addIndex: "新增索引",
    settings: "設定",
    help: "說明",
    upgradePlus: "✨ 升級至 Plus",
    restart: "重新啟動",
    quit: "結束",
    exportTitle: "匯出",
    importTitle: "載入備份檔案",
    imagePickTitle: "選擇圖片"
  },
  es: {
    toggleMemo: "Abrir / cerrar nota",
    addIndex: "Añadir índice",
    settings: "Ajustes",
    help: "Ayuda",
    upgradePlus: "✨ Actualizar a Plus",
    restart: "Reiniciar",
    quit: "Salir",
    exportTitle: "Exportar",
    importTitle: "Cargar copia de seguridad",
    imagePickTitle: "Elegir imagen"
  },
  fr: {
    toggleMemo: "Ouvrir / fermer la note",
    addIndex: "Ajouter un index",
    settings: "Paramètres",
    help: "Aide",
    upgradePlus: "✨ Passer à Plus",
    restart: "Redémarrer",
    quit: "Quitter",
    exportTitle: "Exporter",
    importTitle: "Charger une sauvegarde",
    imagePickTitle: "Choisir une image"
  },
  de: {
    toggleMemo: "Notiz öffnen / schließen",
    addIndex: "Index hinzufügen",
    settings: "Einstellungen",
    help: "Hilfe",
    upgradePlus: "✨ Auf Plus upgraden",
    restart: "Neu starten",
    quit: "Beenden",
    exportTitle: "Exportieren",
    importTitle: "Backup laden",
    imagePickTitle: "Bild auswählen"
  },
  pt: {
    toggleMemo: "Abrir / fechar nota",
    addIndex: "Adicionar índice",
    settings: "Configurações",
    help: "Ajuda",
    upgradePlus: "✨ Atualizar para Plus",
    restart: "Reiniciar",
    quit: "Sair",
    exportTitle: "Exportar",
    importTitle: "Carregar backup",
    imagePickTitle: "Escolher imagem"
  },
  it: {
    toggleMemo: "Apri / chiudi nota",
    addIndex: "Aggiungi indice",
    settings: "Impostazioni",
    help: "Guida",
    upgradePlus: "✨ Passa a Plus",
    restart: "Riavvia",
    quit: "Esci",
    exportTitle: "Esporta",
    importTitle: "Carica backup",
    imagePickTitle: "Scegli immagine"
  },
  ru: {
    toggleMemo: "Открыть / закрыть заметку",
    addIndex: "Добавить индекс",
    settings: "Настройки",
    help: "Справка",
    upgradePlus: "✨ Перейти на Plus",
    restart: "Перезапуск",
    quit: "Выход",
    exportTitle: "Экспорт",
    importTitle: "Загрузить резервную копию",
    imagePickTitle: "Выбрать изображение"
  },
  vi: {
    toggleMemo: "Mở / đóng ghi chú",
    addIndex: "Thêm chỉ mục",
    settings: "Cài đặt",
    help: "Trợ giúp",
    upgradePlus: "✨ Nâng cấp Plus",
    restart: "Khởi động lại",
    quit: "Thoát",
    exportTitle: "Xuất",
    importTitle: "Tải bản sao lưu",
    imagePickTitle: "Chọn ảnh"
  },
  th: {
    toggleMemo: "เปิด / ปิดโน้ต",
    addIndex: "เพิ่มดัชนี",
    settings: "การตั้งค่า",
    help: "ความช่วยเหลือ",
    upgradePlus: "✨ อัปเกรดเป็น Plus",
    restart: "เริ่มใหม่",
    quit: "ออก",
    exportTitle: "ส่งออก",
    importTitle: "โหลดไฟล์สำรอง",
    imagePickTitle: "เลือกรูปภาพ"
  },
  id: {
    toggleMemo: "Buka / tutup catatan",
    addIndex: "Tambah indeks",
    settings: "Pengaturan",
    help: "Bantuan",
    upgradePlus: "✨ Upgrade ke Plus",
    restart: "Mulai ulang",
    quit: "Keluar",
    exportTitle: "Ekspor",
    importTitle: "Muat cadangan",
    imagePickTitle: "Pilih gambar"
  },
  hi: {
    toggleMemo: "नोट खोलें / बंद करें",
    addIndex: "इंडेक्स जोड़ें",
    settings: "सेटिंग्स",
    help: "सहायता",
    upgradePlus: "✨ Plus में अपग्रेड",
    restart: "पुनः आरंभ",
    quit: "बंद करें",
    exportTitle: "निर्यात",
    importTitle: "बैकअप लोड करें",
    imagePickTitle: "छवि चुनें"
  },
  ar: {
    toggleMemo: "فتح / إغلاق الملاحظة",
    addIndex: "إضافة فهرس",
    settings: "الإعدادات",
    help: "مساعدة",
    upgradePlus: "✨ الترقية إلى Plus",
    restart: "إعادة التشغيل",
    quit: "إنهاء",
    exportTitle: "تصدير",
    importTitle: "تحميل نسخة احتياطية",
    imagePickTitle: "اختيار صورة"
  }
};

function resolveTrayLang(code) {
  if (!code) return "en";
  if (TRAY_STRINGS[code]) return code;
  const prefix = String(code).split("-")[0];
  const match = Object.keys(TRAY_STRINGS).find((k) => k === prefix || k.startsWith(prefix + "-"));
  return match || "en";
}

function trayT(key, lang) {
  const l = resolveTrayLang(lang);
  return TRAY_STRINGS[l]?.[key] || TRAY_STRINGS.en[key] || TRAY_STRINGS.ko[key] || key;
}

module.exports = { TRAY_STRINGS, resolveTrayLang, trayT };
