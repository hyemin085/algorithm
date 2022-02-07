const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let R = +input;

let result = R*R*Math.PI;
let taxi = R*R*2


console.log(result.toFixed(6))
console.log(taxi.toFixed(6))