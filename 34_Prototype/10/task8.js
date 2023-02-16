// Разработчик запушил в главную ветку GitHub js файл с многострочными
// комментариями (/* */). Предстоящее демо гарантирует демонстрацию экрана с
// кодом проделанной работы за спринт. Программисту необходимо вырезать все
// комментарии в коде новым коммитом. Задача: вырезать куски кода комментариев
// используя регулярные выражения воизбежание публичного стыда. 

const str = `
let a= 10;
/* console.log();
console.log(); */
a++`;

function checkStr(str_) {
    try {
        let result = str_.replaceAll(/^\/\*[\w\s\.\(\)\;\:\"\']+\*\/$/gm, ``)
        return result;
    } catch (error) {
        return error.message;
    }
}
let result = checkStr(str);
console.log(result);