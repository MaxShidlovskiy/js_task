// Найти максимальное число из 2 введенных (2 способа)
const a = +prompt("Введите число");
const b = +prompt("Введите число");
if (a>b){
    console.log(a);
}else{
    console.log(b);
}
a>b ? console.log(a): console.log(b);
console.log(a>b ? a: b)

console.log(Math.max(a,b));