// const fs = require('fs')
// const filepath = process.platform ==="linux"? "/dev/stdin" : "./input01.txt";
// let input = fs.readFileSync(filepath).toString().split("\n");

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

let count = Number(input);

for (let i = 1; i <= count; i++) {
  console.log(" ".repeat(count - i) + "*".repeat(i));
}
