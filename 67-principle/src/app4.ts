// 4. Создайте класс Student, который содержит свойства name (имя) и age (возраст).
// Инициализация свойств name, age происходит в getter, setter класса. Создайте
// несколько экземпляров класса Student и выведите их свойства.
class Student4 {

    name: string;
    age: number;

    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
    setName(name: string) {
        this.name = name
    }
    setAge(age: number) {
        this.age = age
    }
}

const student4 = new Student4()

student4.setName(`Maxim`)
student4.setAge(30)

console.log(student4.getName());
console.log(student4.getAge());