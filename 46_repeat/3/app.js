// Реализуйте класс Singer, который будет наследовать от класса Worker.
//  Класс Worker состоит из: свойства Name, свойства surname, метода getFullName(), 
//  с помощью которого можно вывести одновременно имя и фамилию; 
//  Класс Singer состоит из свойств years, birth, style и метода getMoreInfo(), 
//  который выводит информацию о певце: name, surname years, birth, style. 
//  Необходимо вызвать метод getMoreInfo
class HTML{
    bindOptionPlus(){
        let displayTag = document.querySelector('.display');
        let btnPlusTag = document.querySelector(".plus");
    btnPlusTag = add.EventListener('click', ()=>{
        displayTag.innerHTML = +displayTag.textContent+1;
    })
    }