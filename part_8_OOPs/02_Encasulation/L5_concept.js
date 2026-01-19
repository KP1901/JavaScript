/*
Closure Style vs Prototype Style Encapsulation in JavaScript

=====================================================
🔑 Summary of Concept
=====================================================

- Closure style (let _balance)
  → Private data via closure
  → BUT methods are recreated per instance
  → Less memory efficient

- Prototype style (#balance or normal prototype methods)
  → Private data (with #balance)
  → Methods are shared across all instances
  → More memory efficient
*/

// ===================================================
// 1️⃣ Closure Style (methods inside constructor)
// ===================================================

class BankAccountClosure {
  constructor(owner, balance) {
    let _balance = balance; // private to this constructor call
    this.owner = owner;

    // ❌ Methods created per instance
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

const acc1 = new BankAccountClosure("Kiran", 1000);
const acc2 = new BankAccountClosure("Aryan", 2000);

console.log(acc1.getBalance()); // 1000
console.log(acc2.getBalance()); // 2000
console.log(acc1.getBalance === acc2.getBalance); // false (different functions)

/*
🔎 Visual Representation

acc1
- _balance = 1000 (private closure)
- getBalance → unique function for acc1
- deposit   → unique function for acc1
- withdraw  → unique function for acc1

acc2
- _balance = 2000 (private closure)
- getBalance → new function for acc2
- deposit   → new function for acc2
- withdraw  → new function for acc2

⚠️ Each object has its own copies of methods → higher memory use
*/

// ===================================================
// 2️⃣ Prototype Style (methods outside constructor)
// ===================================================

class BankAccountPrototype {
  // private field (true encapsulation)
  #balance;

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  // ✅ Methods defined once on prototype
  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`${amount} deposited. New balance: ${this.#balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`${amount} withdrawn. New balance: ${this.#balance}`);
    } else {
      console.log("Invalid withdraw amount or insufficient funds.");
    }
  }
}

const acc3 = new BankAccountPrototype("Kiran", 5000);

console.log(acc3.owner); // Kiran
console.log(acc3.getBalance()); // 5000
acc3.deposit(2000); // 2000 deposited. New balance: 7000
acc3.withdraw(1500); // 1500 withdrawn. New balance: 5500
console.log(acc3.getBalance()); // 5500

// ❌ Direct access is blocked
// console.log(acc3.#balance);  // SyntaxError

/*
🔎 Visual Representation

acc3
- owner = "Kiran"
- #balance = 5000
- No methods stored directly on acc3
- Looks up methods (getBalance, deposit, withdraw) on BankAccountPrototype.prototype

acc4 (if created)
- Different #balance value
- Same shared methods on prototype

✅ All instances share the same methods → efficient memory usage
*/
