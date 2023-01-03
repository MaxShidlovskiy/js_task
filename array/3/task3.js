// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо вывести значения массива без дублирования.
// Если длина массива равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод
// только чисел после каждого введенного элемента.
// 1, 1, 3, 4, 4, 4, 2, 5 -> 1, 2, 3, 4, 5

let value = prompt('введите длину массива');
const arr = [];
let res = [];

for (let i = 0; i < a; i++) {
    let temp = prompt('Введите элемент');
    arr.push();
}

for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
        res.push(arr[i]);
    }
}
if (res.length === 0) {
    console.log('empty');
} else {
    console.log(res);
}



// arr.forEach(function (elem) {
//     if (!resizeBy.includes(elem)) {
//         res.push(elem);
//     }

// });
// if (res.lenght === 0) {
//     console.log('empty');
// } else {
//     console.log(res);
// }


res = arr.filter(function (elem) {
    if (!res.includes(elem)) {
        res.push(elem);
        return true;
    }
})

if (res.lenght === 0) {
    console.log('empty');
} else {
    console.log(res);
}