// Необходимо отобразить числовой инпут и кнопку.
//  После нажатия на кнопку необходимо получить значение из инпута. 
//  Проверить, что это число > 0. Если проверка true, 
//  то вывести в Результат ряд Фибоначчи. Рекурсия

const btn = document.querySelector(`button`);
btn.addEventListener(`click`, function () {
  try {
    let inp = document.querySelector(`input`);

    if (inp.value < 0) throw new Error(`меньше нулья, повторите ввод`)
    if (inp.value == ``) throw new Error(`Пустая строка`);
    
    let cont = document.querySelector(`.conteiner`)
    cont.innerHTML = inp.value

    let arr = [0, 1];
    for (let i = 2; i < +inp.value; i++) {
      arr.push(arr[i - 1] + arr[i - 2])
    }
    cont.innerHTML = arr
  } catch (error) {
    alert(error.message)
  }
})