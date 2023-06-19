// Создайте абстрактный класс Fruit с полем array – массив объектов (id, title, price).
// Напишите дочерний класс Apple, функцию getAppleInfo, возвращающую
// информацию о фрукте, где title = яблоко
class Fruit3 {
}
class Apple3 extends Fruit3 {
    arr = [{ id: 1, title: `apple`, price: 10 }, { id: 2, title: `grusha`, price: 20 }];
    getAppleInfo() {
        return this.arr.filter((el) => {
            if (el.title == `apple`)
                return el;
        });
    }
}
const apple3 = new Apple3();
console.log(apple3.getAppleInfo());
