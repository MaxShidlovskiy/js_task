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
