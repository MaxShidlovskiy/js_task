// Вы вводите числа в поле для ввода формируя массив.
// Необходимо отобразить массив, а также отдельно
// все четные элементы этого массива и нечетные

const btn = document.querySelector(`button`);
const inp = document.querySelector(`input`);
const arr = document.querySelector(`.array`);
const arCh = document.querySelector(`.arrChet`);
const everyInp = [];

btn.addEventListener(`click`, function () {
    everyInp.push(inp.value);
    arr.innerHTML = everyInp;
    const filtered = everyInp.filter(el => el % 2 === 0)
    arCh.innerHTML = filtered;
})