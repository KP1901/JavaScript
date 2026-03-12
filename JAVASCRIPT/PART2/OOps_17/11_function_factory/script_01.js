/*
A Factory Function relates to OOP because it is a way to create objects (instances) — just like classes or constructors.
In JavaScript, OOP can be implemented in multiple ways, and factory functions are one of them.
*/

function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      console.log("HI " + this.name);
    },
  };
}
const user = createUser("kiran", 25);

user.greet();

/*

Visual Idea

Factory Function
       │
       ▼
 createUser()
       │
       ▼
   object created

Example:

createUser("Kiran")
createUser("Rahul")
createUser("Amit")

Each call returns a new object.
----------------------------------------------------------
Why Factory Functions Are Useful

They allow:

simple object creation
encapsulation using closures
no need for classes or new

*/

/*
Example with Private Data

Factory functions can use closures to hide data.
*/

function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
    },

    getCount() {
      return count;
    },
  };
}

const counter = createCounter();

counter.increment();
counter.increment();

console.log(counter.getCount());

/*

Output :
2

Important:
count is private

Outside code cannot access it.

*/

/*

Factory vs Constructor

Constructor Function

function User(name) {
  this.name = name
}

const u = new User("Kiran")

Needs:
new

Factory Function

function createUser(name) {
  return { name }
}

const u = createUser("Kiran")

No new required.

*/
