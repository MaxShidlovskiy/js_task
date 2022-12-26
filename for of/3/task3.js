// Дан массив с элементами [2, 3, 4, 5]. С помощью 3 циклов найдите произведение 
// элементов этого массива
let arr = [2, 3, 4, 5];
let sum = 1;
// for (let i = 0; i < arr.length; i++) {
//     sum *= arr[i];
// }
// console.log(sum);

let j = 0;
do {
    sum*=arr[j];
    j++;
} while (j < arr.length)
console.log(sum);