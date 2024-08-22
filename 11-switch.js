// 1-4. switch
// 변수의 값에 따라, 여러 개의 경우(case)중 하나를 선택
// default : 모든 case중 그 어느것도 아니다

const flower = "magnolia";

switch (flower) {
  case "marigold":
    console.log("marigold");
    break;

  case "myosotis":
    console.log("myosotis");
    break;

  case "magnolia":
    console.log("magnolia");
    break;

  default:
    console.log("404error");
    break;
}

// * 출력 밑에 break문을 꼭 사용
