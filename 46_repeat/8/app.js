// На входе статичный объект. Написать функцию на формирование массива
// значений данного объекта

let object = {
  id: 123,
  name: `Vasya`
}

function showValues(object) {
  try {
    let value = Object.values(object)
    if (value.length == 0) throw new Error(`пустой массив`)
    return value
  } catch (error) {
    return (error.message)
  }
}
let result = showValues(object);
console.log(result);