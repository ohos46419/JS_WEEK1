// while문
// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
//  메인로직
//  증감
// }

// while문을 활용해서, 3초과 100 미만의 숫자 중 5의 배수인 것만 출력하는 예
// let i = 3;

// while (i < 100) {
//   if (i % 5 === 0 && i >= 5) {
//     console.log(i + "는 5의 배수");
//   }
//   i++;
// 증감식을 적어주지 않으면 무한으로 반복된다
//}

// do ~ while문

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// break문

// for문 0~10까지 하나씩 늘어나서 console.log찍기
// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//  break; break문을 만나면 for문을 멈춤
//   }
//   console.log(i); // 0 ~ 4
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     continue; // continue문을 만나면 그 다음 i 순서로 넘어간다
//   }
//   console.log(i); // 0~4 [5]제외 6~9
// }
