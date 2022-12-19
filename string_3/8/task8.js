// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb'

const str = prompt(`Enter`);

console.log(str.slice(4,7));
console.log(str.slice(str.indexOf("b"), str.lastIndexOf("b")+1));