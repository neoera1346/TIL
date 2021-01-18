# MVC Design Pattern

**MVC : Model View Controller의 약자이다.**

- 하나의 애플리케이션이나 프로젝트를 구성할 때 그 **구성요소를 세 가지 역할**로 구분한 패턴이다.

<img src="https://mblogthumb-phinf.pstatic.net/MjAxNzAzMjVfMjIg/MDAxNDkwNDM4ODMzNjI2.nzDNB5K0LuyP4joE2C4rIbL5Ue2F3at7wiI6ZpuTJN0g.WZ6V-WHZygLYW2WSdzcs7uAiAWgAJe3_H0XdkYKkutkg.PNG.jhc9639/1262.png?type=w800"/>

위는 이 MVC 로직을 간단하게 설명하기 위한 그림이다. 이처럼, 사용자가 Controller를 조작하면 Controller는 모델을 통해서 데이터베이스에서 데이터를 가지고 오거나, 모델 안에서 데이터를 업데이트 처리를 한 후, 그 정보를 바탕으로 시각적인 표현을 담당하는 View를 제어함으로서, 사용자에게 전달하게 된다.

<img src="https://mblogthumb-phinf.pstatic.net/MjAxNzAzMjVfMjUw/MDAxNDkwNDM4NzI4MTIy.4ZtITJJKJW_Nj1gKST0BhKMAzqmMaYIj9PobYJMFD4Ig.xTHT-0qyRKXsA4nZ2xKPNeCxeU2-tLIc-4oyrWq5WBgg.PNG.jhc9639/mvc_role_diagram.png?type=w800"/>

진짜 MVC 패턴의 구조는 위의 그림과 같다.

---

# Model

Application의 정보, 즉, 데이터를 나타낸다. 데이터베이스, 초기화값, 변수 등을 뜻하며, 이러한 Data, 정보들의 가공을 책임지는 컴포넌트이다.

## Rules

다음은 Model이 가지고 있는 규칙들이다.

1. 사용자가 편집하길 원하는 모든 데이터를 가지고 있어야 한다.

- 만약, 화면안의 네모박스에 글자가 표현된다면, 해당 박스의 화면상 위치 정보, 박스의 크기 정보, 글자 내용, 글자 위치, 글자 포맷 정보 등을 가지고 있어야 한다.

2. View나 Controller에 대해서 어떤 정보도 알지 말아야 한다.

- 데이터 변경이 발생되면, Model에서 화면 UI를 직접 조정하여 수정할 수 있도록 View를 참조하는 내부 속성값을 가지면 안 된다.

3. 변경이 발생되면, 변경 통지에 대한 처리방법을 구현해야만 한다.

- Model의 속성 중 텍스트 정보가 변경되면, 이벤트를 발생시켜 누군가에게 전달해야 하며, 누군가가 Model을 변경하도록 요청하는 이벤트를 보냈을 때, 이를 수신할 수 있는 처리 방법을 구현해야 한다. 또한, Model은 재사용 가능해야하며 다른 Interface에서도 변하지 않아야 한다.

---

# View

View는 Input text, Checkbox 항목 등과 같은 UI 요소를 나타낸다. 즉, 데이터 및 객체의 입력, 그리고 보여주는 출력을 담당한다. 데이터를 기반으로 유저들이 볼 수 있는 화면인 것이다.

## Rules

View가 가지고 있는 규칙들을 알아보자.

1. Model이 가지고 있는 정보를 따로 저장해서는 안 된다.

- 방금 언급한 것처럼, View는 출력만 담당하므로, 혹여나 Model이 가지고 있는 정보를 전달받고 그 정보를 유지하기 위해 임의의 View 내부에 저장하면 안 된다. Controller의 명령대로 화면에 표시하기만 해야 한다.

2. Model이나 Controller와 같이 다른 구성요소들을 몰라야 한다.

- 다시 말해, View는 데이터를 받아 화면에 표시해주는 역할만 하므로, 다른 요소를 참조하거나 어떻게 동작하는지 알 수 없어야 하고, 알아서는 안 된다.

3. 변경이 일어나면 변경통지에 대한 처리방법을 구현해야만 한다.

- 사용자가 화면에 표시된 내용을 변경하게 되면, 이를 모델에게 전달해 모델을 변경해야 한다. 이 작업을 하기 위한 '변경 통지'를 구현해야 한다.
- 또한 재사용 가능하도록 설계를 해야하며, 다른 정보들을 표현할 때 쉽계 설계를 해야 한다.

---

# Controller

Controller는 데이터와 UI 요소들을 잇는 다리역할을 한다. 즉, 사용자가 데이터를 클릭하고, 수정하는 것에 대한 "이벤트"들을 처리하는 부분이다.

## Rules

Controllers의 규칙들은 아래와 같다.

1. Model이나 View에 대해서 알고있어야 한다.

- Model과 View는 서로의 존재를 모르고, 변경을 외부로 알리거나 수신하는 방법만 가지고 있기 때문에, Controller는 이들을 중재하기 위해 Model 그리고 관련된 View에 대해 알고 있어야 한다.

2. Model이나 View의 변경을 모니터링해야 한다.

- Model/View의 변경 통지를 받으면 이를 해석하여 각각의 구성 요소에게 통지해야 한다. 그리고, 애플리케이션의 메인 로직은 Controller가 담당한다.

---

# Why We Should Use MVC Pattern

사용자가 보는 페이지, 데이터 처리, 그리고 이 두 가지를 중간에서 제어하는 컨트롤, 이 세가지 구성으로 된 하나의 애플리케이션을 만들면 각각 맡은 바에만 집중 할 수 있게 된다. 이는, 마치 공장에서와 같이, 하나의 역할들만 담당해 처리하므로, 효율적이다.

서로 분리되어 각자의 역할에 집중할 수 있게끔 개발을 하고 그렇게 애플리케이션을 만든다면, **_유지보수성, 애플리케이션의 확장성, 그리고 유연성이 증가하고, 중복코딩이라는 문제점 또한 사라지게 된다._**

---

# MVC Pattern Examples

MVC 패턴을 사용하는 프레임워크/라이브러리들은 다음과 같다.

- Google: AngularJS, CodeIgniter
- Python: Django, Facebook: React
  - React는 MVC 프레임워크는 아니고 View만 신경쓰는 라이브러리다.
  - 단방향 데이터 흐름으로 데이터 변경에 관한 DOM 객체만 변경해주는 체계다.

---

# Summary

MVC 패턴은 결국 "어떻게 나눌 것인가"에 대한 해답 중 하나인 것 같다. 어떤 특정 역할들에 대해 역할 분담을 할 때 가이드라인을 제시하는 방법 중 하나가 MVC 패턴이다.
