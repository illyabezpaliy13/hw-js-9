const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0;
for (let i = 0; i < numbers.length; i += 2) {
    console.log(`Парні числа = ${i}`)
    sum += sum[i];
}
console.log(sum[i])