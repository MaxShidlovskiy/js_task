// Напишите скрипт, который определяет, какой температуре по шкале Цельсия
// соответствует указанное значение. Используйте формулу:
// C =5/9∙(F-32)

const f = +prompt("Введите градусы по Фарегейту");


console.log(5 / 9 * (f - 32), "Градусов Цельсия");