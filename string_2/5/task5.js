// ‘HTML JavaScript PHP’ преобразовать в "HTML-JAVASCRIPT-PHP"
const str = 'HTML JavaScript PHP';
console.log(str.trim().toUpperCase().split(' ').join('-'));