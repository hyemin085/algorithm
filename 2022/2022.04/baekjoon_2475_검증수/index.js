const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input01.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

const money = BigInt(input.shift());

const People = BigInt(input.shift());

console.log((money / People).toString());
console.log((money % People).toString());
