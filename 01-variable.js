// * 변수, 상수
// 기억하고 싶은 값을 메모리에 저장하고, 저장된 값을 읽어 들여 재사용한다.

// * 변수의 5가지 주요 개념
// 변수 이름 : 지정된 값의 고유 이름
// 변수 값 : 변수에 저장된 값
// 변수 할당 : 변수에 값을 저장하는 행위
// 변수 선언 : 변수를 사용하기 위해 컴퓨터에 알리는 행위
// 변수 참조 : 변수에 할당된 값을 읽어오는 것

// -----------------------------------------------------------------

// * 변수를 선언할 수 있는 3가지 방법 : var, let, const

// * 1. var (잘 사용하지 않음)
var myVar = "Hello World1";
console.log("var => ", myVar); // * Hello World1

var myVar = "Test 1";
console.log("var => ", myVar); // * Test 1

myVar = "GoodBye1";
console.log(myVar); // * GoodBye1

console.log("--------------------------------------------");

// * 2. let
let myLet = "Hello World2"; // * (1)

// ! let myLet = "Test 2"; // (2)

myLet = "GoodBye 2"; // * 위에서 선언한 myLet 값을 재할당 성공 // (3)

console.log("let => ", myLet);
// * (1) Hello World2,, (3) GoodBye 2

console.log("--------------------------------------------");

// * 3. const
const myConst = "Hello World3"; // * (1)

// ! const myConst = "Test 3"; // (2)

myConst = "GoodBye3"; // * (3)

console.log("const => ", myConst);
// * (1) Hello World3, (2) 변수를 다시 선언할 수 없습니다.,
// * (3) TypeError: Assignment to constant variable.at Object.<anonymous>

// * 각 변수의 차이점
// * (1) let과 const는 같은 이름의 변수를 두 번 선언하면 오류가 발생한다.
// * (2) const로 선언하고 할당한 값은 재할당이 불가능하다.

// * (3) var는 같은 이름의 변수를 여러 번 선언해도 오류가 발생하지 않고,가장 마지막에
// * 선언한 값으로 변수가 덮어씌워진다.
