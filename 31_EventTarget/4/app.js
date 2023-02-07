// По двойному клику на кнопку изменить цвет кнопки

const btn = document.querySelector(`.btn`);
let flag = false;
btn.addEventListener(`dblclick`, function () {

    if (flag == false) {

        this.style = `background-color:red`;
        flag == true;
    } else {
        this.style = `background-color:white`;
        flag == true;
    }
})