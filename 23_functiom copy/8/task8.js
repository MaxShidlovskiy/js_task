// На входе статичный объект. Необходимо посчитать количество пар (ключ: 
//     значение)

let obj = {
    1: `one`,
    2: 100,
    3: null,
    4: 23,
    5: 17,
}
let count = 0;
for (let key in obj) {
    count += 1;
}
console.log(count);