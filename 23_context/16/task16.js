// *Вычислить факториал числа используя рекурсию 

let count = 5;

function doFactorial(count_) {
    if (count_ === 1) {
        return count_
    }
    return count_ * doFactorial(count_ - 1);
}
let result = doFactorial(count);

console.log(result);