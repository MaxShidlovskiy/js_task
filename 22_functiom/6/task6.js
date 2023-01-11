// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве 
// только числа. Вторая для получения суммы всех элементов массива. Если 
// результат функции проверки – true, то вызывать новую функцию, возвращающую 
// сумму всех элементов массива


const str = prompt(`кол-во элю массива`);
const doArray = (count) => {
    const arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(prompt(`новое число`));

    }
    return arr;
}
const array = doArray(str);
co
const doSum = (numbers) => {
    const filtered = numbers.filter(elem => !isNaN(elem));
    return true;
}

let result = array.reduce(function (sum, elem) {
    return sum + elem;
}, 0);

console.log(result);