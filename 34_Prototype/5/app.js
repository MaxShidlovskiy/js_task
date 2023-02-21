// По условию задачи даны 2 инпута и кнопка. Необходимо вернуть true, если часть
// символов 1 строки есть в другой.
// 'rkqodlw', 'world‘ – true
// 'kacvtas', 'steak' – false


const btn = document.querySelector(`button`);

btn.addEventListener(`click`, function () {
    const inp1 = document.querySelector(`.inp1`).value
    const inp2 = document.querySelector(`.inp2`).value

    let count = 0
    for (let i = 0; i < inp2.length; i++) {
        if (inp1.includes(inp2[i])) {
            count++
        }
    }
    if (count === inp2.length) {
        alert(true)
    } else(false)
})