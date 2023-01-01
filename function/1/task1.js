// На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и 
// заполяет массив. Далее необходимо создать массив только из чисел. Если длина 
// массива равна 0, то вывести ‘Массив пуст’. filter



const value = 5;
const arr = [];

for (let i = 0; i < value; i++) {
  const new_value = prompt('Enter the value: ');
  arr.push(new_value);
}

const numbers = arr.filter(function(value) {
  if (isNaN(value)) {
    return false;
  } else {
    return true;
  }
});

if (numbers.length === 0) {
  console.log('Array is empty');
} else {
  console.log(numbers)
;
}