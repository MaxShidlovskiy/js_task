// Реализуйте класс Сonversion, сдержащий метод do DecimalNumber, преобразующий 
// все числа 10 системы счисления в 2

class Conversion {
    decimalNumber(num) {
        try {
            let str = ``;
            while (num > 1) {
                str += num % 2;
                num = Math.round(num / 2);
            }
            return str;
        } catch (error) {
            return error.message;
        }
    }
}
let conversion = new Conversion();
let result = conversion.decimalNumber(27);
console.log(result);