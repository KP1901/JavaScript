/*
1️⃣ Theory: What is Prototype Inheritance?

=>Definition:

-In JavaScript, every object has a hidden property called [[Prototype]], which points to  another object.
-Prototype Inheritance means an object can inherit properties and methods from another object via this prototype chain.

=>Key Points:

-Objects in JS are dynamic and can inherit directly from other objects.
-Methods defined on a parent object’s prototype are shared by all child objects.
-JS uses prototype chain lookup: when accessing a property, JS first looks on the object itself, then up the prototype chain.

Analogy:
Think of a family tree:
-Child object looks up to Parent object for methods/properties.
-If not found in parent, it looks up to Grandparent (Object.prototype) until null.

*/
//  L1 === L3
// Step 1: Create Parent Object

function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function () {
  console.log("Hi, I'm " + this.name);
};

// step 2 : child object

function Employee(name, role) {
  Person.call(this, name); // call parent constructor
  this.role = role;
}

// Set up prototype inheritance

Employee.prototype = Object.create(Person.prototype);
// Object.create(Person.prototype) makes a new object for Employee prototype whose “parent” is Person.prototype and the proto of empolye.prototype links/point to Person.prototype.
// 👉 “Object.create(Person.prototype) creates a new object to use as Employee.prototype, and that object’s __proto__ is linked to Person.prototype.”

Employee.prototype.constructor = Employee;

// override or add methods

Employee.prototype.sayHi = function () {
  console.log("Hi, I'm " + this.name + ", and I am a " + this.role);
};

// step 3 test inheritance

const emp1 = new Employee("kiran", "Developer");
emp1.sayHi();

// prototype chain check
console.log(emp1.__proto__ === Employee.prototype);
console.log(emp1.__proto__.__proto__ === Person.prototype);
