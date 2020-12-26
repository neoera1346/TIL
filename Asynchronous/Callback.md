# Callback

아래 예시 코드를 보면서 비동기에서의 `Callback`을 설명하겠다.

**확실히 비동기의 효율은 좋으나, 만약 순서를 가지거나 제어하고 싶다면 어떻게 할 수 있을까?**

내가 원하는 순서대로 각각 콜백함수를 적어도 `Math.random()`이라는 놈 때문에, 실행 시간에 따라 출력되는 결과가 매번 다를 것이다.

하지만, `callback의 callback의 callback`으로 적는다면 **실행 소요 시간과 관계 없이** 아래처럼 나열한 콜백의 순서대로 출력이 되게 된다.

```js
const printString = (string, callback) => {
  setTimeout(
    () => {
      console.log(string);
      callback();
    },
    Math.floor(Math.random() * 100) + 1
    // Makes the string have random processing time
  );
};

// Callback Chaining
const printAll = () => {
  printString("A", () => {
    printString("B", () => {
      printString("C", () => {});
    });
  });
};
printAll(); // Same ordered result
// A, B, C
// A, B, C
// A, B, C
```

`Callback`으로 순차적으로 불러올 수 있는 사용은 매우 좋으나, 콜백 함수 사용이 많아지는 경우, 계속 `Indentation` 효과로 밀려나게 된다.

**그 결과, 아래와 같은 불편한 코드가 나오게 되고, 이를 흔히 `Callback Hell`이라고 부른다.**

```js
a(function (resultsFromA) {
  b(resultsFromA, function (resultsFromB) {
    c(resultsFromB, function (resultsFromC) {
      d(resultsFromC, function (resultsFromD) {
        e(resultsFromD, function (resultsFromE) {
          f(resultsFromE, function (resultsFromF) {
            console.log(resultsFromF);
          });
        });
      });
    });
  });
});
```
