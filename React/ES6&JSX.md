# ES6

- React는 기본적으로 ES6를 사용하고 있다.
- React를 사용하기 전 기억해야할 7가지 ES6 개념들이 있다.
  - Destructuring
  - Spread Operator
  - Rest Parameters
  - Default Parameters
  - Template Literals
  - Arrow Function
  - For-of Loop

# JSX

- Javascript의 확장 문법
- 우리가 작성한 React Component를 화면에 보여주기 위해 사용한다.
- JSX는 아래와 같이 React “엘리먼트(element)” 를 생성한다.

JSX 예시

```js
class Hello extends Component {
  render() {
    return (
      // 아래 부분이 JSX!
      <div>
        <h1>hello, world</h1>
      </div>
    );
  }
}
```

- React를 JSX 활용 없이 작성하게 된다면 그 코드는 더 복잡해지고 가독성이 떨어질 것이다.

---

## JSX 규칙

1. 반드시 **하나의 엘리먼트**로 감싸야한다.
2. 자바스크립트 코드를 적용할 땐 {} 안에 작성한다.
3. JSX 내부에서는 if문을 사용할 수 없다.
   → **IIFE / 삼항연산자를 사용해야 한다.**
4. 엘리먼트의 클래스 이름을 적용할 때, `className`을 사용한다.

---
