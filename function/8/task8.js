// На вход число. Необходимо вывести все числа от 1 до введенного числа. Добавить
// проверку вводимого значения, если это текст –> сообщение об ошибке
let str = 123;

if (isNaN(str)) {
    console.log(`error`);
} else {
    for (let i = 0; i < str; i++) {
        console.log(i);
    }
}