const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

const numbers = input.map((idx) => +idx);

console.log(numbers.sort()[1]);
