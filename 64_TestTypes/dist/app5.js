// Создайте массив чисел и найдите в нем все числа, которые делятся на 3 и не 
// делятся на 2
let array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result5 = array5.filter(function (elem) {
    return elem % 3 === 0 && elem % 2 === 1 ? true : false;
});
console.log(result5);
