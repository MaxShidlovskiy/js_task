// На вход программе подается строка. Преобразуйте первую букву каждого слова
// строки в верхний регистр (for)

 let str = `html css javascript`;
 let arr = str.split(` `);
 let res = ``;

 for (let i = 0; i < arr.length; i++) {
     res += arr[i][0].toUpperCase() + arr[i].slice(1);

 }
 console.log(res.trim());
