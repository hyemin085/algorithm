const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input01.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

let number = Number(input[0]);
const words = input.slice(1);
let count = number;

for (let i = 0; i < number; i++) {
  let word = words[i];

  for (let j = 0; j < word.length; j++) {
    if (word[j] === word[j + 1]) {
    } else {
      if (word.slice(j + 1).includes(word[j])) {
        count -= 1;
        break;
      }
    }
  }
}

console.log(count);
