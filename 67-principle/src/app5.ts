// Создайте абстрактный класс "Транспортное средство" (Vehicle), который содержит
// абстрактные методы "завести" (start) и "остановить" (stop). Реализуйте классынаследники "Автомобиль" (Car) и "Мотоцикл" (Motorcycle), которые расширяют
// класс "Транспортное средство" и реализуют абстрактные методы в соответствии с
// особенностями каждого транспортного средства. (седержимое методов:
// console.log)

abstract class Vehicle5 {
   public abstract start(): void;
   public abstract stop(): void;
}
class Car5 extends Vehicle5 {
    public start(): void {
        console.log(`c-start`)
    }
    public stop(): void {
        console.log(`c-stop`)
    }
}
class Motorcycle5 extends Vehicle5 {
    public start(): void {
        console.log(`m-start`)
    }
    public stop(): void {
        console.log(`m-stop`)
    }
}

const car5 = new Car5();
const motorcycle5 = new Motorcycle5();


car5.start();
car5.stop();

motorcycle5.start();
motorcycle5.stop();