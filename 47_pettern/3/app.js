// Необходимо отобразить кнопку с надписью «Нажми на меня» 
//  пустой инпут. По клику на кнопку вызвать alert и отобразить 
//  сообщение из значения инпута

const inp = document.querySelector(`.inp`);
const btn = document.querySelector(`.btn`);
const arrHTML = document.querySelector(`.arr`);
const uniq = document.querySelector(`.uniq`);
let arr = [];

btn.addEventListener(`click`, () => {
    let arruniq = [];
    arr.push(inp.value);
    arrHTML.innerHTML = `Massiv ${arr}`;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i + 1] && arr[i] != arr[i - 1]) {
            arruniq.push(arr[i])
        }

    }
    uniq.innerHTML = `Uniqe : ${arruniq}`;
})