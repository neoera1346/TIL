# Queue

- **_FIFO: First In, First Out [선입선출]_**

**`Queue` 설명 예시 1.**

- `Queue`는 **놀이공원에서 서는 줄**과 같이 작동한다.
- 사람들이 맨 끝에 줄을 서고, 맨 앞에서부터 놀이기구에 탑승하는 것과 같다.

**`Queue` 설명 예시 2.**

- 편의점이나 식당에서의 **식자재 선입선출**과 비슷하게 작동한다.

**`Queue`에 사용되는 메소드들 :**

- 요소를 큐의 뒤에 추가하는 `enqueue(element)`
- 요소를 큐의 앞에서 제거하고 반환하는 `dequeue()`

아래 코드는 `Stack`과 동일하게 **직접 `Queue`을 가지고 Method들을 구현한 결과**다.

- `Array method`를 사용하지 않고 **`Object` 생성자와 numeric key로만 만들었다.**

```js
class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }
  size() {
    return Object.keys(this.storage).length;
  }
  enqueue(element) {
    this.storage[this.rear] = element;
    this.rear++;
  }
  dequeue() {
    let out = this.storage[this.front];
    if (Object.keys(this.storage).length !== 0) {
      delete this.storage[this.front];
      this.front++;
    }
    return out;
  }
}
```

아래 코드는 `Stack` 을 구현한 후 출력 예시 중 일부다.

```js
it("front는 가장 오랜된 요소의 위치, rear는 다음에 추가될 요소의 위치를 가리켜야 합니다", function () {
  queue.enqueue("a");
  queue.enqueue("b");
  queue.enqueue("c");
  queue.dequeue();
  expect(queue.size()).toEqual(2);
  expect(queue.front).toEqual(1);
  expect(queue.rear).toEqual(3);
  expect(queue.storage).toEqual({ 1: "b", 2: "c" });
});
```

아래 코드는 `Queue` 메소드들을 **`Array` 메소드로 구현한 코드**다.

```jsx
class Queue {
  constructor() {
    this.storage = [];
  }

  enqueue(element) {
    this.storage.push(element);
  }

  dequeue() {
    return this.storage.shift();
  }
}
```
