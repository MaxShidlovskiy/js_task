// На вход подается строка из 2 и более слов. Необходимо все пробелы заменить на
// “!”. Если же длина исходной строки не изменилась, вывести true, в противном
// случае бросить исключение и обработать

const string = `hello world`;

function isValid(string_) {
    try {
        let result = string_.replaceAll(/ /gm, `!`)
        return result
        // const regex = /Dog/ig;
        // console.log(p.replaceAll(regex, 'ferret'));

    } catch (error) {
        return error.message
    }
}
let result = isValid(string)
console.log(result);