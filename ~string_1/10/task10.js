// Пользователь вводит одно число. Необходимо вывести обратное ему (число
//     является обратным при 1/x). Если при этом введённое с клавиатуры число – ноль,
//     то вывести «Обратного числа не существует». Добавить проверку на ввод только
//     чисел
    
const value = prompt("введите число");

if (isNaN(value)) {
    console.log(`error`);
} else if (Number(value) === 0) {
    console.log(`the reverse number does not`);
} else {
    console.log(`Reverse number:${1/value}`);
}