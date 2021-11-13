const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = Number(input.shift());
const number = input[0].split(" ");


const isPrime = (x) => {
  if(x < 2) {
    return false;
  }

  for (let i = 2; i * i <= x; i++) {
    if(x % i ===0)  {
      return false;
    }
  }
  return true;
};
let count = 0;
number.map((x) => {
  if (isPrime(x)) {
    count++;
  }
});

console.log(count);