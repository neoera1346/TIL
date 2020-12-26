# Promise

`Callback`에서 언급했던 `Callback Hell`을 다시 생각해보자.

매우 길게 늘어져있고, 한 콜백의 중괄호의 짝이 어디있는지 찾기도 왠만해서 쉽지 않다.

**이렇게 `callback`끼리 연결되있는 것을 우리는 `Callback Chain`이라고 칭한다.**

---

## Promise 특징

1. `Promise`의 사용으로 길게 늘어지는 `Callback Chain`을 제어할 수가 있게 된다.
2. `Promise`는 '약속'이란 뜻을 가지고 있는 `Class`로서, `new Promise()`를 통해 인스턴스를 만들어 준다.

## Promise methods

- `Promise`는 아래 그림과 같이 **두개의 커맨드**가 있다.
  - `resolve()`
  - `reject()`

**두 명령어를 통해서 다음 동작으로 넘어가거나, 에러를 핸들링을 할 수 있다.**
그림을 통해서 다시 이해해보자.

<img src= 'https://media.vlpt.us/images/neoera1346/post/faec2089-3cea-472b-9968-9ab88c99c1d2/image.png'>new Promise()</img>

<img src= 'https://media.vlpt.us/images/neoera1346/post/eaba76cc-e694-4141-a03c-3ca5fd20fb27/image.png'>.then 사용법</img>

<img src= 'https://media.vlpt.us/images/neoera1346/post/7c9a3d62-8b2e-46b0-8fd4-3f0276524098/image.png'>Promise의 3가지 상태와 흐름</img>

---

아래의 코드는 **`Callback Chain`으로 만든 것을 `Promise`를 통해 재구현을 한 결과다.**

```js
const printString = (string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(string);
      resolve();
    }, Math.floor(Math.random() * 100) + 1);
  });
};

const printAll = () => {
  printString("A")
    .then(() => {
      return printString("B");
    })
    .then(() => {
      return printString("C");
    });
    .catch(error => console.log(error))
};
printAll();
```

1. `.then()`을 통해서 각각의 콜백을 호출해준 것이다.
2. 또한, `.then()`을 사용함으로 **줄 간격도 일정하게 맞출 수가 있는 장점**도 있다.
3. 확인해 본 것처럼, `.then()`은 **성공적으로 작업이 실행될 때 사용**이 된다.
4. 반면, 에러 발생 시, `.catch()`를 통해 **에러를 잡아줄 수 있다.**

---

아래 코드는 깔끔한 `Promise Chaining`의 예시이다.

```js
function gotoCodestates() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1. go to codestates");
    }, Math.floor(Math.random() * 100) + 1);
  });
}

function sitAndCode() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2. sit and code");
    }, Math.floor(Math.random() * 100) + 1);
  });
}

function eatLunch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("3. eat lunch");
    }, Math.floor(Math.random() * 100) + 1);
  });
}

function goToBed() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("4. goToBed");
    }, Math.floor(Math.random() * 100) + 1);
  });
}

gotoCodestates()
  .then((data) => {
    console.log(data);
    return sitAndCode();
  })
  .then((data) => {
    console.log(data);
    return eatLunch();
  })
  .then((data) => {
    console.log(data);
    return goToBed();
  })
  .then((data) => {
    console.log(data);
  });
```
