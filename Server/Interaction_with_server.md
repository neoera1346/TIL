# 핵심 키워드

- **`Server, Client, HTTP, API, , XMLHttpRequest, Ajax`**

---

## Web Architectures

- 웹 개발과 관련된 아키텍처
  - Browser와 서버와의 연결은 HTTP 통신 규약을 통해서 이루어진다.
- AJAX의 중요성: 비동기적으로 DOM을 이용하여 페이지 일부만 변경하는 기술
- AJAX 통신을 가능하게 하는 API (fetch API 등)이 있다.

---

**우리가 만드는 모든 웹서비스는 `서버`와, `클라이언트`로 구성되어있다.**

## Server-Client

- **`서버-클라이언트(server-client)`** 구조란 데이터를 저장하고 관리하는 서버 부분과 해당 서버에 접속하여 데이터를 열람하는 클라이언트 부분으로 구성된 네트워크 구조를 말한다.

## Server

> - 서비스를 제공(serve)하는 컴퓨터로, 다수의 클라이언트 컴퓨터의 요청을 처리하기 위해 존재한다.
> - 서버의 예시로, Web Server, File Server 등이 있다.
> - 웹페이지 지원이나, 공유 데이터의 처리 및 저장 등의 비즈니스 로직을 주로 수행한다.

- 유저/클라이언트에게 자원을 제공해주는 주체다.
- 데이터의 저장과 관리를 담당한다.
- 서버는 상시 인터넷에 연결되어 있어야한다.

## Client

- 네트워크를 이용하여 서버 시스템에 연결된 PC나 스마트폰 등 사용자 측을 말한다.
- **`클라이언트`** 는 서버에서 받아온 데이터를 단말기 화면에 표시하고 사용자의 요청을 서버에 전달하기 위해 웹브라우저를 사용한다.
- 클라이언트의 경우 필요할 때만 켜서 인터넷에 접속하면 된다.
- **현대의 복잡한 시스템은 클라이언트이면서 서버의 역할을 동시에 수행하는 경우도 있음 (e.g. `P2P`)**

---

# Communication between Client and Server

**클라이언트는 서버가 어떤식으로 요청을 처리하는지에 대해선 구체적으로 알 필요없이, 추상화된 `인터페이스(API; Application programing Interface)`를 바탕으로 `원격 서버에 요청(RPC; Remote Procedure Call)`을 하고, 응답에 대해 적절한 형태로 화면에 표시한다.**

## Messaging Patterns

- Request Response
  - 대표적으로 HTTP가 사용하는 메시징 패턴이다.
  - 보통 동기적으로 작동하며, 연결이 열리면 응답이 전달될떄까지 기다리거나, timeout 전달한다.
- Publish-Subscribe
  - 수신자가 지정되지 않은 대신, **메시지가 발행되면 구독을 신청한 수신자에게 일괄적으로 전달한다.**
  - 비동기 메시징이며, 메시지 브로커 또는 Event bus 라고 불리는것이 중간에 구현되어야 함
- Push technology (Server push)
  - Publish-Subscribe 모델의 일종
  - 전송 요청이 클라이언트로부터 시작되지 않음
  - HTTP/2에서 Server push 라는 이름으로 구현
  - WebSocket 프로토콜을 이용해 구현 가능

## Interface

- 사물 간 또는 사물과 인간 간의 **의사소통이 가능 하도록** 만들어진 **물리적, 가상적 매개체(접점)** 을 의미한다.

## API (Application Programming Interface)

- 프로그래밍되어있는 애플리케이션과 **의사소통 가능한 매개체다.**
- `API`를 활용해서 `UI`를 만들 수가 있다.

## UI (User Interface)

- 유저와 **의사소통 가능한 매개체다.**

아래 그림은 서버와, 클라이언트, 그리고 API의 관계를 잘 보여준다. <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1SqcRhKA6bOHtDMvk3q8WVRcd3dJ7us8MfQ&usqp=CAU" width = '300'>

---

## Browser

- **브라우저의 주요 기능**은 사용자가 선택한 자원을 서버에 요청하고 브라우저에 표시하는 것이다.
- `JS`, `HTML`, `CSS`를 해독하는 엔진들이 브라우저에 내장되어 있다. 때문에, 브라우저는 코드를 해독해서, 컴퓨터가 이해할 수 있는 바이너리 데이터로 넘겨주고, 컴퓨터가 처리한 결과를 브라우저에 보여주게 된다.

<!-- Link -->

브라우저가 동작하는 구체적인 방법에 대해서 잘 정리된 글이 있다. 꼭 참고하자.
[링크](https://d2.naver.com/helloworld/59361)

---

## HTTP (HyperText Transfer Protocol)

- `서버-클라이언트` 통신의 **규약, 규칙**이다.
- 클라이언트와 서버는 `프로토콜(Protocol)`이라고 불리는 정해진 규약에 따라 메시지를 교환한다.

#### HTTP Elements

- HTTP 통신은 항상 요청과 응답으로 구성되어 있다.
- 응답이 없거나 요청이 무시되면 클라이언트(웹)에서는 에러가 발생한다.
  - 응답에는 요청 성공여부를 나타내는 코드들이 존재한다. [참고](https://developer.mozilla.org/ko/docs/Web/HTTP/Status)
- HTTP 요청은 Header와 Body로 구성되어 있다.
  - `Header`에는 기본적으로 아래와 같은 정보들이 들어간다.
    1. 어디서 보내는 요청인가(origin)
    2. 컨텐츠 타입은 무엇인가(content-type)
    3. 어떤 클라이언트를 이용해 보냈는가 (user-agent)
  - `Header`에 대한 추가 정보를 잘 정리해놓은 블로그가 있다. [참고](https://www.zerocho.com/category/HTTP/post/5b3ba2d0b3dabd001b53b9db)
  - `Body`에는 각 [다양한 Request 메소드](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)가 들어간다.
  - 응답도 마찬가지로 `Header`와 `Body`를 가진다.

#### HTTP Properties

- HTTP의 속성: `Stateless`, `Connectionless`
  - `Stateless`: HTTP의 각 요청은 모두 독립적이다.
    1. Client는 이전 요청과 연결된 요청일 지라도, Server는 이전 요청을 기억하지 못해서 별개의 요청으로 받아들인다.
    2. 따라서, HTTP에는 state라는 것이 없다.
  - `Connectionless`: 한번의 요청에는 한번의 응답을 한다.
    1. 한번 요청에 대한 응답을 한 이후에는 연결이 끊기기 때문에, 더이상 응답을 할 수 없다.

#### HTTP Methods

- 위에 `Body`에 들어가는 각 다양한 메소드들의 링크를 이미 걸어놓았다.
- 그 중에서도 가장 많이 사용되는 메소드들은 아래와 같다.
  1. `GET` - 서버에 자원을 요청.
  2. `POST` - 서버에 자원을 생성.
  3. `PUT` - 서버의 자원을 수정.
  4. `DELETE` - 서버의 자원을 제거.

---

## AJAX (Asynchronous JavaScript and XML)

- 페이지 전체 로딩 없이, 페이지의 일부만 업데이트하기 위한 방법이다.
  - ​JavaScript와 DOM을 이용한다.
- 서버 응답에 따라 동적으로 페이지의 구성요소를 변경하는 방법이다.

#### ​XMLHttpRequest (XHR)

- 서버와 자유롭게 통신할 수 있게 해주는 역할을 한다.

#### XML 사용예시

```js
var xhr = new XMLHttpRequest();
xhr.open("get", "http://52.78.213.9:3000/messages");

// 요청의 상태 변화를 추적합니다
xhr.onreadystatechange = function () {
  if (xhr.readyState !== 4) return;
  // readyState 4: 완료

  if (xhr.status === 200) {
    // status 200: 성공
    console.log(xhr.responseText); // 서버로부터 온 응답
  } else {
    console.log("에러: " + xhr.status); // 요청 도중 에러 발생
  }
};

xhr.send(); // 요청 전송
```

현재까지도 간혹 쓰이고 있다고 하지만, 어려운 코드다.
따라서, JQuery를 사용하는 방법이 등장했다.

#### JQuery 사용예시

```js
$.get("http://52.78.213.9:3000/messages", function (response) {
  // response: 서버로부터 온 응답
});
```

이 방법 또한 가독성이 부족하다고 느끼게 되고, 보다 쓰기 쉬운 표준 API를 만들게 되었다.

#### fetch API

```js
fetch("http://52.78.213.9:3000/messages")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    // json 형태로 전달받은 서버로부터의 응답
  });
```

---

## What Else?

**아래 링크들은 fetch와 관련된 좋은 리소스들이다. 꼭 참고하도록 하자!**

1. [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
2. [That's so fetch!
   ](https://jakearchibald.com/2015/thats-so-fetch/)
3. [This API is so Fetching!](https://hacks.mozilla.org/2015/03/this-api-is-so-fetching/)
4. [fetch와 XMLHttpRequest의 차이점](https://stackoverflow.com/questions/35549547/fetch-api-vs-xmlhttprequest)

**URL (Uniform Resource Locator) 구성**

- http://www.google.com/search?q=puppies#p2
- `scheme`: http, https, ssh, git
- `host`: google.com, localhost, 192. 168.1.1
- `subdomain`: www, mail, blog
- `path`: search, about.html, blog/entries/2/big-day
- `query string`: q=puppies/ref=mobile&page=4
- `hash fragment`: p2, FAQ, /profile/edit

**HTTP Status Code (응답 코드)**

- `1xx`: Hold On
- `2xx`: Here You GO / 요청 성공
- `3xx`: Go Away / 요청에 대한 응답이 수정되지 않음 (Cache)
- `4xx`: You Screwed Up / 컨텐츠에 접근할 권한 없음, 요청받은 리소스를 사용할 수 없음
- `5xx`: I Screwed Up / 서버가 처리할 수 없는 요청

**Chrome Dev Tool: Network Tab**

- 크롬 개발자도구의 네트워크 탭에서 요청과 응답 상태 등을 확인할 수 있다.
- [참고 자료](https://developers.google.com/web/tools/chrome-devtools/network/reference)

**Useful Links**

- [cURL Related](https://curl.se/docs/httpscripting.html)
- [Postman](https://www.postman.com/downloads/)
  - Useful to test APIs
