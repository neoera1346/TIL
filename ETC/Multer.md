# Multer

# Multer Introduction

사용자가 앱에게 전달하는 정보는 주로 **텍스트**와 **파일** 두 가지가 있다.
텍스트를 전달하고자 하는 경우, 요청에 바디에 바로 담아서 보낼 수 있겠지만, 파일 업로드의 경우 방법이 다르다.

`Express`는 사용자가 업로드한 파일을 받아 저장하는 기본 기능이 제공하지 않는다. 따라서, 별도의 `multer`라는 모듈을 설치하여 사용자가 전송한 파일을 처리하는 작업을 해야하는 것이다.

- **`multer` 모듈 설치 방법**

```
$ npm install --save multer
```

## Multer Flow

- 동작 흐름
  - 파일 선택 Form 화면/모달창
  - 파일 선택 후 Submit 버튼 클릭 시 파일 전송
  - 루트 디렉토리 내 Uploads 폴더에 전송된 파일이 저장됨
  - 전송된 파일명을 화면에 표시

다음 내용에서 Node.js 환경에서 파일 업로드하는 방법을 소개한다.

---

# File Upload Form

## Routing 1 - /upload 경로 - GET 방식 접속

- http://localhost:3000/upload 경로로 접속하면 업로드 화면을 보여주도록 라우터 연결을 해준다.

```js
// Upload - File Uploading Form
app.get("/upload", function (req, res) {
	res.render("upload");
});
```

## Template Files

- 입력폼의 타입을 `enctype="multipart/form-data"`로 설정해야 사용자가 전송한 파일을 서버로 전송할 수 있다.
- Upload Template File `(upload.jade)` - Example

```js
doctype html
html
  head
    meta(charset='utf-8')
  body
    form(action='upload' method='post' enctype="multipart/form-data")
      input(type='file' name='userfile')
      input(type='submit')
```

## Routing 2 - /upload 경로의 POST 방식 접속

- Form을 통해 입력된 데이터가 upload 경로로 POST 방식으로 전송되었을 때, `(action='upload' method='post')` 전송된 데이터를 처리하기 위한 라우터 연결

```js
app.post("/upload", function (req, res) {
	res.send("업로드 성공!");
});
```

---

# Multer Uses

## Multer Application Code

```js
var multer = require("multer"); // express에 multer모듈 적용 (for 파일업로드)
var upload = multer({ dest: "uploads/" });
// 입력한 파일이 uploads/ 폴더 내에 저장된다.
// multer라는 모듈이 함수라서 함수에 옵션을 줘서 실행을 시키면, 해당 함수는 미들웨어를 리턴한다.
```

## Using Multer to Deal with Files Sent by Post

- 사용자가 POST 방식으로 전송한 데이터가 `upload` 라는 디렉토리에 들어 간다.
- 다음 함수를 실행하여 컨트롤러에 연결한다.
- Middleware `upload.single('avatar')`는 뒤의 `function(req, res)` 함수가 실행되기 전에 먼저 실행된다.
- Middleware는 **사용자가 전송한 데이터 중에서 만약 파일이 포함된다면, 그 파일을 가공해 `req` 객체에 `file`이라는 property를 암시적으로 추가하도록 약속되있는 함수다.**
- `upload.single('avatar')`의 매개변수 `'avatar'`는 Form을 통해 전송되는 파일의 name 속성을 가진다.

```js
app.post("/upload", upload.single("userfile"), function (req, res) {
	res.send("Uploaded! : " + req.file); // object를 리턴함
	console.log(req.file); // 콘솔(터미널)을 통해서 req.file Object 내용 확인 가능.
});
```

- 터미널 콘솔의 결과 화면은 [공식 문서](https://github.com/expressjs/multer#api)의 필드들과 같다.

---

# Advanced Multer

## Multer - 저장 경로, 파일명 설정

- Multer 모듈을 통해 POST로 전송된 파일의 저장경로와 파일명 등을 처리하기 위해서 DiskStorage 엔진이 필요하다.
  - [DiskStorage](https://github.com/expressjs/multer#storage) : This engine gives you full control on storing files to disk.
- DiskStorage Application Example (app_file.js)

```js
var multer = require('multer'); // multer모듈 적용 (for 파일업로드)
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
  }
  filename: function (req, file, cb) {
    cb(null, file.originalname) // cb 콜백함수를 통해 전송된 파일 이름 설정
  }
})
var upload = multer({ storage: storage })
```

## 저장한 파일 조회 - Static 파일 제공

- 정적 파일이 위치할 디렉토리명 선언
- 정적 파일이 접근할 라우터 경로 설정
  - Express.static 함수를 통해 제공되는 파일에 대한 가상 경로

```js
app.use("/users", express.static("uploads"));
```

- 이후 /users 경로를 통해 uploads 디렉토리에 포함된 파일을 불러올 수 있다.
  - 예시: `'https://localhost:3000/users/siwa.png'`

---

# Useful Links

- [서버 측 JS - 파일 업로드 방법](https://opentutorials.org/course/2136/11959)

- [Nodejs 파일 업로드](https://wayhome25.github.io/nodejs/2017/02/21/nodejs-15-file-upload/)

- [Multer 공식 문서](https://github.com/expressjs/multer)

- [npmjs - Multer](https://www.npmjs.com/package/multer)
