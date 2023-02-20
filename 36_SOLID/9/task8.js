// Дополнить класс Validator. Добавить метод isURL для проверки на url.

// class Validator {

//     constructor(url) {
//         this.url = url;
//     }
//     isURL() {
//         try {
//             if (!/^[a-z]{4,5}:\/\/[a-zA-Z]+\.[a-z]{1,3}\/$/gm.test(this.url)) throw new Error(`string is not valid`)
//             return true;
//         } catch (error) {
//             return error.message
//         }
//     }
// }
// const validator = new Validator(`https://habr.com/`)
// console.log(validator.isURL());

class Validator {
    isUrl(url) {
        try {
            if (!/^[a-z]{4,5}:\/\/[a-zA-Z]+\.[a-z]{1,3}\/$/gm.test(url)) throw new Error(` not valid`);
            return true
        } catch (error) {
            return error.message
        }
    }
}
let validator = new Validator();
console.log(validator.isUrl(`https://habr.com/`));