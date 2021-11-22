const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = +fs.readFileSync(filePath).toString().trim().split("\n");



let answer = "";

const star = (i, j, num) => {
  if (i % 3 === 1 && j % 3 === 1) {
    answer += " ";
  } else {
    if (num === 1) {
      answer += "*";
    } else {
      star(Math.floor(i / 3), Math.floor(j / 3), Math.floor(num / 3));

    }
  }
};

for (let i = 0; i < input; i++) {
  for (let j = 0; j < input; j++) {
    star(i, j, input);
  }
  answer += "\n";
}
console.log(answer);