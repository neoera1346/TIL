let mod1 = require("./04-2.js");
let mod2 = require("./04-2.js");

mod1.increment();

let result = mod2.increment();

console.log(result);
// 문제: After subject.js runs, what will be the value of result?
// 답: 2

// ? 해설: mod1, mod2 모두 같은 파일을 받아온다
// mod1은 increment()를 실행한 뒤, 카운터가 1로 증감된다.
// 두 변수는 주소가 같기 때문에, mod2에서 increment()를 실행한다면,
// mod1에서 돌아온 값에서 다시 1이 증감이 되어 2가 돌아온다.
