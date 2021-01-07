# React Hooks

Hook을 이용하여 Class를 작성할 필요 없이 상태 값과 여러 React의 기능을 사용할 수 있다. Hook은 React의 정신을 희생하지 않고 함수를 받아들인다.

뿐만 아니라, Hook은 명령형 코드로 해결책을 찾을 수 있게 해주며 복잡한 함수형 또는 반응형 프로그래밍 기술을 배우도록 요구하지 않는다.

**Hook은 함수 컴포넌트에서 React state와 생명주기 기능(lifecycle features)을 “연동(hook into)“할 수 있게 해주는 함수다. Hook은 class 안에서는 동작하지 않는다** - [React Hook 공식문서]

---

## Why React Hooks?

React Conf 2018에서 처음 설명되고 2019 초에 처음 도입되었다.

**주요 장점: 재사용성 증대, 코드 간결화.**

## Reusing State Logics

기존의 React에서 Class 컴포넌트로만 작성할 수 있었다. 이렇게 Class로 작성된 컴포넌트 사이에서 상태와 관련된 로직을 재사용하기 어렵다.

상태관련 로직을 재사용하기 위해서 [render props](https://ko.reactjs.org/docs/render-props.html)나 [고차 컴포넌트](https://ko.reactjs.org/docs/higher-order-components.html)와 같은 패턴을 쓸 수 있지만, 이런 패턴을 사용한 전형적인 React App을 보면 추상화에 대한 레이어로 둘러싸인 “래퍼 지옥(wrapper hell)“을 볼 가능성이 높다.

**Hook은 계층 변화 없이 상태 관련 로직을 추상화하고 재사용할 수 있도록 도와준다.**

- 자신만의 Hook 만드는 방법 - [공식 문서](https://ko.reactjs.org/docs/hooks-custom.html)

---

## Complex Components

React에는 Lifecycle 메소드가 존재하는데, 이 Lifecycle 메서드는 자주 관련 없는 로직이 섞여 있다.

하나의 예시로, `componentDidMount` 메서드라도 이벤트 리스너를 설정하는 것과 같은 관계없는 일부 로직이 포함될 수도 있으며, `componentWillUnmount`에서 cleanup을 수행하기도 한다.

함께 변경되는 상호 관련 코드는 분리되지만 이와 연관 없는 코드들은 단일 메서드로 결합한다. 이로 인해 버그가 쉽게 발생하고 무결성을 너무나 쉽게 해쳐버린다.

Hook을 통해 로직에 기반을 둔 작은 함수로 컴포넌트를 나눌 수 있다.

- 관심사 구분을 위한 Multiple Effect - [공식 문서](https://ko.reactjs.org/docs/hooks-effect.html#tip-use-multiple-effects-to-separate-concerns)

---

## Confusing Classes

Class는 React를 배우는 데에 있어서 큰 진입장벽일 수 있다.
우리가 props, state, 그리고 top-down 데이터 흐름을 완벽하게 이해할 수 있어도, 여전히 Class는 쉽지 않은게 사실이다.

또한, Class는 최근 사용되는 도구에도 많은 문제를 일으킨다. 예를 들어 Class는 잘 축소되지 않고, Hot Reloading을 깨지기 쉽고 신뢰할 수 없게 만는다.

작성된 코드가 최적화 가능한 경로에서 유지될 가능성이 더 높은 API를 제공하고 다양한 문제들을 해결하기 위해, React Hook이라는 것이 등장하게 되었다.

---

# Using Hooks

## 📌 State Hook

버튼을 클릭하면 값이 증가하는 간단한 카운터 예시를 통해 이해해보자.

```js
import React, { useState } from "react";

function Example() {
  // "count"라는 새 상태 변수를 선언합니다
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

1. `useState`가 바로 Hook 이다.
2. Hook을 호출해 function component 안에 state를 추가한다.
3. `useState`는 "현재의 state 값"과 "이 값을 업데이트하는 함수"를 쌍으로 제공한다.
   - useState는 인자로 초기 state 값을 하나 받는다.
   - 이 초기값은 첫 번째 렌더링에만 딱 한번 사용된다.

```js
function ExampleWithManyStates() {
  // 상태 변수를 여러 개 선언했습니다!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);
  // ...
}
```

이처럼 하나의 컴포넌트 내에서 State Hook을 여러 개 사용할 수도 있다.

## ⚡️ Effect Hook

Side Effects는 다른 컴포넌트에 영향을 줄 수도 있고, 렌더링 과정에서는 구현할 수 없는 작업이지만, Effect Hook은 함수 컴포넌트 내에서 이런 Side Effects를 수행할 수 있게 해준다.

아래는 React가 DOM을 업데이트한 뒤, 문서의 타이틀을 바꾸는 컴포넌트 예시다.

```js
import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  // componentDidMount, componentDidUpdate와 비슷합니다
  useEffect(() => {
    // 브라우저 API를 이용해 문서의 타이틀을 업데이트합니다
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

React class의 `componentDidMount` 나 `componentDidUpdate`, `componentWillUnmount`와 같은 목적으로 제공되지만, 하나의 API로 통합된 것으로 볼 수 있다.

---

## Rules of Hooks

1. 최상위(at the Top Level)에서만 Hook을 호출해야 한다.
   - 반복문, 조건문 혹은 중첩된 함수 내에서 Hook을 호출하면 안 된다.
2. 오직 React 함수 내에서 Hook을 호출해야 한다.

- Hook 사용법과 몇 가지 규칙들 - [공식 문서](https://ko.reactjs.org/docs/hooks-overview.html)

- 추천 ESLint Plugin: eslint-plugin-react-hooks

---

## Practical React Hooks

- useState
- useEffect
- useCount
- useContext
- useRef
- useMemo
- useCallback
- useReducer
