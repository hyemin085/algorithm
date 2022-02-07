const fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift();

const sorted = input.sort((a,b) => a-b);

for(let i = 0; i < N; i++){
  console.log(sorted[i]);
}

