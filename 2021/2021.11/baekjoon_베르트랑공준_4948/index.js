const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input01.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
//마지막 요소 제거
input.pop();

for (let i = 0; i < input.length; i++) {
  let num = +input[i];
  let inputs = num * 2;

  let isPrimeNumber = Array(inputs + 1).fill(true);
  //0, 1은 소수가 될 수 없어서 false로 지정
  isPrimeNumber[0] = isPrimeNumber[1] = false;

  function PrimeNumber() {
    for (let i = 2; i <= Math.ceil(Math.sqrt(inputs)); i++) {
      if (isPrimeNumber[i]) {
        let j = 2;
        while (i * j <= inputs) {
          isPrimeNumber[i * j] = false;
          j++;
        }
      }
    }
    let results = [];

    for (let i = num + 1; i <= inputs; i++) {
      if (isPrimeNumber[i]) {
        results.push(i);
      }
    }
    console.log(results.length);
  }

  PrimeNumber();
}
