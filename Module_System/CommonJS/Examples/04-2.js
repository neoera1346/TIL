let counter = 0;

exports.increment = function () {
  counter += 1;
  return counter;
};

// exports 객체의 increment 키가 익명함수를 가지고 있는데,
// 함수 실행 뒤, 1씩 증감된 카운터를 반환한다.
