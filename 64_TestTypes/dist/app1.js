//  Создайте массив чисел и найдите сумму всех нечетных элементов в массиве. \
const array1 = [1, 2, 3, 4, 5];
const filtered = array1.filter(function (el) {
    return el % 2 === 1 ? true : false;
});
const result1 = filtered.reduce(function (sum, elem) {
    return sum + elem;
}, 0);
console.log(result1);
