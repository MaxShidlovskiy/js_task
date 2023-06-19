// Создайте класс Calculator, который содержит методы add() (сложение), subtract()
// (вычитание), multiply() (умножение) и divide() (деление). Создайте экземпляр
// класса Calculator и выполните несколько операций.
class Calculator {
    num1;
    num2;
    setNum1(num1) {
        this.num1 = num1;
    }
    setNum2(num2) {
        this.num2 = num2;
    }
    add() {
        return this.num1 + this.num2;
    }
    subtract() {
        return this.num1 - this.num2;
    }
    multiply() {
        return this.num1 * this.num2;
    }
    divide() {
        return this.num1 / this.num2;
    }
}
const calculator6 = new Calculator();
calculator6.setNum1(1);
calculator6.setNum2(2);
console.log(calculator6.add());
console.log(calculator6.subtract());
console.log(calculator6.multiply());
console.log(calculator6.divide());
// class Calculator6 {
//     add<Type>(num1: Type, num2: Type): number {
//         if (typeof num1 == `number` && typeoff num2 ==) {
//             return num1 + num2;
//         }
//     }
//     subtract<Type>(num1: Type, b: Type): number {
//         return num1 - num2;
//     }
//     multiply<Type>(num1: Type, b: Type): number {
//         return num1 * num2;
//     }
//     divide<Type>(num1: Type, b: Type): number {
//         return num1 / num2;
//     }
// }
// const calculator6 = new Calculator6()
// console.log(calculator6.add());
// console.log(calculator6.subtract());
// console.log(calculator6.multiply());
// console.log(calculator6.divide());
