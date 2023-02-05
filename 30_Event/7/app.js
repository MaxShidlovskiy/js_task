const but = document.querySelector(`button`);
but.addEventListener(`click`, function () {

    try {
        const inp = document.querySelector(`input`);
        if (inp.value.trim() === ``) throw new Error (`empty string`)
        if(isNaN(inp.value)) throw new Error(`its string`)
        const result = document.querySelector(`.result`)
        result.innerHTML = inp.value * 2
    } catch (error) {
        alert(error.message)
    }
})
// 
const but = document.querySelector(`button`);
but.addEventListener(`click`, function () {

    try {
        const inp = document.querySelector(`input`);
        if (inp.value.trim() === ``) throw new Error (`empty string`)
        if(isNaN(inp.value)) throw new Error(`its string`)
        const result = document.querySelector(`.result`)
        result.innerHTML = inp.value * 2
    } catch (error) {
        alert(error.message)
    }
})