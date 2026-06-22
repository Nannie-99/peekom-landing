/* eslint-disable */
const fs = require("fs");
const path = require("path");

const patchDir = path.join(__dirname, "patches");
if (!fs.existsSync(patchDir)) fs.mkdirSync(patchDir, { recursive: true });

const i18nPath = path.join(__dirname, "..", "assets", "i18n.js");
const src = fs.readFileSync(i18nPath, "utf8");
const m = src.match(/const STRINGS = (\{[\s\S]*?\n  \});\s*\n\s*\/\/ Fill missing/);
const STRINGS = eval("(" + m[1] + ")");

const SHARED_KEYS = [
  "unsavedChangesTitle", "unsavedChangesMessage", "unsavedChangesApply", "unsavedChangesCancel",
  "indexTitleRequired", "settingsTitlePlusKo", "settingsTitleFreeKo", "settingsTitlePlus", "settingsTitleFree",
  "settingsAboutShort", "memoOpacityLabel", "memoOpacityHint", "memoAspectLabel", "memoAspectSquare",
  "memoAspectPortrait", "memoAspectHint", "monitorHint", "hoverDelayLabel", "hoverDelayHint", "hoverDelayUnit",
  "shortcutOpenClose", "shortcutSlotUp", "shortcutSlotDown", "shortcutIndexHint", "shortcutCapturePlaceholder",
  "pinToggleDblclickDefault", "pinToggleChipOnly", "pinToggleClickMemo", "pinToggleRecommendHint",
  "resetCommonDefaults", "resetCommonDefaultsHint", "backupManageTitle", "backupHeadHint", "backupExpand",
  "backupCollapse", "backupExportTab", "backupImportTab", "exportIndicesLabel", "exportRunBtn",
  "exportFormatTxtShort", "exportFormatMdShort", "exportFormatJsonShort", "importOverwriteHint",
  "showTrayIcon", "runAtStartupWin", "indexTitleMaxHint", "handlePositionLabel", "handlePositionHint",
  "handleSlotOption", "fontSizePlusHint", "fontFamilyLabel", "fontSystemDefault", "fontFamilyPlusHint",
  "attachedImagesLabel", "attachedImagesHint", "attachedImagesEmpty", "commonTabAriaLabel", "upgradePlusBtn",
  "eyedropperTitle", "eyedropperUnsupported", "colorAdvancedPicker", "colorPickScreen", "settingsTierPaid",
  "settingsTierFree", "shortcutOverlapError", "resetCommonConfirm", "resetCommonDone", "exportSelectOneError",
  "importSyncFail", "indexAddSyncFail", "deleteSyncFail", "indexDeleted", "imagePreviewAlt", "imageLoadedFromFile",
  "imagePreviewFallback", "imageNoPathInfo", "fontSizeRangeHint", "startupCheckFail", "startupSetError",
  "stateChangedConfirm", "applySyncFail", "fmtTextColor", "fmtColorDefault", "fmtColorRed", "fmtColorBlue",
  "fmtColorGreen", "fmtBold", "fmtItalic", "fmtUnderline", "fmtStrike", "fmtAlignMenu", "fmtAlignLeft",
  "fmtAlignCenter", "fmtAlignRight", "fmtAlignJustify", "fmtListMenu", "fmtListBullet", "fmtListSquare",
  "fmtListNumber", "fmtListPlain", "fmtInsertImage", "fmtImageScale", "monitorDisplayLabel",
  "monitorDisplayFallback", "indexTabFallback", "contrastWarning", "monitorAuto"
];

const T = require("./locale-translations.js");

for (const lang of Object.keys(T)) {
  const patch = {};
  for (const key of SHARED_KEYS) {
    if (T[lang][key] !== undefined) patch[key] = T[lang][key];
  }
  fs.writeFileSync(path.join(patchDir, lang + ".json"), JSON.stringify(patch, null, 2), "utf8");
  console.log(lang, Object.keys(patch).length, "keys");
}
