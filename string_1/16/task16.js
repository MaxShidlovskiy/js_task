const x = +prompt("введите первое число");
const y = +prompt("введите второе число");
if (x % y === 0) {
    console.log('Делится', x % y);
} else {
    console.log('Делится с остатком', x % y);
}