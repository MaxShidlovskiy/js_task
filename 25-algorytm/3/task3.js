// Напишите функцию, которая принимает почту и возвращает объект, вида
// {
// email,
// active: true / false
// }
// true, если почта содержит @, .com / .ru. False в противном случае


const srt = `google@gmail.com`;

function doEmail(str) {
    if (str.include(`@`) && str.includes(`.com`) || str.includes(`.ru`)) {
        return {
            email: str,
            active: true
        }
    } else {
        return false
    }
}
doEmail(str)