// * 배열

// * key-value 페어의 객체와는 달리 요소들을 나열하기에 인덱스를 가지고 있다
// * 순서를 따질때 항상 시작은 0번째

// 1. 생성
// 1-1. 기본 생성
// let fruits = ["사과", "바나나", "오렌지"];

// 1-2. 크기 지정
// let number = new Array(5);
// * 5개의 요소를 가진 배열을 새로 만들어라
// * console.log(number); // [ <5 empty items> ]

// console.log(fruits.length); // 3
// console.log(number.length); // 5
//--------------------------------------------------------
// 2. 요소 접근
// console.log(fruits[0]); // 사과
// console.log(fruits[1]); // 바나나
// console.log(fruits[2]); // 오렌지
//--------------------------------------------------------
// 3. 배열 메소드

// 3-1. push
// 배열 추가

// let fruits = ["사과", " 바나나"];
// fruits.push("오렌지");
// console.log(fruits); // [ '사과', '바나나', '오렌지' ]

// 3-2. pop
// 배열의 마지막 요소를 삭제

// let fruits = ["사과", "바나나"];

// fruits.pop();
// console.log(fruits); // ['사과']

// 3-3. shift
// 배열의 첫 번째 요소를 삭제

// let fruits = ["사과", "바나나", "키위"];
// fruits.shift();

// console.log(fruits); // [ '바나나', '키위' ]

// 3-4.unshift
// 배열의 맨 앞에 배열 추가

// fruits.unshift("포도");
// console.log(fruits); // [ '포도', '사과', ' 바나나', '오렌지' ]

// * 3-5. splice
// let fruits = ["사과", "바나나", "키위"];

// fruits.splice(0, 2, "포도");
// 시작위치 0, 삭제개수 2, 대체 "포도" => 삭제하고 대체하기
// console.log(fruits); // ["포도", "키위"]

// * 3-6. slice
// let fruits = ["사과", "바나나", "키위", "포도", "복숭아"];

// let slicedFruits = fruits.slice(1, 3);
// 배열의  1번째 요소부터  3번째 요소까지 새로운 배열로 만든다.
// console.log(slicedFruits); // [ '바나나', '키위' ]
