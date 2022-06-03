const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input01.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
// const fs = require('fs');
//
// const input = fs.readFileSync("/dev/stdin").toString().trim();

const word = input[0];

const alpa = function (words) {
  words.toLowerCase() === "n"
    ? console.log("Naver D2")
    : console.log("Naver Whale");
};

alpa(word);
