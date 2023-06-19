// Создайте абстрактный класс Shape, содержащий абстрактный метод
// calculateArea(). Напишите дочерний класс Rectangle, который наследует Shape и
// реализует метод calculateArea() для расчета площади прямоугольника. Затем
// создайте объект класса Rectangle и выведите его площадь на экран. (для
// вычисления площади прямоугольника S = height * wigth)
class Shape {
}
class Rectangle1 extends Shape {
    calculateArea(height, width) {
        return height * width;
    }
}
const rectangle1 = new Rectangle1();
console.log(rectangle1.calculateArea(100, 200));
