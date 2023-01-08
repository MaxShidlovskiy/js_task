// Найти максимальное и минимальное число динамичного массива. forEach

let value = +prompt('введите длину массива');
const arr = [];

for (let i = 0; i < value; i++) {
    const num = +prompt(`введите число`)
    arr.push(num)
}
let maxValue = arr[0];
let minValue = arr[0];
arr.forEach(function (elem) {
    if (elem > maxValue) {
        maxValue = elem;
    }
    if (elem < minValue) {
        minValue = elem;
    }
})
console.log(`max: ${maxValue}`);
console.log(`min: ${minValue}`);