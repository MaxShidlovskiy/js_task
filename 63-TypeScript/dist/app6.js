// Напишите программу, которая проверяет, является ли заданная строка 
// палиндромом.
let str6 = prompt(`Введите слово для проверки`);
if (str6 === str6.split(``).reverse().join(``)) {
    console.log(`это палиндром`);
}
else {
    console.log(`это не палиндром`);
}
(str6 === str6.split(``).reverse().join(``)) ? console.log(`это палиндром`) : console.log(`это не палиндром`);
alert(str6 === str6.split(``).reverse().join(``) ? `это палиндром` : `это не палиндром`);
