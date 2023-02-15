// На входе статичный объект и строка str. Необходимо найти в объекте ключ str и
// вывести true при наличии совпадения, false в противном случае

const obj = {
   name_: `string`,
   test: `gnirts`,
}

const str = `test`;

console.log(obj.hasOwnProperty(str));