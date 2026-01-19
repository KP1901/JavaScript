/*
Sure! Here’s a single code block showing all examples of inheriting from an object directly (wiht using constructor functions and prototypes explicitly):
*/

// 1️⃣ Parent Constructor

function Person(name) {
  this.name = name; // own property
}

Person.prototype.sayHi = function () {
  console.log("Hi, I'm " + this.name);
};

const user = new Person("kiran");

/*
prototype chaining

user.__proto__ === Person.prototype
Person.prototype.__proto__ === Object.prototype
Object.prototype.__proto__ === null

user
  │
  └──> Person.prototype
          │
          └──> Object.prototype
                  │
                  └──> null

*/
/*
-A new object is created: user.
-user.__proto__ is set to Person.prototype.
-The constructor runs: this.name = name.
-✅ So user now has an own property: name: "kiran".
-user does not have sayHi as its own property, but it inherits it from Person.prototype.
-user inherits from Person.prototype via its __proto__.
*/

console.log(Person.prototype);
console.log(Object.getPrototypeOf(user));
console.log(user);

// 2️⃣ Child Constructor

function Employee(name, role) {
  // Call parent constructor to inherit properties
  Person.call(this, name);
  this.role = role; // own property specific to Employee
}

// Set up prototype inheritance (explicit)

Employee.prototype = Object.create(Person.prototype);

// Reset constructor reference
/*
console.log(Person.prototype.constructor); 

we had add sayHI method inside Person.prototype so there were constructor was person
now we have to inherit the prototype  constructor so we can override the sayHI()

*/
Employee.prototype.constructor = Employee;

Employee.prototype.sayHi = function () {
  console.log("Hi, I'm " + this.name + ", and I am a " + this.role);
};
// Add a new method only for Employee

Employee.prototype.work = function () {
  console.log(this.name + " is working as a " + this.role);
};

// 4️⃣ Create objects
const emp1 = new Employee("Kiran", "Developer");
const emp2 = new Employee("Kiran", "Developer");

// 5️⃣ Test methods and inheritance

emp1.sayHi();
emp1.work();

emp2.sayHi();
emp2.work();

// Prototype chain checks
console.log(Object.getPrototypeOf(Person.prototype));
console.log(Object.getPrototypeOf(Employee.prototype));
console.log(Object.getPrototypeOf(emp1));

console.log(emp1.__proto__ === Employee.prototype);
console.log(emp1.__proto__.__proto__ === Person.prototype);
console.log(emp1 instanceof Employee); // true
console.log(emp1 instanceof Person); // true

/*
prototype chaining 

emp1.__proto__ === Employee.prototype
emp2.__proto__ === Employee.prototype
Employee.prototype.__proto__ === Person.prototype
Person.prototype.__proto__ === Object.prototype
Object.prototype.__proto__ === null

emp1 / emp2
  │
  └──> Employee.prototype
          │  (sayHi, work)
          └──> Person.prototype
                  │  (sayHi from parent, if not overridden)
                  └──> Object.prototype
                          │
                          └──> null

*/

/*
✅ Conclusion: Constructor-Based Inheritance with Prototypes in JavaScript

This example shows how constructor functions and prototypes work together to implement classical-style inheritance in JavaScript — before the class syntax was introduced.
*/
