function creatAccount(initialBalance) {
  let balance = initialBalance;
  function deposit(amount) {
    balance += amount;
    return balance;
  }
  function withdraw(amount) {
    balance -= amount;
    return balance;
  }
  function checkBalance() {
    return balance;
  }
  return { deposit, withdraw, checkBalance };
}

const account = creatAccount(10000);
console.log(account.deposit(1000));
console.log(account.withdraw(1000));
console.log(account.checkBalance());
