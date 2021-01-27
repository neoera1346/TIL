# Additional

클라우드 서비스

- 클라우드 VS 온프레미스

클라우드 (AWS)

- 비용: 쓴 만큼 지불
- 확장성: 좋음
- 구축에 걸리는 시간: 빠름

온프레미스

- 비용: 고정비용
- 확장성: 용이하지 않음
- 구축에 걸리는 시간: 직접 구축

Sass, PasS, IasS

- Software, Platform, Infrastructure as a service
- SaaS: Office 365, Adobe Creative Suite
- PasS: API를 사용할 수 있는 소프트웨어
- IasS: AWS, Microsoft Azure, Google Cloud Platform

* 로드 밸런서

- 인스턴스가 늘어났다 줄어났다 할 수 있게 도와준다.

* 컨테이너 : EC2 Instance → VM(Virtual Machine), CPU/Memory > 80% → EC2 증설
* 이미지 : VM 에다가 운영체제 바로 까는 것. Image (Ubuntu, AMI Linux, Windows)

* Docker : 이미지를 바탕으로 컨테이너를 만드는 프로그램 (가상화 기술)
  내가 나의 앱을 담아서 이미지를 만들면 즉시 배포 가능

이미지에 포함되는 내용:

- 노드 깔린 이미지
- 운영 체제 이미지
- 내 앱이 깔린 이미지

장점: 환경에 구애를 받지 않는다.
