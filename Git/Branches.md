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

<img src='https://gmlwjd9405.github.io/images/types-of-git-branch/develop-branch.svg'/>

---

## Develop Branch

- 새로운 기능 개발을 위한 브랜치
  - 여러 부가 기능 개발하는 브랜치들을 병합하기 위해 사용한다. 즉, 모든 기능이 추가되고 버그가 수정되어 자체테스트 통과 후 배포 가능한 안정적인 상태라면 `develop` 브랜치를 `master` 브랜치에 병합(merge)한다.
  - 평소 개발 진행 시 이 브랜치를 기반으로 한다.

<img src="https://gmlwjd9405.github.io/images/types-of-git-branch/develop-branch.png"/>

---

## Feature Branch

- 기능을 개발하는 브랜치
  - feature 브랜치는 새로운 기능 개발 및 버그 수정이 필요할 때마다 ‘develop’ 브랜치로부터 분기한다.
  - feature 브랜치에서의 작업은 기본적으로 공유할 필요가 없기 때문에, 자신의 로컬 저장소에서 관리한다.
  - 개발이 완료되면 ‘develop’ 브랜치로 병합(merge)하여 다른 사람들과 공유한다.

1. ‘develop’ 브랜치에서 새로운 기능에 대한 feature 브랜치를 분기한다.
2. 새로운 기능에 대한 작업 수행한다.
3. 작업이 끝나면 ‘develop’ 브랜치로 병합(merge)한다.
4. 더 이상 필요하지 않은 feature 브랜치는 삭제한다.
5. 새로운 기능에 대한 ‘feature’ 브랜치를 중앙 원격 저장소에 올린다.(push)
