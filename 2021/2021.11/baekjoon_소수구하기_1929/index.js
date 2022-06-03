const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input01.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let M = +input[0];
let N = +input[1];

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

let num = [];
for (let i = M; i <= N; i++) {
  num.push(i);
}

num.map((x) => {
  if (isPrime(x)) {
    console.log(x);
  }
});
