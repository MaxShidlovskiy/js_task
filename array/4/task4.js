// Заполнять массив числами бесконечно до тех пор, пока длина массива не будет 
// равна 5. Вывести массив в консоль (цикл for, while)

const arr = [];
// for (let i = 0; arr.length < 5; i++) {
//     const num = prompt(`Введите число`);
//     if (isNaN(num)) {
//         console.error(`Ошибка`);
//     } else {
//         array.push(num);
//     }
// }
// console.log(array);
while (arr.length < 5) {
    const num = prompt(`Введите число`);
    if (isNaN(num)) {
        console.error(`Ошибка`);
    } else {
        arr.push(num);
    }
}
console.log(arr);