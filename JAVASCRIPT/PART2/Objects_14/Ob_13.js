// STEP 14: Object.create() (Prototype-based object creation)

// 1️⃣ What problem Object.create() solves

const user = {
  name: "Kiran",
};
console.log(user);

/*
But every object in JS has a hidden parent (prototype).
👉 Object.create() lets you explicitly choose that parent.
*/

// 2️⃣ Basic syntax

// const child = Object.create(parent);

/*
parent → prototype
child → new object that inherits from parent
*/

// 3️⃣ Simple example

const animal = {
  eats: true,
};

const dog = Object.create(animal);

console.log(dog.eats);

/*
Why does this work?

-dog does NOT have eats
-JS looks in its prototype → animal

4️⃣ Prototype lookup (mental model)

dog ──> animal ──> Object.prototype ──> null

If property not found:

1.check object itself
2.check prototype
3.keep going up
4.stop at null
*/

// 5️⃣ Own property vs inherited property

dog.name = "Bruno";

console.log(dog.name); // own property
console.log(dog.eats); // inherited

// for confirming

console.log(Object.hasOwnProperty("name")); // show own property => returns => true /false
console.log(Object.hasOwnProperty("eats")); // show own property  => returns => true /false

console.log(Object.getOwnPropertyNames(dog)); // show own property => returns => properties in array

/*

6️⃣ Creating object with NO prototype (advanced but important)
const dict = Object.create(null);

console.log(dict.toString); // undefined


Why useful?

Pure data objects
No prototype pollution
Used in maps, caches
*/

// 7️⃣ Adding properties at creation time

const userProfile = Object.create(animal, {
  name: {
    value: "Kiran",
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

console.log(userProfile.name);
console.log(userProfile.eats);

// userProfile is a child object whose prototype is animal

/*
9️⃣ When to use Object.create()

Use it when:

You want explicit prototype control
You’re building inheritance manually
You need objects without prototype
Working with low-level JS / libraries

Do NOT use it for normal everyday objects.

🔒 Lock this rule

Object.create(proto) creates a new object whose prototype is proto

const dog = Object.create(animal);

*/