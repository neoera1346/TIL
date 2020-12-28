# Fetch

우리가 웹 개발을 할 때, `AJAX` 기술을 자주 사용하게 된다.

`AJAX` 중에서, `XHR`, `JQuery` 그리고 `Fetch`를 쓸 수 있는데, 그 중 가장 활용도가 높은 `Fetch`에 대해서 알아보자.

이는 `XMLHttpRequest`와 비슷하지만 `fetch`는 `Promise` 기반으로 구성되어 있어서 더 간편하고 가독성 있게 사용할 수 있다.

비동기 요청의 가장 대표적인 사례를 꼽으라고 한다면, 단연 네트워크 요청을 들 수 있다. 다양한 네트워크 요청 중, URL로 요청하는 경우가 가장 흔하다. 이를 가능하게 해주는 `API`가 바로 `fetch API`인 것이다.

네이버와 같은 인터넷 홈페이지를 예시로 들어보자.

시시각각 변하는 날씨와 환율, 일정 주기로 변하는 광고와 뉴스와 같이 특정 정보만 업데이트 하기 위해서, 우리는 `fetch API`를 이용하여 , 비동기적으로, 원하는 정보를 원격 URL로부터 불러와야 한다.

---

## Fetch Method :

**1. 서버로 네트워크 요청(request)을 보낸다.**

**2. 응답(response)을 받을 수 있도록 해준다.**

---

## Fetch (url, [options])

**`URL` : 접근하고자 하는 URL**

**`options` : 선택적인 매개변수로, method나 header 등을 지정할 수 있다.**

- **fetch의 두 번째 파라미터로 요청에 대한 추가적인 데이터를 입력할 수 있다. [여기서 fetch의 파라미터들 확인](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)**

- **`options`에 아무것도 넘기지 않으면, 요청은 언제나 `GET` method 로 진행되어, url로부터 컨테츠가 다운로드 된다.**

- **`fetch()`를 호출하면 브라우저는 네트워크 요청을 보내고 프라미스가 반환된다.**

- **반환되는 프라미스는 `fetch()`를 호출하는 코드에서 사용된다.**

- **올바른 url로 요청을 보내야 하고, then으로 불러오는 응답에 대해 자체 내장 메소드인 `json()`을 적용해야 한다.**

- **`json()`은 Response 스트림을 가져와서 스트림이 완료될 때까지 읽은 후, 다 읽은 body의 텍스트를 Promise형태로 반환한다.**

- **반환되는 값은 데이터가 아닌, Promis로 감싸져 있는 Response 객체. 그리고 이 Reponse 객체는 `json` 이라는 메소드를 가지고 있는데, 이 메소드를 실행 시켜야 비로서 우리가 원하는 데이터가 Promise 에 감싸져서 나오게 된다.**

---

## Fetch Process

**작동 순서**

**1. fetch 요청 →**

**2. Promise<Response> 가 반환 됨 →**

**3. Response 를 꺼냄 (Promise 패턴 혹은 async await 패턴) →**

**4. Response 의 json 메소드를 실행 →**

**5. Promise<data> 가 반환 됨 →**

**6. data를 꺼냄**

---

**아래 링크들은 fetch와 관련된 좋은 리소스들이다. 꼭 참고하도록 하자!**

1. [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
2. [That's so fetch!
   ](https://jakearchibald.com/2015/thats-so-fetch/)
3. [This API is so Fetching!](https://hacks.mozilla.org/2015/03/this-api-is-so-fetching/)
4. [fetch와 XMLHttpRequest의 차이점](https://stackoverflow.com/questions/35549547/fetch-api-vs-xmlhttprequest)
