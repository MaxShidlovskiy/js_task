// На входе n – количество элементов массива. Далее производится заполнение 
// массива с клавиатуры. Выведите произведение всех элементов массива. 
// Проверки на ввод только чисел. Использовать forEach, reduce

const n = +prompt(`кол-во эл-ов`);
let arr = [];
for (let i = 0; i < n; i++) {
    let temp = prompt(`введите элемент массива`);
    arr.push(temp);
}
// let a = 1;
// arr.forEach(function (el) {
//     if (!isNaN(el)) {
//         a *= el;
//     } else {
//         console.log(`не число`);
//     }

// });
// console.log(a)

let reduce = arr.reduce(function (acc, elem) {
    if (!isNaN(elem)) {
        return acc * elem
    } else {
        return acc * 1;
    }

}, 1);
console.log(reduce);