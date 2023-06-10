// У вас есть массив объектов вида приведенного в приложении. Необходимо 
// вывести все товары в обратном порядке
interface iThings2 {
    id: number;
    title: string;
    count: number;
    price: number
}
let arr2: Array<iThings2> = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
]
function revert(array:  iThings[]): iThings[] {
    let revertArray:Array< iThings> = arr1.reverse();
    return revertArray;
}

let result: iThings[] = getStorageByCount(arr1);

console.log(result2);

