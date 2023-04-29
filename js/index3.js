const numbers = [];
let numberSum = 0;
for (let i = 1; i <= 7; i += 1) {
  const arr = Number(Math.round(Math.random() * (200 - 1) + 1));
  numbers.push(arr);
  numberSum += arr;
}
console.log(numberSum);