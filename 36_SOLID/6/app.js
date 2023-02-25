// Реализуйте класс ServerPut. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в приложении
// Задание:
// на вход подается JSON вида:
// `{
// "id": 1, "name": "Test", "age": 1
// }`
// Необходимо найти id клиента в массиве БД. Если совпадение есть, произвести
// обновление значений для соответствующих ключей.
// Если совпадения по id нет – ошибка. Добавить проверки 

class ServerPut {
    middleWare(object) {
        if (isNaN(object.name)) throw new Error(`its number`)
        if (isNaN(object.age)) throw new Error(`its string`)
        if (isNaN(object.id)) throw new Error(`its string`)
    }
    controller(object) {
        try {
            this.middleWare(object);
            const data = this.service(object);
            return data;
        } catch (error) {
            return error.message
        }
    }
    service(object) {

        const data = this.repository(object);
        return data;
    }
    repository(object) {
        const array = [{
                "id": 1,
                "name": "Yesenia",
                "age": 22
            },
            {
                "id": 2,
                "name": "Hanna",
                "age": 22
            },
            {
                "id": 3,
                "name": "Stanislau",
                "age": 25
            },
            {
                "id": 4,
                "name": "German",
                "age": 18
            },
            {
                "id": 5,
                "name": "Maria",
                "age": 27
            }
        ]

        let filter = array.filter(elOfArr => elOfArr.id !== object.id ? true : false);
        if (filter.length == arr.length) {
            throw new Error(`error id not found`);
        } else {

        }
    }
}
const object = JSON.parse(`{
    "id": 1,
    "name": "test",
    "age": 1
}`);