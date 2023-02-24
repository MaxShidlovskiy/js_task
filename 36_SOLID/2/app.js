Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
кнопку.Класс содержит 1 метод валидации, называемый middleware, в котором
происходит проверка на почту.Вывести true, если провека успешна

// Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 1 метод валидации, называемый middleware, в котором
// происходит проверка на почту. Вывести true, если провека успешна

class DomHtml {
    constructor() {
        this.middleware();
    }
    middleware() {
        const btn = document.querySelector(`button`);
        btn.addEventListener(`click`, function () {
            try {
                const inp = document.querySelector(`input`);
                if (!/^[a-z0-9\.\_\-]+@[a-z]+\.[a-z]{2,3}$/gm.test(inp.value)) throw new Error(`email is not valid`)
                alert(true)
            } catch (error) {
                alert(error.message)
            }
        })
    }
}
let domHtml = new DomHtml();