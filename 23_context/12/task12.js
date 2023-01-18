// Работа с замыканием. Напишите функцию, каждый вызов который будет
// генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись, пока
// не будут перебраны все числа из этого промежутка.

function wrapper() {
    return function () {
        let rnd = Math.random() * 100;
        console.log(Math.floor(rnd));
    }
}
let wrap = wrapper();

wrap();
wrap();
wrap();