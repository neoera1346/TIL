# OAuth

OAuth 2.0 기술은 우리가 웹이나 앱에서 흔히 사용되는 '소셜 로그인' 인증 방식이다.

보통 서버에서 인증을 처리해줬지만, OAuth는 그와 다르게 인증을 중개해주는 메커니즘으로, **보안된 리소스에 액세스하기 위해 클라이언트에게 권한을 제공하는 프로세스를 단순화하는 프로토콜이다.**

즉, **이미 사용자 정보를 가지고 있는 웹 서비스(GitHub, Google, Facebook 등)에서 사용자의 인증을 대신해주고, 접근 권한에 대한 토큰을 발급한 후, 이를 이용해 내 서버에서 인증이 가능해진다.**

OAuth를 사용하여도 유저 정보는 여전히 내 서버에 저장된다. 그 이유는, OAuth는 인증(Authentication)을 다른 서비스에 맡길 뿐, 접근 권한 관리(Authorization)는 순전히 내 서버의 몫이기 때문이다.

- 질문: Authentication과 Authorization의 차이가 무엇인가?
  - Authentication = 인증, Authorization = 접근 권한

---

# History

OAuth 인증 방식이 나온 계기는 간단하다.

인터넷에는 새로운 웹사이트들이 나날이 늘어나고, 유저들은 더 많은 서비스들을 사용하게 된다. 그리고 대부분의 서비스들은 사용하기 위해 회원가입 절차가 필요하다. 유저 입상에서 생각해보면, 서비스별로 회원가입을 하고 그 ID/PW를 기억하는 것은 매우 귀찮고 어려운 일이다.

하지만 OAuth를 사용한다면 우리가 이미 가입한 사이트의 계정을 가지고 로그인을 할 수가 있다. 그럼, 우리는 우리가 자주 사용하고 중요한 서비스들 (Google, Github, Facebook 등)의 로그인 정보만 기억해놓고 소셜 로그인을 할 수 있다. 즉, 계정 연동으로 로그인을 하는 것이다.

OAuth에는 추가적으로 **보안상의 이점**도 존재한다. 검증되지 않는 앱에서 OAuth를 사용하여 로그인한다면, 유저의 민감한 정보가 직접 앱에 노출될 일이 없고, 인증 권한에 대한 허가를 유저에게 미리 구해야 된다.

---

# OAuth Process

<img src='https://a.slack-edge.com/fbd3c/img/api/articles/oauth_scopes_tutorial/slack_oauth_flow_diagram.png'/>

기본적인 OAuth 인증 절차는 다음과 같다.

1. Client는 Resource Owner에게 Authorization Code를 요청한다.
2. Resource Owner는 Redirect URI를 통해 Authorzation Code를 부여한다.
3. Client는 Authorization Server에게 Authorization Code를 전달한다.
4. Authorization Server는 Client에게 Access Token을 전달한다.
5. Client는 앞으로 Access Token을 가지고 Resource Server에 요청할 수 있다.
6. Resource Server는 Access Token만 확인하고 데이터를 Client에게 전달한다.

사실 3번과 4번 사이에 숨겨진 절차가 하나 있다.

- Server는 Client에게 받은 Authorization Code를 OAuth Server에 보내서 Access Token을 요청한다.
- OAuth Server는 Server에게 Access Token을 전달한다.

---

# Usage

- OAuth 인증 방식을 사용하기 위해서는 먼저 App을 등록해야한다.
- 앱을 등록한 후 유니크한 Client ID와 Client Secret을 발급이 된다.
- **Client Secret은 절대로 공개되서는 안 된다.**
  - Client Secret을 담은 환경변수 파일은 `.gitignore`에 넣어야 한다.
- 앱을 등록할 때 Redirect URL 또한 지정해야한다.
  - 이는 로그인 이후 유저가 돌려보내질 창을 지정하는 것이다.
  - 보통 로그인 하고나서 도메인의 홈 화면으로 가지는 것과 같다.

---

# Useful Links

- [Want to Secure Your APIs?](https://www.okta.com/blog/2019/10/want-to-secure-your-apis-youll-need-oauth-2-0-for-that/)
- [Create an Application](https://www.oauth.com/oauth2-servers/accessing-data/create-an-application/)
  - OAuth 사용을 위한 Client ID & Client Secret 발급 받는 방법
- [Slack OAuth](https://api.slack.com/legacy/oauth)
