// Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. Проверьте есть ли в массиве элемент 
// со значением, равным 4. Посчитать количество повторений числа 4 в массиве
let arr17 = [1, 2, 5, 9, 4, 13, 4, 10];
let result17 = arr17.reduce((sum, el) => {
    if (el == 4) {
        return sum + 1;
    }
    else {
        return sum + 0;
    }
}, 0);
console.log(result17);
