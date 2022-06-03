const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input01.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let Num = input[0].split(" ");

let A = Number(Num[0]);
let B = Number(Num[1]);
let V = Number(Num[2]);

console.log(Math.ceil((V - B) / (A - B)));
