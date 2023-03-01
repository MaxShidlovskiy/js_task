// Классы Person и Customer. Напишите класс Person с атрибутами данных для
// имени, адреса и телефонного номера человека. Затем напишите класс Customer
// (Клиент), который является подклассом класса Person. Класс Customer должен
// иметь поле для номера клиента и атрибут булевых данных,
// указывающий, хочет ли клиент быть в списке рассылки или нет.
// Продемонстрируйте экземпляр класса Customer в простой программе

class Person {
    name;
    addres;
    phoneNumber;

    getName() {
        return this.name;
    }
    gerAdrees() {
        return this.addres;
    }
    getPhoneNumber() {
        return this.phoneNumber
    }
    setName(name) {
        this.name = name;
    }
    setAddress(addr) {
        this.address = addr;
            }
}

class Customer extends Person {
    costomerId;
    bool;
}
getCustomer

customer.setName(`John`);
customer.setAddress(`Mins`);
customer.setPhoneNumber(37525131549);
customer.setCustomerId