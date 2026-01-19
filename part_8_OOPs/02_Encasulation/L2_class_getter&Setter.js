// getter/setter encapsulation pattern in ES6 classes

/*
-this.owner → public property.
-this._balance → also public (technically), but the underscore _ is a  developer convention meaning “don’t touch this directly, use the getter/setter instead.” (_ it doesnt enforeced by js)

a imp difference - 
-_property only “says” it’s private (like a warning label).
-But in reality, it’s just a normal public property → you can read and write it anytime.

*/
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this._balance = balance; // convention: "_" means private (not enforced)
    // other can access only balance not _balance
  }

  /*
=>getter

Defines a virtual property balance.

When you write acc.balance, it doesn’t return the raw property — it calls this getter function.

That’s why console.log(acc.balance) → 2000.

*/

  get balance() {
    return this._balance;
  }

  /*
=> setter 

When you assign acc.balance = 3000;, JavaScript doesn’t overwrite balance directly.

Instead, it calls this setter function, passing 3000 as amount.

The setter validates the value → if valid, updates _balance

*/
  set balance(amount) {
    if (amount > 0) {
      this._balance = amount;
    } else {
      console.log("invalid balance");
    }
  }
}
const acc = new BankAccount("kiran", 20000);
console.log(acc.balance); // ✅ 2000
acc.balance = 3000; // ✅ Valid
console.log(acc.balance); // ✅ 3000
acc.balance = -10000; // ❌ Invalid balance!

// for imp difference how it works so avoid direct access
// acc._balance = -100;
// console.log(acc._balance);

/*
5️⃣ Key Point

-balance looks like a property, but it’s actually a getter/setter method pair.
_balance is the real storage.
-Encapsulation is achieved because external code should use balance, not  _balance. (means it just warn label that this is private  but you can access )
*/

/*
🔑 Conclusion

=>_balance with getter/setter

-Underscore _ = only a developer convention (not enforced by js).
-Outside code can still access/modify _balance directly.
-Encapsulation works only if developers respect the convention and always use balance getter/setter.

#balance (private field)
-# = true privacy enforced by JavaScript.
-Outside code cannot access it at all (acc.#balance → SyntaxError).
-This is the modern, secure way to achieve encapsulation in ES6+ classes.


⚖️ Conclusion

👉 If you use _property directly:
-The class loses encapsulation.
-Any “rules” inside the setter (like validation, logging, side effects) are skipped.
 You can corrupt the object state.

*/
