const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input01.txt";
let input = fs.readFileSync(filepath).toString().split("");

let count = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "A" || input[i] === "B" || input[i] === "C") {
    count += 3;
  } else if (input[i] === "D" || input[i] === "E" || input[i] === "F") {
    count += 4;
  } else if (input[i] === "G" || input[i] === "H" || input[i] === "I") {
    count += 5;
  } else if (input[i] === "J" || input[i] === "K" || input[i] === "L") {
    count += 6;
  } else if (input[i] === "M" || input[i] === "N" || input[i] === "O") {
    count += 7;
  } else if (
    input[i] === "P" ||
    input[i] === "Q" ||
    input[i] === "R" ||
    input[i] === "S"
  ) {
    count += 8;
  } else if (input[i] === "T" || input[i] === "U" || input[i] === "V") {
    count += 9;
  } else if (
    input[i] === "W" ||
    input[i] === "X" ||
    input[i] === "Y" ||
    input[i] === "Z"
  ) {
    count += 10;
  }
}
console.log(count);
