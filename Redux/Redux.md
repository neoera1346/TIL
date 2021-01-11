# Redux

## Achievement Goals

- **상태 관리 라이브러리**가 왜 필요한지 이해할 수 있다.
- Redux(혹은 Flux Pattern)에서 사용하는 Action, Reducer 그리고 Store의 의미와 특징을 이해할 수 있다.
- Redux의 **3가지 원칙**이 무엇이며, 주요 개념과 어떻게 연결되는지 이해할 수 있다.
- Presentational 컴포넌트와 Container 컴포넌트의 개념을 이해할 수 있다.
- Redux Hooks(`useSelector`, `useDispatch`)를 사용해 `store` 를 업데이트할 수 있다.

---

## About Redux

Redux에 대한 대표적인 오해 중 하나가, Redux는 React의 관련 라이브러리, 혹은 하위 라이브러리로 오해하는데, 전혀 그렇지 않다.

**Redux는 React 없이도 사용할 수 있는, Store를 이용한 상태 관련 라이브러리다.**

즉, React에서 Class Component 내에서 관리됬던 State를, Redux에서는 별도의 Store라는 하나뿐인 공간을 통해서 State들이 관리되고 전달되는 것을 의미한다.

일반적으로 React에서 컴포넌트 간의 정보공유가 자주 발생하는데, 만약, 부모 자식간이 아니고 형제 컴포넌트들 사이에서 데이터를 주고 받아야 한다면, 부모 컴포넌트를 통해서 주고 받아야만 한다.

- 형제끼리 정보를 직접적으로 공유하지 못한다.

이 데이터를 부모로부터 받기 위해서 A 컴포넌트는 루트인 부모에게 먼저 전달해야하는데, 사이에 여러 다른 부모 컴포넌트들이 있다면, 모두 거쳐가야 하기 때문에, 복잡할 수 있다. 물론, 루트 부모에서 B 컴포넌트에게 내려줄 때도, 여러 자식 컴포넌트들이 껴있다면, 모두 거쳐야하는 불필요한 과정들이 있다.

- 더 큰 웹이고 자식이 많아질수록 상태 관리는 매우 복잡해진다.

---

## Redux Concepts

이런 복잡성을 줄이기 위해서 Redux가 등장을 했는데, Redux의 세가지 원칙을 알아야 한다.

1. Single Source of Truth
   - 동일한 데이터는 같은 근원에서 온다.
   - `Store`
2. State is read-only
   - Redux에서는 Action 객체를 통해서 State를 변경할 수 있다.
3. Changes are made with pure functions
   - `Reducer`

---

## Store

상태가 관리되는 단 하나뿐인 저장소/공간이다.

## Action

자바스크립트 객체로, 애플리케이션의 데이터를 Store로 운반/전달해준다.

Action 예시 코드

```js
{
    type: "ORDER",
    drink: {
        menu: "Americano",
        size: "Grande",
        isIce: false
    }
}
```

---

## Reducer

위에서 애플리케이션의 데이터가 Store로 Action을 통해서 전달된다고 얘기했는데, 이 과정 가운데에 Reducer가 존재한다.

- **Action 객체는 Dispatch에게 전달되고, Dispatch는 Reducer를 호출해서 새로운 State를 생성해낸다!!**

- 현재 상태와 Action을 이용해 다음 상태를 만들어내는 것이다.

그렇다면 왜 이런 구조를 가지고 있는 것일까?

**데이터는 한 방향으로만 흘러야하기 때문이다.**

<img src="https://i.ibb.co/jRHM0Jr/redux-overview.png>"/>

---

## PROS of Redux

- Predictable State
  - Due to the Pure Function `Reducer`
- Maintanence
- Debugging (Promised that there are action and state logs)
  - Redux Dev Tool
- Attaching Test Cases
  - Also, Due to the Pure Function `Reducer`

---

## Big Four of Redux

Predictable

- React 앱 코드의 일관성을 유지할 수 있고, 클라이언트, 서버, Native등 다양한 환경에서 실행되며, 테스트에 용이하다.

Centralized

- 애플리케이션의 상태와 로직들을 Store라는 한 공간에 모아놓기 때문에 실행 취소 및 재실행, 상태유지 등등, 강력한 기능들을 가능하게 해준다.

Debuggable

- `Redux DevTools` 덕분에 애플리케이션의 상태가 언제, 어디서, 왜 그리고 어떻게 변했는지 추적하기가 용이하다.

Flexible

- 다양한 UI Layer와 함께 작동할 수 있고, 여러 add-on 추가 또한 가능하다.

---

## Useful Links

Redux 관련해서 매우 좋은 인사이트를 주는 사이트가 있다

- [React Redux Tutorial](https://www.robinwieruch.de/react-redux-tutorial)
- [Flux Pattern 공식 문서](https://facebook.github.io/flux/docs/in-depth-overview/)
- [Redux 공식 문서](https://redux.js.org/)
