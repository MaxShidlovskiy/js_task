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