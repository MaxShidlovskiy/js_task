// На входе строка в виде пароля. Необходимо написать функцию на проверку, что
// пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
// буквы, символ, длина не менее 8 символов)


const n = `DKMEIS^HE32`;

function chek(pwd) {
  let upper = 0;
  let lower = 0;
  let num = 0;
  for (let i = 0; i < pwd.length; i++) {
    pwd[i] === pwd[i].toUpperCase() ? upper++ : null;
    pwd[i] === pwd[i].toUpperCase() ? lower++ : null;
    pwd[i] === 1 || pwd[i] === 2 || pwd[i] === 3 || pwd[i] === 4 || pwd[i] === 5 || pwd[i] === 6 || pwd[i] === 7;

  }

  let countSymbolSpec = pwd.length - (upper + lower + num)
  return countSymbolSpec > 0 && upper > 0 && lower > 0 && num > 0 ? true : false
}
chek(a);