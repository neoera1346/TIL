# mkcert

`mkcert`라는 프로그램을 이용해 로컬 환경(내 컴퓨터)에서 신뢰할 수 있는 **인증서**를 만들 수가 있다.

# Installing Certificate

1. 다음 명령어를 통해 로컬을 인증된 발급기관으로 추가해야 한다.

   ```
   $ mkcert -install
   ```

2. 로컬 환경에 대한 인증서를 만들어야 한다. `localhost`로 대표되는 로컬 환경에 대한 인증서를 만들려면 다음 명령어를 입력해야 한다.

   ```
   $ mkcert -key-file key.pem -cert-file cert.pem localhost 127.0. 0.1 ::1
   ```

   위 명령어를 실행하고 나면 로컬 환경에서 사용할 수 있는 인증서가 완성되었고, `cert.pem`, `key.pem`이라는 파일이 생성된다.

- 여기서 중요한 점은, 인증서는 공개키, 그리고 인증기관의 서명을 포함하고 있으므로 공개되어도 상관이 없지만, `key.pem`의 경우 개인 키이므로 `git`에 커밋하지 않고, 암호처럼 다루어야 한다.
  - `key.pem` 파일은 `gitignore`파일에 넣어놓아야 한다.

---

# Creating HTTPS Server

## Using Node.js HTTPS Module

```js
const https = require("https");
const fs = require("fs");

https
  .createServer(
    {
      key: fs.readFileSync(__dirname + "/key.pem", "utf-8"),
      cert: fs.readFileSync(__dirname + "/cert.pem", "utf-8"),
    },
    function (req, res) {
      res.write("Congrats! You made https server now :)");
      res.end();
    }
  )
  .listen(3001);
```

## Using Express.js

만약 express.js 를 사용하는 경우, 다음과 같이 `https.createServer`의 두번째 파라미터에 들어갈 callback 함수를 Express 미들웨어로 교체하면 된다.

```js
const https = require("https");
const fs = require("fs");
const express = require("express");

const app = express();

https
  .createServer(
    {
      key: fs.readFileSync(__dirname + "/key.pem", "utf-8"),
      cert: fs.readFileSync(__dirname + "/cert.pem", "utf-8"),
    },
    app.use("/", (req, res) => {
      res.send("Congrats! You made https server now :)");
    })
  )
  .listen(3001);
```

# Advanced

기존에 작성한 서버를 [ngrok](https://ngrok.com/)를 이용해서 HTTPS로 터널링시킬 수가 있다.

- **ngrok란, HTTP로 만들어진 서버를 HTTPS 프로토콜로 터널링 해주는 프로그램이다.**
