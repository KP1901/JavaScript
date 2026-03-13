/*
Getters and Setters

Getters and setters allow us to control how properties are accessed and modified.

Instead of calling a function, we can use properties like normal variables.

Getters and setters allow a property to behave like a normal property access, but internally they execute functions.

So instead of calling a function, you access a property, and JavaScript automatically calls the function.

*/

class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
}
const p = new Person("kiran");

console.log(p.name);

p.name = "Ajit";

console.log(p.name);

/*
You never call getter/setter manually.

❌ Not like this

p.getName()

Instead JavaScript calls them automatically.

| Code              | What runs |
| ----------------- | --------- |
| `p.name`          | getter    |
| `p.name = "Ajit"` | setter    |

*/

// realWorld Example

class BankAccount {
  constructor(balance) {
    this._balance = balance;
  }
  get balance() {
    return this._balance;
  }

  set balance(amount) {
    if (amount < 0) {
      console.log("invalid");
      return;
    }
    this._balance = amount;
  }
}
let account = new BankAccount(1000);

console.log(account.balance);

account.balance -= 1000;

console.log(account.balance);
