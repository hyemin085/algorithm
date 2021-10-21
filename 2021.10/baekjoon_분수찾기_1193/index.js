const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let num = Number(input[0]);
let count = 0;

while (num > 0) {
  count += 1;
  num -= count;
  console.log(count, num)
}

if (count % 2 === 0) {
  console.log(`${count + num}/${1 - num}`);
} else {
  console.log(`${1 - num}/${count + num}`);
}