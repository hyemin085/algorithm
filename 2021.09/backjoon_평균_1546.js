const fs = require('fs')
const filepath = process.platform ==="linux"? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

const number = input[0];
const score = input[1].split(" ");

const max = Math.max(...score);
let sum = 0;

for (let i = 0; i < number; i++) {
  sum += score[i] / max * 100;
}

console.log(sum / number);




