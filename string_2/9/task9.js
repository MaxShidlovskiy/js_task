const m = prompt(`введите месяц`);
if (isNaN(m)) {
    console.log(`error`);
} else {
    switch (m) {
        case '1':
            console.log(`зима`);
            break;
        case '2':
            console.log(`весна`);
            break;
        case '3':
            console.log(`лето`);
            break;
        case '4':
            console.log(`осень`);
            break;
        default:
            console.log(`ошибка ввода`);
            break;
    }
}