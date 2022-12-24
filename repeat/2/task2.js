// Дан статичный массив элементов. С помощью цикла for найдите произведение
// всех элементов массива

const arr = [1, 2, 3, 4];
let num = 1;
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) num *= arr[i];
    else sum += arr[i];
}
console.log(num);
console.log(sum);