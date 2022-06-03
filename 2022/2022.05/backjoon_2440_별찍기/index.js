let input = 5;
let star = '';

for (let i = input; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    star += '*';
  }
  star += '\n';
}
console.log(star);
