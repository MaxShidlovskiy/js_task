// Написать функцию на подсчет количества пар ключ значение в объекте. Добавить
// проверки

let object = {
  isValid: true,
  id: 123,
  lg: `english`,
};

function check(obj) {
  try {
    let arr = Object.keys(obj);
    if (!arr.length) throw new Error(`empty object`)
  } catch (error) {
    return error.message;
  }
}

let t = check(object);
console.log(t);