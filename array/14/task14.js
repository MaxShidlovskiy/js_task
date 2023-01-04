// На входе n – количество элементов массива. Далее производится заполнение 
// массива с клавиатуры. Необходимо создать новый массив из элементов, каждое 
// значение которого имеет вид #name
// [“hschool”, “company”] -> [“#hschool”, “#company”]

let n = +prompt(`Введите количество эл-ов`);
let arr1 = [];
// let arr2 = [];

for (let i = 0; i < n; i++) {
    const num = prompt(`введите строку`);
    arr1.push(num);
}
// arr1.forEach(function (el) {
//     arr2.push(`#` + el);
// })
// console.log(arr2);
let m = arr.map(function (elem) {
    return `#` + elem;
})
console.log(m);