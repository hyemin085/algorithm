const fs = require('fs')
const filepath = process.platform === "linux"? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

const n = input.shift()
const totalArray = input.map(total => total.split(' ').map(num => +num));

const rank =[];

for (let i = 0; i < n; i++) {


  let count = 0;
  for (let j = 0; j < n; j++) {
    console.log(totalArray[i], totalArray[j])
    if (i !== j) {
      if (
        totalArray[i][0] < totalArray[j][0] &&
        totalArray[i][1] < totalArray[j][1]
      ) {
        count++;
      }
    }
  }
  rank.push(count + 1);
}

console.log(rank.join(' '));
