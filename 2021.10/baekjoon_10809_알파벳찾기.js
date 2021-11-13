const input = require("fs").readFileSync("/dev/stdin").toString();
const result = [];

for(let i = 'a'.charCodeAt(0); i<='z'.charCodeAt(0); i++) {
  result.push(input.indexOf(String.fromCharCode(i)));
}
console.log(result.join(" "));