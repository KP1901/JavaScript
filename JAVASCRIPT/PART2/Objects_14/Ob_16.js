// STEP 18: What the new keyword REALLY does

// 1️⃣ Simple example

function User(name) {
  this.name = name;
}
const u = new User("kiran");

// Looks simple, but a LOT happens behind the scenes.

// 2️⃣ What new does (4 hidden steps 🔒)
/*

When you run:

new User("Kiran")

Step 1: Create a new empty object

const u = {};

Step 2: Link prototype

u.__proto__ = User.prototype;

now 

obj → User.prototype → Object.prototype → null

Step 3: Call constructor with this

User.call(u,"kiran")

So inside User, this = u.

Step 4: Return the object

return u;

Unless constructor returns another object.
*/


/*

4️⃣ What happens if you forget new ❌
function User(name) {
  this.name = name;
}

const u = User("A"); // ❌


What happens:

this → global object (or undefined in strict mode)
name assigned wrongly
u becomes undefined

🚨 Common serious bug.

🔒 Lock this mental model

new = create empty object + link prototype + bind this + return object
----------------------------------------------------------------------------------------------------------
*/

/*

Let’s compare with the previous example (side by side)
✅ Case 1: No object returned (your current code)
function User(name) {
  this.name = name;
}


What happens internally:

JS creates a new object → {}

Sets this to that object

Runs:

this.name = name;


❗ No return statement

JS automatically does:

return this;


So:

const u = { name: "kiran" };


✅ u.name exists

❌ Case 2: Object explicitly returned (previous confusion)
function A() {
  this.x = 1;
  return { y: 2 };
}


Here:

JS creates { x: 1 }

BUT you return { y: 2 }

Returned object replaces this

So x is lost.

🔑 The golden rule (LOCK THIS)

If a constructor does NOT return an object,
JavaScript returns this by default.
and if constructor returns a primitive it will 
be ignored and returns this by default

That’s why your User example works perfectly.
*/