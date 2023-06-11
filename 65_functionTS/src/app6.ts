// У вас есть массив объектов вида приведенного в приложении. Необходимо 
// вывести средний прайс среди всех продуктов

interface iThings6 {
    id: number;
    title: string;
    count: number;
    price: number
}
let array6: Array<iThings6> = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
]

function middlePrice6(array: Array<iThings6>): Array<iThings6>{
    let sum6: Array<iThings6> = array.reduce((sum: number, elem:number) =>sum+elem.price,0)
    return sum6
}

console.log(middlePrice6(array6));
