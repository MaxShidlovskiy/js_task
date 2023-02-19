// Реализуйте класс Singer, который будет иметь следующие свойства: name,
// surname. Также класс должен иметь метод getАutograph, который будет выводить
// “{name} {surname), с наилучшими пожеланиями”. 

//1
// class Singer {
//    getAutograph(name, surname) {

//       return (`${name} ${surname}, with best wishes`);
//    }
// let singer = new Singer();
// console.log(singer.getAutograph(`Robert`, `Smith`));

//2
class Singer {
   constructor(name, surname) {
      this.name= name;
      this.surname = surname;
   }
   getAutograph() {
      return (`${this.name} ${this.surname}, best wishes`)
   }
}
let singer = new Singer(`Robert`, `Smith`)
console.log(singer.getAutograph());

