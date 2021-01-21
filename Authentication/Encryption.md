# Encryption

일련의 정보를 임의의 방식을 사용하여 다른 형태로 변환하여 해당 방식에 대한 정보를 서유한 사람을 제외하고 이해할 수 없도록 다양한 암호화 알고리즘을 이용해 정보를 전달하는 과정이다.

---

# Hashing

어떠한 문자열에 임의의 연산을 적용하여 다른 문자열로 변환하는 것을 말한다. 민감한 사용자의 정보를 노출시키지 않고 알아볼 수 없는 문자열로 변환해서 클라이언트와 서버가 주고 받는 경우, 보안을 높이는 방법이다.

- 해싱은 주로 서버사이드 내에서 이루어진다.
- 대표적인 Hash Algorithm: `SHA256`
- 해싱은 모든 값을 계산하는데 오래걸리지 않으면서 고유값을 가져야한다.

---

# Salting

<img src="https://media.vlpt.us/images/denmark-choco/post/bf0beb82-b59c-4804-9800-afa40ea59afe/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-07-29%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.02.51.png"/>

Salting이란, 해싱하려는 값에 추가하는 값이다. 우리는 보안(암호화)를 위해 해상을 했지만 만약 해커가 Hashing Algorithm을 알게 되는 순간, 정보의 원본을 얻을 수가 있게 된다. 따라서 나온 Salting은, 원본값을 지키기 위해 해싱 전에 값을 따로 추가하는 방법으로, 알고리즘을 알고 있다 하더라도, 원본을 알 수 없게 하기위한 안전장치다.

---

# Useful Links

[Difference Between Encryption, Hashing and Salting](https://www.thesslstore.com/blog/difference-encryption-hashing-salting/)

[Salting and Hashing Explained](https://medium.com/better-programming/salting-and-hashing-explained-b76f5af83554)
