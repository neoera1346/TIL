# SQL

SQL: Structured Query Language

# SQL Abilities

- SQL can execute queries against a database
- SQL can retrieve data from a database
- SQL can insert records in a database
- SQL can update records in a database
- SQL can delete records from a database
- SQL can create new databases
- SQL can create new tables in a database
- SQL can create stored procedures in a database
- SQL can create views in a database
- SQL can set permissions on tables, procedures, and views

# SQL Statement

Example

`SELECT * FROM Customers;`

# SQL Commands

[SQL Commands List](https://www.w3schools.com/sql/sql_syntax.asp) - SQL Tutorial과 SQL Databases 두 가지로 나뉜다.

# MySQL GUI

아래 GUI 앱들 중 선택해서 사용한다.

- [MySQL Workbench](https://www.mysql.com/products/workbench/)
- [Sequel Pro (OSX 전용)](https://www.sequelpro.com/)
- [Table Plus](https://tableplus.com/)
- [DBeaver](https://dbeaver.com/download/)
- [DataGrip](https://www.jetbrains.com/datagrip/)

---

# Schema & Query Design

Schema(스키마)는 데이터베이스에서 데이터가 구성되는 방식과 서로 다른 엔티티 간의 관계에 대한 설명이다. 즉, '데이터베이스의 청사진'과 비슷하다.

Schema를 그려봄으로서 데이터 테이블간의 관계를 연관지을 수가 있다.

예시로, 학교를 위한 데이터베이스를 구축한다고 보자. 이 때, 교사, 수업, 학생과 같은 데이터들을 각각의 테이블을 만들어 저장한다.

| Teachers   | Classes     | Students |
| ---------- | ----------- | -------- |
| Name       | Name        | Name     |
| Department | Room Number | Email    |
| Classes    | Teacher     | Classes  |
| --         | Students    | --       |

- **Entity** : 고유한 정보의 단위이다. Entity는 데이터베이스에서 테이블로 표시할 수 있다.

  - Teachers, Classes, Students

- **Field** : 각 Entity에는 해당 Entity의 특성을 설명하는 Field가 존재한다.

  - 예 : Name, Department, Classes

- **Record** : 테이블에 저장된 항목이다. 테이블의 항목들(열)을 행으로 나타낸 것이다.
  - 예 : Cynthia, Music, Music Thoery, Brass Methods

## Inter-Table Relationship

### Teachers & Classes → 1:N

- 한 교수가 여러 수업을 진행할 수 있고, 한 수업에는 일반적으로 한 명의 교수만 오기 때문에, 1:N 관계를 가지고 있다.

### Classes & Students → N:N

- 한 수업에 여러 학생들이 참가하고, 한 학생이 여러 수업을 들을 수가 있기 때문에, 이 경우에는 N:N 관계를 가지고 있다.

## Primary Key & Foriegn Key

### Primary Key

- 각 테이블의 레코드를 가리키는 숫자로, 이 ID 필드의 값은 자동으로 증가(Auto-increment)한다.

### Foriegn Key

- 다른 테이블에서 테이블의 기본 키(Primary Key)를 참조할 때 해당 값을 외래 키(Foriegn Key)라고 부른다.

## Important!

SQL을 사용할 때 본인의 MySQL 정보는 물론이고, 다른 민감한 데이터들도 있을 것이다. 이런 정보들은 모두 하나의 `.env`파일에 몰아넣는 것이 좋다. 이런 `.env`파일은 절대 외부에 공개되면 안되기 때문에 `.gitignore`파일에 존재해야 한다.

[dotenv 관련 공식 문서](https://www.npmjs.com/package/dotenv)

---

# SQL vs NoSQL

Database를 사용할 때도 SQL 사용 여부를 결정해야 한다.

- SQL : Schema 구조가 간단하지만 Update가 많고 Scale up을 해야하는 경우가 적을 때 사용한다.
  - 서버의 성능도 향상되어야 한다.
- NoSQL : 이후 어떤 데이터가 추가될 지 예측 불가하고 데이터 Update보다 읽고 쓰는것과 Scale up의 경우가 현저히 많을 때 사용한다.
  - 서버의 수량을 더 추가해줘야 한다.

# ORM

- **ORM : Object Relational Mapping**
  - 객체와 관계형 데이터베이스의 데이터를 자동으로 연결해주는 것이다.

## Why use ORM?

- 객체지향 프로그래밍은 클래스를 사용하고 관계형 데이터베이스는 테이블을 사용하는데 이 두 구조간의 불일치를 ORM을 활용하여 객체 간의 관계를 바탕으로 SQL을 자동으로 생성해 이러한 불일치를 해결할 수 있다.

## PROS & CONS

- **PROS**: ORM을 통해 작성한 객체를 재활용할 수 있다는 측면에서 재사용 및 유지보수의 편리성이 증가한다.

- **CONS**: 잘못 구현할 경우 성능이 저하되고, 복잡한 쿼리문의 경우, 오히려 SQL 문으로 사용하는 것이 더 직관적이고 효율적이다.

# Sequelize Sequelize CLI

- `Node.js` 기반의 ORM이다.
- `Promise` 기반의 ORM이어서 비동기 처리에 용이하다.

> `Sequelize CLI`: 명령어를 사용해 데이터베이스 작업을 할 수 있는 툴이다.

---

# Useful Links

## MySQL

- [MySQL CREATE TABLE reference docs](https://dev.mysql.com/doc/refman/8.0/en/create-table.html)
- [MySQL SELECT reference docs](https://dev.mysql.com/doc/refman/8.0/en/select.html)
- [MySQL INSERT reference docs](https://dev.mysql.com/doc/refman/8.0/en/insert.html)
- [Executing SQL statements from a file](https://dev.mysql.com/doc/refman/8.0/en/batch-mode.html)
  - 위 링크들 모두 MySQL 공식 문서 글들이다.
- [Node mysql module docs](https://github.com/mysqljs/mysql)
  - SQL과 Connect하는 방법 이외에 많은 유용한 정보가 있으니 꼭 참고하자.
- [Draw Entity-Relationship Diagrams, Painlessly](https://dbdiagram.io/home)
  - Schema 간편하게 그릴 수 있는 곳이다.

## ORM

- [Sequelize ORM for Node](https://sequelize.org/v5/)
- [Sequelize-CLI](https://sequelize.org/v5/manual/migrations.html)
