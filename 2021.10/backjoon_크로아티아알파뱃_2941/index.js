const fs = require('fs')
const filepath = process.platform === "linux"? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

let str = String(input[0].split("")).toLowerCase();
const result = new Array(26).fill(0);

for (let i=0; i<=str.length; i++){
  result[str.charCodeAt(i)-97] ++;
}

const max = Math.max(...result);
const index = result.indexOf(max);

let same = false;

for (let j = 0; j < 26; j++) {
  if (result[j] === max && index != j) {
    same = true;
    break;
  }
}

console.log(same ? "?" : String.fromCharCode(index + 65));