// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только строки. Вторая для получения суммы всех строчных элементов массива.
// Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую конкатенацию всех строчных элементов массива
const arr = ['qwe', 'asd', 'zxc'];

const find = (str) => {
    const result = str.filter(elem => isNaN(elem));

    if (result.length > 0) {
        return false
    } else {
        return true;
    }
}
console.log(result);