let value = prompt("Введите строку");

if (isNaN(a)) {
    switch (value) {
        case 1:
            console.log(`${value} -> Понедельник`)
            break;
        case 2:
            console.log(`${value} -> Вторник`)
            break;
        case 3:
            console.log(`${value} -> Среда`)
            break;
        default:
            break;
    }
} else console.log(`error`);