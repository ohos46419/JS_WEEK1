// * 화살표 함수
// ES6 신 문법

// * 기존 함수 선언식
// function 변수(매개, 변수) {
//   return 매개 + 변수;
// }

// * 1-1. 기본적인 화살표 함수
// 변수를 선언 하는 것 처럼 표현
// 선언 변수 = (매개변수가 들어갈 소괄호)

const arrowFunction01 = (x, y) => {
  return x - y;
};
console.log(arrowFunction01(89, 28)); // 61

// *1-2. 중괄호 안쪽 줄이 한 줄일때 중괄호 및 리턴 생략 가능
const arrowFunction02 = (x, y) => x + y;
console.log(arrowFunction02(1, 2)); // 3

function testFunction(매개변수가하나) {
  return 매개변수가하나;
}

//매개변수가 하나일땐 소괄호도 생략 가능
const arrowFunction03 = (x) => x;
