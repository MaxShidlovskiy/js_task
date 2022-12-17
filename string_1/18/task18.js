// Пользователь вводит строку. Необходимо повторить ее трижды
let value = prompt("Введите строку");

if (isNaN(value)) {
    console.log(value.repeat(3));
} else {
    console.log(`error`);
}    