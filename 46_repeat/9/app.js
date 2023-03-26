// Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку
// необходимо получить значение из инпута. Проверить, что это число > 0, а также,
// добавить проверку на ввод только чисел. Если проверка true, то вывести в div
// удвоенное значение инпута

const inp = document.querySelector(`input`);
const btn = document.querySelector(`button`);
const result = document.querySelector(`div`)

btn.addEventListener(`click`, function () {
  try {
    if (inp.value <= 0) throw new Error(`число меньше нуля`);
    if (isNaN(inp.value)) throw new Error(`это не число`);
    result.innerHTML = inp.value * 2;
  } catch (error) {
    alert(error.message)
  }
})