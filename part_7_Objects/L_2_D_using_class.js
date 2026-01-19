// 4. using class

class Person4 {
  constructor(name, age) {
    // special method, runs when object is created
    this.name = name;
    this.age = age;
  }
  greet() {
    // method shared by all objects
    console.log("hi my name is " + this.name);
  }
}
const user4 = new Person4("kiran", 25);
console.log(user4);
user4.greet();

// constructor() → sets up properties when creating an object.
// Methods written inside class are shared (memory-efficient).
// Use new keyword to create an object from a class.

// 🔹 Extra Features You’ll Often See

// 1. Inheritance (one class extends another)

class Student extends Person4 {
  constructor(name, age, subject) {
    super(name, age); // call parent constructor
    this.subject = subject;
  }
  study() {
    console.log(this.name + " studies " + this.subject);
  }
}
const s1 = new Student("Kiran", 25, "Math");
s1.greet();
s1.study();

// practical uses

class BankAccount {
  constructor(accountNo, balance) {
    this.accountNo = accountNo;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log("Balance: " + this.balance);
  }
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Not enough money!");
    }
    this.balance -= amount;
    console.log("balance : " + this.balance);
  }
}
const acc = new BankAccount(101, 5000);
acc.deposit(1000);
acc.withdraw(1000);

/*

🔹 Conclusion (Beginner-Friendly)
-Class = Blueprint for making objects.
-Use constructor for properties.
-Use methods inside the class → shared by all objects.
-Use new to create objects.
-Classes are cleaner than old constructor functions, and they are the modern standard for 
 object creation in JavaScript.
*/

/**
-prototype exists only on constructor functions / classes, not on instances.
-carObj is an instance (an object created from the class), so it does not have 
 a prototype property. 
 */
