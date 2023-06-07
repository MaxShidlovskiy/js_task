// На входе динамичный массив чисел. Используя reduce выведите сумму чисел 
// массива

let arr3: number[] = [];

const n3: number = +prompt(`введите размер массива`);

for (let i: number = 0; i < n3; i++) {
    arr3.push(+prompt());
}

let result3: number = arr3.reduce((sum: number, el: number) => {
    return sum + el;
}, 0)

console.log(result3);
