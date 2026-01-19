// ✅ Constructor Function for BankAccount
// Perfect 👌 you’ve written the constructor-function style but wrapped inside a class.

class BankAccount {
  constructor(owner, balance) {
    let _balance = balance; // hidden detail (encapsulation)
    this.owner = owner;

    // abstraction: user only knows they can "getBalance"
    this.getBalance = function () {
      return _balance;
    };

    this.deposit = function (amount) {
      if (amount > 0) _balance += amount;
    };

    this.withdraw = function (amount) {
      if (amount > 0 && amount <= _balance) {
        _balance -= amount;
      }
    };
  }
}

let acc1 = new BankAccount("kiran", 20000);

console.log(acc1.owner); // public → Kiran
console.log(acc1.getBalance()); // private access → 20000

acc1.deposit(2000); // Deposited: 2000
console.log(acc1.getBalance()); // 22000

acc1.withdraw(3000); // Withdrew: 3000
console.log(acc1.getBalance()); // 19000
