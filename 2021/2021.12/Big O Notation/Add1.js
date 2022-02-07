function addUpTo(n) {

  let total = 0;
  for (let i = 1; i <= n; i++) {
    total +=1;
  }

  console.log(total);
  return total;
}
const a = addUpTo(3);






//
// let t1 = performance.now();
// addUpTo(100000);
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

// function addUpto(n) {
//   return n * (n + 1) / 2;
// }
//
// console.log(addUpto(6));