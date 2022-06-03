const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ").map((num) => +num);


let originalNum = Array.from(input);

if(originalNum.join('') === input.sort().join('')){
  console.log("ascending")
}else if(originalNum.join('') === input.sort((a, b)=> b - a).join('')){
  console.log("descending")
}else{
  console.log("mixed")
}