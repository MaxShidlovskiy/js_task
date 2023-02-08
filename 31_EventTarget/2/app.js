// По наведению на кнопку вывести сообщение «Hi». 
// Когда мышка выходит за границы кнопки сновка скрывать

let btn = document.querySelector(`.btn`);
btn.addEventListener(`mouseover`, function(event) {
    const div = document.querySelector(`div`);
    div.innerHTML = `Hi`;
})
btn.addEventListener(`mouseout`, function () {
    let div = document.querySelector(`div`)
    div.innerHTML = ``;
})