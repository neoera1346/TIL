# Stack

- **_LIFO: Last In, First Out. [후입선출]_**

**`Stack` 설명 예시 1.**

- Stack은 **쌓여있는 접시 더미**와 같이 작동한다.
- 새로운 접시가 쌓일 때도 맨 위에서 쌓이고, 접시를 가져갈 때도 맨 위에서 가지고 가는 것과 같다. **(LIFO: last in, first out).**

**`Stack` 설명 예시 2.**

- **`Stack`은 하노이의 탑과 비슷한 원리를 갖는다.**

<img src="https://blog.kakaocdn.net/dn/bbNoUx/btqO3yADBUl/gjPZokk7XRI3O8n4b4auy1/img.png">
Stack = Pringles ;)

---

<img src="https://blog.kakaocdn.net/dn/C9HY7/btqO6hrSjBz/0WY2AsYVSKx7AhxZlmyA60/img.png">
하노이의 탑

- `Stack`에는 **할당된 공간**이 있다.

→ **Stackoverflow** / **`"Maximum stack exceeded"`** 발생!

**`Stack` 구조에 사용되는 메소드들 :**

- 데이터 요소를 스택의 최상단에 추가하는 `push(element)`
- 스택의 최상단에서 데이터 요소를 제거하고 반환하는 `pop()`

아래 코드는 **직접 `Stack`을 가지고 Method들을 구현한 결과**다.

- Array method를 사용하지 않고 **`Object` 생성자와 numeric key로만 만들었다.**

```js
class Stack {
  constructor() {
    this.storage = {};
    this.top = -1;
  }
  size() {
    return Object.keys(this.storage).length;
  }
  push(element) {
    this.storage[this.top + 1] = element;
    this.top++;
  }
  pop() {
    let out = this.storage[this.top];
    delete this.storage[this.top];
    this.top--;
    return out;
  }
}
```

아래 코드는 `Stack` 을 구현한 후 출력 예시 중 일부다.

```js
it("top은 가장 최근의 요소의 위치를 가리켜야 합니다", function () {
  stack.push("a");
  stack.push("b");
  stack.push("c");
  expect(stack.size()).toEqual(3);
  expect(stack.top).toEqual(2);
  expect(stack.storage).toEqual({ 0: "a", 1: "b", 2: "c" });
});
```
