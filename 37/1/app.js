// Классы Employee и ProductionWorker.
// Напишите класс Employee (Сотрудник), который содержит:
// • имя сотрудника;
// • номер сотрудника.
// Затем напишите класс ProductionWorker (Рабочий), который является подклассом
// класса Employee.
// Класс ProductionWorker содержит:
// • номер смены (целое число, к примеру, 1, 2 или 3);
// • ставка почасовой оплаты труда.
// Напишите методы получатели и методы-модификаторы для каждого класса.
// После того как эти классы будут написаны, напишите программу, которая создает
// объект класса ProductionWorker и предлагает пользователю ввести данные по
// каждому атрибуту данных этого объекта. Сохраните данные в объекте и
// примените в этом объекте методы получатели, чтобы получить эти данные и
// вывести их на экран. 

class Employee {
   name;
   id;
   getName() {
      return this.name;
   }

   getId() {
      return this.id;
   }
   setName(name) {
      this.name = name;
   }
   setId(id) {
      this.id = id;
   }
}
class ProductionWorker extends Employee {
   shiftNumber;
   perHour;

   getShiftNumber() {
      return this.shiftNumber;
   }

   getPerHour() {
      return this.perHour
   }

   setShiftNumber(shift) {
      this.setShiftNumber = shift;
   }

   setPerHour(hour) {
      this.perHour = hour;
   }
}


productionWorker.setName(`John`)
productionWorker.setId(`29`)
productionWorker.getShiftNumber(`1-я смена`)
productionWorker.setPerHour(`2-я смена`);

let name = new productionWorker.getName();
let id = new productionWorker.getId();
let shiftNumber = productionWorker.getShiftNumber();
let perHour = productionWorker.getPerHour();

console.log(name);
console.log(id);
console.log(shiftNumber);
console.log(perHour);