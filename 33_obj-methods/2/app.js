// Написать функцию на подсчет количества пар ключ значение в объекте. Добавить
// проверки 
const obj = {
    id: 1,
    name_: ` srten`,
    date: `month`,
}

function doCount(obj_) {
    const arr = Object.entries(obj_)
    return arr.length
}
let result = doCount(obj)
console.log(result);