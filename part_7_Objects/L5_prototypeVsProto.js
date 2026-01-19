// 🔹 Prototype Chaining in JavaScript

/*
👉 In JavaScript, when you try to use a property or method on an object:

-JS first looks inside the object itself.
-If it doesn’t find it, it looks in the object’s prototype.
-If still not found, it keeps going up the chain until null.
-null → which means “end of the chain”.

This is called prototype chaining.
*/

// 1 simple object example

const person = {
  greet() {
    console.log("Hello!");
  },
};

const user = { name: "Kiran" };

// Link user to person
/*
-.prototype is a property only used by constructor functions and classes in JavaScript —  not by 
  normal objects.

-For normal objects, to change their prototype, you should use:  user.__proto__ = person;  (old way)
*/
// user.__proto__ = person;
Object.setPrototypeOf(user, person);

user.greet(); // "Hello!"

// 📌 Difference between .prototype and __proto__

/**
1. .prototype

-In JavaScript, every object has a hidden property called [[Prototype]] (accessible via __proto__ or Object.getPrototypeOf()
-Belongs to functions (including classes).
-It’s an object that stores methods/properties shared by all instances created by that function/class.
-Only functions automatically get this property.
-All functions in JS have a prototype property (used when creating objects with new).


3️⃣ Why use Prototype?

-Methods defined on prototype are shared across all instances.
-Saves memory (not creating the method for every object).

 */
function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function () {
  console.log(`"hi I m ` + this.name);
};

// Person.prototype = { sayHi: f }
// All objects created with new Person() will be linked to this.

// 2. __proto__

/*
-Belongs to objects (instances).
-It’s the hidden/internal link (prototype chain pointer) to another object.
-Usually points to the constructor’s .prototype.
*/

function Person2(name) {
  this.name = name;
}

Person2.prototype.sayHi = function () {
  console.log("Hi, I'm " + this.name);
};

let user2 = new Person2("Kiran");
user2.sayHi();

/*
What happens when you call user.sayHi() ❓

1 JS looks at user object itself.
-Does user have a property called sayHi?
-user only has { name: "Kiran" }.
-So → ❌ not found.

2.JS then looks at the hidden link: user.__proto__.
-user.__proto__ points to Person.prototype.
-Now JS checks inside Person.prototype.

3 JS finds sayHi inside Person.prototype.

-✅ It exists: sayHi: function () { ... }.
-So JS uses that function.

this inside sayHi still refers to user.

-That’s why it prints "Hi, I'm Kiran".

*/
// user  --->     __proto__  --->    Person.prototype  --->  __proto__  --->  Object.prototype  ---> null
// {name: "Kiran"}                    {sayHi: f()}                           {toString: f(), ...}

// 1️⃣ Example 1: Property not in object or prototype

function Person1(name) {
  this.name = name;
}

Person1.prototype.sayHi = function () {
  console.log("Hi!");
};

const user1 = new Person1("Kiran");

console.log(user1.age); // undefined
