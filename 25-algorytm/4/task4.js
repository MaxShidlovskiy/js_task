// Пользователь вводит n – порядковый номер числа из ряда Фибоначчи.
// Реализуйте функцию на поиск числа n в данной последовательности используя
// рекурсию
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, …
// 5 -> 3
// 10 -> 34
// 7 -> 8

function fib(el) {
    if(el===0) return
    return el + fib()
}
let result = fib(5);
console.log(result);