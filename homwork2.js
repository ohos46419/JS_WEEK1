function solution(absolutes, signs) {
  // 1. return해야 하는 answer 생성

  var answer = 0;

  // 2. 두 배열을 비교해 가면서 값을 더하거나 빼줄 것
  // 2-1. 두 배열은  크기가 같음
  for (var i = 0; i < absolutes.length; i++) {
    //부호(+, -)에 따른 처리
    if (signs[i] === true) {
      // 값이 true인 경우(양수)
      answer = answer + absolutes[i];
    } else if (signs[i] === false) {
      // 값이 false인 경우(음수)
      answer = answer - absolutes[i];
    }
  }

  // 3. 출력
  return answer;
}

var absolutes = [1, 2, 3];
var signs = [false, false, true];

console.log(solution(absolutes, signs));
// [1,2,3]	[false,false,true]

// 1. 현재 디렉토리 기준으로 로컬 git 저장소 생성 : git init
// 2. git 원격 저장소에 연결 : git remote add origin <저장소 주소>
// 3. 기본 브랜치를 main으로 변경 : git branch -M main
// 4. 변경사항을 스테이징(작업 파일을 포장한다 개념!) : git add .
// 5. 스테이징 된 파일을 커밋(포장된 것에 이름을 붙인다!) : git commit -m "붙이고싶은 이름!"
// 6. 깃허브 원격 저장소에 올리기(깃허브 사이트에 올라가는 것) : git push -u origin main
