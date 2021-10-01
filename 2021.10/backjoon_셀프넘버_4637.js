result();

//번호 하나씩 분리해서 셀프넘버 찾기
function d(num) {
  let sum = 0;
  const strNum = String(num);
  for (let i = 0; i <strNum.length; i++) {
    sum += +strNum[i];
  }
  return num + sum
}

// Array(10001).fill(0)사용해서 배열 다 0으로 만들어 준 후에
//d에 대입해서 셀프넘버가 아닌 숫자에는 다 체크해놓음
function result () {
  const arr = Array(10001).fill(0);
  for (let i = 1; i <= 10000; i++) {
    const answer = d(i);
    if(answer <= 10000) {
      arr[answer]++;
    }
  }
  for(let i =1; i<=10000; i++){
    if(arr[i] ===0){
      console.log(i);
    }
  }
}