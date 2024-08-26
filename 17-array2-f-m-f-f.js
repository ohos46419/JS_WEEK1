// forEach, map, filter, find

// * (1) forEach,
let numbers01 = [7, 1, 3, 9, 2];

// * 함수를 실행, 매개변수 위치에 함수( function(){} )가 들어간다
// numbers.forEach();

// * 매개변수 자리에 함수를 넣는 것 : 콜백 함수
numbers01.forEach(function (item01) {
  console.log(item01); // * 7 1 3 9 2
});
// * 함수의 매개변수는 배열에 있는 각각의 요소가 한개씩 들어갔다 7 1 3 9 2

// ! 실수로 numbers01을 출력한 경우 [ 7, 1, 3, 9, 2 ] 배열이 5번 반복되어 출력됨

// --------------------------------------------------------------

// * (2) map
// map() 메소드는 배열의 각 요소에 대해 콜백 함수를 실행하고, 그 결과를 새로운 배열로 반환.
// * 항상 원본 배열의 길이만큼 return 된다

let numbers02 = [1, 19, 7, 21, 6, 19];

let newNumbers = numbers02.map(function (item02) {
  return item02 * 2;
});
console.log(newNumbers); // * [1, 19, 7, 21, 6, 19];

// * ! return 값 필수 ! return값을 적지 않으면 undefined로 채워진 배열이 나온다

// --------------------------------------------------------------

// * (3) filter
// * filter 메소드는 배열의 각 요소에 대해 콜백 함수를 실행하고, 그 결과가 true인 요소만
// * 새로운 배열로 반환합니다.

// * filter의 return값에는 조건이 들어간다

let numbers03 = [1, 7, 43, 19, 7, 7];

numbers03.filter(function (item03) {
  return item03 !== 7;
});
console.log(numbers03); // * [ 1, 7, 43, 19, 7, 7 ]
// * filter 메소드를 돌려놓고 다시 기존의 배열을 출력하면 안됨

// !!!!!!!!!!!!!!!!!!!!!진짜 중요!!!!!!!!!!!!!!!!!!!!!!!!!! 새로운 배열을 받기 때문에 선언문과 변수를 새로 써준다
const filteredNumbers = numbers03.filter(function (item03) {
  return item03 !== 7;
});
console.log(filteredNumbers); // * [ 1, 43, 19 ]

//* 불일치 연산자 (!== : 타입이 일치하면 false를 반환

// --------------------------------------------------------------

// * (4) find
// * filter와 유사하게 조건에 맞는것을 반환, 허나 조건에 맞는 요소 중 첫 번째 요소만 반환

let numbers04 = [1, 4, 7, 9, 11, 16];

const foundNumbers = numbers04.find(function (item04) {
  return item04 > 4;
});
console.log(foundNumbers); // * 7
// * 조건에 맞는 요소 중 제일 먼저 반환 되는 7만 출력됨
