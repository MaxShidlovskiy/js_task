// Найти максимальное число динамичного массива. filter

let n = +prompt(`Введите количество эл-ов`);
let arr = [];

for (let i = 0; i < n; i++) {
    const num = prompt(`введите строку`);
    if (num > 0) {

        arr.push(num);
    }
}
let maxValue = arr[0];
arr.forEach(function (elem) {
    if (elem > maxValue) {
        maxValue = elem;
    }
})

console.log(maxValue);