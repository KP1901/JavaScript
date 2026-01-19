/*
=====================================================
🔑 Implicit vs Explicit Prototype Inheritance in JS
=====================================================

1. Implicit Prototype Inheritance
   - Happens automatically when you create objects using constructors or classes.
   - Every object is internally linked to its prototype via `__proto__`.
   - You don’t manually set the inheritance chain.

2. Explicit Prototype Inheritance
   - You manually set the prototype of one object to another.
   - Useful for creating inheritance chains between constructor functions or custom objects.
   - Achieved using:
       - Object.create()
       - Object.setPrototypeOf()
       - Constructor.prototype = Object.create(Parent.prototype)

-----------------------------------------------------
*/

// ================================================
// 1️⃣ Implicit Prototype Inheritance Example
// ================================================
function Person(name) {
  this.name = name;
}

// Adding method to Person prototype
Person.prototype.greet = function () {
  console.log("Hello, I am " + this.name);
};

const john = new Person("John");

// john automatically inherits from Person.prototype
john.greet(); // ✅ "Hello, I am John"
console.log(john.__proto__ === Person.prototype); // true

// ================================================
// 2️⃣ Explicit Prototype Inheritance Example
// ================================================

// Parent constructor
function Animal(type) {
  this.type = type;
}

Animal.prototype.eat = function () {
  console.log(this.type + " is eating");
};

// Child constructor
function Dog(name) {
  // Call parent constructor
  Animal.call(this, "Dog");
  this.name = name;
}

// Explicitly set Dog.prototype to inherit from Animal.prototype
Dog.prototype = Object.create(Animal.prototype);

// Reset constructor (important step)
Dog.prototype.constructor = Dog;

// Add child-specific method
Dog.prototype.bark = function () {
  console.log(this.name + " says Woof!");
};

const tommy = new Dog("Tommy");

// Now Dog explicitly inherits from Animal
tommy.eat(); // ✅ Dog is eating
tommy.bark(); // ✅ Tommy says Woof!
