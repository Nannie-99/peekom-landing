# Peekom 고객 응대 매뉴얼

운영자가 Lemon Squeezy·메일·구글폼 문의를 처리할 때 쓰는 내부 가이드입니다.  
실제 응대 사례(#79~#151 등)를 바탕으로 정리했습니다.

---

## 1. 응대 기본 원칙

### 1.1 말투·형식
- **시작:** `안녕하세요, Peekom입니다.` (이름 알면 `안녕하세요, ○○ 님.`)
- **끝:** `감사합니다.` + `Peekom 드림`
- 공손·감사·사과를 짧게. 변명보다 **확인한 사실 → 할 수 있는 조치 → 고객이 할 일** 순서로.
- 회신이 늦었으면 **맨 앞에** 사과.
- 한국어 문의 → 한국어 / 영어 문의 → 영어.
- DM(인스타 등)은 짧게, 메일·폼은 조금 더 자세히.

### 1.2 절대 헷갈리면 안 되는 제품 사실
| 항목 | 내용 |
|------|------|
| 결제·MoR | **Lemon Squeezy** (카드 명세: `LEMSQZY*PEEKOM` 등) |
| 설치 | **무료 `Peekom-Setup.exe` 하나**. Plus 전용 설치 파일 없음 |
| Plus 활성화 | 앱에서 **라이선스 키 인증** (인터넷 + `api.lemonsqueezy.com`) |
| 키 형식 | 하이픈 포함 UUID 전체. UI의 `XXXX-...` 는 **자리 표시**일 뿐 |
| 요금제 | **Single 1대 / Double 2대 / Family 5대** (동시 활성 기기) |
| 메모 | **PC 로컬만**. 클라우드 동기화 없음 |
| 가격 표기 | 사이트는 **VAT 별도**. 세금은 LS가 국가별로 자동 계산 |
| 설치 파일 호스팅 | **GitHub Releases** → 회사망에서 github.com 막히면 다운로드 실패 |
| 환불 공식 정책 | 30일 이내 · **결함·중복결제만 환불 대상**. 단순 변심 / 요금제 변경 / **활성화(Activated) 후** / 이용 환경만의 이유 / 기기 한도는 **대상 아님** |
| 환불 판정의 축 | **① 30일 이내인가 ② 라이선스가 Inactive(활성 0대)인가 ③ 결함·중복결제인가.** 셋 중 ②나 ③이면 검토, Activated + 회사망만이면 원칙 거절 |
| 운영상 검토 여지 | **Inactive 상태**에서 회사망·방화벽으로 인증 불가, 중복결제, 결함, (특별) 안내 지연 등 — “가능”이 아니라 **개별 검토** |

### 1.3 주문을 찾을 때 받을 정보 (우선순위)
1. **주문번호 Order #**
2. **결제 시 이메일** (문의 메일과 다를 수 있음)
3. **구매자 이름**
4. 라이선스 키 / 결제일시·금액 / 영수증·카드 명세 캡처  
⚠️ **전화번호만으로는 LS 주문 조회 불가**

### 1.4 Lemon Squeezy에서 확인할 것
- Store → **Orders** / **Licenses** / **Customers**
- 이메일 철자, **어제~오늘 날짜**(시차), 금액($5.99+$tax ≈ $6.59 등)
- 라이선스: `inactive` / `active` / 활성 대수 / instance 목록(날짜·Device ID)
- 환불 후 키 **disabled** 여부

### 1.5 플레이스홀더 (템플릿에서 바꾸기)
- `{이름}` `{이메일}` `{Order#}` `{키}` `{날짜}` `{금액}`

---

## 2. 빠른 판정 표

| 고객 상황 | 기본 대응 |
|-----------|-----------|
| 결제됨 · 키 모름 | 키 재안내 + 설치→인증 방법 |
| 같은 PC 재설치 · 기기 수 초과 | instance **Deactivate** 후 재인증 안내 |
| PC 교체 · 퇴사 | Deactivate 후 새 PC 인증 (정보 요청) |
| Double 2/2인데 노트북 추가 | **어느 기기 해제할지** 먼저 확인 (날짜·ID 첨부) |
| LS 서버 연결 실패 · 회사망 | 핫스팟 안내 우선. 그래도 안 되고 **Inactive·30일 이내**면 **개별 검토**. 이미 **Activated**면 환불 ❌ |
| 회사 보안으로 설치/사용 불가 | Order·**라이선스 상태 먼저 확인**. **Inactive·30일 이내**면 검토, **Activated**면 환불 ❌ |
| 중복 결제 | **미사용/비활성** 쪽 환불. 사용 중이면 고객 확인 |
| Single→Double 차액 업그레이드 | **불가**. Double **신규 구매**. Single 환불 ❌ |
| Double→Single 단순 변심 | 환불 ❌ (요금제 변경은 대상 아님) |
| 이미 Active 상태에서 요금제 변경 요청 | 환불 ❌ |
| 기능 제안 | 감사 + **긍정 검토** + 일정 미확정 |
| Plus 기능(글자 크기 등)을 무료에서 요청 | Plus에서 가능하다고 안내 |
| GitHub 타임아웃 | 회사망 차단 설명 + 다른 네트워크/IT 요청. **구매 전이면 구매 보류 권고**, 구매 후 Inactive면 검토 |
| 「바탕 화면 보기」에 인덱스 사라짐 | Windows가 창을 숨김. 막을 방법 없음 |
| 삭제 후에도 부팅 시 뜸 | 시작 프로그램 + 잔여 폴더 정리 |

---

## 3. 자주 묻는 상황 + 메일 템플릿

### 3.1 결제 후 Plus를 어디서 다운받나요? / 유료인데 무료만 됨

**원인:** Plus 전용 설치 파일이 없다고 모름.

**내부:** Orders에서 이메일·키 확인. 이미 Activated여도 “다운로드 방법” 안내가 핵심.

```
제목: Re: Peekom Plus 구매 후 다운로드·이용 안내

안녕하세요, Peekom입니다.

Peekom Plus를 구매해 주셔서 감사합니다.
결제 후 Plus를 따로 다운받는 방법을 찾지 못하셨다는 말씀 확인했습니다. 불편을 드려 죄송합니다.

Peekom Plus는 유료 전용 설치 파일이 따로 있지 않습니다.
무료 Peekom을 설치한 뒤, 앱 안에서 라이선스 키로 인증하시면 Plus 기능이 열립니다.

라이선스 키: {키}
(하이픈 포함 전체, 띄어쓰기 없이 입력)

1. peekom.com/download 에서 Windows용 Peekom 설치
2. Peekom 실행 (인터넷 연결 필요)
3. 환경설정 또는 Plus 화면에서 위 키 입력 후 인증

키 메일은 Lemon Squeezy 구매 메일(스팸함 포함) 또는
https://app.lemonsqueezy.com/my-orders 에서도 확인하실 수 있습니다.

인증이 안 되면 오류 문구를 알려 주세요. 바로 도와드리겠습니다.

감사합니다.
Peekom 드림
```

**환불까지 요청한 경우:** 위 안내 후  
「그래도 환불을 원하시면 주문번호(Order #)와 함께 회신해 주세요. 확인 후 환불 정책에 따라 안내드리겠습니다」  
→ 접수 후에는 **§3.5 판정 순서**로 처리. 이 단계에서 환불을 확정해 주지 말 것.

---

### 3.2 라이선스 키를 못 받았어요 / 잊어버렸어요

**내부:** 이메일·이름·Order로 LS 검색 → 키 안내.  
카드 매출전표만 있으면 이메일·이름이 없어 **추가 요청**.

```
제목: Re: 라이선스 키 재안내

안녕하세요, Peekom입니다.

라이선스 키를 확인하지 못하셨다는 문의, 감사합니다. 불편을 드려 죄송합니다.

[케이스 A: 키를 찾은 경우]
주문·이메일을 확인했습니다. 아래 키를 사용해 주세요.

라이선스 키: {키}
(하이픈 포함 전체, 띄어쓰기 없이)

[케이스 B: 카드 전표만 온 경우]
보내 주신 자료는 카드 매출전표라 결제 사실은 확인되나,
Lemon Squeezy에서 주문을 찾으려면 아래가 필요합니다.
1. 결제(체크아웃) 시 사용한 이메일
2. 결제 시 입력한 구매자 이름
가능하시면 Order # 또는 결제일시·금액도 함께 부탁드립니다.

직접 확인: Lemon Squeezy 메일 [License Key] / https://app.lemonsqueezy.com/my-orders

감사합니다.
Peekom 드림
```

**LS에 주문이 전혀 없을 때 (고객용):** 결제 이메일·구매자 이름·영수증 요청.  
**LS 판매자 지원용 (영문 예시):**

```
Subject: Missing order / license — Peekom — US${금액}

Hello Lemon Squeezy Support,
Customer paid for Peekom Plus but no order appears in our dashboard.
- Customer email: {이메일}
- Amount: US${금액} (e.g. Sold through Link, LLC)
- Please locate Order # / confirm license email, or advise if pending/failed.
Thanks, Peekom
```

---

### 3.3 「Lemon Squeezy 서버에 연결하지 못했습니다」

**원인:** `api.lemonsqueezy.com` 차단(회사 방화벽·VPN·보안). 인터넷 “연결됨”이어도 실패 가능.

**운영 방침:** 먼저 해결 안내. 이것은 **환경 제한이지 제품 결함이 아니므로 자동 환불 사유가 아님.**
답장 전에 LS에서 **라이선스 상태를 반드시 확인**할 것.
- **Inactive(활성 0대) + 30일 이내** → 환불 **개별 검토** 가능. 고객에게는 “검토”라고만 말할 것.
- **이미 Activated** → 회사망만이 이유면 **환불 대상 아님**. 핫스팟 1회 인증·IT 허용 요청으로 안내.

```
제목: Re: Lemon Squeezy 서버 연결 실패 문의

안녕하세요, Peekom입니다.

인터넷은 연결되어 있는데 「Lemon Squeezy 서버에 연결하지 못했습니다」가
나온다는 말씀 확인했습니다. 불편을 드려 죄송합니다.

Plus 인증은 일반 웹과 별도로 https://api.lemonsqueezy.com 접속이 필요합니다.
회사 방화벽·보안망에서 이 주소만 막히면 인증이 실패하는 경우가 많습니다.

아래를 한 번씩 시도해 주세요.
1. 회사 Wi-Fi 대신 휴대폰 핫스팟 등에서 같은 키로 인증
2. VPN/프록시 사용 중이면 잠시 끄고 재시도
3. 방화벽·백신이 Peekom 통신을 막지 않는지 확인
4. 회사 PC라면 IT에 https://api.lemonsqueezy.com HTTPS(443) 허용 요청
5. 키는 하이픈 포함 전체, 띄어쓰기 없이 입력

핫스팟 등에서 한 번 인증되면, 이후 같은 PC에서는 회사망에서도
Plus를 쓰실 수 있는 경우가 많습니다.

위 방법으로도 인증이 되지 않으신다면, 구매 이메일과 주문번호(Order #)를
회신해 주세요. 구매일과 라이선스 상태를 확인한 뒤 가능한 방법을 안내드리겠습니다.

감사합니다.
Peekom 드림
```

> ⚠️ 이 템플릿에서 **“환불해 드리겠습니다”라고 먼저 약속하지 말 것.** 상태 확인 후 판단.

**IT 허용 질문이 온 경우:**  
「네, 회사 전산(IT)에 `https://api.lemonsqueezy.com` HTTPS(443) 허용을 요청해 달라는 뜻입니다.」

---

### 3.4 활성화 기기 수 초과 / PC 교체 / 재설치

**내부:** Licenses → 해당 키 → instance **Deactivate** (필요한 대수만).  
Double 2/2인데 어느 PC인지 모르면 **날짜·Device ID 캡처를 고객에게 보여 주고 선택** 받기.  
함부로 전부 지우지 말 것.

**A. 이미 Deactivate 완료**

```
제목: Re: 기기 초기화 완료 안내 — Order #{Order#}

안녕하세요, Peekom입니다.

기기 변경/재설치 후 「활성화 가능한 기기 수를 초과했습니다」가
나온다는 말씀 확인했습니다. 불편을 드려 죄송합니다.

앱만 지우셔도 Lemon Squeezy에는 이전 활성화가 남을 수 있습니다.
요청하신 대로 기존 기기 등록을 초기화(deactivated)해 두었습니다.

이제 사용하실 PC에서 아래 키로 다시 인증해 주세요.
라이선스 키: {키}

1. Peekom 실행 (인터넷 연결)
2. 키 하이픈 포함 전체, 띄어쓰기 없이 입력 후 인증
앱을 다시 설치할 필요는 없고, 키만 다시 인증하시면 됩니다.

감사합니다.
Peekom 드림
```

**B. Double 2/2 — 어느 쪽 해제할지 확인**

```
제목: Re: 활성화 기기 수 초과 — 해제할 기기 확인

안녕하세요, Peekom입니다.

Double(최대 2대) 기준으로 이미 2대가 활성화되어 있어
추가 인증이 막힌 상태입니다. (Lemon Squeezy 화면 첨부)

현재 등록:
1) {날짜1} — 기기 ID {id1 앞부분}…
2) {날짜2} — 기기 ID {id2 앞부분}…

노트북/새 PC에서 쓰시려면 쓰지 않는 쪽 1대를 해제한 뒤
같은 키로 다시 인증하시면 됩니다.

회신 시 A/B 중 알려 주세요.
A) {날짜1} 기기 해제
B) {날짜2} 기기 해제
C) 잘 모르겠음 (원하시는 쪽을 적어 주세요)

감사합니다.
Peekom 드림
```

**C. Single — PC 변경 가능하냐는 사전 문의**

```
가능합니다. Single은 동시 1대이지만 PC 변경은 지원합니다.
앱 삭제만으로는 이전 활성화가 남을 수 있어,
구매 이메일·주문번호(또는 키)를 보내 주시면 기존 인증을 해제한 뒤
새 PC에서 같은 키로 인증하시도록 안내드립니다.
메모는 PC마다 따로이니 필요하면 이동 전 백업해 주세요.
```

---

### 3.5 환불

공개 정책(홈페이지 FAQ의 「Peekom Plus 환불 정책」)이 **기준**이다. 이 절은 그 정책을 운영에서 어떻게 적용하는지만 적는다.
응대 문구는 항상 홈페이지에서 확인할 수 있어야 하고, **홈페이지에 없는 약속을 메일로 먼저 하지 않는다.**

#### 판정 순서 (반드시 이 순서로)
1. **30일 이내인가?** — 아니면 대상 아님.
2. **LS에서 라이선스 상태 확인** — `inactive`(활성 0대)인가, `active`인가. 활성 instance의 날짜·Device ID도 본다.
3. **사유가 결함 / 중복결제인가**, 아니면 **환경·변심·요금제 변경인가.**

#### 환불 대상 (공개 정책과 동일)
- **앱 결함** — 정상 실행·작동 불가
- **동일 주문의 중복 결제**
- 위 두 가지는 **Activated 여부와 무관하게** 대상

#### 환불 대상 아님 (공개 정책과 동일 — 고객에게도 이렇게 설명)
- **단순 변심**
- **요금제 변경·선택 변경** (Single↔Double/Family). 차액 업그레이드 없음, 상위 요금제는 신규 구매, 기존 요금제 환불·차액 정산 없음
- **이미 Activated된 뒤**의 환불 (인증 성공 = 정상 작동이므로 결함 아님)
- **이용 환경만의 이유** (방화벽·보안 프로그램·폐쇄망·GitHub 차단·`api.lemonsqueezy.com` 차단) — 특히 **Activated**인 경우
- **기기 한도·PC 교체 불편** — 환불 대신 **Deactivate 지원**으로 해결

#### 개별 검토 (가능하다고 단정하지 말 것)
- **30일 이내 + `inactive`(활성 0대) + 환경상 인증 자체가 불가** → 검토 대상. 고객에게는 **“확인 후 안내드리겠습니다”**까지만.
- (운영 예외) 키 안내가 **매우 늦어** 고객이 오래 기다린 경우 → 운영자 판단. 정책상 단순 변심은 대상 아님을 먼저 설명.

> ⚠️ **“회사망이면 환불해 드립니다”라고 먼저 말하지 않는다.** 상태 확인 전에는 “검토”라는 단어만 쓴다.

#### 환불 거절 안내 템플릿 (Activated + 회사망만)

```
제목: Re: Peekom Plus 환불 문의 — Order #{Order#}

안녕하세요, Peekom입니다.

Order #{Order#} 확인 결과, 라이선스가 {날짜} {기기}에서 정상적으로
활성화(Activated)된 상태입니다.

Peekom Plus 환불 정책상 환불 대상은 ① 앱이 정상 실행·작동하지 않는 제품 결함,
② 동일 주문의 중복 결제 두 가지입니다.
인증이 정상 완료된 이후, 회사 네트워크 등 이용 환경만을 이유로 한 환불은
대상에 해당하지 않는 점 양해 부탁드립니다.
(자세한 내용은 홈페이지 자주 묻는 질문의 「Peekom Plus 환불 정책」에서 확인하실 수 있습니다.)

다만 아래는 도와드릴 수 있습니다.
- 다른 네트워크(휴대폰 핫스팟 등)에서 1회 인증 → 이후 회사망에서도 사용 가능한 경우가 많습니다.
- 사용하실 PC를 바꾸셔야 한다면 기존 기기 비활성화를 도와드리겠습니다.

감사합니다.
Peekom 드림
```

**환불 완료 템플릿**

```
제목: Re: 환불 완료 안내 — Order #{Order#}

안녕하세요, Peekom입니다.

{사유: 앱 결함 / 중복 결제 / (Inactive 상태에서) 인증 자체가 불가}
요청을 확인했고, Order #{Order#}에 대해 Lemon Squeezy에서 환불 처리를 완료했습니다.

- 환불 확인 메일 또는 주문 내역에서 Refunded 상태를 확인하실 수 있습니다.
- 카드·결제수단 반영까지 영업일 기준 며칠 걸릴 수 있습니다.
- 해당 라이선스 키는 비활성화됩니다. 이후 앱은 무료 버전으로 이용하실 수 있습니다.

감사합니다.
Peekom 드림
```

**영문 환불 완료 (인증 자체가 불가했던 건 — Inactive 확인 후에만 사용)**

```
Subject: Re: Refund completed — license activation blocked on company network

Hello,

Thank you for purchasing Peekom Plus. We’re sorry you couldn’t activate
because your company network blocks the activation server.
We confirmed that your license was never activated (0 activated devices).

We’ve completed the refund via Lemon Squeezy.
- Refund confirmation may appear in your Lemon Squeezy email/order history.
- It can take a few business days to show on your card.
- The license key is disabled; Peekom returns to the free version online.

Thank you,
Peekom
```

**중복 결제 — 어느 주문을 환불할지**

- 사용 중(Active) 주문은 유지, **미사용/Deactivated** 쪽 환불 권장.
- 고객이 적은 Order와 실제 사용 주문이 다르면 **먼저 물어보기**.

**정보 부족 환불 요청 (전화번호만 온 경우)**

```
환불 요청 확인을 위해 주문 조회가 필요합니다.
다만 전화번호만으로는 주문을 찾을 수 없습니다.
1) 주문번호(Order #) 2) 구매 시 이메일 3) 구매자 이름을 회신해 주세요.
주문과 라이선스 상태를 확인한 뒤 환불 정책에 따라 안내드리겠습니다.
```

---

### 3.6 Single → Double (차액만 내고 업그레이드?)

**답:** LS에 차액 업그레이드 없음. Double **새로 구매**. Single 환불 ❌.

```
제목: Re: Peekom Plus Single에서 Double로 변경하는 방법

안녕하세요, Peekom입니다.

Single을 이용 중이신데 Double(2대)로 변경하고 싶으시다는 문의, 감사합니다.
차액만 결제하는 업그레이드 기능은 Lemon Squeezy에 없습니다.
2대에서 쓰시려면 Peekom Plus — Double을 새로 구매해 주시면 됩니다.

1. peekom.com/download 에서 Double 구매
2. 메일로 받은 Double 키 확인
3. 사용 PC(최대 2대)에서 Double 키로 인증

Single 키와 Double 키는 서로 다른 라이선스입니다.
Single → Double은 추가 구매이며, Single 환불 대상은 아닙니다.
(단순 변심·요금제 변경에 해당합니다.)

감사합니다.
Peekom 드림
```

---

### 3.7 부가세(VAT) · 증빙

```
사이트 가격은 VAT 별도입니다.
결제·세금은 Lemon Squeezy가 구매자 국가·청구지에 따라
적용되는 세금이 있으면 자동으로 합산합니다. (항상 한국 부가세가 붙는 것은 아님)
세금이 부과된 주문이면 LS 영수증·인보이스에 세금 항목이 표시됩니다.
Peekom이 직접 발행하는 한국 전자세금계산서는 아닙니다.
```

---

### 3.8 삭제했는데 재부팅하면 또 뜸 (Windows 11)

```
제목: Re: Peekom 영구 삭제 방법 (Windows 11)

안녕하세요, Peekom입니다.

삭제 후에도 재부팅 시 자동으로 뜬다는 말씀 확인했습니다. 죄송합니다.
「설치된 앱」만 지우면 시작 프로그램·남은 폴더가 남을 수 있습니다.

1. 작업 관리자에서 Peekom 작업 끝내기 / 작업 표시줄 고정 해제
2. 설정 → 앱 → 시작 프로그램에서 Peekom·빼꼼 관련 항목 끔
3. 탐색기 주소창에 붙여넣고 폴더 삭제:
   %LocalAppData%\Programs → Peekom
   %AppData%\Peekom
   %AppData%\빼꼼 (구버전)
4. 재부팅 후 확인

감사합니다.
Peekom 드림
```

---

### 3.9 회사 PC 설치 실패 (APPCRASH / 에스원VP·AhnLab)

**신호:** 이벤트 로그 경로에 `AhnLab\S1VP40` 등.

```
설치 창 없이 프로세스만 생기다 APPCRASH(System.dll / 0xc0000005)가 나는 경우,
회사 보안(에스원VP·AhnLab Safe Transaction 등)이 설치를 가로채는 경우가 많습니다.
공식 충돌 목록은 없으나 로그상 AhnLab/S1VP 경로가 보이면 IT 예외가 필요합니다.

IT 요청: Peekom-Setup.exe 예외, %LocalAppData%\Programs\Peekom,
%AppData%\Roaming\Peekom, (Plus) api.lemonsqueezy.com
관리자 권한 실행 / 개인망에서 같은 파일 설치 여부 비교를 권장합니다.
보안 정책 때문에 설치 자체가 불가능하신 경우에는, 구매 이메일과
주문번호(Order #)를 회신해 주시면 주문과 라이선스 상태를 확인한 뒤 안내드리겠습니다.
```

> 구매 전 문의라면 **“구매 전에 IT 허용 여부부터 확인해 보시라”**고 안내할 것. 구매 후 Activated면 환불 대상 아님.

---

### 3.10 다운로드 시 GitHub이 뜨고 안 열림

```
설치 파일은 peekom.com 버튼을 눌러도 실제 파일이 GitHub에 있어
github.com으로 연결됩니다. 회사망에서 GitHub이 막히면
「이 페이지에 연결할 수 없습니다」가 납니다.

집 Wi-Fi·핫스팟에서 받거나 IT에 github.com 허용을 요청해 주세요.
직접 링크:
https://github.com/Nannie-99/peekom-landing/releases/latest/download/Peekom-Setup.exe
아직 구매 전이시라면, github.com 허용 여부를 먼저 확인해 보시길 권해 드립니다.
이미 구매하셨는데 설치 자체가 불가능하다면 주문번호(Order #)를 회신해 주세요.
```

---

### 3.11 「바탕 화면 보기」에 인덱스가 사라짐

```
작업 표시줄 맨 오른쪽 「바탕 화면 보기」(또는 Win+D)는
Windows가 열린 프로그램 창을 한꺼번에 숨기는 기능입니다.
Peekom 인덱스도 프로그램 창이라 함께 숨겨집니다.
지금은 이 버튼을 눌러도 인덱스만 남기는 옵션은 없습니다.
다시 보려면 「바탕 화면 보기」를 한 번 더 누르거나
작업 표시줄의 Peekom을 클릭해 주세요.
해당 의견은 피드백으로 접수합니다. (일정 미확정)
```

---

### 3.12 무료인데 .exe가 아니라 “열 앱 선택”(메모장·워드)

**DM 짧게:**

```
안녕하세요, Peekom입니다 🙂
그 화면은 설치 파일(.exe)이 아닌 다른 파일을 연 경우예요.
peekom.com/download → Windows 다운로드 → Peekom-Setup.exe 를
더블클릭해 주세요. (메모장·워드로 열지 마세요)
```

---

### 3.13 기능 제안 (공통 톤)

항상: **감사 → 현재 여부 → 긍정 검토 → 일정 미확정**

| 제안 | 현재 | 응대 포인트 |
|------|------|-------------|
| 작업표시줄 숨김 / tray만 | skipTaskbar 옵션 없음 (Tray는 있음) | 긍정 검토 |
| 메모 안 Ctrl+F 검색 | 없음 | 긍정 검토 |
| 창 모서리로 자유 리사이즈 | 설정 위주 | 긍정 검토 |
| 글자 크기 작게 (무료) | **Plus** | Plus에서 가능 |
| 인덱스 위·아래 가장자리 | 좌·우만 (운영 안내 기준) | 차기 업데이트 테스트 중 뉘앙스 |
| 다른 앱 열면 메모 사라지게 | always-on-top 특성 | 빼꼼/얼음 설명 + 피드백 |
| 폐쇄망 인증 | 최초 인증에 인터넷 필요 | 핫스팟 1회 인증 권장 / 완전 폐쇄면 어려움. 환불은 **Inactive·30일 이내**일 때만 검토 |

**기능 제안 공통 템플릿**

```
안녕하세요, Peekom입니다.

{제안 요약} 의견을 남겨 주셔서 감사합니다.
현재 Peekom에는 해당 기능이 {있습니다/없습니다}.
{한 줄 부연}.
말씀해 주신 내용은 긍정적으로 검토하겠습니다.
다만 반영 여부·일정은 개발 상황에 따라 달라
언제 적용된다고 확정해서 말씀드리기는 어렵습니다.
소중한 의견으로 접수해 두었습니다.

감사합니다.
Peekom 드림
```

---

### 3.14 퇴사 · 회사 PC 정리

```
앱 제거가 기본입니다. 시작 프로그램 OFF +
%LocalAppData%\Programs\Peekom, %AppData%\Peekom 폴더까지 지우면 더 깔끔합니다.
메모는 그 PC에만 있으니 필요하면 삭제 전 백업하세요.
Plus를 쓰셨다면 앱만 지워도 LS에 회사 PC 활성화가 남을 수 있습니다.
개인 PC에서 쓰려면 구매 이메일·Order#/키를 보내 주시면 기기 해제를 도와드립니다.
```

---

### 3.15 이메일 오입력 (never.com 등)

**내부:** LS에서 고객 이메일을 올바른 주소로 수정 → 키 안내.

```
수신 이메일을 {올바른메일} 으로 수정해 두었습니다.
라이선스 키: {키}
하이픈 포함 전체로 인증해 주세요.
```

---

### 3.16 결제됐는데 LS에 주문 0건

1. 이메일 철자·다른 주소·시차·금액으로 재검색  
2. Customers / Licenses도 검색  
3. 고객에게 **결제 시 이메일·구매자 이름·영수증** 요청  
4. 그래도 없으면 **Lemon Squeezy merchant support**에 추적 요청  
5. 고객에게는 “LS에 조회 요청해 두었고, 확인되면 키 안내”  

과거 사례: 며칠 뒤 주문이 나타난 경우 있음 → 단정 금지.

---

## 4. 영문 자주 쓰는 템플릿

### 4.1 Move license to another device (Deactivate 완료)

```
Subject: Re: Move my license to another device — Order #{Order#}

Hello,

Thank you for purchasing Peekom Plus.
We’ve deactivated the previous device for Order #{Order#}.
Activate on your new PC with:

License key: {키}
(full key, hyphens included, no spaces)

Install from peekom.com/download if needed → open Peekom online → enter key.

Thank you,
Peekom
```

### 4.2 Duplicate payment refund done

```
Subject: Re: Refund completed — Order #{Order#}

Hello,

We’ve completed the refund for the duplicate payment (Order #{Order#}) via Lemon Squeezy.
Refunded status may appear in your email/order history; card posting can take a few business days.
This license key is disabled—please use the key from the order you keep.

Thank you,
Peekom
```

### 4.3 License email not arrived (need checkout email + name)

```
Subject: Re: License email hasn’t arrived yet

Hello,

We searched Lemon Squeezy with this reply email but found no matching order.
Please reply with:
1) email used at checkout
2) buyer name at checkout
3) Order # / receipt if available

Also check Spam for Lemon Squeezy, and https://app.lemonsqueezy.com/my-orders

Thank you,
Peekom
```

---

## 5. 운영 체크리스트 (짧게)

### 기기 이전
- [ ] Order·키·이메일 확인  
- [ ] 활성 대수 확인  
- [ ] 필요 instance Deactivate  
- [ ] 고객에게 키 + 재인증 안내  

### 환불
- [ ] **30일 이내**인지 확인  
- [ ] LS에서 **라이선스 상태** 확인 (`inactive` / `active` · 활성 대수 · instance 날짜·Device ID)  
- [ ] 사유가 **결함 / 중복결제**인지, **환경·변심·요금제 변경**인지 구분  
- [ ] Activated + 회사망만이면 → **거절 안내 템플릿** (§3.5)  
- [ ] 사용 중 키인지 확인 (중복 시 어느 건 환불할지)  
- [ ] LS Refund  
- [ ] 완료 메일 (반영 시일·키 비활성)  

### 키 미수신
- [ ] 문의메일 ≠ 결제메일 가능성  
- [ ] Resend / 키 직접 안내  
- [ ] 없으면 LS 지원 + 고객에게 추가 정보  

---

## 6. 제품·기능 한 줄 치트시트 (응대용)

- **빼꼼 / 얼음:** 빼꼼=접힘·클릭으로 열기 / 얼음=메모 펼친 채 고정 (무료·Plus 공통). 「다른 앱 쓰면 메모 숨김」과는 다름.  
- **글자 크기:** Plus (`Ctrl+휠` 등).  
- **인덱스 개수:** 무료 3 / Plus 10.  
- **왼쪽 패널·커스텀 테마·불투명도·보내기·JSON 백업:** Plus.  
- **모니터 고정:** 설정에서 선택.  
- **항상 위:** 설계상 특성. 뒤로 밀리면 **작업 표시줄 Peekom 클릭** 워크어라운드. CAD 등 **관리자 권한** 앱은 위로 못 올라갈 수 있음.  
- **맞춤법 빨간 물결:** 설정 → 공통 → 맞춤법 검사 끄기.  

---

## 7. 하지 말 것

- 전화번호만으로 “주문 확인됨”이라고 단정  
- **“회사망이면 환불해 드립니다”처럼 무조건 환불을 약속** (라이선스 상태 확인 전에는 “검토”까지만)  
- **Activated 상태**인데 회사망·변심·요금제 변경을 이유로 환불  
- **홈페이지 환불 정책에 없는 조건**을 메일로만 약속  
- 사용 중인 Active 주문을 묻지 않고 환불  
- Single→Double에 “차액만 결제·Single 환불” 약속  
- GitHub 외에 공식 미러가 없는데 “다른 링크 있다”고 허위 안내  
- 기능 제안에 출시일 확정  
- `npm run dev` 등으로 고객 PC 서버를 대신 실행한다고 안내 (해당 없음)

---

## 8. 문서 정보

- 용도: Peekom 운영·고객 응대 내부용  
- 근거: **홈페이지 자주 묻는 질문의 「Peekom Plus 환불 정책」이 공개 기준**이며, 이 문서는 그 운영 적용본이다. 충돌하면 **홈페이지가 우선**  
- 가격·요금제·정책이 바뀌면 **§1.2 / §3.5 / §3.6** 을 먼저 수정할 것  

끝.
