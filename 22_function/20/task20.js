// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Оставьте в нем только положительные числа. Filtrr

let n = +prompt(`Введите количество эл-ов`);
let arr = [];

for (let i = 0; i < n; i++) {
    const num = prompt(`введите строку`);
    if (num > 0) {

        arr.push(num);
    }
}
let result = arr.filter(function (el) {
    if (el >= 0) {
        return true;
    } else {
        return false;
    }
})

console.log(result);