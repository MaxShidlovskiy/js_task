// Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. 
// По клику на кнопку вызвать alert и отобразить сообщение из значения инпута. 
// Проверки на ввод. Обработать ошибки

const btn = document.querySelector(`button`);
btn.addEventListener(`click`, function () {
    try {
        const inp = document.querySelector(`input`);
        if (inp.value.trim() == ``) throw new Error(`пустое поле`);
        inp.style = ` border:1px solid black`;
        alert(inp.value);
        inp.value = ``;
    } catch (error) {
        let inp = document.querySelector(`input`);
        inp.style = `border:1px solid red`;
        alert(error.message)
    }
})