// Пользователь вводит номер месяц. Необходимо вывести пору года по номеру
// месяца (2 способа)
const m = +prompt(`введите месяц`);
if (m === 12 || m === 1 || m === 2) {
    console.log(`зима`);
} else if (2 < m && m < 6) {
    console.log(`весна`);
} else if (5 < m && m < 9) {
    console.log(`лето`);
} else if (8 < m && m < 12) {
    console.log(`осень`);
} else {
    console.log(`Некорректный ввод`);
}

switch (m) {
    case 12:
    case 1:
    case 2:
        console.log(`зима`);
        break;
    case 3:
    case 4:
    case 5:
        console.log(`весна`);
        break;
    case 6:
    case 7:
    case 8:
        console.log(`лето`);
        break;
    case 9:
    case 10:
    case 11:
        console.log(`осень`);
        break;
    default:
        console.log(`ошибка ввода`);
        break;
}