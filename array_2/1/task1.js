// Сумма элементов массива динамичного массива. reduce

const n = prompt('Enter the length:');
const arr = [];

for (let i = 0; i < n; i++) {
  arr.push(+prompt('Enter the value'));
}

let sum = arr.reduce(function(sum, elem) {
  return sum + elem;
}, 0)

console.log(sum);