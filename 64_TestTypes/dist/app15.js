// На входе динамичный массив строк. Используя forEach создайте новый массив из 
// элементов, каждое значение которого имеет вид !name
// [“hschool”, “company”] -> [“!hschool”, “!company”]
let arr15 = [`hschool`, `company`];
let result15 = arr15.map((el) => `!$(el)`);
console.log(result15);
