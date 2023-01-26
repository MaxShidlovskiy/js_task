// Напишите функцию, которая принимает строку в маленьком регистре и 
// возаращает строку, где каждое слово начинается с большого регистра
// hschool company -> Hschool Company

const arr = prompt(`rare`).split(` `);

const doUpperCase = (a) => {
    let sum = ``;
    for (let i = 0; i < a.length; i++) {
        sum += a[i][0].toUpperCase() + a[i].slice(1) + ` `;
    }
    return sum
}
console.log(doUpperCase(arr));