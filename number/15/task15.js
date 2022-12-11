const n = +(prompt("количество населения"));
console.log(typeof n);

if (n % 2 === 0) {
    console.log(n / 2);
} else {
    console.log((n + 1) / 2);
}