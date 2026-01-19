// 1️⃣ Parent Class

// class Person { ... } → defines a parent class.

// step 1
class Person {
  // constructor(name) → called when we do new Person().

  constructor(name) {
    this.name = name; // Own property of instance
  }

  // Method on Person.prototype not in object itself

  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  }

  // 5️⃣ Static Methods Inheritance
  static species() {
    return "Home Species";
  }
}
// Child Class inherits from Person

// step 2

class Employee extends Person {
  /*
  ihheritated name,sayHi(),species()

-sayHi() → inherited via prototype chain (Person.prototype) ✅
-species() → static, not inherited by instances unless you  explicitly attach it 
 (like you did with this.species = this.constructor.species) ✅

*/
  constructor(name, role) {
    // If a child class has a constructor, it must call super() before using this.

    super(name); // call parent constructor setup name property

    this.role = role; // own proerrty of child

    // Attach static method to this instance manually
    // With this.constructor.species in the constructor, every instance gets it automatically.

    this.species = this.constructor.species;
  }

  // Method on Employee.prototype not in object itself

  work() {
    console.log(`My role is ${this.role}`);
  }

  //step 4-  method overriding  on Employee.prototype not in object itself
  // emp1.sayHi → Employee.prototype.sayHi → used
  // Parent’s sayHi → ignored unless explicitly called

  sayHi() {
    // step 5  Calling Parent Method via super
    // super.sayHi() → calls Person.prototype.sayHi for this instance.

    super.sayHi();
    console.log(`Hello, I am ${this.name}, working as ${this.role}`);
  }
}
// new Employee("Kiran") → creates an instance:

// step 3

const emp1 = new Employee("kiran", "Frontend Enginner");
emp1.sayHi();
emp1.work();
console.log(emp1.species());

//another way Attach static method dynamically
// This only affects emp1. Other instances of Employee don’t automatically get this.

emp1.species = Employee.species;

/*
emp1.__proto__ === Employee.prototype
Employee.prototype.__proto__ === Person.prototype

This is prototype chaining. If sayHi() is not on emp1, JS looks up Employee.prototype, then Person.prototype.

emp1.sayHi() → finds the method in Person.prototype and runs it.

chaining :
emp2.__proto__ → Employee.prototype -> Employee.prototype__proto__ → Person.prototype -> Person.prototype__proto__ → Object.prototype ->   Person.prototype__proto__ = null
or 
emp1.__proto__ → Employee.prototype → Person.prototype → Object.prototype

*/
