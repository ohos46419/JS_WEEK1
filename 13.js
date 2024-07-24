// 조건부 실행

let x = 10;

if (x > 0) {
  console.log("x는 양수"); // 일반 조건문
}

x > 0 && console.log("x는 양수"); // 조건문 단축 실행

// or조건(||)
// 삼항 연산자와 단축평가
let y;
let z = y || 20;
console.log(z);
//  변수 y가 존재하지 않는 경우, || 연산자는 false 값을 반환하고,
// 기본값으로 지정한 20을 반환합니다.
