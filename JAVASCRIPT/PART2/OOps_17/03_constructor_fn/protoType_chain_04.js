/*
Step 5 — Prototype Chain

The prototype chain explains how JavaScript finds properties and methods.

When you access a property:

obj.property

JavaScript searches step by step through a chain.

function User(name) {
  this.name = name
}

User.prototype.sayHi = function () {
  console.log("Hi " + this.name)
}

const u1 = new User("Kiran")

Now we call:

u1.sayHi()

How JavaScript Searches

JavaScript checks in this order:

1️⃣ u1 object
2️⃣ User.prototype
3️⃣ Object.prototype
4️⃣ null

Step-by-Step Search

Step 1 — Check inside object
u1
 └ name → "Kiran"

No sayHi here.

So JavaScript moves to the prototype.

Step 2 — Check constructor prototype

User.prototype
 └ sayHi() → function

Found it.

So JavaScript executes:

sayHi()

Visual Prototype Chain

u1
 │
 ▼
User.prototype
 │
 ▼
Object.prototype
 │
 ▼
null    

This is the Prototype Chain.
*/