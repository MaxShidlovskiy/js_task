// Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 1 метод валидации, называемый middleware, в котором
// происходит проверка на uuid, введенный в input. Вывести true, если провека
// успешна. 
class DomHtml {
    constructor() {
        this.middleware();
    }
    middleware() {
        const btn = document.querySelector(`button`);
        btn.addEventListener(`click`, function () {
            try {
                const inp = document.querySelector(`input`);
                if (!/^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$/gm.test(inp.value)) throw new Error(`Некорректный ввод`)
                alert(true);
            } catch (error) {
                alert(error.message);
            }
        })
    }
}

const domHtml = new DomHtml();