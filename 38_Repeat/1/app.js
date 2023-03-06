class Client {

   constructor() {

      this.sendRequest()
   }

   sendRequest() {
      const btn = document.querySelector(`button`);
      const email = document.querySelector(`.email`);
      const pwd = document.querySelector(`.pwd`);
      const result = document.querySelector(`div`);
      this.btn.addEventListener(`click`, function () {
         const object = {
            email: this.email.value,
            pwd: this.pwd.value
         }
         this.result.innerHTML = object

         console.log(object)
      });
   }
}

let result = new Client();