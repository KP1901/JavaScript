/*
Imagine you want to create many similar objects.

Example:

const user1 = {
  name: "Kiran",
  age: 25
}

const user2 = {
  name: "Rahul",
  age: 30
}

const user3 = {
  name: "Amit",
  age: 28
}

Problem:

Code repetition
Hard to scale
Hard to maintain

So JavaScript introduced Constructor Functions.

-------------------------------------------------------
Constructor Function Concept

A constructor function is a blueprint to create objects.

Example:

function User(name, age) {
  this.name = name
  this.age = age
}

Here:

User → constructor function
-------------------------------------------------------

Creating Objects

We create objects using new.

const user1 = new User("Kiran", 25)
const user2 = new User("Rahul", 30)

Result:

user1 → { name: "Kiran", age: 25 }
user2 → { name: "Rahul", age: 30 }

-------------------------------------------------------
Adding Methods

We can also add methods.

function User(name, age) {
  this.name = name
  this.age = age

  this.greet = function() {
    console.log("Hello " + this.name)
  }
}

const user1 = new User("Kiran", 25)
user1.greet()

Output:

Hello Kiran
*/

function Person(fname, lname) {
  this.fname = fname;
  this.lname = lname;

  this.greet = function () {
    console.log("Hello " + this.fname);
  };
}

const p1 = new Person("kiran", "patodekar");
p1.greet();

const p2 = new Person("ajit", "jadhav");
p2.greet();

/*
But There Is a Big Problem 🚨

Every object creates its own copy of the function.

Example:

const u1 = new User("Kiran", 25)
const u2 = new User("Rahul", 30)

Memory structure:

u1
 ├ name
 ├ age
 └ greet()  ← new function

u2
 ├ name
 ├ age
 └ greet()  ← another new function

So:

greet function duplicated many times

This wastes memory.

This Problem Led to the Most Important Concept in JS OOP

JavaScript solved this using:

PROTOTYPES = > All objects share ONE greet function

*/
