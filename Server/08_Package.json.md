# Package.json

**_`NPM`을 활용하기 위한 정보들, 그리고 프로젝트의 정보들이 모여있는 별도의 파일이다._**

---

## Composition

**Package.json은 네 가지 부분으로 확인해 볼 수 있다.**

**1. `Projects`에 관한 정보**

- **파일의 최상단 3줄에서 확인할 수 있다.**

**2. 설정된 `script` 코드**

- **파일의 `script`부분에 있으며, `CLI`에서 해당 코드를 실행시킨다.**

**3. `devDependencies`**

- **개발 환경을 위한 모듈이다.**
- **설정 방법: `$ npm install @babel/core --save-dev`**

**4. `dependencies`**

- **실행을 위한 모듈이다.**
- **설정 방법: `npm install --save react`**

**Why Save?**

- **`npm install`은 `package.json`에 있는 `dependency`를 바탕으로 설치한다.**
- **만약, `dependency`에 등록 되어 있지않다면, 코드에서는 해당 모듈을 쓰고 있지만, `npm install`로 설치되지 않는다.**
