// 1. Написать функцию которая принимает 2 числа и возводит 1 во 2 степень. 
// Добавить необходимые проверки.
// Написать тест для функции

function sum(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error(`не число`)
        }
        return a ** b;
    } catch (error) {
        return error.message
    }
}

// 2. Написать функцию которая принимает 2 числа и возвращает результат 
// произведения 2 множителей. Добавить необходимые проверки.
// Написать тест для функции

function multiply(a, b) {
    try {
        if (typeof a !== `number` || typeof b !== `number`) {
            throw new Error(`не число`)
        }
        return a * b
    } catch (error) {
        return error.message
    }
}

// 3. Написать функцию которая принимает массив чисел и находит сумму всех 
// элементов. Добавить необходимые проверки.
// Написать тест для функции

function doArray(array) {
    try {
        if (!Array.isArray(array)) throw new Error(`это не массив`);
        if (!array.length) throw new Error(`массив пуст`);
        const bool = array.every(el => typeof el == `number`);
        if (!bool) throw new Error(`массив содержит строку`);
        return array.reduce((acc, next) => acc + next, 0)
    } catch (error) {
        return error.message
    }
}


// 4. У вас есть массив объектов вида приведенного в приложении. Необходимо 
// вывести все товары, количество которых больше 10 и произведены в Германии
// Написать тест для функции

function findProduct(arr) {
    try {
        if (!Array.isArray(arr)) throw new Error(`это не массив`);
        let filtered = arr.filter(el => el.count > 10 && el.producer == `Германия`)
        return filtered
    } catch (error) {
        return error.message
    }
}

// 5. У вас есть массив строковых значений, состоящий из номеров телефонов. 
// Необходимо вывести значения массива без дубликатов. Добавить необходимые
// проверки.
// Написать тест для функции

function findArray(arr) {
    try {
        if (arr.some(el => typeof el !== 'string')) throw new Error('data error')
        const newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (!newArr.includes(arr[i])) {
                newArr.push(arr[i]);
            }
        } return newArr;
    } catch (error) {
        return error.message
    }
}

// 6. На входе статичный объект. Необходимо посчитать количество пар (ключ: 
//     значение) где значение число и вывести количество. Добавить необходимые
//     проверки.
//     Написать тест для функции

function findObject(obj) {
    try {
        let count = 0;
        for (const key in obj) {
            if (!isNaN(key)) count++;
        }
        return count;
    } catch (error) {
        return error.message;
    }
};

// 7. На входе статичный объект. Необходимо числовые значения удвоить на выходе.
// Написать тест для функции

function doubleValue(obj) {
    try {
        for (const key in obj) {
            if (!isNaN(obj[key])) obj[key] = obj[key] * 2;
        }
        return obj;
    } catch (error) {
        return error.message;
    }
};

// 8. На входе статичный объект. Необходимо сформировать массив из всх четных
// значений объекта.
// Написать тест для функции

function makeArray(obj) {
    try {
        if (typeof obj !== 'object' || typeof obj === 'null') throw new Error('is not a valid object');
        let arr = []
        for (let key in obj) {
            if (typeof obj[key] == 'number' && obj[key] % 2 === 0) {
                arr.push(obj[key])
            }
        }
        return arr;
    } catch (err) {
        return err.message;
    }
}

module.exports = { sum, multiply, doArray, findProduct, findArray, findObject, doubleValue,makeArray };