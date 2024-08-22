// 객체
// key - value pair
// 하나의 변수에 여러개의 값을 넣을 수 있다!

// * 1. 객체 생성 방법
let person01 = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};

// * 2. 접근하는 방법
console.log(person01.name); // 홍길동
console.log(person01.age); // 30
console.log(person01.gender); // 남자

// 1-2. 생성자 함수를 이용한 객체 생성 방법 (당장 중요한거 아님 이해 잘 안됨)
// function Person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }

// let person1 = new Person("홍길동", 30, "남자");
// let person2 = new Person("홍길순", 20, "여자");

// -------------------------------------------------------

// * 3. 객체 메소드( Object.~~~ )
//*  3-1. Object.key() : key를 가져오는 메소드

let person02 = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};

let person02Key = Object.keys(person02);
console.log("keys =>", person02Key); // keys => [ 'name', 'age', 'gender' ]

// * 3-2. Object.value() : value를 가져오는 메소드

let person02Value = Object.values(person02);
console.log("values =>", person02Value); // values => [ '홍길동', 30, '남자' ]

// * 3-3. entries
// * key와 value를 묶어서 배열로 만든 배열!!
let person02Entries = Object.entries(person02);
console.log("entries", person02Entries); // entries [ [ 'name', '홍길동' ],
// [ 'age', 30 ], [ 'gender', '남자' ] ]

// -------------------------------------------------------

// * 3-4. assign
// * 객체를 복사

// * 복사 할 객체
const assignPerson = {
  name: "김진수",
  age: 26,
  gender: "남자",
};

// * 복사한 값을 넣을 객체
let newPerson = {}; // 초기 값 빈 객체
Object.assign(newPerson, assignPerson); // 어디에다가(target), 무엇을?(source) 복사할건지
// newPerson에 저장, person 객체를 * 현재 newPerson은 빈 객체인 상태
console.log(newPerson); // { name: '김진수', age: 26, gender: '남자' }

// * 중괄호 추가 후 추가 내용 및 수정 가능
Object.assign(newPerson, assignPerson, { age: 91 }); // age값을 변경해서 복사
console.log(newPerson); // { name: '김진수', age: 91, gender: '남자' }

// -------------------------------------------------------

// * 3-5. 객체 비교

let personCompare01 = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};

let personCompare02 = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};

// * 서로 같은 값이 같은 두 객체 비교
console.log(personCompare01 === personCompare02); // * false

// * 겉보기에 값이 같은데 false가 출력 된 이유

// * 객체와 배열은 다른 데이터 타입에 비해 크기가 상당히 크다, 메모리에 저장 할 때,
// *  별도의 공간에 대한 주소에 저장하는데 값으로 비교가 아닌 주소로 비교하기에 다르다

// * 그렇다면 어떻게 비교해야 같다고 출력할 수 있을까
// * console.log(JSON.stringify);
// string : 문자열
// stringify : 문자열화 시킨다

// * 문자열은 위 객체와 배열의 특이한 저장방식이 아니기에 personCompare 객체를 문자열화
console.log(
  JSON.stringify(personCompare01) === JSON.stringify(personCompare02)
); // * true
// * 문자열화 시킨 personCompare01과 personCompare02는 같은가?
// * 같다

// * 3-6. 객체 병합
const personMerge01 = {
  name: "홍길동",
  age: 30,
};

const personMerge02 = {
  gender: "남자",
};

// * spread operator 사용
const mergedPerson = { ...personMerge01, ...personMerge02 };
console.log(mergedPerson); // { name: '홍길동', age: 30, gender: '남자' }
