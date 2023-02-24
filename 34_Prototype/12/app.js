// Реализуйте функцию, которая будет считать количество своих вызовов.

function wrapper() {
    let result = 0
    return () => {

        console.log(result++);
    }
}
let result = wrapper()
result()
result()
result()