const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input01.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

const num = Number(input[0]);
const num2 = input[1].split("");
let sum = 0;

for (let i = 0; i < num; i++) {
  sum += Number(num2[i]);
}

console.log(sum);
