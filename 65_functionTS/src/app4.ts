// У вас есть массив объектов вида приведенного в приложении. Необходимо 
// вывести итоговую стоимость на складе.
// Итоговая стоимость = количество * цена + ...

interface iThings4 {
    id: number;
    title: string;
    count: number;
    price: number
}
let array4: iThings4[] = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
]
function resultCount4(array: iThings4[]): iThings4[] {
    let result4: number = array4.reduce((sum: number, elem: iThings4) => elem.count * elem.price + sum, 0)

    return result4;
}

console.log(resultCount4(array4));
