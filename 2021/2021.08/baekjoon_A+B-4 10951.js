const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input01.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let i = 0;

while (i < input.length - 1) {
  let nums = input[i].split(" ").map((a) => Number(a));

  a = nums[0];
  b = nums[1];

  console.log(a + b);
  i++;
}
