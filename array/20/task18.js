//Даны три числа a, b, c. Напишите программу, которая находит корни квадратного 
// уравнения 
// ax
// 2 + bx + c = 0
// Если уравнение имеет два корня, то следует вывести их в порядке возрастания
const a = +prompt('Введите первое число');
const b = +prompt('Введите второе число');
const c = +prompt('Введите третье число');
const dis = (b ** 2) - (4 * a * b);
const x1 = (-b - (Dis ** 0.5)) / (2 * a)
const x2 = (-b + (Dis ** 0.5)) / (2 * a)
if (dis < 0) {
    console.log("корней нет");
} else if (b === 0) {
    console.log(-b / (2 * a));
} else {
    if (x1 > x2){
        console.log(x1,x2)
    }else{
        console.log(x2,x1)
    }
}