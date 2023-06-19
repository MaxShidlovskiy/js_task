// Создать интерфейс iAccount. Создайте класс "Счет" (Account), который содержит
// свойство "баланс" (balance) и методы "пополнить счет" (deposit) и "снять со счета"
// (withdraw). Установите приватное свойство "баланс" и обеспечьте доступ к нему
// только через методы класса. Реализуйте проверку на достаточность средств
// перед снятием со счета.

interface iAccount4 {
    balance: number;
    deposit(value: number): number;
    withdraw(value: number): number;
}

class Account4 implements iAccount4 {
    balance: number = 0;
    deposit(value: number): number {
        this.balance += value;
        return this.balance
    }
    withdraw(value: number): number {
        this.balance -= value;
        return this.balance
    }
}

const account4 = new Account4();
console.log(account4.deposit(1000));
console.log(account4.withdraw(777));
