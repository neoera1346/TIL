# State와 생명주기

## Lifecycle

`Component`에 생명주기가 갑자기 왜 나오는가?

그 이유는 **`Component` 또한 우리의 삶과 흡사한 패턴을 가지고 있기 때문이다.** 즉, 컴포넌트의 Lifecycle은 우리 인생과 비슷한 `주기`를 갖고 있다.

인간의 생명 주기를 보면 대표적으로 아래와 같은 순간들이 있다.

> ... → 태어날 때 → 학교 갈 때 → 성인이 될 때 → 결혼 할 때 →
> 아이를 가질 때 → 죽음을 앞두고 있을 때 → ...

`Component`에 있어서 중요한 순간들은 아래와 같다.

> ... →생성될 때 → 화면에 등장한 후 → 새로운 `props`를 받을 때 →
> 새로운 상태를 가질 때 → 새로운 상태를 갖고난 후 → 화면에서 사라지기 전 → ...

위 컴포넌트의 중요 순간들을 크게 세 가지 카테고리로 분류할 수 있다.

- **생성, 업데이트, 제거**

그리고 매 중요한 순간마다 컴포넌트는 새로 렌더링이 된다.

이런 컴포넌트 주기를 아래와 같은 그림으로 이해할 수 있다.

<img src="https://cdn.filestackcontent.com/ApNH7030SAG1wAycdj3H">

---

## Methods

생명주기에서 사용되는 메소드들이 따로 존재한다.

- `ComponentDidMount`, `ComponentDidUpdate`, `ComponentWillUnmount`

**이런 메소드들이 필요한 이유:**

상태가 변화되면, 비동기 요청을 보낼 때가 많은데, **렌더나 constructor에서 비동기 요청을 호출할 수가 없어서** 세 가지로 비동기 요청을 할 수 있다.

---

## Flow

**생성**

- `constructor() => render() => componentDidMount()`

**업데이트**

- `state값 변경 => render() => componentDidUpdate()`

---

**Lifecycle 메소드 작성시 중요한 점:**

- `Class` 컴포넌트로 작성해야한다.

- 함수형 컴포넌트는 실행이 안 된다.
