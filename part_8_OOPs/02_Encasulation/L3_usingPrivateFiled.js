/*
-The #balance field is a true private property.
-It’s enforced by the JavaScript engine itself, not just a naming convention.
*/

class BankAccount {
  #balance; //true private field

  constructor(owner, balance) {
    this.owner = owner; // public property
    this.#balance = balance; // private property
  }

  /*
-this.owner → visible to the outside world.
-this.#balance → stored privately; only accessible inside the class.
*/

  getBalance() {
    return this.#balance;
  }
  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }
}
const acc = new BankAccount("kiran", 500);
console.log(acc.owner); // ✅ Kiran
console.log(acc.getBalance()); // ✅ 5000
acc.deposit(1000);
console.log(acc.getBalance()); // ✅ 6000
// console.log(acc.#balance); // ❌ SyntaxError (true private)

/*
✅ Summary

You're not required to use get/set; it's just syntactic sugar to make your code feel more like you're accessing properties, not calling functions.

Using get/set is cleaner and more elegant in some cases.

Your class is working fine — you're just using explicit methods instead of getters/setters.

when we access via property use get.Balance
when we access via method use get.Balance() to get balance
*/
