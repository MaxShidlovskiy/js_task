// Есть значение. Добавить проверку на ввод только чисел. Если число, вывести true,
// в противном случае false (isNaN)

const value = +prompt("Введите число");

if (isNaN(value)) {
    console.log(false);
} else {
    console.log(true)
}