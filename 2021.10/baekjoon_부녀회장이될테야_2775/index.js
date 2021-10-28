const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map((n) => Number(n));
const T = input.shift();

for (let i = 0; i < T; i++) {
  const a = input.shift();
  const b = input.shift();
  const apt= [];

  for (let i = 0; i <= a; i++) {
    apt.push([1]);
    for (let j = 1; j < b; j++) {
      if (i === 0) {
        apt[i].push(j + 1);
      } else {
        apt[i].push(apt[i][j - 1] + apt[i - 1][j]);
      }
    }
  }

  const floor = a;
  const room = b - 1;
  console.log(apt[floor][room]);
}