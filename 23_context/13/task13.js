// Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает количество пар ключ / значение. IIFE

let obj = {
    value_1: 34,
    value_2: `abc`,
    value_3: 53,
    value_4: `dfg`,
}

// function doCount(object) {
//     let count = 0;
//     for (let el in object) {
//         count++
//     }
//     return count;
// }
// let temp = doCount(obj);
// console.log(temp);

let temp = (function (object) {
    let count = 0;
    for (let el in object) {
        count++
    }
    return count;
}(obj))

console.log(temp);