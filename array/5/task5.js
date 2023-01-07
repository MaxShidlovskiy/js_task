// На входе 10 элементов. Из элементов составить 2 массива по 5 элементов. Далее 
// необходимо сравнить массивы. Если они идентичны, то вывести булевое trur, в 
// противном случае falsr. forEach

let value = 10;
let arr1 = [];
let arr2 = [];
let sum = 0;

for (let i = 0; i < value; i++);
if (i < 5) {
  arr1.push(prompt(``))
} else {
  arr2.push(prompt(``))
}

arr1.forEach(function (el) {
  if (arr2.includes(el)) {
    sum += 1
  }

})
if (arr1.length === count && arr2.length === count) {
  console.log(`идентичны`);
}