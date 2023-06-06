// Создайте массив строк и выведите на экран все элементы, которые содержат 
// букву 'a'.
let str2 = [`la hehe no`, `ok yea`, `oops queuq`];
for (let i = 0; i < str2.length; i++) {
    if (str2[i].includes(`a`)) {
        console.log(str2[i]);
    }
}
