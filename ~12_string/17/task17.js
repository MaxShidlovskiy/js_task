// Пользователь вводит строку. Необходимо сделать проверку, что это не число и
// вывести текущую строку в большом регистре

let a = prompt("Введите число");

if (isNaN(a)) {
    console.log(string.toUpperCase(a));
} else console.log(`error`);

