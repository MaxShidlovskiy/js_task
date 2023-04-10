// Посчитать количество гласных и согласных в строке

let str = `hello`.split(``);

function counter(str) {
   let count = 0;

   for (let i = 0; i < str.length; i++) {
      if (str[i] == `a`, str[i] == `e`, str[i] == `i`, str[i] == `o`, str[i] == `u`, str[i] == `y`, ) {
         count += 1
      }
   }
   const countSogl = str.
   return `vowels = ${count}, sogl = ${countSogl}`;
}
let result = counter(str);
console.log(result);