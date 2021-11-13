//입력받은 숫자 별찍기

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let tree = '';

for(let i = 1; i<=input; i++){
  let star = '';
  for(let j = 1; j<=input-i; j++){
    star +=  ' ';
  }
  for (let k = 1; k<=2*i-1; k++){
    star += '*';
  }
  tree += star + '\n';
}

console.log(tree);