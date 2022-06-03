const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input01.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testcase = input.shift();

for (let i = 0; i < testcase; i++) {
  let [x1, y1, r1, x2, y2, r2] = input[i].split(" ").map((el) => +el);

  // 두 꼭지점과의 거리를 구함.
  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  if (distance === 0) {
    if (r1 === r2) {
      console.log(-1);
    } else {
      console.log(0);
    }
  } else {
    if (distance === r1 + r2 || distance === Math.abs(r1 - r2)) {
      console.log(1);
    } else if (distance > r1 + r2 || distance < Math.abs(r1 - r2)) {
      console.log(0);
    } else {
      console.log(2);
    }
  }
}
