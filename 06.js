// 연산자(+, -, *, /, %)

// 1. 더하기 연산자 console.log()
console.log(1 + 1); // 2
console.log(1 + "1"); // 11
// + 연산자는 숫자와 문자열을 함께 사용할 경우, 자동으로 문자열로 변환

// 2. 빼기 연산자
console.log(1 - "2"); // -1
console.log(1 - 2); // -1

// 3. 곱하기 연산자(*)
console.log(2 * 3); //6
console.log("2" * 3); //6

// 4. 나누기 연산자
console.log(4 / 2); // 2
console.log("4" / 2); // 2

// 5. 나누기 연산자(/) vs 나머지 연산자(%)
console.log(5 / 2); // 2.5
console.log(5 % 2); // 1
console.log("12" % 5); // 2

// 6. 할당 연산자(assignment)

// 6-1. 등호 연산자(=)
let x = 10;
console.log(x); // 10

// 6-2. 더하기 등호 연산자(+=)
x += 5; // 15
console.log(x);

x += 5;
console.log(x); // 20

// 6-3. 빼기 등호 연산자(-=)
x -= 5;
// 위 식은 x = x - 5; 와도 같다
console.log(x); // 15

// -10 만들기
// (1) x -= 25;
// (2) x = x - 25;
console.log(x); // 두 식 모두 -10

let a = 10;
a *= 2;
console.log(a);

// ----------------------------------------------
// 비교 연산자 (--> true 또는 false를 반환하는 연산자) *중요!
// 1. 일치 연산자(===)
// 타입까지 일치해야 true를 반환하는 연산자
console.log(2 === 2); // true
console.log(2 === "2"); // false

// 2. 불일치 연산자 (!==)
// 타입까지 일치해야 false를 반환하는 연산자
console.log(2 !== 2);
console.log(2 !== "2");

// 3. 작다 연산자(<)
console.log(2 < 3); // true
console.log(2 <= 3); // true
console.log(3 <= 3); // true
console.log(4 <= 3); // false

// 4. 논리 연산자
// 4-1(논리곱 연산자) : 모두 true일 때 true를 반환
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// 4-2 (논리합 연산자) : 두 값 중 하나라도 true인 경우 true를 반환
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log(false || true); // true

// 4-3(논리부정 연산자 => !)
// : 값을 반대로 바꿈
console.log(true); // true
console.log(!true); // false
let a1 = true;
console.log(a1); // true
console.log(!a1); // false

// 5. 삼항 연산자(중요!)
// 조건에 따라 값을 선택한다
let v = 10;
let result = v > 5 ? "크다" : "작다";
console.log(result); // 크다

let w = 20;
let answer = w < 10 ? "작다" : "크다";
console.log(answer); // 크다
// 3항연산자를 이용해서 w가 10보다 작은 경우, 작다를 console.log로 출력하라
// 10보다 크다면 크다를 출력하라

// 6. 타입연산자(typeof)
console.log(typeof "5"); // 5
