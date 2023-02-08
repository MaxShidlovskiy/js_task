// Вывести в строчку все вводимые значения через инпут в виде массива. 
// Добавить проверку, что поле не пустое. После каждого клика очищать значение input. 
// Если вводимое значение не проходит валидацию, 
// то на месте массива вывести сообщение об ошибке красным цветом 


const btn = document.querySelector(`button`);
const input = document.querySelector(`input`);
const result = document.querySelector(`.result`);
const array = [];

btn.addEventListener(`click`, function () {
  try {
    if (!input.value) throw new Error(`Input is empty`);
    array.push(input.value);
    input.value = ``;
    result.innerHTML = array;
  } catch (error) {
    alert(error.message);
  }
});