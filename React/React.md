# React

Web App을 만드는 방법은 여러가지가 있지만 제일 기본적으로 HTML, CSS, JAVASCRIPT가 있을 것이다. 만약 사용자와의 Interaction이 많이 없다면 이 세가지 만으로도 충분하다.

그러나, 관리해야하는 DOM이나 상태들이 많아지는 경우, 세 가지 방법만으로 페이지를 관리하기에는 너무 많은 일들이 일어나게 된다.

**귀찮고 복잡한 DOM 관리와 상태값 관리를 최소화 해주고 기능 개발에만 집중할 수 있는 방법**을 고민한 결과, 지금의 프론트엔드 라이브러리 또는 프레임 워크가 등장하게 되었다.

이런 프레임 워크들은, 대표적으로, React, Angular, Vue 세 가지가 있다.

이번에는 **React**에 대해 알아볼 것이다.

---

## Component

**React는 Component 개념에 집중하고 있다.**

- Component: 하나의 의미를 가진 독립적인 단위 모듈이다. → **나만의 HTML Tag!!**

Component 단위로 코드를 작성하게 되면, **코드가 더 직관적이고 재사용 가능성도 높아진다.**

기존 HTML 예시

```html
<div class="tweet">
  <span class="userId">@Walli</span>
  <div class="contents">Hello, my name is Walli ;)</div>
  <div class="time">43 seconds ago</div>
</div>
```

With React 예시

```html
<Tweet userId="walli" time="43"> Hello, my name is Walli ;) </Tweet>
```

---

## Function Component & Class Component

컴포넌트를 정의하는 두 가지 방법:

1. 일반적인 JavaScript 함수를 작성할 수 있다.

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

2. 또한 ES6 class를 사용하여 컴포넌트를 정의할 수 있다.

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

`"Hello, Sara"`를 페이지에 렌더링하는 방법:

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(element, document.getElementById("root"));
```

---

## Combining Components

`Welcome`을 여러 번 렌더링하는 `App` 컴포넌트를 만들 수도 있다.

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```

- Components 합성 시, **반드시 태그로 감싸야한다.**

---

## Extracting Components

다수의 구성요소들이 하나의 컴포넌트로 **중첩구조**로 들어가있을 수 있다.
이렇게 되면, 컴포넌트를 변경하기 어려우며, 각 구성요소를 개별적으로 재사용하기가 어려운 단점이 있다.

따라서, 우리는 **컴포넌트를 추출해 여러 개의 작은 컴퍼넌트로 나눌 수 있어야한다.**

이런 작업이 추후에 더 큰 앱을 작업할 때 효율적인데, **UI일부가 여러번 사용될 때 굉장히 유용하다.**

---

## Props is 'Read-Only'

**React는 전반적으로 매우 유용하지만, 한가지 매우 엄격한 규칙이 있다.**

- `Props`는 **내려오는 물줄기**라고 볼 수 있다. 즉, 상위 컴포넌트(부모)가 하위 컴포넌트(자식)에 내려주는(상속하는) **변하지 않는 데이터**이다.

**모든 React 컴포넌트는 자신의 `props`를 다룰 때 반드시 순수 함수처럼 동작해야 한다.**

---

## Differences in Handling Events

React 엘리먼트에서 이벤트를 처리하는 방식은 DOM 엘리먼트에서 이벤트를 처리하는 방식과 매우 유사하지만, **몇 가지 문법 차이**는 다음과 같다.

**HTML:**

```html
<button onclick="activateLasers()">Activate Lasers</button>
```

**React:**

```html
<button onClick="{activateLasers}">Activate Lasers</button>
```

- React의 이벤트는 소문자 대신 **캐멀 케이스 camelCase**를 사용힌다.
- React에서는 JSX를 사용하여 **문자열이 아닌 함수로** 이벤트 핸들러를 전달한다.
- React에서는 `false`를 반환해도 기본 동작을 방지할 수 없습니다. 반드시 `preventDefault`를 명시적으로 호출해야 합니다

```js
function ActionLink() {
  function handleClick(e) {
    e.preventDefault(); // React식 기본 동작 방지법
    console.log("The link was clicked.");
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

여기서 `e`는 [합성 이벤트](https://ko.reactjs.org/docs/events.html)이다. React는 [W3C 명세](https://www.w3.org/TR/DOM-Level-3-Events/)에 따라 합성 이벤트를 정의한다.

반대로, ES6 클래스를 사용하여 컴포넌트를 정의할 때, **일반적인 패턴은 이벤트 핸들러를 클래스의 메서드로 만드는 것이다.**

```js
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 한다.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // 메소드를 만들어준다.
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById("root"));
```

React 이벤트 처리 관련 [공식 문서](https://ko.reactjs.org/docs/handling-events.html)

---

## Conditional Rendering

기본적으로 일반 조건문이 작동하는 것과 같지만, 차이점은 아래와 같다.

- `if else` 조건문 사용이 불가하다.
- **inline으로 삼향 연산자, 혹은 && 논리 연산자**를 이용해 조건문을 작성할 수 있다.
  - 결과로, `true && expression`은 결과를 보여주게 되고,
  - 만약, `false && expression`이면, React는 결과를 무시하고 넘어가게 된다.
- 다른 컴포넌트에 의해 렌더링될 때 컴포넌트 자체를 숨기고 싶을 때가 가끔 있는데, 이때 렌더링 결과를 출력하는 대신 null을 반환하면 해결할 수 있다.

---

## List & Key

- React에서 배열을 엘리먼트 리스트로 만드는 방식은 아래와 같다.
- 엘리먼트 모음을 만들고 중괄호 `{}`를 이용하여 JSX에 포함시킬 수 있다.

**Rendering Multi-Components**

```js
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);

ReactDOM.render(<ul>{listItems}</ul>, document.getElementById("root"));
```

---

## Basic List Component

```js
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => <li>{number}</li>);
  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById("root")
);
```

위 코드는 `ul` 태그에 `li` 엘리먼트들을 `map`을 통해 렌더해준다.
이 process를 함수로 만든 후 렌더해주는 첫번쩨 인자로 넣어 줄 수도 있다.

하지만 이 함수에는 `key`가 없어서 **리스트에 키를 포함해 줘야 한다**고 나온다.

- `key`는 `special string sttribute`로 리액트가 무슨 아이템이 변하거나, 추가되었거나, 제거되었는지 알아차리는데 도움을 준다.

키는 보통 그 아이템을 구분할때 바로 알아차릴 수 있는 string으로 사용한다. 없으면 `index`를 최후의 수단으로 사용해야 한다.

- 아이템의 순서가 바뀔수도 있어서 인덱스 값을 키로 설정하는 것은 권장하지 않는다. 그러나, 만약 list의 아이템에 특정 키를 지정하지 않는다면 리액트는 자동으로 인덱스를 `key`로 사용한다.

**Assigning Key**

```js
const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);

//고정 아이디가 없을 경우
const todoItems = todos.map((todo, index) => (
  // Only do this if items have no stable IDs
  <li key={index}>{todo.text}</li>
));
```
