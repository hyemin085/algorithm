const fs = require('fs')
const filepath = process.platform === "linux"? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split(" ");

let A = Number(input[0])
let B = Number(input[1])
let C = Number(input[2])

let n = 0;

if(C - B <= 0) {
  n = -1;
}else {
  n = (Math.floor(A/(C-B) ))+1
}

console.log(n)