// На вход подается строка в виде электронной почты пользователя. Необходимо
// написать регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать

const btn = document.querySelector(`button`);
addEventListener(`click`, function(){
    try {
        const inp = document.querySelector(`input`);
        if(inp.value.trim == ``) throw new Error (`пустое поле`);
        alert(inp.value);
    } catch (error) {
        alert (error.message)
    }
})