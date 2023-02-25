// из диктанта

const btn = document.querySelector(`button`);
const result = document.querySelector(`.result`);


btn.addEventListener(`click`, function () {
    try {
        const inp = document.querySelector(`input`).value;

        if (!inp.trim()) throw new Error(`Пустая строка`);
        if (isNaN(inp)) throw new Error(`это строка`);
        let array = inp.split(``).reverse().join(``);
        result.innerHTML = array;
        } catch (error) {
        alert(error.message);
    }
})