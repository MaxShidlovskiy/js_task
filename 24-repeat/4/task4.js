// Напишите функцию, которая принимает массив чисел и находит минимальное и
// максимальное числа соответственно. Добавить проверки на ввод и если значения
// массива не соответствуют условию задания, вывести сообщение об ошибке. 

const arr = [0, -5, 21, 50, 6, -45];

const validation = (array) => {
    let counter = 0;
    array.forEach((element) => isNaN(element) ? counter++ : null);
    return counter > 0 ? false : true;

};

const doArray = (array) => {
    const result = validation(array);
    if (result === true) {
        let max = array[0];
        let min = array[0];
        array.forEach((element) => {
            element > max ? max = element : null;
            element < min ? min = element : null;
        });
        return `min: ${min} and max: ${max}`;

    } else {
        return false;
    }
};
console.log(doArray(arr));