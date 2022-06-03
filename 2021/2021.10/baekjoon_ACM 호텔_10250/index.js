const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input01.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let num = input[0];

let hotel = input.splice(1);

let floor = 0;
let ho = 0;
for (let i = 0; i < num; i++) {
  let [h, w, n] = hotel[i].split(" ");

  if (n % h === 0) {
    floor = h * 100;
    ho = n / h;
  } else {
    floor = (n % h) * 100;
    ho = 1 + n / h;
  }
  console.log(Math.floor(floor + ho));
}
