// const fs = require('fs')
// const filepath = process.platform ==="linux"? "/dev/stdin" : "./input01.txt";
// let input = fs.readFileSync(filepath).toString().split("\n");
//
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let count = Number(input[0]);

let answer = Number("");
for (let i = 1; i <= count; i++) {
  let num = input[i].split(" ");
  answer = Number(num[0]) + Number(num[1]);

  console.log(`Case #${i}: ${Number(num[0])} + ${Number(num[1])} = ${answer}`);
}
