// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Напишите функцию, которая принимает массив строк и
// находим там наибольшее по длине текстовое значение. Добавить проверки

const l = prompt(`rare`);

function doArray(size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        const element = prompt(`enter value`);
        arr.push(element);
    }
    return arr
}

function check(array) {
    let the_longest = 0;
    array.forEach(element => {
        if (element.length > the_longest) {
            the_longest = element.length;
        }
    });
    return the_longest;
}
let arr = doArray(l);
let rez = check(arr);
console.log(rez);