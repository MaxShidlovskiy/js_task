// На входе статичный объект. Необходимо посчитать количество пар (ключ: 
//     значение) где значение число и вывести количество 

let obj = {
    1: `one`,
    2: 100,
    3: null,
    4: 23,
    5: 17,
}
let count = 0;
for (let key in obj) {
    if (!isNaN(obj[key]) && typeof obj[key] === `number`) {

        count += 1;
    }
}
console.log(count);