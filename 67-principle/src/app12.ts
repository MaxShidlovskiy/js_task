// Реализуйте класс ServerGetAll. Обязательными функциями считаются функции 
// controller, service, repository. Цепочка взаимодействия между методами 
// следующая: controller -> service -> repository, где:
// Задание:
// Необходимо вывести в консоль массив из репозитория

interface iServerGetAll12 {
    controller(): number[];
    service(): number[];
    repository(): number[]
}

class ServerGetAll12 implements iServerGetAll12 {
    controller(): number[] {
        const data1: number[] = this.service()
        return data1
    }
    service(): number[] {
        const data2: number[] = this.repository();
        return data2;
    }
    repository(): number[] {
        const arr: number[] = [1, 2, 3, 4, 5];
        return arr;
    }
}

const serverGetAll12 = new ServerGetAll12();
console.log(serverGetAll12.controller());
