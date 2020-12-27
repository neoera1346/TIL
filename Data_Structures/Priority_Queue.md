# Regular Queue

- **_일반적인 `Queue`는 오른쪽의 형태를 가지고 있다._**
- **_FIFO: First In, First Out [선입선출]_**
- **먼저 들어온 자료가 먼저 나가게 된다.**

<img src="https://blog.kakaocdn.net/dn/Wa6aX/btqOYvLTRSj/pu6iwxkNcwREam0KnNWvL0/img.png">

일반적인 Queue 형태

**하지만 `Queue`는 이러한 형태 말고도 더 있다.**

---

# Priority Queue

- **_Priority Queue : 높은 우선순위를 가진 요소를 먼저 제거해내는 큐이다._**
- **여기선, 선입선출이 적용되지 않고 우선 순위가 높은 요소 먼저 삭제한다.**

**아래 그림은 우선순위 큐의 가장 좋은 예시다.**

- 빨간색 글시 = 우선순위

<img src="https://blog.kakaocdn.net/dn/5ASRF/btqO13gJWCt/qagO93r60UBQJunp3Z8ts1/img.png">

---

## Code

- **Score가 높은 학생을 먼저 내보내는 방식으로** **Array를 통해** **Priority Queue** 를 구현해봤다.

```js
class PriorityQueue {
  constructor() {
    this.storage = [];
  }

  enqueue(item) {
    this.storage.push(item);
  }

  dequeue() {
    let entry = 0;
    this.storage.forEach((item, index) => {
      if (this.storage[entry].score < this.storage[index].score) {
        entry = index;
      }
    });
    return this.storage.splice(entry, 1);
  }
}

class Student {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

const priorityQueue = new PriorityQueue();
const dev = new Student("DEV", 10);
const lee = new Student("Lee", 5);
const gh = new Student("GH", 3);

priorityQueue.enqueue(dev);
priorityQueue.enqueue(lee);
priorityQueue.enqueue(gh);

priorityQueue.dequeue(); //Student('DEV', 10)
```
