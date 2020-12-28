# Network Tab

**HTTP와 브라우저의 Network 탭 및 브라우저를 통해 일어나는 일들을 정리했다.**

---

## URL Composition

**아래와 같은 URL이 있다고 하자.**

> URL: http://www.google.com/intl/ko_kr/about/

**1. `http://`: 사용되는 Protocol을 의미한다.**

**2. `www.google.com`: Domain 주소를 가리킨다.**

**3. `/intl/ko_kr/about/`: Routing, 즉, 상세주소를 의미한다.**

**URL (Uniform Resource Locator) 구성**

- http://www.google.com/search?q=puppies#p2
- `scheme`: http, https, ssh, git
- `host`: google.com, localhost, 192. 168.1.1
- `subdomain`: www, mail, blog
- `path`: search, about.html, blog/entries/2/big-day
- `query string`: q=puppies/ref=mobile&page=4
- `hash fragment`: p2, FAQ, /profile/edit

---

## How HTTP Functions

**`HTTP` 요청은 `URI(Uniform Resource Identifier)`를 통해 할 수 있다.**

**1. `www.google.com` 주소의 실제 IP주소를 `DNS` 서버로 물어본다.**

- DNS 서버의 응답: 216.58.197.196

**2. `DNS` 서버가 해당 주소의 IP주소를 돌려준다.**

- Domain Name Server
- 모든 컴퓨터는 고유의 IP를 가지고 있다.

**3. 해당 IP주소를 가지고 `HTTP Request`를 보낸다.**

- 웹 서버의 라우팅에 따라 요청을 처리한다.

**4.`HTTP` 요청에 대한 응답을 받는다.**

- 요청에 대한 응답을 자원의 형태(`HTML`,`JSON`)으로 전달한다.

---

## HTTP Advanced

- 서버와 클라이언트가 주로 HTML 등의 문서를 주고 받을 데 사용하는 프로토콜이다.
- 주로 TCP/UDP 80번 PORT 사용한다.
- [HTTP의 정석 : RFC2616](https://tools.ietf.org/html/rfc2616)을 꼭 참고하자.

### **HTTP Request**

```http
PUT /create_page HTTP/1.1
HOST: localhost:8000
Connection: keep-alive
Upgrade-Insecure-Requests: 1
Content-Type: text/html
Content-Length: 345

Body line 1
Body line 2
...
```

### **HTTP Response**

```http
HTTP/1.1 200 OK
Server: Apache
Content-Type: text/html
...

<!--PAYLOAD-->
```

---

## HTTP Status Code (응답 코드)

- `1xx`: Hold On
- `2xx`: Here You GO / 요청 성공
- `3xx`: Go Away / 요청에 대한 응답이 수정되지 않음 (Cache)
- `4xx`: You Screwed Up / 컨텐츠에 접근할 권한 없음, 요청받은 리소스를 사용할 수 없음
- `5xx`: I Screwed Up / 서버가 처리할 수 없는 요청

**다양한 응답 코드 확인 : [참고 문서](https://developer.mozilla.org/ko/docs/Web/HTTP/Status)**

---

## Console-Network Tab

**개발자 도구의 네트워크 탭에서 확인 가능한 것들**

**1. 파일명**

**2. 요청 형태: `GET`, `POST`, `PUT`, ...**

**3. 응답 상태: 200, 201, 404, 500, ...**

**4. 파일 형태, 확장자: `gif`, `script`, `doc`, ...**

**5. 등등... 네트워크 창에서 추가 및 확인 가능하다.**

**[네트워크 탭 관련 참고 자료](https://developers.google.com/web/tools/chrome-devtools/network/reference)**

---

## Useful Links

- [cURL Related](https://curl.se/docs/httpscripting.html)
- [Postman](https://www.postman.com/downloads/)
  - Useful to test APIs, HTTP headers and stuff
