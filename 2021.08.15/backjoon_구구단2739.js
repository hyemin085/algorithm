const fs = require('fs')
const filepath = process.platform === "linux"? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

input = input[0]
input = input.split(" ").map((item) => +item);

solution(input[0]);

function solution(a) {
    for (let i = 1; i < 10; i++) {
        console.log(`${a} * ${i} = ${a * i}`);
    }
}