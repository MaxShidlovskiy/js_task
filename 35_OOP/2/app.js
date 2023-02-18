// Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел,
// разность, произведение, частное. 2 числа передаются в класс, далее вызываеются
// соответствующие функции. Добавить проверки на ввод

class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    sum() {
        return `${this.num1}+ ${this.num2}=${this.num1}+${this.num2}`;
    }
    subtraction() {
        return `${this.num1} - ${this.num2}= ${this.num1 -this.num2}`;
    }
    multiplication() {
        return `${this.num1} * ${this.num2}= ${this.num1 *this.num2}`;
    }

    division() {
        return `${this.num1} / ${this.num2}= ${this.num1 /this.num2}`;
    }

}
let calculator = new Calculator(2, 10);
console.log(calculator.sum());
console.log(calculator.subtraction());
console.log(calculator.multiplication());
console.log(calculator.division());