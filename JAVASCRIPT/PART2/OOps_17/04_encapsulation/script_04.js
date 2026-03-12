// “Constructor vs Prototype Methods in JavaScript Classes”

/*
=====================================================
🔴 Case 1: Method INSIDE constructor
=====================================================

👉 What happens?
- Every time we create a new object, the method is recreated.
- Each instance has its own copy of the function in memory.
- Wasteful if you create many objects.
*/

class BankAccountInside {
  constructor(owner, balance) {
    this.owner = owner;
    this._balance = balance;

    // ❌ Method defined INSIDE constructor
    this.getBalance = function () {
      return this._balance;
    };
  }
}

const acc1 = new BankAccountInside("Kiran", 5000);
const acc2 = new BankAccountInside("Rahul", 3000);

console.log(acc1.getBalance()); // 5000
console.log(acc2.getBalance()); // 3000

console.log(acc1.getBalance === acc2.getBalance);
// ❌ false → each object has a separate copy of getBalance()

/*
=====================================================
🟢 Case 2: Method OUTSIDE constructor (prototype)
=====================================================

👉 What happens?
- Methods are placed on the prototype.
- All objects share the same single method in memory.
- Much more efficient for many instances.
*/

class BankAccountOutside {
  constructor(owner, balance) {
    this.owner = owner;
    this._balance = balance;
  }

  // ✅ Method defined OUTSIDE constructor
  //    → Stored once on prototype
  getBalance() {
    return this._balance;
  }
}

const acc3 = new BankAccountOutside("Kiran", 5000);
const acc4 = new BankAccountOutside("Rahul", 3000);

console.log(acc3.getBalance()); // 5000
console.log(acc4.getBalance()); // 3000

console.log(acc3.getBalance === acc4.getBalance);
// console.log(Object.getOwnPropertyNames(BankAccountOutside.prototype));
// console.log(Object.getOwnPropertyNames(acc3.__proto__));
// console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(acc3)));

// ✅ true → both share the same getBalance() from prototype

/*
=====================================================
📌 Key Takeaway
=====================================================
- Inside constructor = new function copy for each object
- Outside constructor = single shared function on prototype
- Rule of thumb: Always put methods outside constructor
  unless you need closure-based privacy.


| Syntax                  | Method Type      |
| ----------------------- | ---------------- |
| `method() {}`           | prototype method |
| `method = function(){}` | instance method  |
| `method = () => {}`     | instance method  |

*/
