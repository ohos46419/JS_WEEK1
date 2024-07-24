// 조건문 - if, else if, else, switch
// 1. if문
let x = 10;

if (x > 0) {
  // main logic
  console.log("x는 양수"); // x는 양수
}

// ()안에 true 또는 false가 나올 수 있는 조건

// 1-2
let y = "hello world";

if (y.length >= 5) {
  console.log(y.length); //11
}
// y의 길이가 5보다 크거나 같으면 길이를 console.log로 출력

// 2. if - else문
let z = -7;

if (z > 0) {
  // main logic #1
  console.log("x는 양수입니다.");
} else {
  // main logic #2
  console.log("x는 음수입니다.");
}

let w = 5;

// if - else if - else 문
if (w < 0) {
  // main logic #1
  console.log("1");
} else if (w >= 0 && w < 10) {
  // main logic #2
  console.log("2");
} else {
  // main logic #3
  console.log("3");
}

// 1-4. switch
// 변수의 값에 따라, 여러 개의 경우(case) 중 하나를 선택
// default
let fruit = "바나나2";

switch (fruit) {
  case "사과":
    console.log("사과입니다");
    break;
  case "바나나":
    console.log("바나나입니다");
    break;
  case "키위":
    console.log("키위입니다");
    break;
  default:
    console.log("디폴트값입니다");
    break;
}
