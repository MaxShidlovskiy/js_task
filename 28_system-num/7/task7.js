// Реализуйте функцию, которая принимает число и возвращает возвенную в
// квадрат каждую цифру числа соединяя их. Добавить проверки
// 9119 -> 811181 (9
// 2 === 81, 1
// 2=== 1)

const a = prompt(`enter the value`);

function doSqare(element) {
    try {
        let arr = element.split(``);
        let temp = arr.map(el => el ** 2);
        return temp.join(``);
    } catch (error) {
        return error.message;
    }
}

let r = doSqare(a);
console.log(r);