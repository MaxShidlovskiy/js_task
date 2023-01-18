// Напишите функцию, генерирующую надежный пароль. (Math.random)

function generatePwd() {
    let arr = [];
    while (arr.length != 8) {
        let rnd = Math.random() * 10;
        arr.push(Math.floor(rnd));

    }
    return arr;
}
let pwd = generatePwd();

console.log(pwd.join(``));