// Реализуйте класс WordString, который будет иметь следующие методы: метод
// reverseString, переворачивающий строку, метод upperFirst, возвращающий строку,
// где первая буква заглавная и метод upperEvery, который делает заглавной первую
// букву каждого слова этой строки.

class WordString {
    constructor(string) {
        this.string = string;
    }
    reverseString() {
        return `${this.string.split(``).reverse().join(``)}`;
    }
    upperFirst() {
        return `${this.string[0].toUpperCase()+this.string.slice(1)}`;
    }
    upperEvery() {
        const array = this.string.split(` `);
        const arrStr = array.map(function (el) {
            return el[0].toUpperCase() + el.slice(1);
        })
        return arrStr.join(` `);
    }
}
let wordString = new WordString(`test test test test`);
console.log(wordString.reverseString());
console.log(wordString.upperFirst());
console.log(wordString.upperEvery());