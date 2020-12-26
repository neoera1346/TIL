# Async & Await

여기서 등장하는 **`Async`는 '비동기'이고, `Await`은 '기다리다'** 라는 의미를 가지고 있다.

- **`Async`의 핵심은, 함수 앞에 `async`가 꼭 붙어야 `await`을 쓸 수 있다.**

`Promise`에서 다뤘던 코드를 `Async`와 `Await`을 사용해 만들은 코드를 가져왔다.

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

const result = async () => {
  const one = await gotoCodestates();
  console.log(one);

  const two = await sitAndCode();
  console.log(two);

  const three = await eatLunch();
  console.log(three);

  const four = await goToBed();
  console.log(four);
};

result();
```
