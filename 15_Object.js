// 객체
// key - value pair
// 하나의 변수에 여러개의 값을 넣을 수 있다!

// 1. 객체 생성 방법
// 1-1. 기본적인 객체 생성 방법
let person = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};

// 1-2. 생성자 함수를 이용한 객체 생성 방법
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

let person1 = new Person("홍길동", 30, "남자");
let person2 = new Person("홍길순", 20, "여자");

// 2. 접근하는 방법
console.log("1", person.name); // 홍길동
console.log("2", person.age); // 30
console.log("3", person.gender); // 남자

// 3. 객체 메소드(객체가 가진 여러가지 기능 : Object.~~~)
// 3-1. Object.key() : key를 가져오는 메소드

//   let person = {
//      name: "홍길동",
//      age: 30,
//      gender: "남자",
//   };

let 키값 = Object.keys(person);
console.log("keys =>", 키값); // keys => [ 'name', 'age', 'gender' ]

// 3-2. Object.value() : value를 가져오는 메소드

let 밸류값 = Object.values(person);
console.log("values =>", 밸류값); // values => [ '홍길동', 30, '남자' ]

// 3-3. entries
// key와 value를 묶어서 배열로 만든 배열!!
let entries = Object.entries(person);
console.log("entries", entries); // entries [ [ 'name', '홍길동' ],
// [ 'age', 30 ], [ 'gender', '남자' ] ]

// 3-4. assign
// 객체를 복사
let newPerson = {};
Object.assign(newPerson, person);
console.log("newPerson =>", newPerson); // newPerson =>
// { name: '홍길동', age: 30, gender: '남자' }
// 중괄호 추가 후 추가 내용 및 수정 가능
// Object.assign(newPerson, person, age: 20, gender: "여자", name: "홍동길");

// 3-5. 객체 비교

let person3 = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};

let person4 = {
  name: "홍길동",
  age: 30,
  gender: "남자",
};

console.log(person3 === person4); // false
// 크기가 상당히 크다 -> 메모리에 저장 할 때 별도의 공간에 저장

// 3-6. 객체 병합
let person5 = {
  name: "홍길동",
  age: 30,
};

let person6 = {
  gender: "남자",
};

// ... : spread operator
let perfectMan = { ...person5, ...person6 };
console.log(perfectMan); // { name: '홍길동', age: 30, gender: '남자' }
