let x = 10;
exports.x = 20;
module.exports.x = 30;

// 처음에 20이 exports에 담겨서 내보내졌지만,
// 그 다음에 30이 module.exports에 담겨서 덮어써지게 되었다.
// ? 결론적으로 내보내지는 값은 30인 것이다.
