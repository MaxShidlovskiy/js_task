// На входе объект. Ключи и значения - автоинкремент (генерируется автоматически
//   от 1 до n). Написать функцию на поиск в объекте только четных ключей. 

let obj = {

}
const n = 5;

for (let i = 0; i < n; i++) {
  obj[i] = i;
}
console.log(obj);
let arrayChet = [];
for (let key in obj) {
  if (key % 2 == 0) {
    arrayChet.push(key);
  }
}
console.log(arrayChet);