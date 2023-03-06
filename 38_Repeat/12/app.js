// На странице расположен маркированный список. Пользователь кликает на
// каждый item списка. Необходимо отловить на какой из элементов нажал
// пользователь и отобразить в div расположенном ниже маркированного списка

const btn = document.querySelector(`ul`);
const result = document.querySelector(`div`)

btn.addEventListener(`click`, function (event) {
  result.innerHTML = event.target.textContent;
})