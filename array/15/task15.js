// Пользователь вводит 6 значений и распределяет их поровну между 2 массивами. 
// Cоздать новый массив, добавить туда значения всех массивов. Spread, rest
let num = 6;
let arr1 = [];
let arr2 = [];
for (let i = 0; i < num; i++) {
    if (i < 3) {
        arr1.push(prompt(`введите эл.`))
    } else {
        arr2.push(prompt(`введите эл.`))
    }
}
let arr3 = [...arr1, ...arr2];
console.log(arr3);