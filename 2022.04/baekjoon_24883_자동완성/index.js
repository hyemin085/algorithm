
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const alpa = function (word) {
  if(word.toLowerCase() === 'n'){
    console.log("Naver D2");
  }else console.log("Naver Whale");
}


alpa(input);

