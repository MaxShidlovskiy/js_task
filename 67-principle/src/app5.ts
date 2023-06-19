// Создайте класс Rectangle, который содержит свойства width (ширина) и height
// (высота), а также метод getArea(), который возвращает площадь прямоугольника
// (ширина * высота). Создайте экземпляр класса Rectangle и выведите его площадь.

class Rectangle5 {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height
    }
    getArea() {
        return this.width * this.height;
    }
}
const rectangle5 = new Rectangle5(12, 6)
console.log(rectangle5.getArea());

// class Rectangle5 {
//     getArea( width: number, height: number) {
//      return width * height;
//     }
// }
// const rectangle5 = new Rectangle5()
// console.log(rectangle5.getArea(2,5));