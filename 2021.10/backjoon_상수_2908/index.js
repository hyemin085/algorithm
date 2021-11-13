const fs = require('fs')
const filepath = process.platform === "linux"? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");


let num = input[0].split(" ");
const num1 = reverseNum(num[0]);
const num2 = reverseNum(num[1]);


function reverseNum(abc) {
  let result = '';
  for(let i = abc.length - 1; i >= 0; i--) {
    result = result + abc[i];
    console.log(result)

  }
  return result;
};

if (num1 > num2){
  console.log(num1)
}else{
  console.log(num2)
}