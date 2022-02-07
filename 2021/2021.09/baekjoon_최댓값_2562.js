const fs = require('fs')
const filepath = process.platform ==="linux"? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

let numbers = input.map(function (cur) {
  return +cur;
});

let max = numbers[0]
let maxIdx = 0;
for (let i = 0; i< 9; i++) {
  if (max <numbers[i]) {
    max = numbers[i];
    maxIdx = i;
  }
}
console.log(max);
console.log(maxIdx+1);
