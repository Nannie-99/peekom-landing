; Peekom NSIS 훅
; - Windows 10 미만 설치 차단
; - 설치/제거 전 실행 중인 프로세스 종료
; - 제거 시 시작 프로그램·바로가기 정리 + (선택) 사용자 데이터 삭제
; - 업데이트 중에는 확인창·바로가기·데이터 삭제를 건너뜀

!include "WinVer.nsh"
!include "LogicLib.nsh"

!macro peekomKillRunning
  StrCpy $R0 0
  peekomKillLoop:
    nsExec::ExecToLog 'taskkill /F /T /IM Peekom.exe'
    nsExec::ExecToLog 'taskkill /F /T /IM "Peekom Plus.exe"'
    nsExec::ExecToLog 'taskkill /F /T /IM "빼꼼 인덱스.exe"'
    Sleep 500
    nsExec::ExecToStack 'cmd /c tasklist /NH /FI "IMAGENAME eq Peekom.exe" | find /I "Peekom.exe"'
    Pop $0
    IntOp $R0 $R0 + 1
    ${If} $0 == 0
      ${If} $R0 < 10
        Goto peekomKillLoop
      ${EndIf}
    ${EndIf}
!macroend

!macro customInit
  ${IfNot} ${AtLeastWin10}
    MessageBox MB_ICONSTOP "이 프로그램은 Windows 10 및 Windows 11 (64-bit)에서만 설치할 수 있습니다.$\r$\n$\r$\nWindows 7 / 8 / 8.1은 지원되지 않습니다." /SD IDOK
    Abort
  ${EndIf}
  !insertmacro peekomKillRunning
!macroend

!macro customInstall
  ; 바로가기 아이콘을 exe 대신 resources\icon.ico 로 고정 (Windows 탐색기 호환)
  StrCpy $9 "$INSTDIR\resources\icon.ico"
  ${IfNot} ${FileExists} $9
    Goto peekomShortcutsDone
  ${EndIf}

  SetShellVarContext current
  ${If} ${FileExists} "$DESKTOP\Peekom.lnk"
    Delete "$DESKTOP\Peekom.lnk"
    CreateShortCut "$DESKTOP\Peekom.lnk" "$INSTDIR\Peekom.exe" "" $9 0
  ${EndIf}
  ${If} ${FileExists} "$SMPROGRAMS\Peekom.lnk"
    Delete "$SMPROGRAMS\Peekom.lnk"
    CreateShortCut "$SMPROGRAMS\Peekom.lnk" "$INSTDIR\Peekom.exe" "" $9 0
  ${EndIf}
  ${If} ${FileExists} "$SMPROGRAMS\Peekom\Peekom.lnk"
    Delete "$SMPROGRAMS\Peekom\Peekom.lnk"
    CreateShortCut "$SMPROGRAMS\Peekom\Peekom.lnk" "$INSTDIR\Peekom.exe" "" $9 0
  ${EndIf}

  peekomShortcutsDone:
!macroend

!macro customUnInstall
  !insertmacro peekomKillRunning

  ${IfNot} ${isUpdated}
    ; Electron setLoginItemSettings / 과거 버전 Run 키 전부 정리
    DeleteRegValue HKCU "Software\Microsoft\Windows\CurrentVersion\Run" "com.peekom.app"
    DeleteRegValue HKCU "Software\Microsoft\Windows\CurrentVersion\Run" "Peekom"
    DeleteRegValue HKCU "Software\Microsoft\Windows\CurrentVersion\Run" "Peekom Plus"
    DeleteRegValue HKCU "Software\Microsoft\Windows\CurrentVersion\Run" "빼꼼 인덱스"
    DeleteRegValue HKCU "Software\Microsoft\Windows\CurrentVersion\Run" "ppaekkom-index"
    DeleteRegValue HKCU "Software\Microsoft\Windows\CurrentVersion\Run" "ppaekkom-plus"

    SetShellVarContext current
    Delete "$DESKTOP\Peekom.lnk"
    Delete "$DESKTOP\Peekom Plus.lnk"
    Delete "$SMPROGRAMS\Peekom.lnk"
    Delete "$SMPROGRAMS\Peekom Plus.lnk"
    Delete "$SMPROGRAMS\Peekom\Peekom.lnk"
    Delete "$SMPROGRAMS\Peekom\Peekom Plus.lnk"
    RMDir "$SMPROGRAMS\Peekom"

    ; 기본: 메모·설정($APPDATA\Peekom) 보존. 예를 누르면만 삭제.
    ; 라이선스 파일은 남겨 재설치 때 기기 수가 늘어나지 않게 한다.
    MessageBox MB_YESNO|MB_ICONQUESTION "메모·설정도 함께 삭제할까요?$\r$\n$\r$\n· 예 — 메모와 설정까지 삭제합니다.$\r$\n· 아니오 — 프로그램만 제거하고 메모는 남깁니다.$\r$\n$\r$\n(다시 설치하면 남겨 둔 메모를 그대로 쓸 수 있습니다.)" /SD IDNO IDYES peekomDeleteUserData
    Goto peekomUninstallDone

    peekomDeleteUserData:
    StrCpy $R1 "$TEMP\peekom-license-keep.json"
    Delete $R1
    ${If} ${FileExists} "$APPDATA\Peekom\peekom-license.json"
      CopyFiles /SILENT "$APPDATA\Peekom\peekom-license.json" $R1
    ${EndIf}
    RMDir /r "$APPDATA\Peekom"
    ${If} ${FileExists} $R1
      CreateDirectory "$APPDATA\Peekom"
      CopyFiles /SILENT $R1 "$APPDATA\Peekom\peekom-license.json"
      Delete $R1
    ${EndIf}

    peekomUninstallDone:
  ${EndIf}
!macroend
