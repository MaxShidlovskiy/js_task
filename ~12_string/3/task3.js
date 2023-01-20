// Пользователь вводит число от 1 до 7, соответствующее дню недели. Необходимо
// вывести день для введенного числа.
// 1 -> Понедельник

const value = +prompt("Enter the number: ");

switch (value) {
  case 1:
    console.log(`${value} -> Понедельник`)
    break;
  case 2:
    console.log(`${value} -> Вторник`)
    break;
  case 3:
    console.log(`${value} -> Среда`)
    break;
  case 4:
    console.log(`${value} -> Четверг`)
    break;
  case 4:
    console.log(`${value} -> Пятница`)
    break;
  case 5:
    console.log(`${value} -> Суббота`)
    break;
  case 6:
    console.log(`${value} -> Четверг`)
    break;
  case 7:
    console.log(`${value} -> Понедельник`)
    break;
  default:
    break;
}