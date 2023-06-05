// Напишите программу, которая принимает строку и возвращает новую строку, в 
// которой все символы уникальны (не повторяются). Например, для строки "hello" 
// результатом должна быть строка "helo".
let str9 = `hello`;
let result9 = ``;
for (let i = 0; i < str9.length; i++) {
    if (!result9.includes(str9[i])) {
        result9 += str9[i];
    }
}
console.log(result9);
