/*
STEP 19: JavaScript class (Truth, not magic)
1️⃣ First truth (LOCK THIS 🔒)

JavaScript classes are NOT a new system.
They are just cleaner syntax over prototypes.

Nothing new is added to the language internally.

*/

// 2️⃣ Class syntax (what you already know)

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return "HI " + this.name;
  }
}

const u = new User("kiran");

console.log(u.sayHi());

/*
3️⃣ What JS REALLY does (behind the scenes)

The above class is equivalent to this 👇

function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  return "Hi " + this.name;
};

👉 Exactly the same behavior

-Same prototype chain
-Same memory sharing
-Same this rules
*/

// 4️⃣ Where methods live (VERY IMPORTANT)

console.log(u.hasOwnProperty("sayHi"));

/*
Why?

-sayHi is NOT on the object
-It is on User.prototype

proof

u.__prot__ == user.prototype => true
---------------------------------------------------------------------------------------------------

*/

/*
5️⃣ Why class methods are better than constructor methods

❌ Bad (inside constructor):

constructor(name) {
  this.name = name;
  this.sayHi = function () {};
}


✔️ Good (class method):

sayHi() {}


Because:

One shared method
Less memory
Faster

Corrected version ✅

-Class methods are placed on the prototype automatically
-Constructor-defined methods are placed on each instance
*/

// 6️⃣ Class inheritance (extends)

class Animal {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }
  eat() {
    return "eating";
  }
}

class Dog extends Animal {
  constructor(name, height, lifespan) {
    super(name, height); // / ✅ initialize parent part
    this.lifespan = lifespan;
  }
  bark() {
    return "Woof";
  }
}
const d = new Dog("Bruno", 20, 12);

console.log(d.eat());
console.log(d.name);

/*

prototype chain:

d → Dog.prototype → Animal.prototype → Object.prototype → null
*/

// 7️⃣ super keyword (important)

class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name); //  calls Animal constructor
  }
}

/*
8️⃣ Important differences vs functions

| Feature     | class    | function  |
| ----------- | -------- | --------- |
| Hoisting    | ❌ no     | ✅ yes     |
| Strict mode | ✅ always | ❌ depends |
| Syntax      | cleaner  | verbose   |

But internally → same prototype system.


9️⃣ Common mistakes ❌

❌ Calling class without new

User("Kiran"); // TypeError

Classes must be used with new.

❌ Thinking classes are real OOP like Java

They are NOT.
JS is still prototype-based.

🔒 Final mental model

-class = syntax sugar over function constructor
-Methods → prototype
-extends → prototype chaining
-super → parent constructor/method
*/
