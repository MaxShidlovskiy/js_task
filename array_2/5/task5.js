// Создать массив гласных из динамичного массива. Filter

let n = +prompt(`Введите количество эл-ов`);
let arr = [];

for (let i = 0; i < n; i++) {
  arr.push(prompt(`введите строку`));
}
let filtered = arr.filter(function (el) {
  if (el === `a` || `e` || `i` || `o` || `u`)
    return true
})
console.log(filtered);