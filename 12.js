// 조건문의 중첩
let age = 15;
let gender = "남성";

// 미성년자 구분
if (age >= 18) {
  if (gender === "여성") {
    console.log("성인 여성입니다");
  } else {
    console.log("성인 남성입니다");
  }
} else {
  if (gender === "여성") {
    console.log("미성년 여성입니다");
  } else {
    console.log("미성년 남성입니다");
  }
}
