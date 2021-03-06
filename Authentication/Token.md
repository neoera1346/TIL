# Token

토큰 기반의 인증이란 유저들이 본인의 신분을 검증할 수 있고, 검증의 응답으로 매우 유니크한 접근 권한을 갖게하는 토큰을 전달해주는 프로토콜이다.

토큰이 유효한 동안, 해당 토큰을 발급해준 웹사이트나 앱에 접근할 수 있을 뿐만 아니라 해당 도메인의 어떤 서브 도메인 경로로 가더라도 민감한 정보들(Credentials)을 다시 입력할 필요가 없다.

이전에 배운 세션과 비교한다면, 토큰이 가지는 장점은 확실하다:

- 세션은 접속 상태가 `서버`에 저장되지만, 토큰은 `클라이언트`에 저장된다.

또한, 토큰이 살아있는 한 유저는 접속 상태를 유지할 수 있다. 유저가 브라우저 창 혹은 탭을 닫거나 로그아웃하면 토큰은 사라진다.

---

# Brief History

인증 기반 토큰이 등장하게 된 배경을 짧게 알아보자.

비밀번호들은 과거부터 보통 다음과 같은 성격을 가졌다.

- 알파벳, 숫자, 특수 문자의 조합이다.
- 이 독특한 조합을 유저들은 기억해야한다.
- 유저가 어딘가에 접근을 원하면, 비밀번호를 입력해야만 한다.

사람들은 모든 비밀번호들을 기억하기 어렵기 때문에, 다음 방법들을 고안해냈다.

- 모든 비밀번호들을 한 곳에 기록한다.
  - 많은 비밀번호를 한 장의 종이에 기록하는 것은 보안에 있어 매우 취약하다.
- 여러 기타 사이트에서 재사용한다.
  - 한 곳의 비밀번호가 털리면, 많은 계정들이 위험해진다.
- 비밀번호를 한 글자씩 변화시켜 사용한다.
  - 보통 비밀 업데이트가 필요하면 한 글자만 변경한다.

토큰 인증이 등장하고 유저들은 세션들을 저장하는 서버의 부담 또한 덜어주고 해커들의 공격에도 조금은 더 안전하다고 볼 수 있다.

---

# Authorization Token Types

토큰 인증 방식에는 세 가지 타입이 있다.

- Connected
  - USB, 키, 디스크, 드라이브와 같이 삽입 가능한 형태
- Contactless
  - 비삽입형이나 서버와 가까이 위치해야하는 장치
- Disconnected
  - 장거리로 서버와 통신할 수 있는 장치

---

# Token Authorization Steps

토큰 기반 인증에서 유저들은 민감한 정보들을 단 한번만 확인하게 된다. 유저 확인이 되면, 서버는 정해진 기간동안 접근을 허용하는 토큰을 유저들(클라이언트)에게 전달한다.

기본적인 토큰 기반의 인증 절차는 다음과 같다.

- Request
  - 클라이언트가 서버에 ID/PW를 담아 로그인 요청을 보낸다.
- Verification
  - 서버는 이 클라이언트에게 접근 권한을 줘도 될지, 유저를 검증한다.
  - ID/PW가 일치하는지 확인하고, 클라이언트에게 보낼 암호화된 토큰을 생성한다.
  - 이 때, `AccessToken`, `RefreshToken` 모두 생성한다.
- Tokens: 이후 서버는 클라이언트에 토큰을 전달한다.
  - 토큰에 담길 정보(Payload)는 유저를 식별할 정보, 권한이 부여된 카테코리가 될 수 있다.
- Storage: 토큰은 클라이언트에 저장된다.
  - 저장 위치는 local storage, cookie, react의 state 등 다양하다.

이후 클라이언트가 서버에 다른 자원을 요청할 때, 클라이언트는 토큰을 다시 서버로 보내 토큰과 함께 원하는 데이터를 받는다.

- Bearer Authentication을 이용한다.
- [참고 1 (요약)](https://learning.postman.com/docs/sending-requests/authorization/#bearer-token), [참고 2 (상세)](https://tools.ietf.org/html/rfc6750)

<img src="https://www.okta.com/sites/default/files/styles/1640w_scaled/public/media/image/2020-12/TokenBasedAuthentication.png?itok=1Suc8Kgm"/>

---

# JWT

- JSON Web Token(JWT)는 이름에서 알 수 있듯이 JSON 기반의 인증 토큰이다.

---

# Install

**설치방법:**

```
$ npm install jsonwebtoken
```

---

# Usage

**사용방법:**

```js
jwt.sign(payload, secretOrPrivateKey, [options, callback]);
```

```js
jwt.verify(token, secretOrPublicKey, [options, callback]);
```

---

# JWT Components

JWT는 다음과 같은 구성을 갖는다.

- Header: 토큰의 종류와 암호화 알고리즘이 적혀있다.

```js
{
  "alg": "HS256",
  "typ": "JWT"
}
```

- Payload: 사용자의 이름, 토큰 만료일자 그리고 접근 권한들을 설정할 수 있다.

```js
{
  "sub": "someInformation",
  "name": "phillip",
  "iat": 151623391
}
```

- Signature: Salt(원하는 비밀 키)를 사용해 암호화한다.

```js
HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret);
```

---

# Pros & Cons

## Pros

**Statelessness & Scalability (무상태성 & 확장성)**

- 서버는 클라이언트에 대한 정보를 저장할 필요 없다.
  - 토큰 해독이 되는지만 판단한다.
- 클라이언트는 새로운 요청을 보낼 때마다, 토큰을 헤더에 포함시키면 된다.
  - 서버를 여러개 갖고 있는 서비스라면 더 효율적이다.
  - 동일 토큰으로 여러 서버에서 인증이 가능하다.

**어디서나 생성 가능하다.**

- 토큰은 어디에서나 생성이 가능하고, 토큰을 확인하는 서버가 토큰을 만들어야 하는 법도 없다.
- 토큰 생성용 서버를 만들거나, 타사에 토큰 관련 작업을 맡길 수도 있다.

**권한 부여에 용이하다.**

- 유저에게 접근 권한을 부여해주거나, 접속 가능 시간 등을 설정할 수 있다.

## Cons

단일 키를 가지고 있다.

- 키는 하나이기 때문에 해당 키가 노출되면 바로 위험하다.

복잡한 암호화 알고리즘.

- 개발자가 시그니처의 암호화 알고리즘 지식이 많지 않다면, 해커에게 쉽게 노출될 수 있다.

한계들이 있다.

- 모든 클라이언트에게 메세지를 전달할 수는 없다.
- 서버사이드에서 클라이언트들을 관리할 수가 없다.

---

# Useful Links

- [Github - JWT Repo](https://github.com/auth0/node-jsonwebtoken#usage)
- [npmjs - JWT](https://www.npmjs.com/package/jsonwebtoken)
- [JWT 발급하기](https://backend-intro.vlpt.us/4/01.html)
