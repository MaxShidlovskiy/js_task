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
   getId {
      return this.id;
   }
   setName {
      this.name;
   }
}


class ProductionWorker extends Employee {
   shiftNumber;
   perHour;
   getShiftNumber() {
      return this.shiftNumber;
   }
   getPerHour {
      return this.perHour
   }
}

let productionWorker = new ProductionWorker();
productionWorker.setName(`John`)
productionWorker.setId(`29`)
productionWorker.getShiftNumber(`1-я смена`)
productionWorker.setPerHour(`2-я смена`);

console.log(productionWorker);
console.log(productionWorker);
console.log(productionWorker);
console.log(productionWorker);