/*
 1️⃣ Old style (Function constructor)
 -Here, the function itself acts like the constructor.
 -We don’t write constructor(...) inside — because in this old style, the function body is the constructor.
*/

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
console.log(account.getBalance());

// only problem is if we have 100 account then 100 getbalancem methods are copied because they are created inside construction if you create outside constructor then they belongs to prototype which share same method to all instance 
