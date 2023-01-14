// Напишите функцию, которая принимает статичный массив строк. Необходимо 
// отфильтровать значения и оставить только те, где длина строк до 2 символов.
// [“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]

const arr = [`by`, `belarus`, `de`, `ru`, `germany`];

const finde = (a) => {
    const result = a.filter(elem => elem.length <= 2);
    return result
}
console.log(finde(arr))