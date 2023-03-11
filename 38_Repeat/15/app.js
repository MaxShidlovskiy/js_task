// Реализуйте класс WordString, который содержит: конструктор со входной строкой;
// метод ReverseString(). Ваша задача перевернуть исходную строку

class WordString {

   constructor(str) {
      this.str = str;
   }

   doReverse() {
      try {
         if (!isNaN(this.str)) throw new Error(`not a string`);
         const newStr = this.str.split(``).reverse().join(``);
         return newStr;
      } catch (error) {
         return error.message;
      }
   }

}

const wordString = new WordString(`test`)
console.log(wordString.doReverse());