const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

let value = '*'.repeat(Number(input)).split('');
console.log(value.join(''));
for (let i = 0; i < Number(input) - 1; i++) {
  value[i] = ' ';
  console.log(value.join(''));
}