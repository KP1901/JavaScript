// In JavaScript, a constructor is a function or class method
// that is used to create and initialize objects.

// Example 1: Constructor Function
function Person(name, age) {
  this.name = name; // "this" refers to the new object
  this.age = age; // properties are initialized
}

const p1 = new Person("Alice", 25);
console.log(p1); // Person { name: "Alice", age: 25 }
console.log(p1.constructor); // function Person

// Example 2: Class Constructor (ES6)
class Employee {
  constructor(name, id) {
    // special method 'constructor'
    this.name = name;
    this.id = id;
  }
}

const e1 = new Employee("Bob", 101);
console.log(e1); // Employee { name: "Bob", id: 101 }
console.log(e1.constructor); // class Employee

/* 
Key points to mention in interview:
1. A constructor is used with 'new' to create and initialize objects.
2. Steps of 'new':
   - Creates an empty object
   - Links it to prototype
   - Binds 'this' to the new object
   - Runs the constructor function
   - Returns the object
3. By convention, constructor functions start with a capital letter.
4. Every function has a prototype.constructor property pointing back to itself.
*/
