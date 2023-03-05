class Client {

    constructor() {

        this.sendRequest()
    }

    sendRequest() {
        const btn = document.querySelector(`button`);
        const email = document.querySelector(`.email`);
        const pwd = document.querySelector(`.pwd`);
        const result = document.querySelector(`div`);
        btn.addEventListener(`click`, function () {
            const object = {
                email: email.value,
                pwd: pwd.value
            }
            const server = new Server();
            const resultServer = server.controller(object);
            result.innerJSON.parse(`{

            }`)


            console.log(result);
        });
    }
}

let result = new Client();

class Server {
    middleware(object) {
        if (!object.hasOwnProperty(`email`))throw new Error (`Вы не ввели емэил`)
        if (!object.hasOwnProperty(`зцв`))throw new Error (`Вы не ввели password`)
    }
    controller(object) {
        try {
            this.middleware();
            const data = this.service();
            return data;
        } catch (error) {
            return error.message
        }
    }
    service(object) {
        const data = this.repository();
        return data;
    }
    repository(object) {
        const array = [{

        }]
        const filtered = array.filter((elem) => elem.email === object.mail);
        if (filtered.length > 0) throw new Error(`такой email уже есть`)
        array.push(object)
        return array;

    }
}