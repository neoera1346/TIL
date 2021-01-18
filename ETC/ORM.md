# ORM

ORM: Object-Relational Mapping

- Entity를 접근할 때, 자바스크립트의 객체처럼 표현할 수 있도록 해주는 것이다.

OOP VS Relational Database

---

# Sequelize

A Promise-based Node.js ORM

- 지원하는 RDBMS:
  - Postgres
  - MySQL
  - MariaDB
  - SQLite
  - Microsoft SQL Server

**ORM 예시 코드**

```js
var Sequelize = require("sequelize");
var db = new Sequelize("chatter", "root", "");

// db.define() 메소드를 통해 테이블을 작성할 수 있다.
var User = db.define("User", {
  username: Sequelize.STRING,
});

// db.define() 메소드를 통해 테이블을 작성할 수 있다.
var Message = db.define("Message", {
  userid: Sequelize.INTEGER,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING,
});

User.sync()
  .then(function () {
    // SQL문에서의 INSERT INTO 커맨드이다.
    return User.create({ username: "Jean Valjean" });
  })
  .then(function () {
    // WHERE 조건에 따른 Column을 가져오는 SELECT ~ FROM과 같다.
    return User.findAll({ where: { username: "Jean Valjean" } });
  })
  .then(function (users) {
    users.forEach(function (user) {
      console.log(user.username + " exists");
    });
    db.close();
  })
  .catch(function (err) {
    console.error(err);
    db.close();
  });
```

---

# Starting Sequelize

```js
// Sequelize 설치
$ npm install --save sequelize

// Sequelize 명령어를 실행하기 위한 패키지 설치
$ npm install --save-dev sequelize-cli

// Bootstraping(프로젝트 초기단계를 자동으로 설정)해준다
$ npx sequelize-cli init
```

위 작업을 마치면, `config, migrations, models, seeders` 폴더가 생성된다.

- `config`: contains config file, which tells CLI how to connect with database
- `models`: contains all models for your project
- `migrations`: contains all migration files
- `seeders`: contains all seed files

---

# Advanced Study

Association

- ORM을 이용해서 Join Table을 구현하는 방법이다.

Transaction

- 조회, 출금, 입금 처리 시 중간 단계에서 문제가 생기면, 롤백을 해야 한다.
- 성공했으면 커밋을 하는 것이다.

---

# Useful Links

아래의 Sequelize 공식 문서를 통해 설치 및 사용 방법, Assocation/Transaction 등등 다양한 정보를 얻고 공부할 수 있다.

- [Sequelize Manual](https://sequelize.org/master/manual/migrations.html)
- [Sequelize](https://sequelize.org/)
