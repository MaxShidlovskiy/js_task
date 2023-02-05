// Реализуйте функцию, которая принимает любое неотрицательное целое число и 
// возвращает его числа в порядке убывания. По сути, переставьте цифры, чтобы 
// получить максимально возможное число. Добавить проверки
// 42145 –> 54421 
// 145263 –> 654321 
// 123456789 –> 987654321

const num = prompt(`Введите число`);
function doSort(element) {
try {
let arr = element.split(``);
let srt = arr.sort();
return srt.join(``);
} catch (error) {
return error.message;
 }
}
let result = doSqare(a);
console.log(result);