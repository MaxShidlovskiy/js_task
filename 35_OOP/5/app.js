// На входе объект и число n, символизирующее количество пар ключ-значение.
// Ключи и значения - автоинкремент (генерируется автоматически от 1 до n).
// Проверить есть ли ключ 10 в объекте. 


const n = 15;

function doObject(n_) {
    const obj = {};
    for (let i = 0; i < n_; i++) {
        obj[i] = i;
    }
    return obj
}

function doSearch(obj_) {
    let arrKey = Object.keys(obj_);
    return arrKey.includes(`10`);
}


let object = doObject(n);
let search = doSearch(object)
console.log(object);
console.log(search);