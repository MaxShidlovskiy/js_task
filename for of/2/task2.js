// [1, 2, 3, 4, 5]. Выведите каждый элемент массива 3 любыми циклами
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
for (let j of arr) {
    console.log(j);
}
let h = 0;
while (h < arr.length) {
    console.log(arr[h]);
    h++
}