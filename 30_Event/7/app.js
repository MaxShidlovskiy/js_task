// Записать в результат удвоенное значение инпута. Добавить проверки

const btn = document.querySelector(`button`);
btn.addEventListener(`click`, function () {
    try {
        const inp = document.querySelector(`input`);
        if (inp.value == ``) throw new Error(`пустое значение`);
        if (isNaN(inp.value)) throw new Error(`это буква`);
        let result = document.querySelector(`.result`);
        result.innerHTML = inp.value * 2;
        inp.value = ``;
    } catch (error) {
        alert(error.message)
    }
})