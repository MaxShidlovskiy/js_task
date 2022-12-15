// Пользователь вводит четырехзначное число. Напишите скрипт, который будет
// выявлять является ли каждое составляющее числа четным либо нечетным.
// Добавить проверку на ввод только чисел
// 1234 -> 1 – неч 2 – чет 3 – неч 4 - чет
let a = prompt("Введите число");

if (isNaN(a)) {
    console.log(`error`);
} else {
    switch (a[]) {
        case a[1]:
            console.log(` Понедельник`)
            break;
        case a[2]:
            console.log(` Вторник`)
            break;
        case a[3]:
            console.log(` Среда`)
            break;
        case a[4]:
            console.log(` Четверг`)
            break;

        default:
            break;
    }
}