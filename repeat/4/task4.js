// Дан статичный массив с элементами и число вводимое с клавиатуры. С помощью
// цикла for и оператора if проверьте есть ли в массиве введенное число. Если есть,
// то остановите выполнение цикла. Если нет, то найдите среднее арифметическое
// всех чисел

const arr = [1, 2, 3]
const value = prompt();
for (let i = 0; i < arr.length; i++) {
    if (+value === arr[i]) {
        console.log(true);
        break
    }
}