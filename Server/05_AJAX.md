# AJAX (Asynchronous JavaScript and XML)

- 페이지 전체 로딩 없이, 페이지의 일부만 업데이트하기 위한 방법이다.
  - ​JavaScript와 DOM을 이용한다.
- 서버 응답에 따라 동적으로 페이지의 구성요소를 변경하는 방법이다.
- AJAX의 중요성: 비동기적으로 DOM을 이용하여 페이지 일부만 변경하는 기술
- AJAX 통신을 가능하게 하는 API (fetch API 등)이 있다.

## ​XMLHttpRequest (XHR)

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
