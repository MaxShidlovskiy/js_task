// По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив. Необходимо вывести среднее значение
// этого массива

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
         this.name;
         this.surname = surname;
      }
      getAutograph() {
         return (`${this.name} ${this.surname}, best wishes`)
      }
   }
   let singer = new Singer(`Robert`, `Smith`)
   console.log(singer.getAutograph());