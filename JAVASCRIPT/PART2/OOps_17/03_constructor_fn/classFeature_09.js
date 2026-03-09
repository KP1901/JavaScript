/*
What Are Private Fields

Private fields are class properties that cannot be accessed outside the class.

They start with:

#

Example:

class Bank {
  #balance = 0
}

Here:

#balance → private field

*/

// basic example

class Bank {
  #balance = 0; // private field

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }

  showBalance() {
    return this.#balance;
  }
}
const account = new Bank();

account.deposit(2000);
console.log(account.showBalance());

/*
What actually happens

In JavaScript:

_name is NOT private.

It is only a naming convention used by developers.

The underscore _ means:

"This property should be treated as internal. Please don't access it directly."

But JavaScript does not enforce it.

Before ES2022, JavaScript had no real private fields, so developers used the _ naming convention to indicate that a property should be treated as private. However, JavaScript did not enforce this. In ES2022, true private fields were introduced using #.
-Now the outside world cannot directly modify private field.
-only methods are access outside of world
*/

class Person {
  constructor(name) {
    this._name = name;
  }
  greet() {
    console.log("Hello " + this._name);
  }
}

const p1 = new Person("kiran");
console.log(p1._name); // accessible directly (but should be avoided by convention)

p1._name = "ajit"; // accessible (but should be avoided by convention)
console.log(p1._name); // accessible (but should be avoided by convention)

// example 3

class Counter {
  #count = 0;

  increment() {
    this.#count++;
  }
  getCount() {
    return this.#count;
  }
}
const c1 = new Counter();
c1.increment();
c1.increment();
console.log(c1.getCount());
