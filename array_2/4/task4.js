// Палиндром. Сравнить с развернутой строкой не используя reverse. For

let value = prompt(`Введите строку`);
let temp = '';
for (let i = value.length - 1; i >= 0; i--) {
    temp += value[i];
}
if (temp == value) {
    console.log(`Паллидром`);
} else {
    console.log(`не палидром`);
}

switch (temp) {
    case value:
        console.log(`Паллидром`);
        break;

    default:
        console.log(`Не паллидром`);
        break;
}