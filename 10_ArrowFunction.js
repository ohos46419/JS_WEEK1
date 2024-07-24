// 화살표 함수
// ES6 신 문법

function add(x, y) {
  return x + y;
} // 익숙해지기 전까진 웬만하면 화살표 함수보단 기본 방법 사용

// 1-1. 기본적인 화살표 함수
let arrowFunc01 = (x, y) => {
  return x + y;
};

// 1-2. 중괄호 안쪽 줄이 한 줄일때 중괄호 및 리턴 생략 가능
let arrowFunc02 = (x, y) => x + y;

//
function testFunc(x) {
  return x;
}

//매개변수가 하나일땐 소괄호도 생략 가능 -> 자동완성으로 괄호 채워짐
let arrowFunc03 = (x) => x;
