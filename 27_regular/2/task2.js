// На вход подается строка вида “имя фамилия возраст”. Необходимо написать
// регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать

const string = `Name`;

function isValid(string_) {
    try {
        if (!/^[0-9]+$/gm.test(string_)) throw new Error(`string is not valid`);

        return true;
    } catch (error) {
        return error.message;
    }
}
let result = isValid(string);
console.log(result);