// falsy한 값, truthy한 값

// 기존의 if문은 ( )안에 조건식이 들어가는데,
// if와 true 이외에도 해당하는 조건으로 사용 될 수 있는 값들을 나열함

if (0) {
  console.log("hello"); // 출력 X
}

if ("") {
  console.log("hello"); // 출력 X
}

if (null) {
  console.log("hello"); // 출력 X
}

if (undefined) {
  console.log("hello"); // 출력 X
}

if (NaN) {
  console.log("hello"); // 출력 X
}

if (false) {
  console.log("hello"); // 출력 X
}

if (true) {
  console.log("hello"); // hello
}

// true값을 제외한 모든 요소는 falsy한 값 => false기 때문에 출력 안됨
