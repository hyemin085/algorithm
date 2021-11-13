const fs = require('fs')
const filepath = process.platform === "linux"? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

let num = String(input[0] * input[1] * input[2]);

for (let i = 0; i <=9; i++) {
  console.log(typeof(i))
  let count = 0;
  for(let j = 0; j <num.length; j++) {
    if(Number(num[j]) === i ){
      count++;
    }
  }
  console.log(count);
}