/*
Concetp : Object Internals

JavaScript objects have internal mechanisms that connect them to prototypes.
These are called object internals.

Important concepts:

[[Prototype]]
__proto__
Object.getPrototypeOf()
Object.setPrototypeOf()


1️⃣ [[Prototype]] (Internal Link)

Every JavaScript object has an internal hidden property:

[[Prototype]]

It points to the object’s prototype.

Example:

function Animal() {}

const a = new Animal()

Internally:

a.[[Prototype]] → Animal.prototype

This is how prototype inheritance works.

2️⃣ __proto__

__proto__ is a public accessor used to read or change [[Prototype]].

Example:

function Animal() {}

const a = new Animal()

console.log(a.__proto__ === Animal.prototype)

Output:

true

Meaning:

__proto__ accesses [[Prototype]]


3️⃣ Object.getPrototypeOf()

Modern JavaScript recommends using:

Object.getPrototypeOf(obj)

Example:

function Animal() {}

const a = new Animal()

console.log(Object.getPrototypeOf(a) === Animal.prototype)

Output:

true

This is the safe standard method.


*/

/*
4️⃣ Object.setPrototypeOf()

This allows us to change the prototype of an object.

1️⃣ Syntax

Object.setPrototypeOf(object, prototype)

| Parameter   | Meaning                                       |
| ----------- | --------------------------------------------- |
| `object`    | the object whose prototype you want to change |
| `prototype` | the object that should become its prototype   |

*/

const animal = {
  eat() {
    console.log("Eating");
  },
};

const dog = {
  bark() {
    console.log("Barking");
  },
};

Object.setPrototypeOf(dog, animal);

dog.eat();

/*
What happened internally

Before:

dog → Object.prototype

After:

dog → animal → Object.prototype

So now dog can access:

eat()

from animal.

Visual Prototype Chain :

object
 ↓
[[Prototype]]
 ↓
prototype object
 ↓
Object.prototype
 ↓
null
*/