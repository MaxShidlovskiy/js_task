// На вход подается строка в виде электронной почты пользователя. Необходимо
// написать регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать

const mail = `google@gmail.com`;

function isValid(mail_) {
    try {
        if (!/^[a-z\._\-]+@[a-z]+\.[a-z]{1,5}$/gm.test(mail_)) throw new Error(`mail is not valid`)
        return true
    } catch (error) {
        return error.message;
    }
}

let result = isValid(mail);
console.log(result);