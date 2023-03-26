// Отобразить в div массив из 15 рандомных значений от 0 до 100. Необходимо
// распознать по какому из значений контейнера производится событие клика. Если
// клик происходит, то удалить данное значение из массива в div
class Elements {
  constructor() {
      this.arr = []
      this.generateRandomEls()
      this.bindAction__Event()
  }

  generateRandomEls() {
      for (let i = 0; i < 15; i++) {
          this.arr.push(Math.round(Math.random() * 100))
      }
      this.showElements()
  }

  bindAction__Event() {
      document.querySelector('div').addEventListener('click', (event) => {
          const arrFilt = this.arr.filter(function (el) {
              return el != event.target.textContent ? true : false
          })

          this.arr = arrFilt
          this.showElements()
      })
  }

  showElements() {
      document.querySelector('div').innerHTML = ''
      for (let i = 0; i < this.arr.length; i++) {
          const newP = document.createElement('p') 
          newP.innerHTML = this.arr[i] 
          document.querySelector('div').appendChild(newP)
      }
  }
}


const elements = new Elements()