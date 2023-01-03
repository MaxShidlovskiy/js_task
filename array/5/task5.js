// На входе 10 элементов. Из элементов составить 2 массива по 5 элементов. Далее 
// необходимо сравнить массивы. Если они идентичны, то вывести булевое trur, в 
// противном случае falsr. forEach

let arr = [];
while (arr.length < 10) {
  const num = prompt(`Введите число`);
  if (isNaN(num)) {
    console.error(`Ошибка`);
  } else {
    arr.push(num);
  }
}
console.log(arr);
