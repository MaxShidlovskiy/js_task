// Пользователь вводит дату в формате ‘х-х-х'. Замените все дефисы на '!'

const ste = prompt('Введите дату');

if (isNaN(ste)) {
    console.log(ste.split('-').reverse().join('!'))
}