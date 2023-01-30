// На входе число n. Напишите функцию, которая переворачивает число.

let x = prompt(`введите число`);
let revert = el => {
    return el.split(``).reverse().join(``);

}
console.log(revert(x));