# About CommonJS

자바스크립트를 서버에서 사용할 수 있는 큰 이유 중 하나는 모듈화가 가능하기 때문이다.

자바스크립트의 모듈화 명세를 만든 대표적인 그룹 중 'CommonJS'에 대해서 알아보자.

**Google에 'CommonJS'를 검색하면 관련 정보들이 무수히 많으니 더 참고하자.**

**그래도 CommonJS의 중요한 부분들을 아래에 기록해두었다.**

---

# Remember

- **`Node.js`는 `CommonJS` 규격을 따른다. → `Node.js`의 경우 `CommonJS`를 기본으로 사용한다.**

## Usage

- **모듈의 핵심은 만들어서 바깥으로 내보내는 것이다.**
- **모든 모듈은 자신만의 독립적인 실행 영역이 있어야 한다.
  → 전역변수와 지역변수 분리가 중요하다.**
- **모듈 정의는 전역객체인 `exports` 객체를 이용한다.**
- **모듈 사용은 `require` 함수를 이용한다.**

---

## module.exports VS exports

- **`exports`는 `module.exports`를 참조한다. → 주소 참조!!**
- **`exports`는 `module.exports` 사용을 도와준다.**
- **module.exports에 이미 값이 할당되면, exports는 무시된다.**
- **따라서, 두 가지를 섞어쓰는 것은 권장하지 않는다!!**

---

## Examples

자세한 `CommonJS` 사용법과 예시는 JS 파일들을 참고하자.
