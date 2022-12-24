// Пользователь вводит 2 числа от 0 до 10. Сложите переменные так, чтобы в
// результате получилось выражение: “I’m хх". Проверки на ввод только чисел.
// Проверки на ввод чисел до 10. Если первое число – 0, то опустить его
let num1 = prompt("Введите число");
let num2 = prompt("Введите число");

if (isNaN(num1,num2)) {
    console.log(`error`);
} else if (num1>10) {
    console.log(`error`);
}   else{
    if (num1 >0){
        console.log(`I'm ${num1+num2}`);
    }else{
        console.log(`I'm ${num2}`);
    }
}