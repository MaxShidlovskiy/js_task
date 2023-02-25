// 

class ServerPost {
    middleware(object) {
        if (!isNaN(object.name)) throw new Error(`its  a number`);
        if (isNaN(object.age)) throw new Error(` its string`)
    }
    controller(object) {
        try {
            this.middleware(object)
            const data = this.service(object);
            return data;
        } catch (error) {
            alert(error.message);
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
        const filtered = array.filter((elem) => elem.name !== object.name);
        if (array.length !== filtered.length) throw new Error(`Такой id уже есть`);
        array.push({
            ...object.name
        });
        return array;
    }
}
const object = JSON.parse(`{
    
    "name ":"test", "age ": 1
}`);
const serverPort = new ServerPost();
const result = serverPort.controller(object);
console.log(result);