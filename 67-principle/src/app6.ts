// Создайте класс ArrayAnalyzer, который будет иметь массив чисел как поле класса
// (хначение инициализируется через конструктор класса), методы getAverage,
// getMax, getMin для вычисления среднего значения, максимального и
// минимального элементов массива.

interface iArrayAnalyzer6 {
    array: number[];
    getAvarage(): number;
    getMax(): number;
    getMin(): number;
}

class ArrayAnalyzer6 implements iArrayAnalyzer6 {
    array: number[];
    constructor(array: number[]) {
        this.array = array;
    }
    getAvarage(): number {
        const result: number = this.array.reduce((sum, el) => {
            return sum + el
        }, 0);
        return result / this.array.length
    }
    getMax(): number {
        return Math.max(...this.array);
    }
    getMin(): number {
        return Math.min(...this.array)
    }
}

const arrayAnalyzer6 = new ArrayAnalyzer6([1, 2, 3, 4, 5]);
console.log(arrayAnalyzer6.getAvarage());
console.log(arrayAnalyzer6.getMax());
console.log(arrayAnalyzer6.getMin());
