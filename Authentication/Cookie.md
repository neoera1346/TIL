# Cookie

쿠키는 클라이언트(브라우저)에 저장되는 키와 값이 들어 있는 작은 데이터 파일이다.

쿠키는 주로 웹 서버에 의해 만들어진다. 서버가 HTTP 응답 헤더의 `Set-Cookie`에 내용을 넣어 전달하면, 브라우저는 이 내용을 자체적으로 브라우저에 저장한다. 이것이 바로 쿠키다.

브라우저는 사용자가 쿠키를 생성하도록 설정한 동일 서버(사이트)에 접속할 때마다 쿠키의 내용을 `Cookie` 요청 헤더에 넣어 함께 전달한다.

---

# Why We Need Cookie & Session

HTTP 프로토콜은 Connectionless하고 Stateless한 프로토콜이다.

- Connectionless: Client가 서버에 요청을 하고 Server가 Client에게 응답을 보내면 접속을 끊는다.
- Stateless: 통신이 끝나면 상태 정보를 유지하지 않는다.

이러한 HTTP 프로토콜을 사용하면서 Server가 Client를 식별할 수 있는 방법이 필요했고 **쿠키와 세션**을 사용하게 되었다.

HTTP는 Stateless하기 때문에 로그인 상태 정보를 유지하지 않아 **쿠키와 세션**을 사용하지 않으면 게시판이나 메일을 확인할 때 페이지 이동할 때마다 로그인을 해야 한다.

---

# Cookie vs Session

**꼭 기억해야할 차이점** :

- 쿠키는 정해진 유효기간 동안은 계속 Browser에 남아있지만, 세션은 브라우저 환경을 나가는 즉시 (탭 종료) 바로 사라진다.
- 쿠키를 사용하면, 사용자 정보가 클라이언트에 남고, 보안상 문제가 발생할 수도 있다.
- 그러나, 세션을 사용하면, 서버 메모리에 저장되어 쿠키와는 달리 사용자 정보가 노출되지 않는다.

|     --      |                                               설명                                                | 접속 상태 저장 경로 |                          장점                           |                          단점                          |
| :---------: | :-----------------------------------------------------------------------------------------------: | :-----------------: | :-----------------------------------------------------: | :----------------------------------------------------: |
| **Cookie**  |                      Cookie는 크저 HTTP의 Stateless한 것을 보완해주는 도구다                      |       Client        |                 서버에 부담을 덜어준다                  |              Cookie 자체는 인증이 아니다               |
| **Session** | 접속 상태를 서버가 가진다(Stateful). 접속 상태와 권한 부여를 위해 세션아이디를 Cookie로 전송한다. |       Server        | 신뢰할 수 있는 유저인지 Server에서 추가로 확인 가능하다 | 하나의 서버에서만 접속 상태를 가지므로 분산에 불리하다 |

---

# Cookie Options

Path

- URL Path의 접두사로, 이 경로나 이 경로의 하위 경로에 있는 페이지만 쿠키에 접근할 수가 있다.
  - 절대 경로이어야 하고, 기본값은 현재 경로다.

Domain

- Cookie에 접근 가능한 Domain을 지정한다.
- 제약사항으로는 서브 도메인에서는 쿠키 정보를 얻을 수 없다는 점이다.

```js
// site.com에서 쿠키를 설정함
document.cookie = "user=John";

// site.com의 서브도메인인 forum.site.com에서 user 쿠키에 접근하려 함
alert(document.cookie); // 찾을 수 없음
```

Expires/Max-age

- 유효 일자/만료 기간 옵션이 지정되어있지 않다면, 브라우저가 닫힐 때 쿠키도 함께 삭제된다. 이런 쿠키를 `세션 쿠키`라고 부른다.
- `Expires`나 `Max-age`옵션을 설정하면 브라우저를 닫아도 쿠기가 삭제되지 않는다.

Secure

- 이 옵션을 설정하면 HTTPS로 통신하는 경우에만 쿠키가 전송된다.

SameSite

- 해당 옵션은 크로스 사이트 요청 위조(Cross-Site Request Forgery, CSRF) 공격을 막기 위해 만들어진 보안 옵션이다.

HttpOnly

- HttpOnly 옵션은 웹서버에서 Set-Cookie 헤더를 이용해 쿠키를 설정할 때 지정할 수 있다.
- 이 옵션을 사용하면 자바스크립트 같은 클라이언트 측 스크립트가 쿠키를 사용할 수 없게 된다.
- 이 옵션은 **해커가 악의적인 코드를 페이지에 삽입하고 사용자가 그 페이지에 접속하기를 기다리는 방식의 공격을 예방할 때 사용된다.**

# Use Example

```js
res.cookie("name", "tobi", {
  domain: ".example.com",
  path: "/admin",
  secure: true,
});
res.cookie("rememberme", "1", {
  expires: new Date(Date.now() + 900000),
  httpOnly: true,
});
```

---

# Useful Links

[쿠키와 그 옵션들 - 공식문서](https://ko.javascript.info/cookie#ref-1141)
[Expressjs - res.cookie](http://expressjs.com/en/4x/api.html#res.cookie)
