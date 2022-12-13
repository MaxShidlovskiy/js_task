let a = prompt("Введите число");

if (isNaN(a)) {
    console.log(`error`);
} else {
    a = +a;
    let num1 = a % 10;
    let num2 = Math.floor(num1 / 10);
    let num3 = num2 % 10;
    let num4 = Math.floor(num3 / 10);
    let x = num2 + num3 + num4;
    let y = num2 * num3 * num4;
    console.log(`сумма чисел`(x),
        `произведение чисел`(y));
}