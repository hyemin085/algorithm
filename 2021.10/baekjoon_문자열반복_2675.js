const fs = require('fs')
const filepath = process.platform === "linux"? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");


const num1 = input.shift();

for (let i = 0; i < num1; i++) {
  let answer = '';

  const [num2, str] = input[i].split(" ");
  console.log(str)

  for (let j = 0; j < str.length; j++) {
    answer += str[j].repeat(num2);
  }

  console.log(answer);
}