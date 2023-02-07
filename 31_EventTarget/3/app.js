// По наведению на кнопку вывести сообщение «Hi». 
// Когда мышка выходит за границы кнопки сновка скрывать


const btn = document.querySelector(`.btn`);
btn.addEventListener(`mouseover`, function () {
    let p = document.querySelector(`p`);
    p.innerHTML = `Hi`
})
btn.addEventListener(`mouseout`, function () {
    let p = document.querySelector(`p`);
    p.innerHTML = ``
})