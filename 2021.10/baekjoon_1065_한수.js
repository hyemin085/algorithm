const fs = require('fs')
const filepath = process.platform === "linux"? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

solution(+input[0]);

function f(num) {
  const strNum = String(num)
  if(strNum.length <= 2) {
    return true;
  }
  const diff = strNum[1] - +strNum[0];
  const beforeNum = +strNum[1];
  for(let i = 2; i<strNum.length; i++){
    if(strNum[i] - beforeNum !== diff) {
      return false;
    }
  }
  return true;
}

function solution(N) {
  let cnt = 0;
  for(let i=1; i<=N; i++){
    if(f(i)){
      cnt++;
    }
  }
  console.log(cnt);
}
