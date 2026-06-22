; Peekom / 빼꼼 인덱스 공통 NSIS 훅
; - Windows 10 미만 설치 차단
; - 제거 시 자동 시작(시작 프로그램) 레지스트리 정리

!include "WinVer.nsh"

!macro customInit
  ${IfNot} ${AtLeastWin10}
    MessageBox MB_ICONSTOP "이 프로그램은 Windows 10 및 Windows 11 (64-bit)에서만 설치할 수 있습니다.$\r$\n$\r$\nWindows 7 / 8 / 8.1은 지원되지 않습니다." /SD IDOK
    Abort
  ${EndIf}
!macroend

!macro customUnInstall
  ; Electron app.setLoginItemSettings() 가 등록하는 시작 프로그램 항목 제거
  DeleteRegValue HKCU "Software\Microsoft\Windows\CurrentVersion\Run" "Peekom Plus"
  DeleteRegValue HKCU "Software\Microsoft\Windows\CurrentVersion\Run" "빼꼼 인덱스"
  DeleteRegValue HKCU "Software\Microsoft\Windows\CurrentVersion\Run" "ppaekkom-index"
  DeleteRegValue HKCU "Software\Microsoft\Windows\CurrentVersion\Run" "ppaekkom-plus"
!macroend
