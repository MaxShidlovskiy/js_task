// На входе объект и число n, символизирующее количество пар ключ-значение.
// Ключи - автоинкремент (генерируется автоматически от 1 до n). Значение каждого
// ключа – рандомное число от 1 до 100. Вывести каждое значение объекта с
// помощью values

const n = 15;

function doObject(n_) {
    const obj = {};
    for (let i = 0; i < n_; i++) {
        obj[i] = Math.floor(Math.random() * 100);
    }
    return obj
}

function doValues(obj_) {
    let value = Object.values(obj_);
    const arr = [];
    for (let i = 0; i < value.length; i++) {
        arr.push(value[i])
    }
    return arr;
}

let object = doObject(n);
let resVal = doValues(object);
console.log(resVal);