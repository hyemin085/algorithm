// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input01.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let timeHour = input[0].split(" ")[0];
let timeMin = input[0].split(" ")[1];
let cookTime = input[1];

solution(+timeHour, +timeMin, +cookTime);

function solution(Hour, Min, cookTime) {
  Min += cookTime;

  while (Min >= 60) {
    Min -= 60;
    Hour += 1;
  }

  Hour %= 24;
  console.log(Hour, Min);
}
