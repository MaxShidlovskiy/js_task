// На входе динамичный массив чисел. Используя reduce выведите сумму чисел 
// массива
let arr3 = [];
const n3 = +prompt(`введите размер массива`);
for (let i = 0; i < n3; i++) {
    arr3.push(+prompt());
}
let result3 = arr3.reduce((sum, el) => {
    return sum + el;
}, 0);
console.log(result3);
