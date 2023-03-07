// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать функцию возвращающую новый
// массив из отфильтрованных значений, где строка начинается на [a, h].
// [“ann”, “school”, “hschool”, “borabora”] -> [“ann”, “hschool”]

const n = prompt(`enter the length`);

const doArray = (length) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(prompt(`enter the value`));
  }
  return arr;
}

const filteredArray = (arr) => {
  try {
    isValid(arr)
    const newArr = arr.filter(elem => {
      if (elem[0] === `a` || elem[0] === `h`) {
        return true;
      }
    })
    return newArr
  } catch (error) {
    return error.message;
  }
}
const isValid = (arr) => {
  arr.forEach(element => {
    if (!isNaN(element)) {
      throw new Error(`not a string`)
    }
  });
}



const array = doArray(n);
const newArr = filteredArray(array)
console.log(newArr);