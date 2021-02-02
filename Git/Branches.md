# Branches

팀 단위 프로젝트 할 때 꼭 알아야 하는 깃 브랜치의 종류들을 소개하고자 한다. Git Branch의 종류와 사용법을 제대로 알아야 협업을 제대로 할 수가 있다.

## Git Branch Types

**다음 다섯 가지 종류의 브랜치를 기억하자.**

Gitflow Workflow에서 항상 **유지되는** 브랜치들은 다음과 같다.

- Master(main)
- Develop(dev)

이 외에 개발이 다 되고 배포가 되면 **필요하지 않는 보조 브랜치**들은 다음과 같다.

- Feature
- Release
- Hotfix(Bug)

**이 다섯 가지 브랜치를 기반으로 다음과 같은 흐름을 갖게된다.**

<img src='https://gmlwjd9405.github.io/images/types-of-git-branch/total-branch.png'/>

---

## Master Branch

- 제품으로 출시될 수 있는, 즉, 배포 준비 완료가 된 브랜치
  - 배포(Release) 이력 관리를 위해 사용한다.

---

## Develop Branch

- 새로운 기능 개발을 위한 브랜치
  - 여러 부가 기능 개발하는 브랜치들을 병합하기 위해 사용한다. 즉, 모든 기능이 추가되고 버그가 수정되어 자체테스트 통과 후 배포 가능한 안정적인 상태라면 develop 브랜치를 master 브랜치에 병합(merge)한다.
  - 평소 개발 진행 시 이 브랜치를 기반으로 한다.

<img src="https://gmlwjd9405.github.io/images/types-of-git-branch/develop-branch.png"/>

---

## Feature Branch

- 기능을 개발하는 브랜치
  - feature 브랜치는 새로운 기능 개발 및 버그 수정이 필요할 때마다 develop 브랜치로부터 분기한다.
  - feature 브랜치에서의 작업은 기본적으로 공유할 필요가 없기 때문에, 자신의 로컬 저장소에서 관리한다.
  - 개발이 완료되면 develop 브랜치로 병합하고 다른 팀원들과 공유한다.

1. develop 브랜치에서 새로운 기능에 대한 feature 브랜치를 분기한다.
2. 새로운 기능에 대한 작업을 수행한다.
3. 작업이 끝나면 develop 브랜치로 병합(merge)한다.
4. 더 이상 필요하지 않은 feature 브랜치는 삭제한다.
5. 새로운 기능에 대한 feature 브랜치를 원격 저장소에 올린다.(push)

- feature 브랜치 이름 정하기
  - 예시: [feature/login]

feature 브랜치 생성 및 종료 과정은 다음과 같다.

```
// feature 브랜치(feature/login)를 develop 브랜치에서 분기한다.
// master 브랜치에서 따는 것이 아니다!
$ git checkout -b feature/login develop

/* ~ 새로운 기능에 대한 작업 수행 ~ */

/* feature 브랜치에서 모든 작업이 끝나면 */
// develop 브랜치로 이동한다.
$ git checkout develop

// develop 브랜치에 feature/login 브랜치 내용을 병합(merge)한다.
$ git merge --no-ff feature/login

// -d 옵션: feature/login에 해당하는 브랜치를 삭제한다.
$ git branch -d feature/login

// develop 브랜치를 원격 중앙 저장소에 올린다.
$ git push origin develop
```

위에서 나온 `--no-ff` 옵션은, 새로운 커밋 객체를 만들어내 develop 브랜치에 merge시킨다.

이것은 feature 브랜치에 존재하는 커밋 이력을 **모두 합쳐서** 하나의 새로운 커밋 객체를 만들어 develop 브랜치로 병합(merge)하는 것이다.

그냥 merge 하는 것과의 차이는 다음과 같다.

<img src="https://gmlwjd9405.github.io/images/types-of-git-branch/feature-branch-merge.png"/>

---

## Release Branch

- 새로운 버전 출시를 준비하는 브랜치
  - 배포 전용 브랜치로서 합이 잘 맞는 개발 단계를 정의하기에 적합하다.

1. develop 브랜치에서 배포할 수 있는 수준의 기능들이 모이거나 정해진 배포 일정이 되면, release 브랜치를 분기한다.

   - release 브랜치를 만드는 순간부터 배포 사이클이 시작된다.
   - release 브랜치에서는 배포를 위한 최종적인 **버그 수정, 문서 추가** 등 배포와 직접적으로 관련된 작업을 수행한다.
   - 배포와 직접적으로 관련있는 작업들을 제외하고는 release 브랜치에 새로운 기능을 추가로 병합하지 않는다.

2. release 브랜치에서 배포 가능한 상태가 되면 다음 작업들을 실행한다.
   - master 브랜치에 병합한다.
   - 배포를 준비하는 동안 release 브랜치가 변경되었을 수 있으므로 배포 완료 후 develop 브랜치에도 병합한다.

이 때, 다음 배포를 위한 개발 작업은 develop 브랜치에서 계속 진행한다.

- release 브랜치 이름 정하기
  - 예시: [release-1.2]

release 브랜치 생성 및 종료 과정은 다음과 같다.

```
// release 브랜치(release-1.2)를 develop 브랜치에서 분기한다.
// master 브랜치에서 따는 것이 아니다.
$ git checkout -b release-1.2 develop

/* ~ 배포 사이클이 시작 ~ */

/* release 브랜치에서 배포 가능한 상태가 되면 */
// 'master' 브랜치로 이동한다.
$ git checkout master

// 'master' 브랜치에 release-1.2 브랜치 내용을 병합(merge)한다.
# --no-ff 옵션: 위의 추가 설명 참고
$ git merge --no-ff release-1.2

// 병합한 커밋에 Release 버전 태그를 부여한다.
$ git tag -a 1.2

/* 'release' 브랜치의 변경 사항을 'develop' 브랜치에도 적용 */
// 'develop' 브랜치로 이동한다.
$ git checkout develop

// 'develop' 브랜치에 release-1.2 브랜치 내용을 병합(merge)한다.
$ git merge --no-ff release-1.2

// -d 옵션: release-1.2에 해당하는 브랜치를 삭제한다.
$ git branch -d release-1.2
```

---

## Hotfix Branch

- 버그를 수정하는 브랜치
  - 배포한 버전에 긴급 수정이 필요할 경우, master 브랜치에서 분기되는 브랜치다.
  - develop 브랜치에서 문제 부분을 수정하고 배포 가능한 버전을 다시 만들기에는 시간이 많이 소요되고 안정성을 보장하기도 어려우므로, 바로 배포 가능한 master 브랜치에서 분기하여 필요부분만 수정 후 다시 master 브랜치에 병합하여 배포해야 한다.

1. 배포한 버전에 긴급하게 수정이 필요한 경우, **master 브랜치에서 hotfix 브랜치를 분기한다.**
2. 문제가 되는 부분만 수정한다.
   - 다시 master 브랜치에 병합하여 다시 배포한다.
   - 새로운 버전 이름으로 태그를 매긴다.
3. hotfix 브랜치에서의 변경 사항은 develop 브랜치에도 병합한다.

<img src="https://gmlwjd9405.github.io/images/types-of-git-branch/hotfix-branch.png"/>

- hotfix 브랜치 이름 정하기
  - 예시: [hotfix-1.2.1]

```
// release 브랜치(hotfix-1.2.1)를 'master' 브랜치(유일!)에서 분기
$ git checkout -b hotfix-1.2.1 master

/* ~ 문제가 되는 부분만을 빠르게 수정 ~ */

/* 필요한 부분을 수정한 후 */
// 'master' 브랜치로 이동한다.
$ git checkout master

// 'master' 브랜치에 hotfix-1.2.1 브랜치 내용을 병합(merge)한다.
$ git merge --no-ff hotfix-1.2.1

// 병합한 커밋에 새로운 버전 이름으로 태그를 부여한다.
$ git tag -a 1.2.1

/* 'hotfix' 브랜치의 변경 사항을 'develop' 브랜치에도 적용 */
// 'develop' 브랜치로 이동한다.
$ git checkout develop

// 'develop' 브랜치에 hotfix-1.2.1 브랜치 내용을 병합(merge)한다.
$ git merge --no-ff hotfix-1.2.1
```

---

# Entire Branch Flow

<img src="https://gmlwjd9405.github.io/images/types-of-git-branch/hotfix-branch.svg"/>

---

# Useful Links

- [참고 블로그](https://gmlwjd9405.github.io/2018/05/11/types-of-git-branch.html)
