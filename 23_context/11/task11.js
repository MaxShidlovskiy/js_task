// Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает новый объект, где значения – исключительно числа
// первоначального объекта. IIFE

let obj = {
    value_1: 34,
    value_2: `abc`,
    value_3: 53,
    value_4: `dfg`,
};

// function generateNewObject(obj_) {
//     let objWithNumbers = {};
//     for (let key in obj_) {
//         if (typeof obj[key] === `number`) {
//             objWithNumbers[key] = obj_[key]
//         }
//     }
//     return objWithNumbers;
// }


const newObject = (function (obj_) {
    function generateNewObject(obj_) {
        let objWithNumbers = {};
        for (let key in obj_) {
            if (typeof obj[key] === `number`) {
                objWithNumbers[key] = obj_[key]
            }
        }
        return objWithNumbers;
    }(obj_)
})