const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = +fs.readFileSync(filePath).toString().trim().split("\n");

let num = +input;
let result = "";

function star(i, j){
  if(i % 3 === 1 && j % 3 === 1){
    result += " ";
  }else {
    if(Math.floor(i / 3) === 0 && Math.floor(j / 3) === 0) {
      result += "*";
    }else {
      star(Math.floor(i/3), Math.floor(j/3));
    }
  }
}

for(let i = 0; i < num; i++) {
  for(let j = 0; j < num; j++) {
    star(i, j);
  }
  if(i !== num -1){
    result += "\n";
  }
}
console.log(result);