const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input01.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let result = 1;
for (let i = input; i > 0; i--) {
  result *= i;
}

console.log(result);
