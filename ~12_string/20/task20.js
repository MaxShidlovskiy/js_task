// Пользователь вводит строку. Применить метод для разбития строки на массив.
// Добавить проверку на ввод только текста 
const value = prompt('Введите первое число');
if (isNaN(value)) {
    console.log(value.split(` `));
} else {
    console.log(`error`);
}