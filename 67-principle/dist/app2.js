// Создайте абстрактный класс Animal, содержащий абстрактный метод
// makeSound(). Напишите дочерние классы Dog и Cat, которые наследуют Animal и
// реализуют метод makeSound() для издания соответствующего звука. Создайте
// объекты классов Dog и Cat и вызовите их методы makeSound().
class Animal2 {
}
class Dog extends Animal2 {
    makeSound() {
        console.log(`gav`);
    }
}
class Cat extends Animal2 {
    makeSound() {
        console.log(`Miay`);
    }
}
const dog = new Dog();
const cat = new Cat();
dog.makeSound();
cat.makeSound();
