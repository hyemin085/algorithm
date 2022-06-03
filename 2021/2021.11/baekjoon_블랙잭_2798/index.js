const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input01.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const first = input[0].split(" ");
const second = input[1].split(" ").map((el) => parseInt(el));

const N = parseInt(first[0]);
const M = parseInt(first[1]);

let max = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
      if (i == j || i == k || j == k) {
        continue;
      }

      const sum = second[i] + second[j] + second[k];
      if (sum > max && sum <= M) {
        max = sum;
      }

      if (max == M) {
        break;
      }
    }
  }
}

console.log(max);
