// На входе динамичный массив чисел. Используя map выведите массив строк 
// четности и нечетности, в соответствии со значением числа:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]

let arr13: number[] = [1, 2, 3, 4, 5, 6];

// let result13: string[] = arr13.map((elem: number) => {
//     if (elem % 2 == 0) {
//         return `чет`
//     } else {
//         return `нечет`
//     }
// })

// console.log(result13);

//for

let result13: string[] = [];

for (let i: number = 0; i < arr13.length; i++) {
    if (arr13[i] % 2 == 0) result13.push(`chet`)
    else { result13.push(` nechet`) }
}

console.log(result13);