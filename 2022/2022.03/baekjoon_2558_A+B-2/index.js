const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input01.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

console.log(+input[0] + +input[1]);
