// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать функцию возвращающую новый
// массив из элементов, каждое значение которого имеет вид #name.
// [“hschool”, “company”] -> [“#hschool”, “#company”]

function createArr() {

  const l = prompt(`length of arr...`);
  const arr = [];
  for (let i = 0; i < l; i++) {
    const element = +prompt(`put the element`);
    arr.push(element);
  }
  return arr;
}

function doHashTag(array) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    const element = `#` + array[i];
    newArr.push(element);
  }
  return newArr;
}
let temp = createArr();
console.log(doHashTag(temp));