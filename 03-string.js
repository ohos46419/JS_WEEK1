// 2. 데이터 타입 [문자] : string(문자열 = 문자의 나열)
// ' ' = " "
let str = "Hello, World!";

console.log(str); // Hello, World!
console.log(typeof str); // string

// 2-1. 문자열 길이 확인하기
console.log(str.length); // 13
// "H" "e" "l" "l" "o" "," "공백" "W" "o" "r" "l" "d" "!"

// 2-2. 문자열 결합하기 (concatenation)
let str1 = "Hello, ";
let str2 = "World!";
let result1 = str1.concat(str2);
console.log(result1); // Hello, World!

// 2-3. 문자열 자르기
let str3 = "Hello, World!";
console.log(str3.substr(7, 5)); // World
// 7번째 부터 5개까지만 출력 = 공백 위치부터 문자열 5개 world를 출력

console.log(str3.slice(3, 13)); // lo, World!
// (3, 13) 시작위치 -> 끝 위치

// 2-4. 문자열 검색
let str4 = "Hello, World!";
console.log(str4.search("World")); // 7
// 값이 시작되는 위치를 찾는 .search

// 2-5. 문자열 대체
let str5 = "Hello, World!";
let result2 = str5.replace("World", "Javascript");
console.log(result2); // Hello, Javascript!
// ("World", "Javascript")
// 첫번 째 값을 두번 째 값으로 대체

// 2-6. 문자열 분할
let str6 = "apple, banana, kiwi";
let result02 = str6.split(",");
console.log(result02); // [ 'apple', ' banana', ' kiwi' ]
