// Реализуйте класс Singer, который будет наследовать от класса Worker.
//  Класс Worker состоит из: свойства Name, свойства surname, метода getFullName(), 
//  с помощью которого можно вывести одновременно имя и фамилию; 
//  Класс Singer состоит из свойств years, birth, style и метода getMoreInfo(), 
//  который выводит информацию о певце: name, surname years, birth, style. 
//  Необходимо вызвать метод getMoreInfo
class Worker {
    name;
    surname;
    getFullName() {
        return `${this.name}${this.surname}`;
    }
    setName(name) {
        this.name = name;
    }
    setSurname(surname) {
        this.surname = surname;
    }

}
class Singer extends Worker {
    years;
    birthday;
    style;
    getMoreInfo() {
        return `${this.name} ${this.surname} ${this.years} ${this.birthday} ${this.style}`;
    }
    setYears(years) {
        this.years = years;
    }
    setBirthday(birthday) {
        this.birthday = birthday;
    }
    setStyle(style) {
        this.style = style;
    }
}
let worker = new Worker();

worker.setName(`Jhon`);
worker.setSurname(`Smith`);
let result = worker.getFullName();
console.log(result);

console.log(`---------------------------------------------`);

let singer = new Singer();
singer.setName(`Karl`);
singer.setSurname(`Smith`);
singer.setYears(30);
singer.setBirthday(`01.01.1999`);
singer.setStyle(`pop`);
let result2 = singer.getMoreInfo();
console.log(result2);