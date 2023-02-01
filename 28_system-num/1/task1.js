// Реализуйте функцию, которая принимает динамичный массив и находит сумму
// всех положительных чисел. Добавить проверки

let value = prompt(`enter the value `);

function doArr(value_) {
    let arr = [];
    for (let i = 0; i < value_; i++) {
        let item = prompt();
        arr.push(item);
    }
    return arr;
}

function filterArr(arr_) {
    try {
        let sum = 0;
        for (let i = 0; i < arr_.length; i++) {
            if (arr_[i] > 0) sum += +arr_[i];
        }
        return sum;

    } catch (error) {
        return error.message;
    }
}
let array = doArr(value);
let result = filterArr(array);
console.log(result);