// Ввести строку. Проверить является ли это число или текст. Если число, то
// выяснить, четное или нет. Если это текст и равен “hschool”, вывести true. В
// противном случае false

let value = prompt("Введите строку");

if (isNaN(value)) {
    if (value === `hsschool`){
        console.log(`true`);
    }
} else if (value %2===0){
    console.log(`четное`);
}else{
    console.log(`не четное`);
}