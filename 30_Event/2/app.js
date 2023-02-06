// Необходимо отобразить кнопку с надписью «Нажми на меня» и инпут со 
//  по-умолчанию «+375(хх)ххх-хх-хх». По клику на кнопку заменить значение 
//  инпута на «+375(29)111-11-11»

const btn = document.querySelector(`.btn`);
btn.addEventListener(`click`, function(){
    let inp = document.querySelector(`input`);
    inp.value = `+375(29)111-11-11`
})