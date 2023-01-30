// На вход подается строка в виде url. Необходимо написать регулярное выражение
// для данной строки. Если же строка подходит под регулярное выражение, то
// вывести булевое true, в противном случае бросить исключение и обработатьи

const n = 7;

function doArray(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(prompt(`Enter the value:`));
  }
  return arr
}

function validator(arr) {
  if (!Array.isArray(arr)) throw new Error(`Not an arrayD`);
  for (let elem of arr) {
    if (isNaN(elem)) throw new Error(`not a number`);
  }
}
function findValidElem(arr){
  
try {
validator(arr);
return arr.filter(elem = > elem > 10&& elem<100);
} catch (error) {
  return error.message;
}
}
const array = doArray(n);
const result = findValidElem(array);
console.log(result);
//
function doArray(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(prompt(`Enter the value:`));
  }
  return arr
}

function validator(arr) {
  if (!Array.isArray(arr)) throw new Error(`Not an arrayD`);
  for (let elem of arr) {
    if (isNaN(elem)) throw new Error(`not a number`);
  }
}
function findValidElem(arr){
  
try {
validator(arr);
return arr.filter(elem = > elem > 10&& elem<100);
} catch (error) {
  return error.message;
}
}
const array = doArray(n);
const result = findValidElem(array);
console.log(result);