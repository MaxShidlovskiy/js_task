// Необходимо отобразить кнопку и инпут со значением по умолчанию. 
// По клику на кнопку заменить значение инпута
const btn = document.querySelector(`button`);
btn.addEventListener(`click`, function () {
    try {
        const inp = document.querySelector(`input`);
        if (inp.value == `???`) {
            inp.value = `!!!`
        } else {
            inp.value = `???`
        }
    } catch (error) {
        alert(error.message)
    }
})