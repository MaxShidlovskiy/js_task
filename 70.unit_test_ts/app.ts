// 1. Напишите функцию isPalindrome(word: string): boolean, которая принимает слово
// и возвращает true, если оно является палиндромом (читается одинаково слева
// направо и справа налево), и false в противном случае.

function isPalindrome(word: any): boolean {
    try {
        if (typeof word !== `string`) throw new Error(`это не строка`)
        const reverseWord = word.split(``).reverse().join(``);
        if (word !== reverseWord) return false
        return true
    } catch (error) {
        return error.message
    }
}

// 2. Напишите функцию calculateFactorial(n: number): number, которая принимает
// число n и возвращает его факториал.

function calculateFactorial(n: any): number | string {
    try {
        if (typeof n !== 'number') throw new Error(`not a number`);
        if (n < 0) throw new Error(`число отрицательное`);
        let result: number = 1;
        for (let i = 1; i <= n; i++) {
            const elem = i;
            result *= elem;
        }
        return result
    } catch (error) {
        return error.message
    }
}

// 3. Напишите функцию capitalizeString(str: string): string, которая принимает строку и
// возвращает новую строку, в которой каждое слово начинается с заглавной буквы.

function capitalizeString(str: any): string {
    try {
        if (typeof str !== `string`) throw new Error(`передана не строка`);
        let temp: string[] = str.split(` `);
        let result = '';
        for (let i = 0; i < temp.length; i++) {
            let element = temp[i];
            result += element[0].toUpperCase() + element.slice(1) + ' ';
        }
        return result.trim();
    } catch (error) {
        return error.message
    }
}

// 4. Напишите функцию flattenArray(array: any[]): any[], которая принимает массив, в
// котором могут быть вложенные массивы, и возвращает новый массив, в котором
// все элементы являются плоским списком без вложенности.

function flattenArray(array: any): any[] {
    try {
        if (!Array.isArray(array)) throw new Error(`not array`);
        if (!array.length) throw new Error(`empty array`);
        return array.flat(Infinity)
    } catch (error) {
        return error.message
    }
}

// 8. Создайте класс StringArray, который имеет свойство array (массив строк) и методы:
// getLongestWord(): string - возвращает самое длинное слово из массива.
// getUniqueWords(): string[] - возвращает массив уникальных слов из массива.
class StringArray {
    getLongestWord(array: any[]) {
        let checkLength = 0;
        let word = '';
        for (let i = 0; i < array.length; i++) {
            if (array[i].length > checkLength) {
                checkLength = array[i].length
                word = array[i]
            }
        }
        return word
    }

    getUniqueWords(array: any[]) {
        let noIncludes: any[] = []
        for (let i = 0; i < array.length; i++) {
            !noIncludes.includes(array[i]) ? noIncludes.push(array[i]) : null
        }
        return noIncludes
    }

}

// 10. Реализуйте функцию, которая принимает в качестве параметра строку и 
// возвращает массив без каких-либо элементов с одинаковым значением рядом 
// друг с другом.
// Написать тест для функции
// 'AAAABBBCCDAABBB -> ['A', 'B', 'C', 'D', 'A', 'B’] 
// 'ABBCcAD’ -> ['A', 'B', 'C', 'c', 'A', 'D’] 
// '12233’ -> [1, 2, 3]
// Написать тест для функции



export { StringArray, isPalindrome, calculateFactorial, capitalizeString, flattenArray }