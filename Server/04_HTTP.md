# HTTP (HyperText Transfer Protocol) Basics

- `서버-클라이언트` 통신의 **규약, 규칙**이다.
- 클라이언트와 서버는 `프로토콜(Protocol)`이라고 불리는 정해진 규약에 따라 메시지를 교환한다.

---

## HTTP Elements

- HTTP 통신은 항상 요청과 응답으로 구성되어 있다.
- 응답이 없거나 요청이 무시되면 클라이언트(웹)에서는 에러가 발생한다.
  - 응답에는 요청 성공여부를 나타내는 코드들이 존재한다. → [참고](https://developer.mozilla.org/ko/docs/Web/HTTP/Status)
- HTTP 요청은 Header와 Body로 구성되어 있다.
  - `Header`에는 기본적으로 아래와 같은 정보들이 들어간다.
    1. 어디서 보내는 요청인가(origin)
    2. 컨텐츠 타입은 무엇인가(content-type)
    3. 어떤 클라이언트를 이용해 보냈는가 (user-agent)
  - `Header`에 대한 추가 정보를 잘 정리해놓은 블로그가 있다. → [참고](https://www.zerocho.com/category/HTTP/post/5b3ba2d0b3dabd001b53b9db)
  - `Body`에는 각 [다양한 Request 메소드](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)가 들어간다.
  - 응답도 마찬가지로 `Header`와 `Body`를 가진다.

---

## HTTP Properties

- HTTP의 속성: `Stateless`, `Connectionless`
  - `Stateless`: HTTP의 각 요청은 모두 독립적이다.
    1. Client는 이전 요청과 연결된 요청일 지라도, Server는 이전 요청을 기억하지 못해서 별개의 요청으로 받아들인다.
    2. 따라서, HTTP에는 state라는 것이 없다.
  - `Connectionless`: 한번의 요청에는 한번의 응답을 한다.
    1. 한번 요청에 대한 응답을 한 이후에는 연결이 끊기기 때문에, 더이상 응답을 할 수 없다.

---

## HTTP Methods

- 위에 `Body`에 들어가는 각 다양한 메소드들의 링크를 이미 걸어놓았다.
- 그 중에서도 가장 많이 사용되는 메소드들은 아래와 같다.
  1. `GET` - 서버에 자원을 요청.
  2. `POST` - 서버에 자원을 생성.
  3. `PUT` - 서버의 자원을 수정.
  4. `DELETE` - 서버의 자원을 제거.

---

**HTTP Response Status Code (응답 코드)**

- `1xx`: Hold On
- `2xx`: Here You GO / 요청 성공
- `3xx`: Go Away / 요청에 대한 응답이 수정되지 않음 (Cache)
- `4xx`: You Screwed Up / 컨텐츠에 접근할 권한 없음, 요청받은 리소스를 사용할 수 없음
- `5xx`: I Screwed Up / 서버가 처리할 수 없는 요청
