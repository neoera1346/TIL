# Node.js

**_`Node.js`는 `V8`엔진으로 만들어진 JS `런타임`이다 - from Node.js 공식 문서_**

- **_`V8` compiles JavaScript directly to native machine code! - from [출처](https://en.wikipedia.org/wiki/Chrome_V8)_**
- **_`런타임`은 프로그래밍 언어가 구동되는 환경이다_**

**_이벤트 기반의 non-blocking 모델로 속도가 빠르다._**

---

## Node core modules

**별도의 설치 없이 Node.js 상에서 사용할 수 있는 모듈들이 존재한다.**

**`Node.js`와 함께 번들링 되어있는 모듈들이 있다.**

**이들은 `require('')` 방식으로 사용 할 수 있다.**

- 예시: `fs`, `http`, `url`, `path`

```js
const fs = require("fs");
const http = require("http");

fs.readFile("./something.json", (err, data) => {
  console.log(data);
});

http.get("http://localhost:5000/api", (res) => {
  console.log(res);
});
```

---

# NPM

**_`Node Package Manager`: 세계에서 가장 큰 오픈소스 라이브러리 생태계 중 하나다._**

**이전에 HTML 파일의 head에 아래와 같이 script태그로 작성했다면, NPM으로 JS파일에 간단히 적을 수 있다.**

```html
<script src="https://code.jquery.com/jquery-2.x-git.min.js"></script>
```

```js
const $ = require("jqery");

$("button").on("click", function () {
  console.log("button clicked!!!");
});
```

**단, 위와 같이 적기 위해서는, `package.json`에 들어가야한다.**

```json
{
  "name": "hello",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "jquery": "^3.3.1"
    /* 여기에 내용 추가 */
  }
}
```

---

**`package.json`에 관련 자세한 내용은 [여기](https://github.com/neoera1346/TIL/blob/master/Server/Package.json.md)에서 확인 가능하다.**
