// Создайте класс ArrayAnalyzer, который будет иметь массив чисел как поле класса
// (хначение инициализируется через конструктор класса), методы getAverage,
// getMax, getMin для вычисления среднего значения, максимального и
// минимального элементов массива.
class ArrayAnalyzer6 {
    array;
    constructor(array) {
        this.array = array;
    }
    getAvarage() {
        const result = this.array.reduce((sum, el) => {
            return sum + el;
        }, 0);
        return result / this.array.length;
    }
    getMax() {
        return Math.max(...this.array);
    }
    getMin() {
        return Math.min(...this.array);
    }
}
const arrayAnalyzer6 = new ArrayAnalyzer6([1, 2, 3, 4, 5]);
console.log(arrayAnalyzer6.getAvarage());
console.log(arrayAnalyzer6.getMax());
console.log(arrayAnalyzer6.getMin());
