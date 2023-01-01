// На входе n – количество элементов массива. Далее производится заполнение 
// массива с клавиатуры. Необходимо вывести значения массива без дублирования. 
// Если длина массива равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод 
// только чисел после каждого введенного элемента. 
// 1, 1, 3, 4, 4, 4, 2, 5 -> 1, 2, 3, 4, 5

const value = prompt(`введите длину массива`);
const arr = [];
let rez = [];

for (let i = 0; i < value; i++) {
    let temp = prompt(``);
    if (!isNaN(temp)) {
        arr.push(+temp);
    }
}
// for (let i = 0; i < arr.length; i++) {
//     if (!rez.includes(arr[i])) {
//         rez.push(arr[i]);
//     }
// }
arr.forEach(function (elem) {
            if (!rez.includes(elem) {
                    rez.push(elem)) {
                    return (true)
                })