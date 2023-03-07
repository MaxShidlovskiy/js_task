// Отобразить в div массив из 15 рандомных значений от 0 до 100. Необходимо
// распознать по какому из значений контейнера производится событие клика. Если
// клик происходит, то удалить данное значение из массива в div

const inp = document.querySelector(`input`);
const btn = document.querySelector(`button`);
const result = document.querySelector(`div`)
const arr = [];

btn.addEventListener(`click`, function () {
  try {
    if (!inp.value ) throw new Error(``);
    if (isNaN(inp.value)) throw new Error(`это не число`);
    result.innerHTML = inp.value * 2;
  } catch (error) {
    alert(error.message)
  }
})