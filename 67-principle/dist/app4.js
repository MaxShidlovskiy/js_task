// Создать интерфейс iAccount. Создайте класс "Счет" (Account), который содержит
// свойство "баланс" (balance) и методы "пополнить счет" (deposit) и "снять со счета"
// (withdraw). Установите приватное свойство "баланс" и обеспечьте доступ к нему
// только через методы класса. Реализуйте проверку на достаточность средств
// перед снятием со счета.
class Account4 {
    balance = 0;
    deposit(value) {
        this.balance += value;
        return this.balance;
    }
    withdraw(value) {
        this.balance -= value;
        return this.balance;
    }
}
const account4 = new Account4();
console.log(account4.deposit(1000));
console.log(account4.withdraw(777));
