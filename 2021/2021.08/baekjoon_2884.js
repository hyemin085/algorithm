const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input01.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

input = input[0];
input = input.split(" ").map((item) => +item);

solution(input[0], input[1]);

function solution(h, m) {
  if (m - 45 < 0) {
    h -= 1;
    m = m - 45 + 60;

    if (h < 0) {
      h += 24;
    }
  } else {
    m -= 45;
  }
  console.log(h, m);
}
