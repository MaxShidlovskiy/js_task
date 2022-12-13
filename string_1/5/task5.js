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