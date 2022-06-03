const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input01.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((n) => +n);

const x = input[0];
const y = input[1];
const w = input[2];
const h = input[3];
const result = [x, y, w - x, h - y];

//Math.min.apply 배열 내의 최소값 찾기
console.log(Math.min.apply(null, result));
