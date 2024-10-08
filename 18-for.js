// * for문, for ~ in문
// * for => ~동안 : 반복문

// for (초기값; 조건식; 증감식) {
//   출력;
// }

// 변수 i, 0부터 시작
// 변수 i, 10에 도달하기 전 까지 계속 반복
// 변수 i, 한 사이클이 돌고나면 1을 더함

for (let i = 0; i < 10; i++) {
  console.log("for문 돌아가는 중 => " + i);
}

// console 출력 값 : for문 돌아가는 중 => 0부터 9까지 10개의 문장이 출력
// ; 중요 누락되지 않기

// 배열과 for문은 짝
const arr = ["one", "two", "three", "four", "five"];

for (let i = 0; i < arr.length; i++) {
  // console.log(i); // 0 1 2 3 4 // 5개

  // * 0부터 시작, 인덱스로 접근
  console.log(arr[i]); // one ~ five // 5개
}
// * 배열의 요소 개수만큼 반복하여 실행

// --------------------------------------------------------------

// * ex : 0부터 10까지의 수 중에서 2의 배수만 console.log로 출력 (if문 사용)

for (let i = 0; i <= 10; i++) {
  if (i >= 2) {
    if (i % 2 === 0) {
      console.log(i); // 2 4 6 8 10
    }
  }
}

// ! 풀면서 막혔던 점
// ! (1) 처음 for문에서 if문 사용 할 생각을 못하고 조건식 부분에 다 쑤셔넣음

// ! (2) if문 사용 부분에서 i === i % 2 === 0 라고 유추, i에 계속 집착

// * let 초기 값을 자연스럽게 0으로 시작 -> 출력 값  0 2 4 6 8 10
// * 0은 2의 배수가 아님 -> if문을 하나 더 쌓아줌 i >= 2로 재지정 그렇게
// * i가 2로 바뀐값에서 i % 2 === 0를 계산 // 2 4 6 8 10

// --------------------------------------------------------------

// * for ~ in문
// * 객체의 속성을 출력하는 문법

let person = {
  name: "John",
  age: 30,
  gender: "male",
};

// * person['key']
for (let key in person) {
  console.log(key + ":" + person[key]);
}
// * name:John age:30 gender:male // 객체의 속성의 접근
// * 쌍점(:)을 적지 않으면 nameJohn 같이 붙어서 나온다
