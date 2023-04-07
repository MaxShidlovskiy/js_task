// 6. Допишите функционал регистрации. Небезопасно хранить в БД пароль в
// пользовательском виде. Необходимо написать алгоритм шифрования с помощью
// шифра Цезаря.
// Задание: На сервер подается объект с ключом pwd, как и сделано в предыдущем
// задании. Пароль – строка текста на английском языке, в которой нужно
// зашифровать все слова. Каждое слово строки следует зашифровать с помощью
// шифра Цезаря (циклического сдвига на длину этого слова). Буквы верхнего и
// нижнего регистров при этом не изменяют свой первоначальный регистр

class Client {
  doRegistration() {
    const btn = document.querySelector('button');
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');

    btn.addEventListener('click', () => {
      const object = {
        email: email.value,
        pwd: password.value,
      }
      // password.addEventListener.oninput = function () {
      // const offset = password.value.length;
      // let str = password.value;
      // let out = '';
      // for (let i = 0; i < str.length; i++) {
      //     let code = str.charCodeAt(i);
      //     code = code + offset;
      //     out += String.fromCharCode(code);
      // }
      // }

      let server = new Server();
      const result = server.controller(object);
      console.log(result);

    })
  }
}

class Server {

  controller(object) {
      const result = this.service(object);
      return result;
  }

  service(object) {
      const result = this.repository(object);
      return result;
  }

  repository(object) {
    const arr = [
        { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwdffff" },
        { "id": 2, "email": "hanna@mail.ru", "pwd": "pwdfevcrdv" },
        { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest" },
        { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq" },
        { "id": 5, "email": "maria@mail.ru", "pwd": "pwdfcel" }
    ];
    let filtered = arr.filter((elem) => elem.email === object.email);
    if (filtered.length > 0) throw new Error('такая почта уже есть');
    arr.push({ id: arr.length + 1, ...object });
    return arr;
}

}

let client = new Client();
client.doRegistration();