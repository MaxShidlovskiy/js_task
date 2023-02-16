// По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив. Необходимо вывести среднее значение
// этого массива

const btn = document.querySelector `.button`;
const input = document.querySelector `.input`;
const avg = document.querySelector `.avg`;
const array = document.querySelector `.array`;
let arr = [];

btn.addEventListener(`click`, function () {
   try {
      if (!input.value) throw new Error(`Input is empty`);
      arr.push(input.value);

      array.innerHTML = arr;
      let sum = arr.reduce((start, elem) => {
         return start + Number(elem);
      }, 0);
      avg.innerHTML = sum / arr.length;
      input.value = ``;
   } catch (error) {
      alert(error.message);
      input.value =``;
   }

});