// На вход статичный объект. Необходимо объект проверить на пустоту. Если же 
// объект пустой, то выводим false, если же содержит хотя бы одну пару (ключ: 
// значение), то true

let obj = {
    1: `one`,
    2: 100,
    3: null,
    4: 23,
    5: 17,
}
let count = 0;
for (let key in obj) {
    count += 1;
}
if (count > 0) {
    console.log(true);
} else {
    console.log(false);
}