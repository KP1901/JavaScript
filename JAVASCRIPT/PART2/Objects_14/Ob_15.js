/*
TEP 17: Prototype Inheritance & Method Sharing

1️⃣ Core idea (LOCK THIS 🔒)

Methods should live on the prototype, not inside each object.

Why?

One copy in memory
Shared by all instances
Faster & cleaner

*/

// 2️⃣ The problem without prototypes ❌

/*

function User(name) {
  this.name = name;
  this.sayHi = function () {
    return "Hi " + this.name;
  };
}
const u1 = new User("A");
const u2 = new User("B");

console.log(u1.sayHi());

*/

/*

u1 = {
    name : "A",
    sayHi : function (){
        return "Hi " + this.name;
    },
    __proto__ : User.prototype
}

u2 = {
    name : "B",
    sayHi : function (){
        return "Hi " + this.name;
    },
    __proto__ : User.prototype
}

❌ Each object gets its own copy of sayHi
❌ Memory waste

*/

// 3️⃣ Solution: put methods on the prototype ✅

function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  return "Hi " + this.name;
};

const u1 = new User("kiran");
const u2 = new User("Ajit");

console.log(u1.sayHi());
console.log(u2.sayHi());

/*


User.prototype = {
    sayHi : function (){
      return "Hi " + this.name;
    }
}

u1 = {
    name : "kiran",
    __proto__ : User.prototype
}

u2 = {
    name : "Ajit",
    __proto__ : User.prototype
}
 
chain :

u1 → User.prototype → Object.prototype → null
u2 → User.prototype → Object.prototype → null

*/

/*
4️⃣ How lookup works (IMPORTANT)
u1.sayHi();


JS checks:

u1 → no sayHi

User.prototype → found ✔️

Prototype chain:

u1 → User.prototype → Object.prototype → null

*/

/*

5️⃣ Proof that method is shared

u1.sayHi === u2.sayHi; // true ✅


Same function in memory.

*/

// 6️⃣ Inheriting from another constructor

function Animal(name) {
  this.name = name;
  // this.name = "bruno"
}

Animal.prototype.eat = function () {
  return this.name + " eats";
};

function Dog(name) {
  Animal.call(this, name); // “Run this function now, and decide what this (d) should be.”

  /*
Run Animal right now,
and inside Animal,
treat `this` as the same object Dog is using.
this === d
*/
}

// Link prototypes:

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add dog-specific method

Dog.prototype.bark = function () {
  return "woof";
};

const d = new Dog("Bruno");

console.log(d.eat());
console.log(d.bark());

/*

Animal.prototype = {
  eat: function () {
    return this.name + " eats";
  },
  __proto__: Object.prototype
};

  Dog.prototype = {
    bark : function(){
        return : "woof"
    }
    __Proto__ : Animal.prototype
  }

  d ={
    name : "bruno",
    __proto__ : Dog.prototype
  }
    
  Chain:

d → Dog.prototype → Animal.prototype → Object.prototype → null
*/

/*
----------------------------------------------------------------------
8️⃣ Common mistakes ⚠️
❌ Forgetting constructor reset
Dog.prototype.constructor === Animal // true (wrong)


Fix:

Dog.prototype.constructor = Dog;
---------------------------------------------------------------------
❌ Adding methods before prototype linking

Dog.prototype.bark = ...
Dog.prototype = Object.create(Animal.prototype); // ❌ bark lost


✔️ Always link prototype FIRST, then add methods.


*/

// 9️⃣ How this relates to class

class User1 {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return "Hi " + this.name;
  }
}

/*
👉 This is exactly the same as prototype-based version.
class is just syntax sugar.


🔒 Mental summary

Constructor → instance properties
Constructor.prototype → shared methods
Inheritance = prototype linking
JS is prototype-based, not class-based
*/