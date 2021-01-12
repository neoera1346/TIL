# Redux Thunk

Redux의 미들웨어로, 리덕스에서 비동기 작업을 처리할 때 많이 사용된다.

이 미들웨어를 사용함으로써, 액션 생산자는 액션 객체 대신 함수를 반환할 수 있다. 이를 통해 `액션 생산자`는 썽크가 된다.

- `액션 생성자`: 비동기 액션 생산자는, 상태에 따라 동기 액션 생산자를 호출해준다. 여기서 말하는 상태는 비동기 요청 시작/완료/실패 등을 포함할 수 있다.

여기서의 미들웨어는, Express나 Koa에서의 미들웨어와 비슷한 개념으로, 액션을 보내는 순간부터 저장소에 도착하는 순간까지 사이에 서드파티 확장을 사용할 수 있는 지점을 제공한다. 우리는 보통 미들웨어를 로깅이나, 충돌 보고나, 비동기 API와의 통신이나, 라우팅이나 기타 등등에 사용할 수 있다.

## Middleware Source Code

[Code Source](https://github.com/reduxjs/redux-thunk/blob/master/src/index.js) - Redux-thunk의 구현 참조

```js
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
```

또 다른 Thunk Middleware 예시

```js
const thunk = (store) => (nextRunner) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }

  return nextRunner(action);
};
```

Action이 함수 타입일 경우에는 Action을 Reducer에 전달하지 않고, Action에 전달된 함수에 dispatch와 getState를 인자로 전달해, Action 함수 안에서 dispatch나 Store의 상태에 접근하는 함수를 직접 실행시킬 수가 있는 구조다.

이 방법으로 액션 함수 안에서 비동기를 제어할 수가 있다.

- **Action이 객체 형태이면, 비동기를 처리할 수가 없다!**

---

## Useful Links

1. [Redux 미들웨어 관련 공식 문서](https://ko.redux.js.org/advanced/middleware) - 여기서 미들웨어에 대한 자세한 설명과 일곱가지 예제를 살펴보자.

2. [Basic Tutorial - 액션 생산자](https://ko.redux.js.org/basics/actions/#%EC%95%A1%EC%85%98-%EC%83%9D%EC%82%B0%EC%9E%90)

3. [What's A Thunk](https://github.com/reduxjs/redux-thunk#motivation)

4. [Redux 비동기 과정 설명 영상](https://youtu.be/xsOhUX7DDl0)
   - 상태 관리의 기술적 흐름
   - Redux 와 MobX 비교 (MobX는 주로 Redux와 비교되는 다른 상태 관리 라이브러리다.)
   - 단방향 데이터 흐름의 장점
   - Redux 간단한 설명 **(비동기에 대해서 잘 몰라도 여기까지는 재미있게 볼 수 있다!)**
   - 비동기 제어
