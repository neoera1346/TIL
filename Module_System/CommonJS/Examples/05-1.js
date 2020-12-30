let mod1 = require("./05-2.js");
let mod2 = require("./05-2.js");

// 문제: After subject.js runs, how many logs in the console will you see?
// 답: 1

// ? 해설
// 동일한 파일을 두번 가져오더라도, 캐싱이 되기 때문에,
// 콘솔은 한번만 찍히게 된다.
