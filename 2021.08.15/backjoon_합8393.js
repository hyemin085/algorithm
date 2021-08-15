const fs = require('fs')
const filepath = process.platform === "linux"? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

input = input[0]
input = input.split(" ").map((item) => +item);

solution(input[0]);

function solution(n) {
    let sum = 0;
    for (let i = n; i >= 1; i--) {
        sum += i;
    }
console.log(sum)
}
