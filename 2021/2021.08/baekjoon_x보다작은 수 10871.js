const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input01.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let input1 = [];
input1 = input[0].split(" ");

let count = Number(input1[0]);
let limit = Number(input1[1]);

let n = [];
n = input[1].split(" ");
result = "";
for (let i = 0; i < count; i++) {
  if (Number(n[i]) < limit) {
    result += n[i] + " ";
  }
}
console.log(result);
