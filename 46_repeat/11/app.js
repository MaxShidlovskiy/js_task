// Вывести в строчку все вводимые значения через инпут в виде массива, а также
// все удвоенные значения данного массива в div ниже. Добавить проверку, что
// поле не пустое


const inp = document.querySelector(`input`);
const btn = document.querySelector(`button`);
const result = document.querySelector(`.res`)
const dbl = document.querySelector(`.double`)
const arr = [];

btn.addEventListener(`click`, function () {
  try {
    let elem = inp.value;
    if (!elem) throw new Error(`пустое значение`);
    if (isNaN(elem)) throw new Error(`это не число`);

    arr.push(elem);
    result.innerHTML = arr;
    dbl.innerHTML = arr.map(function (el) {
      return el * 2;
    })
  } catch (error) {
    alert(error.message)
  }
})