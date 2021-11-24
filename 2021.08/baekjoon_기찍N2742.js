const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const count = Number(input)
let answer = '';

for (let i = count;  i >= 1; i--) {
    answer = answer + (i + "\n");
}
console.log(answer)

