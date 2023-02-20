// По условию задачи даны инпут и кнопка. Напишите функцию, которая
// преобразует любое предложение инпута в предложение VAPORWAVE.
// предложение VAPORWAVE преобразует все буквы в верхний регистр и добавляет
// 2 пробела между каждой буквой (или специальным символом)
// Why isn't my code working? – W H Y I S N ' T M Y C O D E W O R K I N G ?

const btn = document.querySelector(`button`);
const inp = document.querySelector(`input`);
const result = document.querySelector(`.result`);

btn.addEventListener(`click`, function () {
    try {
        if (inp.value.trim() === ``) throw new Error(`Пустая строка`);
        let str = ``;
    } catch (error) {

    }
})