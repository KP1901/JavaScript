function BankAccount(owner, balance) {
  let _balance = balance;
  this.owner = owner;
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

let acc1 = new BankAccount("kiran", 2000000);

console.log(acc1.owner);
console.log(acc1.getBalance());
