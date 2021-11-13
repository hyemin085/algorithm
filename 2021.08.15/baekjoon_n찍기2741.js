const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const count = Number(input)
let answer = '';

    for (let i = 1;  count >= i; i++) {
        answer = answer + (i + "\n");
    }
console.log(answer)
