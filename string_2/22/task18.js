// На вход программе подается строка. Напишите программу, которая меняет
// регистр символов, другими словами замените все строчные символы заглавными
// и наоборот.
// Swap Case => sWAP cASE

const string = `Swap Case`;
let finalString = "";
for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase) {
        finalString += string[i].toLowerCase();
    } else {
        finalString += string[i].toUpperCase();
    }
}
console.log(finalString);
console.log(finalString);
console.log(finalString);
console.log(finalString);
console.log(finalString);
console.log(finalString);