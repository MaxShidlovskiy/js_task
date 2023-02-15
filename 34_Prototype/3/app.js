// По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив. Необходимо создать объект, где каждый
// ключ – индекс элемента массива, а значение – текущее итерируемое значение
// массива
// [11, 2, 13] – {
// 0: 11,
// 1: 2,
// 2: 13
// }

const inputTag = document.querySelector(`input`);
const arrayTag = document.querySelector(`.array`);
const objectTag = document.querySelector(`.object`);
const buttonTag = document.querySelector(`button`);
const obj = {};
let arr = [];
buttonTag.addEventListener(`click`, function () {
    try {
        if (!inputTag.value) throw new Error(`input is empty`);
        arr.push(inputTag.value);
        arrayTag.innerHTML = arr;
        for (let i = 0; i < arr.length; i++) {
            obj[i] = arr[i];
        }
        objectTag.innerHTML = JSON.stringify(obj);
        inputTag.value = ``;
    } catch (error) {
        alert(error.message);
    }
})