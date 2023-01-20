// На вход программе подается переменная date, в котрой лежит дата в формате
// 'xxxx-xx-xx'. Преобразуйте эту дату в формат 'xx/xx/xxxx’. (reverse)
const ste = prompt('Введите дату');

if (isNaN(ste)) {
    console.log(ste.split('-').reverse().join('/'))
}