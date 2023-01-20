// Пользователь вводит строку. Необходимо сделать проверку, что это не число и
// вывести длину строки

const value = prompt("введите string");

if (isNaN(value)) {
    console.log(value.length);
} else {
    console.log(`error`);
}