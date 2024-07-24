// 배열

// 1. 생성
//1-1. 기본 생성
// let fruits = ["사과", " 바나나", "오렌지"];

// 1-2. 크기 지정
// let number = new Array(5);
// console.log(number); // [ <5 empty items> ]
// console.log(fruit.length); // 3
// console.log(number.length); // 5
//--------------------------------------------------------
// 2. 요소 접근
// console.log(fruit[0]);
// console.log(fruit[1]);
// console.log(fruit[2]);
//--------------------------------------------------------
// 3. 배열 메소드

// 3-1. push
// 배열 추가
// let fruits = ["사과", " 바나나"];

// fruits.push("오렌지");
// console.log(fruits); // [ '사과', ' 바나나', '오렌지' ]

// 3-2. pop
// 배열의 마지막 요소를 삭제
// let fruits = ["사과", " 바나나"];

// fruits.pop();
// console.log(fruits); // [ '사과' ]

// 3-3. shift
// 배열의 첫 번째 요소를 삭제
// let fruits = ["사과", " 바나나", "키위"]; // [ ' 바나나', '키위' ]

// fruits.shift();
// console.log(fruits);

// 3-4.unshift
// 배열의 맨 앞에 배열 추가
// fruits.unshift("포도");
// console.log(fruits); // [ '포도', '사과', ' 바나나', '오렌지' ]

// 3-5. splice
// let fruits = ["사과", "바나나", "오렌지"];

// fruits.splice(1, 1, "포도");
// 시작위치, 삭제개수
// console.log(fruits);   // ["사과", "포도", "오렌지"]

// 3-6. slice

// let fruits = ["사과", "바나나", "키위"];
// 배열의 두 번째 요소부터 세 번째 요소까지 새로운 배열로 만든다.

// let slicedFruits = fruits.slice(1, 2);

// console.log(slicedFruits);   // ["바나나"]
//--------------------------------------------------------
// 콜백 함수 사용
//--------------------------------------------------------
// (1) forEach,
// 배열의 모든 요소를 출력
// let numbers = [4, 1, 5, 4, 5];

// numbers.forEach(function (item) {
//   console.log(item); // 4, 1, 5, 4, 5
// });

// (2) map
// map() 메소드는 배열의 각 요소에 대해 콜백 함수를 실행하고, 그 결과를 새로운 배열로 반환.
// 항상 원본 배열의 길이만큼 return
// let newNumbers = numbers.map(function (item) {
//   return item * 2;
// });
// console.log(newNumbers); // [ 8, 2, 10, 8, 10 ]

// (3) filter
// let filteredNumbers = numbers.filter(function (item) {
//   return item !== 5; // [ 4, 1, 4 ]
// });
// console.log(filteredNumbers);

// (4) find
let numbers = [4, 1, 5, 4, 5];

let result = numbers.find(function (item) {
  return item > 3;
});

console.log(result); // 4
