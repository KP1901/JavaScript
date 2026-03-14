/*
STEP 16: Prototypes & Prototype Chain

1️⃣ First truth (LOCK THIS 🔒)

Every JavaScript object has a hidden parent object called a prototype.

It is NOT empty. becuase it has a hidden parent object

*/
const obj = {};

console.log(obj.toString);

/*
❓ You never defined toString
👉 Yet it exists.

Why?

Because it comes from Object.prototype.

3️⃣ What is a Prototype? (plain English)

A prototype is:

an object that another object inherits properties from

If a property is not found on the object,
JavaScript looks up the prototype.


4️⃣ Prototype lookup rule (VERY IMPORTANT)

When you access:

obj.someKey

JavaScript searches in this order:

🔍 Object itself
🔍 Its prototype
🔍 Prototype’s prototype
🛑 Stop at null

This chain is called the Prototype Chain.


5️⃣ Visual mental model

const obj = {};

Internally:

obj
 ↓ [[Prototype]]
Object.prototype
 ↓ [[Prototype]]
null

6️⃣ __proto__ (how we SEE the prototype)

⚠️ __proto__ is for understanding/debugging, not daily coding
*/

const obj1 = {};

console.log(obj1.__proto__ === Object.prototype);

const parent = { a: 1 };

const child = Object.create(parent);

/*
Internally:

child
  └── __proto__  ──►  parent   (this parent object is the prototype)

So:

child.__proto__ === parent // true


child.__proto__ → parent
⚠️ No constructor involved
⚠️ Object function is NOT used here for inheritance
⚠️ parent is already an object, so it’s valid

✅ Prototype chains are object → object


Remember :

Prototype = object
__proto__ = hidden link to that object

-------------------------------------------------------

const obj4 ={}

Here JavaScript does this automatically:

obj1.__proto__ → Object.prototype

So:

obj1.__proto__ === Object.prototype // true

-----------------------------------------------------

⚠️ Prototype chains only link objects to objects, never to functions.
typeof Object        // "function"
typeof Object.prototype // "object"


Your statement (cleaned & corrected)

If we create a child object ourselves using a parent object, then

child.__proto__ === parent

✅ Correct (when you use Object.create(parent))

If we just create a normal object, then JavaScript considers
obj1.__proto__ === Object.prototype

✅ Correct (when you use {} or new Object())

*/

// 7️⃣ Example with custom prototype

// Option 1️⃣ Add properties (BEST)

const university = {
  universityName: "sppu",
  started: 1990,
};

// const college = Object.create(university);

// college.name = "trinity";

// console.log(college.universityName);

// Option 2️⃣ Define while creating

const college = Object.create(university, {
  name: {
    value: "trinity",
    writable: true,
    enumerable: true,
    configurable: true,
  },
});
console.log(college.name);

// 8️⃣ Prototype chain example (IMPORTANT)

const animal = { eats: true };
const mammal = Object.create(animal);
const mammalBaby = Object.create(mammal);

console.log(mammalBaby.eats);

// check
console.log(mammalBaby.__proto__ === mammal);
console.log(mammal.__proto__ === animal);
console.log(mammalBaby.__proto__.__proto__ === animal);

/*
Chain:

dog → mammal → animal → Object.prototype → null

*/

/*

10️⃣ Real-world why prototypes exist

Without prototypes:

-Every object would duplicate methods
-Huge memory waste

With prototypes:

-One method shared by many objects
-Efficient & fast

*/
