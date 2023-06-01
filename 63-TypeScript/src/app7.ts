// Напишите программу, которая находит факториал заданного числа num и 
// выводит результат в консоль

let num7: number = 5;
let factorial7: number = 1;

for (let i: number = 1; i <= num7; i++) {
    factorial7 *= i;
}
console.log(factorial7);