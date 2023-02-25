// Реализуйте класс ServerById. Обязательными функциями считаются функции 
// middleware, controller, service, repository. Цепочка взаимодействия между 
// методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор 
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с 
// этим массивом осуществляется только в repository. Массив находится в 
// приложении
// Задание:
// на вход подается JSON вида: 
// `{ 
// "id": 1
// }`
// Необходимо вывести в консоль найденный элемент массива по id если таковой 
// имеется. В противном случае бросить исключение. Добавить проверки

class ServerById {
  middleware(object) {
    if (!object.hasOwnProperty(`id`)) throw new Error(`Поле id не передано`)
    if (isNaN(object.id)) throw new Error(`this is string`);
  }
  controller(object) {
    try {
      this.middleware()
      const data = this.service(object);
      return data;
    } catch (error) {
      alert(error.message)
    }
  }
  service(object) {
    const data = this.repository(object);
    return data;
  }

  repository(object) {
    const array = [{ "id": 1, "name": "Yesenia", "age": 22 },
    { "id": 2, "name": "Hanna", "age": 22 },
    { "id": 3, "name": "Stanislau", "age": 25 },
    { "id": 4, "name": "German", "age": 18 },
    { "id": 5, "name": "Maria", "age": 27 }
    ]
    const filtered = array.filter((elem) => elem.id == object)
    return filtered;
  }
}
const object = JSON.parse(`{
  "id": 1
}`)

let serverById = new ServerById();
const result = serverById.controller(object);
console.log(result);