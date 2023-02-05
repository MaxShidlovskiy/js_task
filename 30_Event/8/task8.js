// Реализуйте функцию, принимающую число. Ваша задача – выяснить является ли
// число идеальным квадратом. В математике квадратное число или идеальный
// квадрат – это целое число, являющееся квадратом целого числа; другими
// словами, это произведение некоторого целого числа на самого себя. Если
// является, вывести true, в противном случае false. Добавить проверки
// 3 –> false
// 25 –> true
// 49 –> true

let num = +prompt(`введите число`);

function vaidator(num_) {
    if (isNaN(num_)) throw new Error(`это не число`);
}

function validNum(num_) {
    try {
        vaidator(num_);
        let sqrt = Math.sqrt(num_);
        if (Number.isInteger(sqrt)) {
            return true
        } else {
            return false
        }

    } catch (error) {
        return error.message
    }
}
let result = validNum(num);
console.log(result);