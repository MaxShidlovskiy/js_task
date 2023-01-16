// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Напишите функцию, которая принимает массив строк и
// находим там наибольшее по длине текстовое значение. Добавить проверки


let n = prompt(`количество элементов массива`);

function doArray(size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        const element = prompt(`enter value`);
        arr.push(element);
    }
    return arr
}

function mainCheck(array) {
    let the_longest = 0;
    console.log(array);
    array.forEach(element => {
        if (element.length > the_longest) {
            the_longest = element.length;
        }
    });
    return the_longest;
}
let arr = doArray(n);
let rez = check(arr);
console.log(rez);