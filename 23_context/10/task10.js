// Напишите функцию, которая принимает два параметра: строку и букву. Функция
// должна подсчитывать количество вхождений указанной буквы в строке. Добавить
// проверки

let obj = {
    name: `dgvxfgd`,
    age: ``,
    birthday: ``,
}

for (let key in obj) {
    const data = prompt(`enter value`).trim();
    if (data.length > 0) {
        obj[key] = data;
    }
}
console.log(obj);