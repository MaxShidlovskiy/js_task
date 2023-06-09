// У вас есть массив объектов вида приведенного в приложении. Необходимо 
// вывести все товары, количество которых больше 10
interface iThings {
    id: number;
    title: string;
    count: number;
    price: number
}
let arr1 = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
]
function getStorageByCount(arr1) {
    let filtered1 = arr1.filter((elem) => {
        if (elem.price > 10) {
            return elem;
        }
    })
    return filtered1;
}

let result1 = getStorageByCount(arr1);

console.log(result1);

