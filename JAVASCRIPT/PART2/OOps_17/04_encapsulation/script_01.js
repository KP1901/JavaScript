/*
Encapsulation means:

-Hide internal details
-Expose only necessary functionality

You can achieve true encapsulation using:
Private fields (#) ✅
Closures ✅
But getter/setter alone cannot guarantee true encapsulation.

*/

// Example Without Encapsulation (Bad)

/*
1. Create new object {}
2. Set prototype → BankAccount.prototype
3. Bind `this` to the new object
4. Run constructor
5. Return object
*/

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

  constructor(balance) {
    this.#balance = balance;
  }

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

const account1 = new SBIAccount(1000);
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

//✅ "Since the function explicitly returns an object, the new keyword is not necessary."

const acc = NewBank(1000000);

console.log(acc.showBalance());

acc.deposit(1000);

console.log(acc.showBalance());

acc.balance = 300;

console.log(acc.balance);
console.log(acc.showBalance());

/*
Most IMp : 

1.Summary

With constructor functions, getters/setters are created using:

Object.defineProperty()

because get and set syntax belongs to objects and classes.


*/

function BankAccount(balance) {
  this._balance = balance; // convention: "_" means private-like

  Object.defineProperty(this, "balance", {
    get: function () {
      return this._balance;
    },
    set: function (value) {
      if (value < 0) {
        console.log("Invalid balance");
      } else {
        this._balance = value;
      }
    },
  });
}

const bank = new BankAccount(1000);

console.log(bank.balance); // getter → 1000

bank.balance = 2000; // setter
console.log(bank.balance); // 2000

/*

showBalance is:
Accessor property (getter)
defined on SBAccount.prototype

It is not:

instance method ❌
prototype method ❌

It is a prototype accessor property.

✅ So the classification is:

showBalance → prototype accessor property (getter)
deposit     → prototype accessor property (setter)
*/
