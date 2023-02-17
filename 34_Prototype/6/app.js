// На входе объект. Ключи и значения - автоинкремент (генерируется автоматически
// от 1 до n). Необходимо отобразить на экране объект (помните, что окно браузера
// не воспринимает объекты как тип данных JavaScript. Для отображения неоходимо
// преобразовать строку в ...)

const n = Math.round(Math.random() * 10);

function fillObj(n_) {
    const obj = {};
    for (let i = 0; i < n_; i++) {
        obj[i] = i;
    }
    return obj
}

function addToHtml(obj_){
const result =document.querySelector(`.result`);
result.innerHTML = obj_;
}
let object = fillObj(n)
addToHtml(object)