const fs = require('fs')
const filepath = process.platform ==="linux"? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

input = input.map((item) => +item);

solution(input[0], input[1]);

function solution(a,b){
    console.log(a * Math.floor(b % 10));
    console.log(a * Math.floor((b / 10)% 10));
    console.log(a * Math.floor(b / 100));
    console.log(a * b);
}