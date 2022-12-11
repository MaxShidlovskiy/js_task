const num1 = +prompt("число собачих лет");
if (num1 <= 2) {
    console.log(num1 * 10.5);
} else {
    console.log(2 * 10.5 + (num1 - 2) * 4);
}