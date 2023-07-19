import { isPalindrome, calculateFactorial, capitalizeString, flattenArray } from "./app";

describe(`тест 1`, () => {
    test(`Success`, () => {
        const result = isPalindrome(`string`)
        expect(result).toBe(false)
    })
    test(`Success`, () => {
        const result = isPalindrome(`qwewq`)
        expect(result).toBe(true)
    })
    test(`Success`, () => {
        const result = isPalindrome(123)
        expect(result).toBe(`это не строка`)
    })
})

describe(`тест 2`, () => {
    test(`Success`, () => {
        const result = calculateFactorial(`factorial`)
        expect(result).toBe(`not a number`)
    })
    test(`Success`, () => {
        const result = calculateFactorial(5)
        expect(result).toBe(120)
    })
    test(`Success`, () => {
        const result = calculateFactorial(-10)
        expect(result).toBe(`число отрицательное`)
    })
})

describe(`тест 3`, () => {
    test(`Success`, () => {
        const result = capitalizeString(123)
        expect(result).toBe(`передана не строка`)
    })
    test(`Success`, () => {
        const result = capitalizeString('hello world')
        expect(result).toBe('Hello World')
    })

})

describe(`тест 4`, () => {
    test(`Success`, () => {
        const result = flattenArray([1, 2, [3]])
        expect(result).toEqual([1, 2, 3])
    })
    test(`Success`, () => {
        const result = flattenArray([1, 2, [3, 4, 5, [6, [7, 8]]]])
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
    })
    test(`Success`, () => {
        const result = flattenArray("string");
        expect(result).toBe(`not array`);
    })
    test(`Success`, () => {
        const result = flattenArray([])
        expect(result).toBe(`empty array`)
    })
})