// На входе n – количество элементов массива. Далее производится заполнение 
// массива с клавиатуры. Необходимо создать новый массив из отфильтрованных 
// значений, где строка начинается на [a, h]. Проверка на ввод только текстовых 
// значений на заполнение массива. filter
// [“ann”, “school”, “hschool”, “borabora”] -> [“ann”, “hschool”]

let a = prompt(`count of elem`);
let arr = [];

for (let i = 0; i < a; i++) {
    let elem = prompt(`enter the element`);

    if (!isNaN(elem)) {
        arr.push(elem);

    }
}
// let filtrered = arr.filter(function (el) {
//     if (el[0] == `a` || el[0 == `h`]) {
//         return true;
//     }

// })
let filtered = arr.filter(function (el) {
    return el[0] == `a` || el[0 == `h`];
}) 
console.log(filtered);