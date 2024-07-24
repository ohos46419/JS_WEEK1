// falsy한 값, truthy한 값

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

// true를 제외 모두 falsy한 값
