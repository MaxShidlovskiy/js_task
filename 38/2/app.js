class Client {

    constructor() {

        this.sendRequest()
    }

    sendRequest() {
        const btn = document.querySelector(`button`);
        const email = document.querySelector(`.email`);
        const pwd = document.querySelector(`.pwd`);
        const result = document.querySelector(`div`);
        this.btn.addEventListener(`click`, function () {
            const object = {
                email: this.email.value,
                pwd: this.pwd.value
            }
            this.result.innerHTML = object

            console.log(object)
        });
    }
}

let result = new Client();

class Server {
    middleware(object) {

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
        if (filtered > 0) throw new Error(`такой email уже есть`)
        array.push(object)
        return array;

    }
}
const object = JSON.parse(`{

}`)

const server = new Server();
const result = server.controller(object);
console.log(result);