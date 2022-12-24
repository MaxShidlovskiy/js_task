// Пользователь вводит число с клавиатуры. Нужно вывести на экран сколько в этом
// числе цифр, а также положительное оно или отрицательное. Например, "Число " +
// num + " положительное". (length)

const value = prompt('Enter the value: ');

if (isNaN(value)) {
  console.log('Error');
} else {
  console.log(value.length);
  value = Number(value);

  if (value > 0) {
    console.log(`Number ${value} is positive`);
  } else {
    console.log(`Number ${value} is negative`);
  }
}