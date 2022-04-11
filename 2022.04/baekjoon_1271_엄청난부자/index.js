const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map((num) => +num);

const numbers =
  input.map((num) => num * num).reduce((num, mov) => num + mov, 0) % 10;

console.log(numbers);
