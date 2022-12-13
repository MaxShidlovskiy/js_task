let n = +prompt("Введите число");

if (isNaN(n)) {
    console.log(`Ошибка ввода`);
} else {
    n = +n;
    let a = Math.sqrt(n);

    console.log(Number.isInteger ? a : Math.floor(a));
}