// Реализуйте класс HTML. Класс содержит метод bindOption содержащий обработчик
// события. Задача:
// • По клику на кнопку необходимо получить значение input и отобразить в пустой div
// (в созданной html разметке) посредством InnerHTML.
// • Добавить стили для отображения текста input: например, изменить цвет букв.
// • Добавить проверки на получение значения input

class HTML {

   bindOption() {
      const btn = document.querySelector(`button`);
      const inp = document.querySelector(`input`);
      const pwd = document.querySelector(`.outPut`);
      const result = document.querySelector(`div`);
      this.btn.addEventListener(`click`, function () {
      this.sendRequest()
   }

   sendRequest() {
      
         const object = {
            email: this.email.value,
            pwd: this.pwd.value
         }
         this.result.innerHTML = object

         console.log(object)
      });
   }
}

let result = new Client();