# Express

## Definition

- **`Node.js`를 위한 빠르고 개방적인 간결한 웹 프레임워크**

- **`Node.js` 환경에서 웹 어플리케이션 or `API`를 제작하기 위해 사용되는 인기있는 프레임워크**

---

## Installation

`npm install express --save`

[자세한 설치 방법 참고](https://expressjs.com/ko/starter/installing.html)

---

## Feature

1. Web Application

   Express는 웹 및 모바일 애플리케이션을 위한 일련의 강력한 기능을 제공하는 간결하고 유연한 Node.js 웹 애플리케이션 프레임워크입니다.

2. API

   Express는 웹 및 모바일 애플리케이션을 위한 일련의 강력한 기능을 제공하는 간결하고 유연한 Node.js 웹 애플리케이션 프레임워크입니다.

3. 성능

   Express는 기본적인 웹 애플리케이션 기능으로 구성된 얇은 계층을 제공하여, 여러분이 알고 있고 선호하는 Node.js 기능을 모호하게 만들지 않습니다.

4. Frameworks

   많은 유명한 프레임워크들이 Express를 기반으로 하고 있습니다.

---

## Express VS HTTP

- **미들웨어**를 붙이기 쉽다.

- **자체 라우터**를 제공한다.

---

## Middleware

- "최종 요청 핸들러 이전의 Express 라우팅 계층에 의해 호출되는 함수이며, 따라서 원시 요청과 의도된 최종 라우트 사이의 미들웨어에 위치한다." - [Express 공식 문서 용어집](https://expressjs.com/ko/resources/glossary.html)

- 쉬운 예시로, 미들웨어는 컨베이어 벨트로, 클라이언트의 요청에 살을 붙이거나 살을 뺄 수 있다.

### Core Feature

- 미들웨어 함수는 요청 오브젝트 (req), 응답 오브젝트 (res), 그리고 애플리케이션의 요청-응답 주기 중 그 다음의 미들웨어 함수 대한 액세스 권한을 갖는 함수다. 그 다음의 미들웨어 함수는 일반적으로 next라는 이름의 변수로 표시된다. - [미들웨어 작성](https://expressjs.com/ko/guide/writing-middleware.html)

- 위에서 미들웨어를 **컨베이어 벨트로 비유**를 했는데, 여기서 next의 역할은 이렇다.

  공장에서 한 상품(**요청**)이 컨베이어 벨트위에서 제조되어 가는데, 한 구간에서 상품의 색상을 담당하고 → 다음 구간에서 상품의 크기를 늘려주고 → 다음 구간에서 상품의 질감으로 완성시켜서 → 완성된 제품(**응답**)으로 반환되는 것과 같다.

### Functioning Procedure

1. 모든 코드를 실행.
2. 요청 및 응답 오브젝트에 대한 변경을 실행.
3. 요청-응답 주기를 종료.
4. 스택 내의 그 다음 미들웨어를 호출.

---

## Extra Info

- [Express 공식 문서](https://expressjs.com/ko/)

  한국어가 지원되긴 하나, 최신 업데이트를 확인하려면 **영문판 문서**를 참조해야한다.

  Express 기본 설치부터, Express 생성, 정말정말 유용한 Express Routing, 미들웨어(Middleware)작성 및 사용법, 디버깅 그리고 용어집.. 등등.. 많은 유용한 정보들이 많이 있으니 웹서버 및 API를 만들 때 꼭 많이 참고하도록 하자.
