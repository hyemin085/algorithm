const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let number = +input;
let originNumber = number;
let primeNumber = 2;
let primes = [];

while(true){
  if(originNumber === 1){
    break;
  }else{
    if(number !== 1){
      if(number % primeNumber === 0){
        primes.push(primeNumber);
        number = number / primeNumber;
      }else{
        primeNumber++;
      }
    }else{
      break;
    }
  }
}
if(primes.length !== 0){
  console.log(primes.join("\n"));
}