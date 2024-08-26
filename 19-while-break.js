// * while
let i = 0;

// * while 기본 템플릿

// while (조건) {
// 메인로직
// 증감
// }

while (i < 10) {
  console.log(i); // 0 ~ 9 출력
  i++;
}

// * while문을 활용해서, 3초과 100 미만의 숫자 중 5의 배수인 것만 출력하는 예
let p = 3;

while (p < 100) {
  if (p % 5 === 0 && p >= 5) {
    console.log(p + "는 5의 배수");
  }
  p++;
}

// 증감식을 적어주지 않으면 무한으로 반복된다

// --------------------------------------------------------------

// do ~ while문 : 코드를 먼저 실행 (do) 하고 => 이후 while을 실행

let s = 0;

do {
  console.log(s);
  s++;
} while (s < 10);

// --------------------------------------------------------------

// * break문과 continue문

// * 간단한 for문 템플릿 0 ~ 10출력
for (let i = 0; i < 10; i++) {
  console.log(i); // 0 ~ 9 출력
}

// * if 분기 설정
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i); // 0 ~ 4 출력
}

// * break를 만난 순간 for문을 벗어나고 밖으로 나간다
// 원래는 0 ~ 9 출력이지만 if문과 break 사용으로 5를 만나면 멈추게 되었다

// * continue문

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // continue문을 만나면 그 다음 i 순서로 넘어간다
  }
  console.log(i); // 0~4 [5]제외 6~9
}
