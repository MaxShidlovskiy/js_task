// На входе n – количество элементов массива. Далее производится заполнение массива arr
//  с клавиатуры. Также в памяти есть статичная переменная со значением javascript. 
//  Необходимо создать новый массив из отфильтрованных значений, где строка массива 
//  arr включают значение переменной javascript. 


let n = prompt(`Введите количество эл-ов`);
const value = `javascript`
let arr1 = [];
// let arr2 = [];
for (let i = 0; i < n; i++) {
    const num = prompt(`введите строку`);
    arr1.push(num);
}
// arr1.forEach(function (elem) {
//     if (elem.includes(value)) {
//         arr2.push(elem)
//     }

// })
let result = arr1.filter(function (elem) {
    if (elem.includes(value)) {
        return true;
    } else {
        return false
    }
})

console.log(result);
// console.log(arr2);