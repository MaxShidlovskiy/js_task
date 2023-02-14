// На входе статичный объект и строка str. Написать функцию на поиск в объекте
// значения str. Values

let obj = {
    q: 123,
    id: `3232`,
    man: true,
    age: 23,
    name: `Ivan`,
}
let str = `Ivan`;

function find(o, s) {
    let arr = Object.values(o);
    return arr.includes(s)
}
let x = find(obj, str);
console.log(x);