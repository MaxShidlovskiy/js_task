const num = +(prompt('Введите трехзначное число'));
const numX = Math.floor(num / 100);
const numY = Math.floor((num % 100) / 10);
const numZ = (num % 10);
console.log("Сумма цифр =", numX + numY + numZ);
console.log("Произведение цифр =", numX * numY * numZ);