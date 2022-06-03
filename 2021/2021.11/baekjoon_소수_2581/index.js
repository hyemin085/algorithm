const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input01.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const M = Number(input[0]);
const N = Number(input[1]);

const rangeNum = [];

for (let i = M; i <= N; i++) {
  rangeNum.push(i);
}

const isPrime = (x) => {
  if (x < 2) {
    return false;
  }
  for (let i = 2; i * i <= x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};

let total = 0;
let min = [];
rangeNum.map((x) => {
  if (isPrime(x)) {
    min.push(x);
    total += x;
  }
});

if (min[0] > 0 || total > 0) {
  console.log(total);
  console.log(min[0]);
} else {
  console.log(-1);
}
