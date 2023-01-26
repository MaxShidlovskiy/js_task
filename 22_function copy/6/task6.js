// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве 
// только числа. Вторая для получения суммы всех элементов массива. Если 
// результат функции проверки – true, то вызывать новую функцию, возвращающую 
// сумму всех элементов массива


const arr = ['fefe', 34343, 'vedved']

const validation = (numbers) => {
    const filtered = numbers.filter(elem => !isNaN(elem));

    if (filtered.length === 0) {
        return true;
    } else return false
}

const doSum = () => {
    const bool = validation()
    if (bool === true) {
        let result = array.reduce(function (sum, elem) {
            return sum + elem;
        }, 0);

        console.log(result);
    } else return 'error. this is number'
}