// 조건문 - if, else if, else
// 1. if문
const x = 20;

// if (true 또는 false가 나올 수 있는 조건식) {
//  리턴값
// }

if (x > 0) {
  console.log("x는 양수");
}

// 1-2
const y = "Hello, World!";
// y의 길이가 5보다 크거나 같으면 길이를 console.log로 출력

if (y.length >= 5) {
  console.log(y.length); // 13
}

// 2. if - else문
const z = 30;
if (z > 0) {
  console.log("x는 양수");
} else {
  console.log("x는 음수");
}

let w = -10;

if (w < 0) {
  console.log("x는 음수");
} else {
  console.log("x는 양수");
}

// * (if) - (else if) - (else) 문
// * 조건식을 2번 실행 (else if) 또 다른 if
// &&는 추가로 검사

const v = 10;

if (v < 0) {
  // main logic #1
  console.log("v는 0보다 작다");
} else if (v >= 0 && v < 10) {
  // main logic #2
  console.log("v는 0보다 크거나 같고, 10보다 작다");
} else {
  // main logic #3
  console.log("위의 if, else if문 모두 true값이 아니다");
}
