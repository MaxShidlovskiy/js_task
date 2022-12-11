//1234 
const num = +(prompt('Введите трехзначное число'));
const numX = Math.floor(num / 1000);
const numY = Math.floor((num % 1000) / 100);
const numA = Math.floor((num % 100) / 10);
const numZ = (num % 10);

console.log("Цифра в позиции тысяч равна", numX);
console.log("Цифра в позиции тысяч равна", numY);
console.log("Цифра в позиции тысяч равна", numA);
console.log("Цифра в позиции тысяч равна", numZ);