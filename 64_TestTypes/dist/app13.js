// На входе динамичный массив чисел. Используя map выведите массив строк 
// четности и нечетности, в соответствии со значением числа:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]
let arr13 = [1, 2, 3, 4, 5, 6];
let result13 = arr13.map((elem) => {
    if (elem % 2 == 0) {
        return `чет`;
    }
    else {
        return `нечет`;
    }
});
console.log(result13);
