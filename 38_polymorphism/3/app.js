// Реализуйте класс NumberArray. NumberArray хранит функцию sumArr, которая
// заполняет и возвращает массив из 5 рандомных элементов. Класс ConsoleArray
// является производным по отношению к базовому, родительскому NumberArray и
// содержит функцию sumArr. Необходимо переопределить sumArr из базового
// класса записав в переменную используя метод super. Далее посчитать сумму всех
// элементов массива
class NumberArray {

    sumArr() {
        let arr = [];
        for (let i = 0; i < 5; i++) {
            const elem = Math.floor(Math.random() * 100);
            arr.push(elem)
        }
        return arr;
    }
}
class ConsoleArray extends NumberArray {
    sumArr() {
        let temp = super.sumArr();
        console.log(temp);
        return temp.reduce((cur, next) => {
            return cur + next;
        }, 0)
    }
}
let consoleArray = new ConsoleArray();
console.log(consoleArray.sumArr());