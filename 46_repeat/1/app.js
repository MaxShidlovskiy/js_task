// Реализуйте класс HTML. Класс содержит метод bindOption содержащий обработчик
// события. Задача:
// • По клику на кнопку необходимо получить значение input и отобразить в пустой div
// (в созданной html разметке) посредством InnerHTML.
// • Добавить стили для отображения текста input: например, изменить цвет букв.
// • Добавить проверки на получение значения input

class HTML {
   bindOption() {
       
       const buttonTag = document.querySelector("button");
       const inputTag = document.querySelector("input");
       const outPutTag = document.querySelector(".outPut");
       buttonTag.addEventListener('click', () => {
           try{
               if(inputTag.value.trim() == ''){
                   throw new Error('value is empty')
               }
               outPutTag.innerHTML = inputTag.value;
               outPutTag.style = 'color:red';
