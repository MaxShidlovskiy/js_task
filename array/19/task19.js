// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры (хотя бы один элемент массива – 0). Необходимо вывести
// сумму всех значений массива до первого 0. Добавить проверки на ввод чисел. 

let n = +prompt(`Введите количество эл-ов`);
let arr = [];

for (let i = 0; i < n; i++) {
    const num = prompt(`введите строку`);
    if (num > 0) {

        arr.push(num);
    }
}
let sum = 0;
let check = arr.some(function (el) {
    if (el === 0) {
        return true;
    } else {
        sum += el;
        return false;
    }
});

console.log(sum);