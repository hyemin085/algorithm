const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input01.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

const n = input[0];
const strNum = Number(n);

console.log(n.charCodeAt(0));
