// Создайте динамический массив строк. Используя Some выведите true в случае 
// если хотя бы 1 элемент массива имеет длину > 5 символов.

let array4: string[] = [];

let n4: number = +prompt(`enter size of array`);

for (let i: number = 0; i < n4; i++) {
    array4.push(prompt(`enter the string...`));
}

let result4: boolean = array4.some(el => el.length > 5 ? true : false)

console.log(result4);
