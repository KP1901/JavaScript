
/*
How the new Keyword Works Internally

When you write:

const user = new User("Kiran", 25)

JavaScript performs 4 hidden steps internally.

Step 1 — Create a New Empty Object

JavaScript first creates an empty object.

{}

Example internally:

let obj = {}


Step 2 — Link the Object to Prototype

JavaScript connects the object to the constructor's prototype.

Conceptually:

obj.__proto__ = User.prototype

This step is very important for prototypes (we will study later).

Step 3 — Bind this to the New Object

Now the constructor function runs.

User.call(obj, "Kiran", 25)

So inside the constructor:

this = obj

Then the code runs:

this.name = name
this.age = age

Object becomes:

{ name: "Kiran", age: 25 }

Step 4 — Return the Object

Finally JavaScript returns the object.

return obj

So:

const user = obj
*/