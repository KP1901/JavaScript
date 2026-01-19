// closure vs prototype chain diagrams:

/*
=====================================================
1️⃣ Closure Style (methods inside constructor)
=====================================================

- Private data with closure (let _balance).
- BUT every instance gets its own copy of methods.
- Less memory efficient.
*/

class BankAccountClosure {
  constructor(owner, balance) {
    let _balance = balance; // private for this object only
    this.owner = owner;

    // ❌ Each instance gets its own copy
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
console.log(acc1.getBalance === acc2.getBalance); // false

/*
🔎 Prototype Chain (Closure Style)

acc1 {
   owner: "Kiran",
   getBalance: f()   // unique for acc1
   deposit: f()      // unique for acc1
   withdraw: f()     // unique for acc1
   __proto__ ---> BankAccountClosure.prototype
                        constructor: f BankAccountClosure
                        __proto__ ---> Object.prototype
}

⚠️ Each object stores its own function copies
*/

/*
=====================================================
2️⃣ Prototype Style (methods outside constructor)
=====================================================

- Private data with #balance (class fields).
- Methods defined once on prototype.
- All instances share same methods.
- More memory efficient.
*/

class BankAccountPrototype {
  #balance;

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  // ✅ Shared methods on prototype
  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`${amount} deposited. New balance: ${this.#balance}`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`${amount} withdrawn. New balance: ${this.#balance}`);
    }
  }
}

const acc3 = new BankAccountPrototype("Aryan", 2000);
const acc4 = new BankAccountPrototype("Kiran", 3000);

console.log(acc3.getBalance()); // 2000
console.log(acc4.getBalance()); // 3000
console.log(acc3.getBalance === acc4.getBalance); // true
console.log(Object.getOwnPropertyNames(acc3.__proto__));

/*
🔎 Prototype Chain (Prototype Style)

acc3 {
   owner: "Aryan",
   #balance: 2000  // private, hidden
   __proto__ ---> BankAccountPrototype.prototype
                        getBalance: f()  // shared
                        deposit: f()     // shared
                        withdraw: f()    // shared
                        constructor: f BankAccountPrototype
                        __proto__ ---> Object.prototype
}

✅ All objects share the same methods
*/

/*
=====================================================
📌 Key Comparison
=====================================================

Closure Style:
- Private data with closure
- Each object → its own copy of methods
- Memory inefficient

Prototype Style:
- Private data with #balance
- Methods shared across all objects
- Memory efficient
*/
