// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимосоздать новый массив, где каждый элемент
// возведен в квадрат. map

let n = +prompt(`Введите количество эл-ов`);
let arr = [];

for (let i = 0; i < n; i++) {
    const num = prompt(`введите строку`);
    if (num > 0) {

        arr.push(num);
    }
}
const result = arr.map(function (el) {
    return el ** 2
});

console.log(result)