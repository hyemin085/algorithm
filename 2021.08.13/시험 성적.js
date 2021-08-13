const fs = require('fs')
const filepath = process.platform ==="linux"? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

input = input[0];
input = input.split(" ").map((item) => +item);

solution(input[0]);

function solution(a){
    if (a>=90) {
        console.log("A")
    }
    else if (a>=80) {
        console.log("B")
    }
    else if (a>=70) {
        console.log("C")
    }
    else if (a>=60){
        console.log("D")
    }
    else {
        console.log("F")
    }
}