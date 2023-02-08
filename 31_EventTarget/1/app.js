// На странице расположен маркированный список. 
// Пользователь кликает на каждый item списка. 
// Необъодимо отловить на какой из элементов нажал пользователь и отобразить

const ul = document.querySelector(`ul`);

ul.addEventListener(`click`, function (event) {
   try {
      if (event.target.textContent == ``) throw new Error(`empty`)
      const divs = document.querySelector(`.show`);
      divs.innerHTML = event.target.textContent
   } catch (error) {
      alert(error.message)
   }

});