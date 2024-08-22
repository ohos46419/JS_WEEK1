// 조건문의 중첩
let age = 16;
let gender = "여성";

// * 미성년자 구분문제

// * 처음 기본 뼈대를 만들고
// if(){

// } else {

// }

// * 조건식, 리턴값 기입
// if(age >= 19) {
//   console.log("성인입니다")

// } else {
//   console.log("미성년입니다")
// }

// * if문의 중첩
if (age >= 19) {
  console.log("성인입니다");
  if (gender === "남성") {
    console.log("성인 남성입니다");
  } else {
    console.log("성인 여성입니다");
  }
} else {
  if (gender === "남성") {
    console.log("미성년 남성입니다");
  } else {
    console.log("미성년 여성입니다");
  }
  console.log("미성년입니다");
}

// => 조건들을 중첩하여 다양한 결과를 낼 수 있지만 코드의 가독성이 매우 좋지 않음
