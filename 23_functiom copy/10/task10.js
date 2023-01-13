// На входе статичный объект, включающий такие ключи как name, age, birthday, 
// значения ключей – пустые строки. Считать данные с клавиатуры и заполнить 
// объект соответствующими данными. Добавить проверки на ввод

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