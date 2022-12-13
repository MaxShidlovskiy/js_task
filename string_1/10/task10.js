const value = prompt("введите число");

if (isNaN(value)) {
    console.log(`error`);
} else if (Number(value) === 0) {
    console.log(`the reverse number does not`);
} else {
    console.log(`Reverse number:${1/value}`);
}