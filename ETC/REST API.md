# Rest API

개발자 공고에 자주 등장하는 단어, Restful API가 있다. 또한, "Restful한 API를 만들어본 적이 있는가?"라는 질문을 던지곤 하는데, 이 Restful 하다는 것은 무엇이고 왜 이렇게 강조를 하는 것일까?

---

## Representational State Transfer

- 웹서비스를 만드는데 사용되는 **제약(Constraint) 모음**
- Roy T. Fielding - "Web을 망가뜨리지 않고, 어떻게 HTTP를 개선할 수 있을끼?"

---

## Six Constraints

HTML

1. Client-Server

   - Client와 Server는 독립적으로 개발되어야 한다.

2. Stateless

   - 한 요청을 처리하는데 필요한 모든 정보를 보내주어야 한다.
   - 서버는 내가 누군지 기억을 하지 못 한다.

3. Cacheable

   - 특정 정보들을 서버에 저장할 수 있어야 한다.

4. **Uniform-Interface**

   - 동일한 인터페이스로 구현되어 있어야 한다.

5. Layered System

   - Server가 어떤 방법으로 구현되어있고 어떻게 돌아가는지 Client는 몰라도 API를 쓸 수 있어야 한다.

JavaScript

6. Code on Demand

   - 자바스크립트를 실행할 수 있는 코드를 내려줄 수 있어야 한다.

---

## Uniform Interface

- Identification of Resources
  - 리소스를 식별할 수 있어야 한다.
- Manipulation of Resources through Representation
  - 리소스를 표현에 의해서 조작할 수 있어야 한다.
- Self-Descriptive Message
  - 메세지 내용에 필요한 모든 정보들이 들어가 있어야 한다.
- Hypermedia As The Engine Of Application State
  - 다음 리소스를 찾는 Link가 제공되어 있어야 한다..

---

## Best Practices

- 리소스는 나타내는 데 명사를 사용하자.
  - 리소스의 네 가지 대분류
    1. Document
    2. Collection
    3. Store
    4. Controller
- 일관성이 핵심이다.
  - Convention 혹은 규칙들.
- CRUD 기능 이름은 URI에 사용하지 말아야 한다.
  - 별도 문서 없이 API 이름만으로 그 기능을 충분히 유추할 수 있다.
- Filter가 필요하면 query Component를 사용하자.
  - query Component 예시 : `/managed-devices?region=USA&brand=XYZ`

[리소스 작명 관련 유용한 링크](https://restfulapi.net/resource-naming/)

---

## Useful Links

- [Restful API.net](https://restfulapi.net/)
