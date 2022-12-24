// Дана строка из 3 слов разделенных пробелом:
// • Найдите количество символов в этой строке.
// • Вырежите из нее 2 и 3 слова.
// • Найдите индекс 2 подстроки

const value = prompt("введите число");

if (isNaN(value)) {
    console.log(`error`);
} else if (Number(value) === 0) {
    console.log(`the reverse number does not`);
} else {
    console.log(`Reverse number:${1/value}`);
}