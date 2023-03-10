// Реализуйте класс Calculator, который будет содержать метод doSqrt,
// возвращающий корень числа принимаемого в параметрах. 

class Calculator {

   doSqrt(num) {
     return Math.sqrt(num);
   }

}
const calculator = new Calculator();
console.log(calculator.doSqrt(8));