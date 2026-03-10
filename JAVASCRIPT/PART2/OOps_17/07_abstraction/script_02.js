// ✅ Constructor Function for BankAccount

function BankAccount(owner, balance) {
  let _balance = balance; // private variable using closure (encapsulation)
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

let acc1 = new BankAccount("kiran", 20000);

console.log(acc1.owner); // public → Kiran
console.log(acc1.getBalance()); // private access → 20000

acc1.deposit(2000); // Deposited: 2000
console.log(acc1.getBalance()); // 22000

acc1.withdraw(3000); // Withdrew: 3000
console.log(acc1.getBalance()); // 19000

/*

1️⃣ Encapsulation in Your Code

Encapsulation means:

Hiding internal data and control/modify access given to method.

In your code:

let _balance = balance;

_balance is not accessible outside the constructor because it lives inside the closure.

So this will fail:

console.log(acc1._balance); 

Output:

undefined

Because _balance is private.

Only these methods can access it:

this.getBalance()
this.deposit()
this.withdraw()

So this part is Encapsulation.

2️⃣ Abstraction in Your Code

Abstraction means:
User only interacts with simple methods without knowing the internal logic.

User only sees this interface:

acc1.deposit(2000)
acc1.withdraw(3000)
acc1.getBalance()

User does not know:

-where balance is stored
-how validation works
-how money is updated

For example:

this.deposit = function (amount) {
  if (amount > 0) _balance += amount;
};

The user only calls:

deposit()

They don't know the internal logic.

That is Abstraction.

| Concept           | Where it appears                                                   |
| ----------------- | ------------------------------------------------------------------ |
| **Encapsulation** | `_balance` hidden using closure                                    |
| **Abstraction**   | user only interacts with `deposit()`, `withdraw()`, `getBalance()` |

*/
