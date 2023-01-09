// На входе статичный объект. Необходимо вывести все числовые ключи.

const obj = {
    1: `test`,
    a: `test`,
    2: `test`,
    b: `test`,
    3: `test`,
}
for (const key in obj) {
    if (!isNaN(key)) {
        console.log(key);
    }
}