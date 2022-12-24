// На вход программе подается переменная date, в котрой лежит дата в формате
// 'xxxx-xx-xx'. Преобразуйте эту дату в формат 'xx/xx/xxxx’. (reverse)
const ste = prompt('Введите число');

if (isNaN(ste)) {
    console.log(str.split('-').reverse().join('/'))
}