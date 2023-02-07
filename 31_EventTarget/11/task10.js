// Реализуйте функцию, принимающую 2 строки и возвращающую, true, если часть
// одной строки можно переставить так, чтобы она соответствовала 2 строке, и false в
// противном случае, если совпадений нет
// “rkqodlw”, “world” –> true (rkqodlw содержит world)
// “katas”, “steak” –> false (katas не включает steak после перестановки символов)

let str1 = `qwerty`.split(``).sort().join(``)
let str2 = `morty`.split(``).sort().join(``)

function isIncludes(str1_, str2_) {
    try {
        let count = 0;
        for (let i = 0; i < str2_.length; i++) {

            if (str1_.isIncludes(str2_[i])) {
                count++
            }
        }
    } catch (err) {
        return err.message
    }
}
let result = isIncludes(str1, str2)