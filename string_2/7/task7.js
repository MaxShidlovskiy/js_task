// На вход программе подаётся строка. Замените все @ на '!' с помощью глобального
// поиска и замены (2 способа)

const str = prompt("введите строку");

if (isNaN(str)){
    console.log( str.replaceAll ("@","!"));
    console.log(str.split("@").join("!"));
}

