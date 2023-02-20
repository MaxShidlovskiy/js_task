// Реализуйте класс Validator. У него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или нет. Если является
// - возвращает true, если не является - то false.


let m = `google@gmail.com`
class Validator{
    constructor(mail){
        this.mail = mail;
    }
    isValid(){
        let r = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/gm;
        if (r.test(this.mail)){
            return true;
        }
    }
}

class MegaValidator extends Validator{
    constructor(mail){
        super(mail);
        console.log(this.isValid());
    }
}
let  megaValidator= new MegaValidator(m)

// let Validator = new Validator(m);
// console.log(validator.isValid());

