const numbers = [ -112, 2, 3, 4, 5, 6, 7, 8, 9, -10];
let maxNumber = 0;
for (let number of numbers) {
    if ( number > maxNumber) {
        maxNumber = number;
    } else {
        continue;
    }
}
console.log(maxNumber);