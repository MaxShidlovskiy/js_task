// Реализуйте класс ServerDelete. Обязательными функциями считаются функции
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
// "id": 1
// }`
// Необходимо осуществить удаление по id. Если совпадения нет – ошибка. Добавить
// проверки

class serverPut{
    midleware(object){
        if(!Object.hasOwnProperty)

    }
    controller(json){
        try{
            let object = JSON.parse(json);
            this.midleware(object);
            return this.service(Object)
        }catch(error){
            return error.message;
        }
    }
    service(object){
        return this.repository(object)
    }
    repository (object){

    }
}