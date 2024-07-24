// for, while => ~동안 : 반복문
// for (초기값; 조건식; 증감식) {
// }

// 변수 i, 0부터 시작
// 변수 i, 10에 도달하기 전 까지 계속 반복
// 변수 i, 한 사이클이 돌고나면 1을 더함
// for (let i = 0; i < 10; i++) {
//   console.log("for문 돌아가는 중 =>" + i);
// }

// ; 중요 누락되지 않기

// 배열과 for문은 짝꿍
// const arr = ["one", "two", "three", "four", "five"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(i);
//   console.log(arr[i]);
// }

// ex : 0부터 10까지의 수 중에서 2의 배수만 console.log로 출력
// for (let i = 0; i <= 10; i++) {
//   if (i >= 2) {
//     if (i % 2 === 0) {
//       console.log(i + "는 : 2의 배수이다");
//     }
//   }
// }

// for ~ in문
// 객체의 속성을 출력하는 문법
// let man52 = {
//   name: "John",
//   age: 30,
//   gender: "male",
// };

// man52["key"];
// for (let key in man52) {
//   console.log(key + ":" + man52[key]);
// }
