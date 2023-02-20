// Реализуйте класс DomHtml, который будет взаимодействовать с 
// DOM по клику на кнопку. Класс содержит 4 метода: doPlus, doMinus, 
// doMultiply, doDivide
class DomHtml {
   constructor(inpOne, inpTwo) {
      this.inpOne = inpOne;
      this.inpTwo = inpTwo;
      this.generateEvent();
   }
   generateEvent() {
      const btn = document.querySelector(`.btn`);
      btn.addEventListener(`click`, () => {
         this.doPlus();
         this.doMinus();
         this.doMultiply();
         this.doDivide();
      })
   }
   doPlus() {
      const plus = document.querySelector(`.plus`);
      plus.innerHTML = +this.inpOne.value + +this.inpTwo.value;
   }
   doMinus() {
      const minus = document.querySelector(`.minus`);
      minus.innerHTML = +this.inpOne.value - +this.inpTwo.value;
   }


   doMultiply() {
      const multiply = document.querySelector(`.multiply`);
      multiply.innerHTML = +this.inpOne.value * +this.inpTwo.value;
   }
   doDivide() {
      const divide = document.querySelector(`.divide`);
      divide.innerHTML = +this.inpOne.value / +this.inpTwo.value;
   }
}
const inpOne = document.querySelector(`.inpOne`);
const inpTwo = document.querySelector(`.inpTwo`);


let domHtml = new DomHtml(inpOne, inpTwo);