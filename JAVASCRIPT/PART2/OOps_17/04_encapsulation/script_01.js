/*
Encapsulation means:

Hide internal data
Expose controlled methods to interact with it

You can achieve true encapsulation using:
Private fields (#) ✅
Closures ✅
But getter/setter alone cannot guarantee true encapsulation.

*/

// Example Without Encapsulation (Bad)

class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }
}

const account = new BankAccount(1000);

account.balance = -5000;
console.log(account.balance);

// Anyone can change balance directly

// example with encpsulation with private field

class SBIAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account1 = new SBIAccount();
console.log(account1.getBalance());

account1.deposit(20000);
console.log(account1.getBalance());

account1.withdraw(500);
console.log(account1.getBalance());

/*
With getters and setters, encapsulation controls how a property is accessed or modified, but the underlying variable may still be accessible if it is not truly private.

Encapsulation means two things together:

1️⃣ Data hiding
2️⃣ Controlled access through methods

So the best design usually is:

Private field (#) → hide the data

Methods / getters / setters → control how it is accessed or modified

*/

// partial encapsulation using getter and setter

class SBAccount {
  constructor(balance) {
    this._balance = balance;
  }

  get showBalance() {
    return this._balance;
  }

  set deposit(amount) {
    this._balance += amount;
  }
}
const B1 = new SBAccount(10000);

B1.deposit = 400;

console.log(B1.showBalance);

console.log(B1._balance); // parital becuase balance can be access outside

// encapsulation using closure (data hidden + controller access)

function NewBank(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
    },

    showBalance() {
      return balance;
    },
  };
}
const acc = NewBank(1000000);

console.log(acc.showBalance());

acc.deposit(1000);

console.log(acc.showBalance());

acc.balance = 300;

console.log(acc.balance);
console.log(acc.showBalance());
