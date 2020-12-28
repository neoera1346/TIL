# AJAX (Asynchronous JavaScript and XML)

Ajax는 빠르게 동작하는 동적인 웹 페이지를 만들기 위한 개발 기법이다.

예전에는 웹 페이지 전체를 렌더해서 필요한 정보를 얻어왔기 때문에 시간이 상당히 걸리곤 했다.

이런 문제를 해결하고자, 서버의 응답에 따라 동적으로 페이지의 구성요소를 변경하는 Dynamic Web Page가 등장하게 되었다.

바로, ​JavaScript와 DOM을 이용함으로서, 비동기적으로 페이지 일부만 변경하는 기술을 도입한 것이다.

이제는, Ajax를 이용하여 웹 페이지 전체를 로딩하지 않고도, 백그라운드 영역에서 서버와 통신함으로서, 서버 응답에 따라 필요한 부분만을 갱신할 수 있게 되었다.

AJAX 통신을 가능하게 하는 API (fetch API 등)도 있다.

---

## ​XMLHttpRequest (XHR)

- 서버와 자유롭게 통신할 수 있게 해주는 역할을 한다.

---

## 표준 API 변천 과정

**세 가지 모두 장단점이 있어 아직까지 쓰이고 있으며, 용도에 따라 쓰는 것이 중요하다.**

#### 1. XML 사용예시

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

#### 2. JQuery 사용예시

```js
$.get("http://52.78.213.9:3000/messages", function (response) {
  // response: 서버로부터 온 응답
});
```

#### 3. fetch API

```js
fetch("http://52.78.213.9:3000/messages")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    // json 형태로 전달받은 서버로부터의 응답
  });
```
