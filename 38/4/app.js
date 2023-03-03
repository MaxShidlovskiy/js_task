// Реализовать следующие классы Круг, Треугольник и Квадрат, которые наследуются от Figure. 
// Каждый экземпляр класса должен содержать свойства Площадь и Имя. 
// Вывести всю информацию о фигурах в консоль. Площадь должна рассчитываться по математическим формулам.

// Класс Figure содержит поля: 
// p
// r
// a
// h

// Дочерние классы содержаь геттеры на получение площади

class Figure {
  r;
  p = 3.14;
  s;
  h;
  name;

  setR(radius) {
    this.r = radius;
  }
  setS(side) {
    this.s = side;
  }
  setH(height) {
    this.h = height;
  }
  setName(name) {
    this.name = name;
  }
}
class Circle extends Figure {
  getSquare() {
    return this.p = this.r ** 2 
  }
}
class Triangle extends Figure {
  getSquare() {
    return 1 / 2 *this.s * this.h;
  }
}
let circle = new Circle();
circle.setR(3);
console.log(circle.getSquare());

console.log(`------------------------------------------------`);

let triangle = new Triangle();
triangle.setA(4);
triangle.setH(7);
console.log(triangle.getSquare());

console.log(`------------------------------------------------`);