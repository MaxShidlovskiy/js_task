// Реализуйте класс WordString, который будет иметь следующие методы: метод
// reverseString, переворачивающий строку, метод upperFirst, возвращающий строку,
// где первая буква заглавная и метод upperEvery, который делает заглавной первую
// букву каждого слова этой строки.

class WordString {
    constructor(string) {
        this.string = string;
    }

    isValid() {
        if (!isNaN(this.string)) throw new Error(`its not a string`);
    }
    reverseString() {
        try {
            this.isValid();
            return `${this.string.split(``).reverse().join(``)}`;
        } catch (error) {
            return error.message;
        }
    }
    upperFirst() {
        try {
            this.isValid();
            return `${this.string[0].toUpperCase()+this.string.slice(1)}`;
        } catch (error) {
            return error.message;
        }
    }
    upperEvery() {
        try {
            this.isValid();
            const array = this.string.split(` `);
            const arrStr = array.map(function (el) {
                return el[0].toUpperCase() + el.slice(1);
            })
            return arrStr.join(` `);
        } catch (error) {
            return error.message
        }
    }
}


let wordString = new WordString(`one two three four`);
console.log(wordString.reverseString());
console.log(wordString.upperFirst());
console.log(wordString.upperEvery());