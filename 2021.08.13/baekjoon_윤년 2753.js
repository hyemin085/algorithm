const fs = require('fs')
const filepath = process.platform ==="linux"? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

input = input[0];
input = input.split(" ").map((item) => +item);

solution(input[0]);

function solution(a){
    if(a%4 === 0 && a%100 !==0) {
        console.log(1);
    }
    else if(a%400===0){
        console.log(1);
    }
    else{
        console.log(0);
    }
}
