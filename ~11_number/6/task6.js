// Вы вводите 2 числа a и b. Вам необходимо решить пример (2(а-b)-4(b-a))/2
const num1 = +prompt("Введите первое число");
const num2 = +prompt("Введите второе число");

const sum = (2 * (num1 - num2) - 4 * (num1 - num2)) / 2;

console.log(sum);