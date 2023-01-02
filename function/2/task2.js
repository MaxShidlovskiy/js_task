// На входе 7 чисел. Все эти значения пользователь вводит с клавиатуры и заполяет
// 5 первыми значениями массив. Далее необходимо создать массив из тех
// значений, которые являются числами и НЕ равны 2 другим введенным. Если
// длина массива равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод
// только чисел после каждого введенного элемента. forEach

const value = 5;
let arr = [];
let res[];
let x = prompt('Enter value');
let y = prompt('Enter value');

for (let i = 0; i < value; i++) {

    arr.push(prompt('Enter value'));
}
arr.forEach(function (elem) {
    if (!isNaN(elem) && elem !== y) {
        res.push(elem);
    }
})

let filtered = arr.filter(function (elem) {
    if (!isNaN(elem) && elem !== x && elem !== y) {
        return true;
    }
})
console.log(res);

if (res.length === 0) {
    console.log('empty');
} else {
    console.log('res');
}