# Communication Between Client and Server

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

## What Else?

**Chrome Dev Tool: Network Tab**

- 크롬 개발자도구의 네트워크 탭에서 요청과 응답 상태 등을 확인할 수 있다.
- [참고 자료](https://developers.google.com/web/tools/chrome-devtools/network/reference)

**Useful Links**

- [cURL Related](https://curl.se/docs/httpscripting.html)
- [Postman](https://www.postman.com/downloads/)
  - Useful to test APIs
