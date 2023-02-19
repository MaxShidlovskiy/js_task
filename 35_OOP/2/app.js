// Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел,
// разность, произведение, частное. 2 числа передаются в класс, далее вызываеются
// соответствующие функции. Добавить проверки на ввод

class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    sum() {
        try {
            this.isValid()
            return `${this.num1} + ${this.num2} = ${this.num1 + this.num2}`;
        } catch (error) {
            return error.message
        }
    }
    subtraction() {
        try {
            this.isValid()
            return `${this.num1} - ${this.num2} = ${this.num1 - this.num2}`;
        } catch (error) {
            return error.message;
        }

    }
    multiplication() {
        try {
            this.isValid()
            return `${this.num1} * ${this.num2} = ${this.num1 * this.num2}`;
        } catch (error) {
            return error.message;
        }

    }

    division() {
        try {
            this.isValid()
            return `${this.num1} / ${this.num2} = ${this.num1 / this.num2}`;
        } catch (error) {
            return error.message;
        }

    }
    isValid() {
        if (isNaN(this.num1) || isNaN(this.num2)) throw new Error(`its string`)
    }
}
let calculator = new Calculator(2, 5);
console.log(calculator.sum());
console.log(calculator.subtraction());
console.log(calculator.multiplication());
console.log(calculator.division());