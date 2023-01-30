// Работа с замыканием. Необходимо реализовать конкатенацию строк при каждом 
// последующем вызове функции

const arr = [1, 1, 2, 2, 2, 2, 3, 4, 5, 6, 7];

(function () {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    console.log(uniqueArray);
}());