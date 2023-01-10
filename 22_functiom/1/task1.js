// Пользователь вводит имя фамилию. Необходимо создать функцию 
// возвращающую строку вида «Привет, {имя} {фамилия}»

const name = prompt(`name`),
    surname = prompt(`surname`);

const doSum = (a, b) => {
    return `Привет, ${a} фамилия ${b}`
}
console.log(doSum(name, surname));