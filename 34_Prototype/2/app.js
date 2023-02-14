// По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив строк. Необходимо вывести: полный
// массив из всех элементов, а также массив из уникальных значений

const input = document.querySelector(`input`);
const array = document.querySelector(`.array`);
const unique = document.querySelector(`.unique`);
const button = document.querySelector(`button`);
let arr = [];

button.addEventListener(`click`, function () {
    try {
        if (input.value == "") {
            throw new Error(`empty value`);
        }
        arr.push(input.value);
        array.innerHTML = arr;

        const uniqueArr = [];
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if (!uniqueArr.includes(element)) {
                uniqueArr.push(element);
            }

        }
        unique.innerHTML = uniqueArr;
        input.value = ``;
    } catch (error) {
        alert(error.message);
    }
});