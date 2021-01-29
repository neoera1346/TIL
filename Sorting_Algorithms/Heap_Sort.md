# Heap Sort

Heap Sort는 컴퓨터 프로그래밍에서 가장 잘 알려져있고 효율적인 정렬 알고리즘이다. 힙 정렬 알고리즘을 사용하기 위해서 다음 두 가지 개념을 알고 있어야한다.

- Array
- Tree

힙 정렬 알고리즘의 작동 방법은 `배열의 요소들`을 `힙`이라는 `완전이진트리`로 다루는 것에서 시작한다.

- 따라서, `완전이진트리` 그리고 `힙 데이터 구조` 개념을 알고 있어야한다.

---

# Relationship between Array Indexes and Tree Elements

완전이진트리는 재미있는 특징을 가지고 있다. 우리는 이 점을 활용하여 부모 노드와 자식노드들을 단번에 찾을 수 있다.

- 배열의 그 어떤 요소를 `i`라고 한다면, `2i + 1`번째 요소가 부모노드의 왼쪽 자식이 되고, `2i + 2`번째 요소는 오른쪽 자식이 된다.

- 부모를 찾는 방법은, 동일하게 `i`라는 인덱스가 있다면, `Math.floor((i - 1) / 2)`의 결과가 부모 노드의 위치를 가리킨다.

<img src="https://cdn.programiz.com/sites/tutorial2program/files/array-vs-heap-indices.png"/>

또한, 힙 정렬은 두 가지 방법으로 정렬 할 수 있다.

- 최대 힙 (제일 작은 수인 루트 노드부터 정렬)
- 최소 힙 (반대로 루트 노드가 제일 큰 숫자)

---

# Sort Process

힙 정렬의 주요 과정은 다음과 같다.

1. Swap : 루트 요소를 제거하고 배열의 마지막 요소에 위치시킨다.
2. Remove : 힙(배열)의 길이를 1씩 줄인다.
3. Heapify : 최대 힙/최소 힙을 충족하도록 루트 노드를 다시 heapify 해준다.

위 과정을 모든 요소들이 정렬될 때까지 반복한다.
다음 플로우를 통해 다시 확인해보자.

<img src='https://cdn.programiz.com/sites/tutorial2program/files/heap_sort.png'/>

---

# Heap Sort Complexity

힙 정렬 알고리즘은 모든 케이스에 대해 동일하게 `O(nlog n)` 시간 복잡도를 갖는다.

또한 O(1) 공간 복잡도를 갖는다.

---

# References

- [Heap Sort](https://www.programiz.com/dsa/heap-sort)
