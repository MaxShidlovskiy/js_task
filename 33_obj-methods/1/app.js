// На входе статичный объект и строка str. Необходимо найти в объекте ключ str и
// вывести true при наличии совпадения, false в противном случае

const obj = {
   name_: `string`,
}

const str = `sdr`;

console.log(obj.hasOwnProperty(str));