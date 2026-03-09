/*
Rule 6 — this in Constructor Functions

When a function is called with the new keyword, JavaScript creates a new object, and this refers to that new object.


*/

function Person(name, age) {
  this.name = name;
  this.age = age;
}
const p1 = new Person("kiran", 26);

console.log(p1);

/*
Step-by-Step What Happens

When you write:

const user1 = new User("Kiran", 25)

JavaScript internally does 4 steps.

Step 1 — Create Empty Object
{}

Step 2 — Bind this to the New Object
this = {}

Step 3 — Execute Function Code
this.name = name
this.age = age

So the object becomes:

{ name: "Kiran", age: 25 }

Step 4 — Return the Object

user1 = {
  name: "Kiran",
  age: 25
}

*/