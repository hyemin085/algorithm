
const filepath = process.platform === "linux"? "/dev/stdin" : "./input.txt";
let input = Number(require('fs').readFileSync(filepath).toString());

// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = input;
let sum;
let count = 0;

while (true) {
    count++;

    sum = Math.floor(num / 10) + num % 10;
    num = (num % 10) *10 + sum % 10;

    if (input === num) {
        break;
    }
}
console.log(count)