// Необходимо отобразить кнопку с надписью «Нажми на меня» 
//  пустой инпут. По клику на кнопку вызвать alert и отобразить 
//  сообщение из значения инпута

let btn = document.querySelector(`.btn`);
btn.addEventListener(`click`, function () {
    try {
        let inp = document.querySelector(`input`);

        if (inp.value === ``) throw new Error(`нет значиения`)
        alert(inp.value)
    } catch (error) {
        alert(error.message)
    }
})