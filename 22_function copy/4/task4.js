// На входе массив. Необходимо создать функцию проверки на то что в массиве 
// только числа. Функция возвращает true, если в массиве только числа и false в 
// противном случае

const arr = [1, `fdf`, 2, `rwerwe`, 3, 4, 5, 6, 7, 8, 9, 10];

const find = (numbers) => {
    const result = numbers.filter(elem => !isNaN(elem));
    return result;
}

console.log(find(arr))