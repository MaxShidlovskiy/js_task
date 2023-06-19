// Создайте абстрактный класс Fruit с полем array – массив объектов (id, title, price).
// Напишите дочерний класс Apple, функцию getAppleInfo, возвращающую
// информацию о фрукте, где title = яблоко

interface iFruit3 {
    id: number;
    title: string;
    price: number;
}
abstract class Fruit3 {
    abstract arr: iFruit3[]
}


class Apple3 extends Fruit3 {
    arr: iFruit3[] = [{ id: 1, title: `apple`, price: 10 }, { id: 2, title: `grusha`, price: 20 }];
    getAppleInfo(): iFruit3[] {
        return this.arr.filter((el: iFruit3) => {
            if (el.title == `apple`) return el
        })
    }
}

const apple3 = new Apple3();
console.log(apple3.getAppleInfo());
