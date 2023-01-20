// Пользователь вводит дату в формате 'xxxx-xx-xx'. Преобразуйте эту дату в формат
// 'xx.xx.xxxx'.

const ste = prompt('Введите дату');

if (isNaN(ste)) {
    console.log(ste.split('-').reverse().join('.'))
}