// Создайте переменную grade и присвойте ей значение от 1 до 5. Используя 
// оператор switch, выведите в консоль описание оценки (например, "Отлично", 
// "Хорошо" и т.д.) в зависимости от значения переменной grade.
let grade = 3;
switch (grade) {
    case 1:
        console.log(`очень плохо`);
        break;
    case 2:
        console.log(`плохо`);
        break;
    case 3:
        console.log(`норм`);
        break;
    case 4:
        console.log(`хорошо`);
        break;
    case 5:
        console.log(`очень хорошо`);
        break;
    default:
        console.log(`неверный ввод`);
        break;
}
