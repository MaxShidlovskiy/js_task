let a = prompt("Введите число");
if (isNaN(a)) {
    console.log(`error`);
} else {
    a = +a;
    console.log(`${Math.floor(a/100)}`);
}