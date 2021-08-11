# Top Git Commands

## Init

- 새로운 Git 저장소(repository)를 생성할 때 사용하는 Git 명령어다. `$ git init` 명령어를 실행하면, 현재 디렉토리를 기준으로 Git 저장소가 생성된다.

## Add

- 변경사항을 Staging Area로 이동시켜준다.

  다양한 Add 방법들이 있다.

  ```
  $ git add <fileName/filePath>
  $ git add .
  $ git add -A
  $ git add -p
  ```

## Commit

- Staging Area에 명시적으로 디렉토리 내의 변경사항들을 기록하는 명령어다.

  ```
  $ git commit -m 'Commit에 대한 설명 추가'
  ```

## Push

- 원격 저장소(Remote Repository)에 코드 변경분을 업로드하기 위해 사용하는 Git 명령어다.

  예시

  ```
  $ git push <저장소명> <브랜치명>
  $ git push origin master
  ```

## Checkout

- Master 브랜치가 아닌 새로 만든 브랜치에서 작업을 하고 싶다면, 물론 브랜치를 바꿔야한다. Git에서는 내가 사용하고자 하는 Branch 이름을 명시적으로 지정해주어야 하는데, 이때 쓰이는 명령어는 `checkout`이다.

  예시

  ```
  $ git checkout issue1
  Switched to branch 'issue1'
  ```

- `checkout` 명령에 `-b` 옵션을 넣으면 브랜치 작성과 체크아웃을 한꺼번에 실행할 수 있다.

  ```
  $ git checkout -b <branch>
  ```

## Reset

- 특정 지점의 과거 커밋으로 이동, 이동된 이후의 커밋은 삭제된다.
- 과거 커밋으로 이동하면서 그 이후 커밋은 삭제되어 되돌릴 수 없으므로 주의가 필요하다.
- 애초에 commit 하지 않은 것처럼 예전 커밋으로 브랜치를 옮기는 것이다.
- 주로 사용하는 옵션 3가지 :

  `--mixed, --hard, --soft / 기본값은 --mixed`

  ```
  $ git reset <--옵션> <돌아가고싶은 커밋>
  ```

---
# Useful Commands

Mac OS 환경이나 Linux 환경에서 Terminal을 사용하면서 ls 혹은 clear 와 같은 명령어를 사용하다가 Windows의 Command Prompt로 와서 습관처럼 쓰던 명령어를 사용하게되면 터미널 창에서 아래와 같은 에러를 보게되는 것을 이번에 처음 Windows 데스크탑을 장비하게되면서 알게되었다.

` 'ls'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다.`

이런 경우, 두 가지 방법이 있다.

1. Windows용 명령어로 사용하거나,
2. **MacOS/Linux에서 사용하던 명령어를 Windows에서 그대로 사용이 가능하도록 설정해줄 수가 있다.**

방법은 다음과 같다.

`doskey 사용하고자 하는 명령어 = 기존 Windows 명령어`

예시: 

1. **ls** 설정방법

`> doskey ls = dir`

2. **clear** 설정방법

`> doskey clear = cls`





