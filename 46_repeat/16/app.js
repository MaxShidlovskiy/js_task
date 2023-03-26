// Работа с геттерами и сеттерами. Реализуйте класс Validator. Класс содержит
// getEmail, setEmail, а также метод IsEmail, проверяющий, является ли входная
// строка корректным email (Если является - возвращает true, если не является -
// false. Вызвать из экземпляра класса методы setEmail. getEmail, isEmail

class Validator {

   getMail() {
      return this.mail;
   }

   setMail(m) {
      this.mail = m;
   }

   isMail() {
     return (/^[a-zA-Z0-9]+.[\w]+.+[\w]+$/g.test(this.mail));
   }
}

let validator = new Validator();
validator.setMail(`fish@gmail.com`);
console.log(validator.getMail());
console.log(validator.isMail());