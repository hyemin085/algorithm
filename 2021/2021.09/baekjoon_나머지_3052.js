const fs = require("fs");

// const filepath = process.platform === "linux" ? "/dev/stdin" : "./input01.txt";
// let input = fs.readFileSync(filepath).toString().split("\n").map(val=>+val);

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let Array = input.map((input) => input % 42);
let set = new Set(Array);
const Arr = [...set];

console.log(Arr.length);
