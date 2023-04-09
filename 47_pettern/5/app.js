// 5. Реализуйте класс Server, получающий объект из предыдущего задания и
// сохраняющий его в «БД» (массив). Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении
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

          let server = new Server();
          const result = server.controller(object);
          console.log(result);

      })
  }
}

class Server {

  controller(object) {
      const result = this.service(object);
      return result;
  }

  service(object) {
      const result = this.repository(object);
      return result;
  }

  repository(object) {
        const arr = [
        { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwdffff" },
        { "id": 2, "email": "hanna@mail.ru", "pwd": "pwdfevcrdv" },
        { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest" },
        { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq" },
        { "id": 5, "email": "maria@mail.ru", "pwd": "pwdfcel" }
    ];

    let filtered = arr.filter((elem) => elem.email === object.email);
    if (filtered.length > 0) throw new Error('такая почта уже есть');
    arr.push({ id: arr.length + 1, ...object });
    return arr;
}

}

let client = new Client();
client.doRegistration();