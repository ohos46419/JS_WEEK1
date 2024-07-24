// 형 변환
//형태 ->  바꾼다
// 명시적 형 변환, 암시적 형 변환

// 1. 암시적
// 1-1. 문자열
let result1 = 1 + "2"; // 숫자 + 문자
console.log(result1); // 12
console.log(typeof result1); // string
// 암시적으로 문자열로 자동 변환

let result2 = "1" + true;
console.log(result2); // 1true
console.log(typeof result2); // string
// 문자열과 다른 데이터 타입이 만났을 때 문자열로
// 형 변환 -> 문자열이 우선시 됨
// {}, null, undefined + "1" -> 문자열

// 1-2. 숫자
let result3 = 1 - "2";
console.log(result3); // -1
console.log(typeof result3); // number

let result4 = "2" * "3";
console.log(result4); // 6
console.log(typeof result4); // number
// +를 제외한 다른 연산자들은 숫자가 우선시 되어 변환

// 2. 명시적 형 변환
// 개발자가 직접 자료형을 변환하는 것
// 2-1. Boolean
console.log(Boolean(0)); // 괄호안의 값을 Boolean 형태로 변환
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean("false")); // tru6
console.log(Boolean({})); // true

// 2-2. 문자열
let result5 = String(123);
console.log(typeof result5); // string
console.log(result5); // 123

let result6 = String(true);
console.log(typeof result6); //
console.log(result6);

let result7 = String(false);
console.log(typeof result7); //
console.log(result7);

let result8 = String(null);
console.log(typeof result8); //
console.log(result8);

let result9 = String(undefined);
console.log(typeof result9); //
console.log(result9);

// 1-3. Number
let result10 = Number("123");
console.log(result10); // 123
// 문자열을 넣었지만 숫자형으로 출력
