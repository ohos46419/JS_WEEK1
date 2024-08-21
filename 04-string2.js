// 불리언 (Boolean)
// true(참), false(거짓)
let bool1 = true;
let bool2 = false;

console.log(bool1); // true
console.log(typeof bool1); // boolean

console.log(bool2); // false
console.log(typeof bool2); // boolean

// undefined
// un : not, define : 정의하다
// 값이 할당되지 않은 변수
let x;
console.log(x);

// null : 값이 존재하지 않음을 '명시적'(의도적)으로 나타내는 방법
// undefined와 같지 않다.
let y = null;
console.log(y);

// object(객체) key-value pair
let person = {
  name: "kim",
  age: 20,
  isMarried: true,
};

console.log(person); // { name: 'kim', age: 20, isMarried: true }
console.log(typeof person); // object

// array(배열)
// 여러 개의 데이터를 순서대로 저장하는 데이터 타입
// 대괄호[]를 사용하여 배열을 생성
// 배열은 자신의 위치에 대한 데이터(인덱스)가 있다 1은 0번째, 4는 3번째
let number = [1, 2, 3, 4, 5];
console.log(number[4]); // 5

let fruits = ["apple", "banana", "orange"];
