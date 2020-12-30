# Module System

개발하는 애플리케이션의 크기가 커지면 언젠간 파일을 여러 개로 분리해야 하는 시점이 온다. 이때 분리된 파일 각각을 '모듈(module)'이라고 부르는데, 모듈은 대개 클래스 하나 혹은 특정한 목적을 가진 복수의 함수로 구성된 라이브러리 하나로 구성된다.

초기 스크립트는 크기도 작고 기능도 단순했기 때문에 자바스크립트는 긴 세월 동안 모듈 관련 표준 문법 없이 성장할 수 있었다. 새로운 문법을 만들 필요가 없었던 것이다.

그런데 스크립트의 크기가 점차 커지고 기능도 복잡해지자 자바스크립트 커뮤니티는 특별한 라이브러리를 만들어 필요한 모듈을 언제든지 불러올 수 있게 해준다거나 코드를 모듈 단위로 구성해 주는 방법을 만드는 등 다양한 시도를 하게 되었다.

그 시도의 결과로 아래와 같은 모듈 시스템이 나오게 되었다.

대표적으로 **AMD, CommonJS, UMD**가 있다.

---

### AMD

- 가장 오래된 모듈 시스템 중 하나로 require.js라는 라이브러리를 통해 처음 개발되었다.

### CommonJS

- Node.js 서버를 위해 만들어진 모듈 시스템이다.

### UMD

- AMD와 CommonJS와 같은 다양한 모듈 시스템을 함께 사용하기 위해 만들어졌다.

---

## What Is Module?

- 모듈은 단지 파일 하나에 불과하다. 스크립트 하나가 모듈 하나다.

- '내보내기'와 '가져오기' 방법은 모듈 시스템 마다 차이가 조금씩 있다.

### Link

[모듈 관련 공식 문서](https://ko.javascript.info/modules-intro)