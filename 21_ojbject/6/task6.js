// На входе статичный объект. Необходимо числовые значения удвоить на выходе.


let obj = {
    1: `one`,
    2: 100,
    3: null,
    4: 23,
    5: 17,
}
const temp = [];
for (let key in obj) {
    if (!isNaN(obj[key]) && typeof obj[key] === `number`) {
        temp.push(obj[key] * 2)
    }
}
console.log(temp);