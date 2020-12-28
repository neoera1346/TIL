# Browser Security

**브라우저는 언제나 많은 보안의 위협을 받고 있다. Ex. `XSS`, `CSRF`**

- 그 이유는 브라우저는 `JavaScript`를 구동을 하고 있기 때문이다.

#### 브라우저에서 JS로 할 수 있는 것들

1. `AJAX Call`을 이용해 `API`를 호출을 할 수 있다.
2. 다이나믹하게 `DOM`을 제어할 수 있다.
3. 인증 정보를 브라우저에 저장 할 수 있다.
4. 인증 정보를 불러 올 수도 있다.

# Major Attacks

## XSS

> Client가 Server를 신뢰하기 때문에 발생하는 이슈이다.

#### XSS 공격의 프로세스는 아래와 같다.

- 서버에 메세지 요청
- 해커가 text에 악성 스크립트를 삽입

```js
{
    name: "hacker101",
    text: "<script>alert('브라우저를 해킹 중이다')</script>"
}
```

- 메세지 응답
- 메세지를 DOM을 이용해 브라우저에 보여준다

```js
const message = document.createElement("div");
message.innerHTML = data.text;
const messages = document.querySelector("#messages");
messages.appendChild(message);
```

- 응답 받은 메세지를 돔에 반영

```html
<html>
  <body>
    <div id="messages">
      -----------------------------
      <div>
        <script>
          alert("브라우저가 해킹 되었다");
        </script>
      </div>
      -----------------------------
    </div>
  </body>
</html>
```

## CSRF

> Server가 Client를 신뢰해서 발생하는 이슈이다. **CSRF !== XSS**

- 서버는 인증벙보를 가지오 오면 믿는다.
- 유저가 인증 정보를 가진 체로 해커의 링크를 누르면, 해커는 인증 정보를 가로채 서버에 요청을 보낸다.

브라우저에서 기본적인 XSS 공격은 막혀있다. 크롬의 경우, 보안에 더 강하다.

---

# Browser Security Model

## CORS

`MDN` 자료에 `CORS`에 대한 정의가 몇가지 있는데, 그 중 아래의 정의가 개인적으로 제일 맘에 든다.

> CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.

- 번역하자면, CORS는 HTTP 통신의 헤더들도 구성된 시스템, 제도이다.
- origin(domain)이 다른 곳에서의 요청들을 수용할 지를 결정한다.
- 서로 다른 도메인의 자원을 공유를 해도 되는지에 대해 경계를 하는 하나의 정책이다.
- 과거에는 모두 자유롭게 공유가 됬지만, 현재는 고도화된 웹앱의 발달로 다른 도메인간의 정보 공유가 빈번해졌다. 따라서, CORS 정책이 필요해졌다.
- 웹서버나 브라우저가 아닌, **브라우저를 사용하는 유저**를 보호하기 위한 정책이다.

#### CORS 메커니즘 예시 <img src="https://mdn.mozillademos.org/files/14295/CORS_principle.png">

- 위 사진에서 보는 것처럼, 같은 도메인이라면 문제가 되지 않지만, 도메인이 다른 경우, 요청한 정보를 받지 못할 수도 있다.

## CORS 적용 방법

- Access-Control-Allow-Origin Header

## CORS 3가지 시나리오

- Pre-flight Request
  - `Put, Delete, Options, Patch, Connect, Trace`
  - `Option` 메소드가 존재한다.
  - Pre-flight 이후에 Main Flight 요청을 보내게 된다. [참조](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- Simple Request
  - 허용되는 메소드: `Get, Head, Post`
  - 허용되는 `Content-Type`:
    - `application/x-www-form-urlencoded`
    - `multipart/form-data`
    - `text/plain`
  - CORS Preflight을 발생시키지 않는다.
  - 요청의 메소드는 위 셋 중 하나여야한다.
- Request with Credentials
- **CORS 작동 원리**

---

## XSS (Cross Site Scripting)

- XSS: 보안이 약한 웹 어플리케이션에 대한 웹 기반 공격
- 주로 악성코드를 주입을 통한 공격이다.
- XSS 공격의 대상/희생자: 어플리케이션이 아닌 그 이용자
- XSS 공격에서 해로운 컨텐츠는 JS를 활용하여 전달된다.

#### XSS 방어 기법

- Sanitizing Data
  - filter_var
- Validating Data
  - 유효성 검사를 통해서 데이터를 검증한다.
- Escaping filters
  - Regex 정규표현식 사용을 통해 문자열을 변환한다.

---

`Regex`가 아직 많이 어렵지만, 관련 자료가 많이 있고, 장점이 많이 있다.
XSS 공격을 방어할 수 있는 정규표현식에 대해 아래 자료들을 통해 더 알아보자!

[RegEx Tutorial](https://flaviocopes.com/javascript-regular-expressions/#introduction-to-regular-expressions)

[RegEx Testing](https://www.regextester.com/96605)

[JS-Security-Best-Practice](https://docs.wpvip.com/technical-references/security/javascript-security-recommendations/)

[Preventing XSS](https://gomakethings.com/preventing-cross-site-scripting-attacks-when-using-innerhtml-in-vanilla-javascript/)

[OWASP Cheat Sheet](https://github.com/OWASP/CheatSheetSeries)
