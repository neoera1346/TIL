# HTTPS

**Hyper Text Transfer Protocol Secure** Socket layer의 약자다.

- HTTP + S(Secure라는 보안 기능)이 추가된 것으로, 더 강화된 HTTP 프로토콜이다.

- 기존의 HTTP 프로토콜은 중간자 공격에 취약하다.

- HTTPS는 Client가 요청하는 내용을 암호화를 시키기 때문에, Key가 없다면, 요청하는 내용을 알 수 없다.

---

# HTTPS Features

HTTPS는 아래와 같은 세 가지 방식을 이용한다.

- 인증서
  - 데이터 제공자 신원 보장
  - 도메인 종속
- CA
  - Certificate Authority
  - 공인 인증서 발급 기관이다.
  - 브라우저마다 신뢰하는 CA 기관을 가지고 있다.
- 비대칭 키 암호화
  - 하나의 키로 암호화를 했다면, 복호화 할때는 다른 키가 필요하다.
  - 하나의 키는 비밀로 하고, 하나의 키는 클라이언트에 공개를 해서 데이터를 안전하게 전송할 수 있게 도와준다.

---

# Flow

- 매번 통신 때마다 공개 키 방식을 사용하기에는 복잡한 알고리즘이기 때문에 초창기 통신에만 사용된다.

- Hand Shake → 비밀 키 생성 → 상호 키 검증 → HTTPS 연결 성립 → ...

---

# Useful Links

- [중간자 공격](https://en.wikipedia.org/wiki/Man-in-the-middle_attack)
