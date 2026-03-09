/*
Step 6 — ES6 Classes.

This is the modern way of writing OOP in JavaScript.

But remember an important truth:

Classes are just syntax sugar over constructor functions

Internally JavaScript still uses prototypes and the prototype chain.

*/

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("HEllo " + this.name);
  }
}
const u1 = new User("kiran", 26);
u1.details();

console.log(u1.__proto__ === User.prototype);
