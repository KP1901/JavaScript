// 1️⃣ Old style (Function constructor)
// Here, the function itself acts like the constructor.
// We don’t write constructor(...) inside — because in this old style, the function body is the constructor.

function BankAccount(owner, balance) {
  let _balance = balance; // hidden in closure

  this.owner = owner; // public property

  // public method to access balance
  // this are explicit methods not a properties / implicity methods that why we are using a calling "account.getBalance()"

  this.getBalance = function () {
    return _balance;
  };

  // public method to modify balance

  this.deposit = function (amount) {
    if (amount > 0) _balance += amount;
  };
}
const account = new BankAccount("kiran", 10000);
console.log(account.owner);
console.log(account.getBalance());
account.deposit(500);
console.log(account.getBalance());
console.log(account._balance); // undefined()private

/*
In function constructors, getters/setters don't work like properties unless you explicitly define them using Object.defineProperty.

Object.defineProperty(this, 'balance', {
    get: function () {
      return _balance;
    },
    set: function (amount) {
      if (amount > 0) _balance += amount;
    }
  });
  now you call like it property acc.balance
*/
