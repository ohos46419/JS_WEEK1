// * 스코프(변수가 영향을 끼치는 정도)

// * 전역변수

let x = 10; // 함수가 전체영역에서 선언됨 (전역변수)

function printX() {
  console.log(x); // 10
}

console.log(x); // 10
printX();

// * 지역변수

function printX() {
  let x = 10; // 함수 내부에서만 선언됨(지역변수) = 바깥에서는 참조할 수 없다
  console.log(x); // 10
}

console.log(x); // ! ReferenceError: x is not defined
printX();
