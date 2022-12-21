// Дан статичный массив элементов. С помощью цикла for найдите произведение
// всех элементов массива
const value = [1, 2, 3, 4];
let sum = 1;
for (let i = 0; i < value.length;i++) {
    sum *= value[i];
}
console.log(sum);