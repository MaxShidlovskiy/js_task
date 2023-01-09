// На входе статичный объект. Необходимо вывести все числовые значения.

const obj = {
    1: 1,
    a: `test`,
    2: 2,
    b: `test`,
    3: 3,
}
for (let key in obj) {
    if (!isNaN(obj[key])) {
        console.log(obj[key]);
    }
}