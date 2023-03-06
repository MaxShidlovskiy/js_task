// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое

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