# Linked List

**_'"연결 리스트"는 Node들로 구성이 되어있다._**

- Ex. [Node] - [Node] - [Node] - [Node]

**_"연결 리스트" : 강강수월래를 일자로 편 것과 같다._**

- 사용 예시 : 플레이 리스트, 이미지 뷰어, 등등.
- 검색 키워드 : `linked list real life example`

**_Node : 자료구조를 구성하는 요소_**

---

## **Node의 구성**

1. **`value`**
2. **`next Node`**

→ **`next Node`** : 리스트에 **다음으로 연결되는 노드**이다.

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

---

## **Linked List : Methods**

- **`링크(포인터)`를 통해서 데이터 추가/삭제/탐색이 가능하다.**
- **_포인터란_** : 각 노드를 연결해주는 화살표 (예시: 강강수월래 할 때 각 사람의 손)

아래 코드는 Linked List의 **Method들을 구현하기 위해 Linked List를 Class로 만들어준 것**이다.

```js
class LinkedList {
    constructor() {
        this.head = null; //value에는 추가한값이들어가고 넥스트는 다음 노드를 가리킨다.
        this.tail = null; // value에는 마지막에 추가한 값이 들어가고 next 는 null 을 가리킨다.
        this._size = 0;
    }
```

---

다음은 **Linked List에 사용되는 Method들**을 모두 직접 아래와 같이 구현해봤다.

**1. `addToTail(value)` : Linked List 마지막에 데이터를 추가한다.**

```js
addToTail(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let cur = this.head;
            while (cur.next) {
                cur = cur.next
            }
            cur.next = newNode;
            this.tail = newNode;
        }
        this._size++;
    }
```

**2. `insertInPosition(position, value)` : 원하는 위치에 데이터를 추가한다.**

```jsx
insertInPosition(position, value) {
	if (position < 0 || position > this.length) {
	// returns the warning message
	// if incorrect position was specified
		return 'Incorrect value of position';
	}

	let node = new Node(value);
	// creates the node using class Node

	if (position === 0) {
		node.next = this.head;
		this.head = node;
	} else {
		let current = this.head;
		let prev = null;
		let index = 0;

		while (index < position) {
			prev = current;
			current = current.next;
			index++;
		}

		prev.next = node;
		node.next = current;
	}

	this.length++
}
```

**3. `getNodeAt(index)` - 주어진 인덱스의 노드를 찾아서 반환합니다.**

- **값이 아니라 노드를 반환해야 하는 것에 주의.** 해당 인덱스에 노드가 없다면 `undefined`를 반환한다.

```js
getNodeAt(index) {
        let i = 0;
        let cur = this.head;
        while (cur) {
            if (i === index) {
                return cur;
            }
            cur = cur.next;
            i++;
        }
    }
```

**4. `contains(value)` : 해당 값이 Linked List에 있는지 `Boolean`으로 반환한다.**

```js
contains(value) {
        let cur = this.head;
        while (cur) {
            if (cur.value === value) {
                return true;
            }
            cur = cur.next;
        }
        return false;
    }
```

**5. `indexOf(value)` : 해당 값이 어떤 인덱스에 있는지 인덱스 값과 -1로 반환한다.**

```js
indexOf(value) {
        // 있으면 해당 인덱스 반환
        let curNode = this.head;
        let n = 0;
        while (curNode) {
            // this.head가 참이면,
            if (curNode.value === value) {
                return n; // 포함되면 true
            }
            n++;
            curNode = curNode.next;
        }
        return -1;
    }
```

**6. `remove(value)` : 해당하는 Linked List의 값을 지운다.**

```js
remove(value) {
        let cur = this.head;
        let last;
        if (cur) {
            while (cur) {
                if (cur.value === value) {
                    cur.value = cur.next.value;
                    cur.next = cur.next.next;
                }
                last = cur
                cur = cur.next
            }
            this.tail = last;
            this._size--;
        }
    }
```

**7. `size()` : Linked List의 사이즈를 반환한다.**

```js
size() {
        return this._size;
    }
```

---

**Linked List에 원하는 value들을 넣고나면 아래와 같이 출력이 될 것이다.**

```jsx
head : {0: 'apple', next: {1: 'pineapple', next: {2: 'orange', next: null}}}}
tail : {2: 'orange', next: null}
```

---

| Speed Comparison                                            |        |
| ----------------------------------------------------------- | ------ |
| addToTheEnd(value)                                          | n      |
| insertInPosition(value, position) [at the end or beginning] | n or 1 |
| getNodeByPosition(position)                                 | n      |
| removeFromPosition(position) [from the end or beginning]    | n or 1 |
| getIndexOf(value)                                           | n      |
| removeElementByValue(value)                                 | n      |
| getLength()                                                 | 1      |
| isEmpty()                                                   | 1      |
| print()                                                     | n      |

---

**Big O Notation 관련 유용한 해외 미디엄 정리글 : [링크](https://medium.com/karuna-sehgal/a-simplified-explanation-of-the-big-o-notation-82523585e835)**

---

## **Types of Linked List**

**1. `Singly Linked List` (일방향 연결 리스트)**

- 다음 노드를 가리키는 링크(포인터)가 한 개\*\*인 연결 리스트이다.

**이 리스트의 장점 :** 노드당 포인터 데이터를 4 바이트만 차지한다.

- 단, **일방통행**이기 때문에 **현재 노드는 이전 노드로 돌아가는 법을 모른다.**
- Linear time O(n) : Lookup and Removal (At Middle)
- **Constant time O(1) : Insert, Removal (Only at head)**

**2. `Doubly Linked List` (이중 연결 리스트)**

- 노드에 포인터가 두 개 있는 리스트이다.

**이 리스트의 단점** : 포인터가 두 개가 생겼으니 데이터도 두 배로 먹어버려 총 8 바이트를 차지한다.

- **현재 노드의 이전으로 갈 수도, 이후로도 갈 수도 있다.**
- Linear time O(n) : Lookup
- Constant time O(1) : Insert and Removal
  - 그러나, 각 노드는 더 많은 공간을 차지하게 된다.

**3. Circular Linked List** (환형 연결 리스트)

- `tail` 부분의 포인터가 `null`을 가리키고 있는 것이 아닌 `head`를 가리키고 있는 것이 다르다.

**유용한 환형 예시 :** 지하철 2호선.

- 아래 이미지 참고

  <img src="https://blog.kakaocdn.net/dn/bvaBx6/btqO8XAPWHu/vxMvnYOjwZeWU5RlCWRRDK/img.png">

---

## Linked List vs Array

|                     Linked List VS Array                      |                                                                  |
| :-----------------------------------------------------------: | :--------------------------------------------------------------: |
|       메모리상에 데이터들이 연속적으로 위치하지 않는다.       |                  메모리를 연속적으로 할당한다.                   |
|          배열에 비해 데이터의 추가/삽입이 용이하다.           |         동일한 데이터 타입을 연속적으로 저장할 수 있다.          |
|      배열에 비해 메모리를 더 효율적으로 사용할 수 있다.       |                     데이터 탐색이 용이하다.                      |
| 특정 위치의 데이터를 찾기 위해 처음부터 끝까지 순회 해야한다. | 고정된 크기로서, 배열의 처음이나 중간에서 추가 및 제거가 어렵다. |
|                     추가/삭제에 용이하다.                     |                      탐색/정렬에 용이하다.                       |

---

## What's More

- 이 영상은 내가 찾아본 `Linked List`에 대한 명강의여서 같이 올려본다.
- 개인적으로 `Linked List`에 대해서 이해하는데 더 도움이 되었다.

- [Linked List Data Structure](https://www.youtube.com/watch?v=ZBdE8DElQQU&feature=youtu.be)
