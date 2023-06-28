const { sum, multiply, doArray, findProduct,findObject, findArray, doubleValue } = require('./app');

describe(`набор тестов 1`, () => {
    test(`успешно`, () => {
        const result = sum(2, 2);
        expect(result).toBe(4);
    });
    test(`успешно`, () => {
        const result = sum(2, `string`);
        expect(result).toBe(`не число`);
    });
});

describe(`набор тестов 2`, () => {
    test(`успешно`, () => {
        const result = multiply(2, 3);
        expect(result).toBe(6);
    });
    test(`успешно`, () => {
        const result = multiply(2, `string`);
        expect(result).toBe(`не число`);
    });
});

describe(`набор тестов 3`, () => {
    test(`успешно`, () => {
        const result = doArray([1, 2, 3]);
        expect(result).toBe(6);
    });
    test(`успешно`, () => {
        const result = doArray(`string123`);
        expect(result).toBe(`это не массив`);
    });
    test(`успешно`, () => {
        const result = doArray([]);
        expect(result).toBe(`массив пуст`);
    });
    test(`успешно`, () => {
        const result = doArray([10, 10, `string`]);
        expect(result).toBe(`массив содержит строку`);
    });
});

describe(`набор тестов 4`, () => {
    let arr = [
        { id: 1, title: 'Часы', count: 10, price: 500, producer: 'Германия' },
        { id: 2, title: 'Смартфон', count: 33, price: 1500, producer: 'Германия' },
        { id: 3, title: 'Моноблок', count: 6, price: 2200, producer: 'Германия' },
        { id: 4, title: 'Ноутбук', count: 13, price: 3000, producer: 'Китай' },
        { id: 5, title: 'Планшет', count: 22, price: 2100, producer: 'Китай' },
        { id: 6, title: 'Телевизор', count: 4, price: 4100, producer: 'Германия' },
        { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }
    ];

    test(`успешно`, () => {
        const result = findProduct(arr);
        expect(result).toEqual([{ id: 2, title: 'Смартфон', count: 33, price: 1500, producer: 'Германия' }, { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }]);
        expect(result).toHaveLength(2)
        expect(result.length).toBeGreaterThan(0)
        expect(result.length).toBe(2)
    });
    test(`успешно`, () => {
        const result = findProduct(`ttt`);
        expect(result).toBe(`это не массив`);
    });
});

describe('набор тестов 5', () => {
    test('success', () => {
        const result = findArray(['12345', '23456', '34567', '12345']);
        expect(result).toEqual(['12345', '23456', '34567']);
    });
    test('success', () => {
        const result = findArray(['12345', 23456, 34567, '12345']);
        expect(result).toEqual('data error');
    });
});

describe('набор тестов 6', () => {
    test('', () => {
        const result = findObject({ 1: 'id', 2: 'name' });
        expect(result).toBe(2);
    });
});

describe('doubleValue:', () => {
    test('', () => {
        const result = doubleValue({ id: 1, name: 2 });
        expect(result).toEqual({ id: 2, name: 4 });
    });
    test('', () => {
        const result = doubleValue({ id: 'qwe', name: 2 });
        expect(result).toEqual({ id: 'qwe', name: 4 });
    });
});