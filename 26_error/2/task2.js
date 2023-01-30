// На входе массив значений. Необходимо его обработать. Если в массиве есть хотя
// бы 1 строка, бросить исключение. 

let array = [1, 2, 3, `qwer`, 5];

function isValid(array_) {
    try {
        for (let i = 0; i < array.length; i++) {
            if (isNaN(array_[i])) throw new Error(`Это строка`)
        }
        return true
    } catch (error) {
        return error.message
    }
}

let result = isValid(array);
console.log(result);