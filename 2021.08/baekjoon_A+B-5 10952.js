const fs = require('fs')
const filepath = process.platform === "linux"? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let inputs = [];
let isNotZero = true;
let i = 0;
let result = "";

while(isNotZero){
    inputs.push(input[i].split(' '));
    let sum = Number(inputs[i][0]) + Number(inputs[i][1]);
    if(i !==0){ㄴ
        result += '\n';
    }
    if(sum ===0) {
        isNotZero =false;
    } else {
        result += sum.toString();
        i++;
    }
}

console.log(result);