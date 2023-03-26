// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать функцию возвращающую новый
// массив из элементов, каждое значение которого имеет вид #name.
// [“hschool”, “company”] -> [“#hschool”, “#company”]

function createArr() {
  const n = prompt(`length of arr`);
  let arr = [];
  for (let i = 0; i < n; i++) {
    const element = +prompt(`put the element`);
    arr.push(element)
  }
  return arr;
}

function doHashTag(array) {
  try {
    isValid(array);
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
      const element = `#` + array[i];
      newArr.push(element)
    }
    return newArr
  } catch (error) {
    return(error.message)
  }
}


function isValid(array) {
  array.forEach(element => {
    if (!isNaN(element)) throw new Error(`Это число`)
  });
}

let temp = createArr()
let t = doHashTag(temp);
console.log(t);
