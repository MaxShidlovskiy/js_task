// Преобразовать строку ‘Full StaCK DevELoper’ в массив вида [‘full, ‘stack’, ‘developer’]
let a = prompt("Full StaCK DevELoper");

console.log(a.toLocaleLowerCase().split(` `));