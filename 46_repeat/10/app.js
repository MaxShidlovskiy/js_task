// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое

const inp = document.querySelector(`input`);
const btn = document.querySelector(`button`);
const result = document.querySelector(`div`);
const arr = [];

btn.addEventListener(`click`, () => {
  try {
    if (!inp.value) throw new Error(`input is empty`);
    arr.push(inp.value);
    result.innerHTML = arr;
    inp.value = ``;
    inp.style = `border: 1px solid black`;
  } catch (error) {
    alert(error.message);
    inp.style = `border: 1px solid red`
  }
})