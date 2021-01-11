# Installation

## Redux Toolkit

`RTK(Redux Toolkit)` includes utilities that help simplify many common use cases, including store setup, creating reducers and writing immutable update logic, and even creating entire "slices" of state at once.

Store를 설정, Reducer 생성, 무변형성 업데이트 로직 작성 그리고 여러 상태들을 담는 하나의 구성을 작성하는 등, 많은 상황에서 코드를 간결화해주는 유틸리티들을 포함한다.

Redux Toolkit is available as a package on NPM for use with a module bundler or in a Node application.

Redux Toolkit은 아래와 같이 npm을 통해 패키지로 받아서 사용할 수 있다.

```zsh
# NPM
npm install @reduxjs/toolkit
```

---

# Creating a React Redux App

The recommended way to start new apps with React and Redux is by using the official Redux+JS template for Create React App, which takes advantage of Redux Toolkit and React Redux's integration with React components.

React & Redux 기반 앱 개발을 시작하는 추천 방법으로, RTK 장점을 활용한다.

```zsh
npx create-react-app my-app --template redux
```

---

# Redux Core Library

Redux Core Library is available as a package on NPM for use with a module bundler or in a Node application:

Redux 자체 라이브러리 설치도 가능하다.

```zsh
# NPM
npm install redux
```

---

# Basic Use Example

The whole global state of your app is stored in an object tree inside a single `store`. The only way to change the state tree is to create an `action`, an object describing what happened, and `dispatch` it to the store. To specify how state gets updated in response to an action, you write pure `reducer` functions that calculate a new state based on the old state and the action.

```js
import { createStore } from "redux";
/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object.  It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
    case "counter/decremented":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counterReducer);

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

store.subscribe(() => console.log(store.getState()));

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: "counter/incremented" });
// {value: 1}
store.dispatch({ type: "counter/incremented" });
// {value: 2}
store.dispatch({ type: "counter/decremented" });
// {value: 1}
```

---

# Redux Toolkit Example

Redux Toolkit simplifies the process of writing Redux logic and setting up the store. With Redux Toolkit, that same logic looks like:

```js
import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

export const { incremented, decremented } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()));

// Still pass action objects to `dispatch`, but they're created for us
store.dispatch(incremented());
// {value: 1}
store.dispatch(incremented());
// {value: 2}
store.dispatch(decremented());
// {value: 1}
```

---

# State, Actions, and Reducers

가장 먼저, 앱의 초기 `State`를 설정해주어야 한다.

```js
// Define an initial state value for the app
const initialState = {
  value: 0,
};
```

`Reducer` 함수는 두개의 인자를 받는다. 하나는 현재 `Status`, 또 하나는 앞으로 일어날 `Action`이다. Redux 앱이 처음 시작할 때에는 아무런 상태가 없기 때문에, `Reducer`의 기본 값으로 초기값을 지정해주어야 한다.

```js
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
    case "counter/decremented":
      return { value: state.value - 1 };
    default:
      return state;
  }
}
```

Action 객체는 무조건 위 예시처럼 `type` 필드가 존재하는데, 이것은 어떤 액션인지를 설명하는 유니크한 문자열이다. 위 예제에서 `case "counter/incremented"`를 보면 Action type의 앞 부분은 액션의 주체가 되고, 뒷 부분은 '무슨 일이 일어나는지'를 적은 것이다.

그리고, 또 한가지로는, `State`에 변화가 생겼다면, 새로운 객체를 반환하고, 변화가 없다면, `State` 그대로 반환한다.

---

# Store

Reducer 함수를 만들었다면, 그가 전달하는 Action을 저장할 수 있는 `Store`를 만들어야 한다. `Store`는 Redux Library에 있는 `createStore` API를 사용해 만든다.

```js
// Create a new Redux store with the `createStore` function,
// and use the `counterReducer` for the update logic
const store = Redux.createStore(counterReducer);
```

---

# UI

`Action`을 통해 State를 업데이트 했다면, UI에도 변경사항을 보여주어야 한다.

```js
// Our "user interface" is some text in a single HTML element
const valueEl = document.getElementById("value");

// Whenever the store state changes, update the UI by
// reading the latest store state and showing new data
function render() {
  const state = store.getState();
  valueEl.innerHTML = state.value.toString();
}

// Update the UI with the initial data
render();
// And subscribe to redraw whenever the data changes in the future
store.subscribe(render);
```

먼저, `store.getState()` 메소드를 통해 `Store`에 있는 가장 최근 상태를 불러온다. 그리고, 그 `value`를 가져와 업데이트를 시켜준다.

Redux Library가 제공해주는 것들 중에 또 한 가지는 `store.subscribe()`이라는 메소드가 있다. 이 메소드는 위 예제에서 `render` 콜백 함수를 인자로 받아, `Store`가 업데이트 될 때마다 실행이 된다.

---

# Dispatching Actions

유저 입력에 따라 UI가 응답해줄 수 있도록 `Action` 객체들을 만들어 `Store`에 전달해야 한다. 이때 Redux Library가 제공해주는 `store.dispatch(action)`를 사용하면, `Store`가 `Reducer`를 실행하게 되고, 순수함수를 통해 상태를 변경하여 구독자들에게 변경된 UI를 보여준다.

```js
// Handle user inputs by "dispatching" action objects,
// which should describe "what happened" in the app
document.getElementById("increment").addEventListener("click", function () {
  store.dispatch({ type: "counter/incremented" });
});

document.getElementById("decrement").addEventListener("click", function () {
  store.dispatch({ type: "counter/decremented" });
});

document
  .getElementById("incrementIfOdd")
  .addEventListener("click", function () {
    // We can write logic to decide what to do based on the state
    if (store.getState().value % 2 !== 0) {
      store.dispatch({ type: "counter/incremented" });
    }
  });

document
  .getElementById("incrementAsync")
  .addEventListener("click", function () {
    // We can also write async logic that interacts with the store
    setTimeout(function () {
      store.dispatch({ type: "counter/incremented" });
    }, 1000);
  });
```

---

# Useful Links

- [Redux Concepts & Data Flow](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow)
  - 각 개념에 대한 자세한 설명을 포함하고 있다.
