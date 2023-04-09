// Реализуйте класс ServerPost. Обязательными функциями считаются функции middleware, 
// controller, service, repository. Цепочка взаимодействия между методами 
// следующая:middleware -> controller -> service -> repository, где:middleware – функция валидатор 
// controller – функция, принимающая данные. Принимает jsonservice – функция проверки на то что с 
// repository вернулось значениеrepository – функция, симулирующая БД. Хранит массив данных. 
// Взаимодействие с этим массивом осуществляется только в repository. 
// Массив находится в приложенииЗадание:на вход подается JSON вида: ` { "email": “test@mail.ru", "pwd": “test" }`
// Необходимо добавить в массив БД объект только в том случае, если нет совпадений по name. Если совпадения нет, 
// то в объект клиента добавить ключ id с последним возможным уникальным id БД, таким образом, 
// чтобы в БД был запушен объект вида{"id": 6, "email": "yesenia@mail.ru", "pwd": "pwdffff" }
// Если совпадение есть – ошибка. Добавить проверки 

class Client {
    doRegistration() {
        const btn = document.querySelector('button');
        const email = document.querySelector('.email');
        const password = document.querySelector('.password');
        btn.addEventListener('click', () => {
            const object = {
                email: email.value,
                pwd: password.value,
            }
            console.log(object);
        })
    }
}
let client = new Client();
client.doRegistration();