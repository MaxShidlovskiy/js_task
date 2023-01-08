// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо вывести true, если хотя бы 1 элемент массива –
// число. Some, forEach

const n = prompt('Введите количество эл-тов массива');
let arr = [];

for (let i = 0; i < n; i++) {
    const data = prompt(``)
    arr.push(data)
}
// 1 способ
// const bool = arr.some(function (elem) {
//     if (!isNaN(elem)) {
//         return true
//     }
// })
let bool = false
arr.array.forEach(element => !isNaN(element) ? true : false)

console.log(bool);