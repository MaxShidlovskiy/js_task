// На входе пустой объект. С клавиатуры вводятся 2 числа. Необходимо добавить в 
// объект ключ “avg” со значением среднего арифметического введенных с чисел

let obj = {
    name: ``,
    age: ``,
    birthday: ``,
};

for (let key in obj) {
    const data = prompt(`enter value`).trim();
    if (data.length > 0) {
        obj[key] = data;
    }
}
console.log(obj);