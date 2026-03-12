// Challenge

class Person {
  constructor(name) {
    this.name = name;
  }

  // instance field (added to every object)
  // country = "India";

  greet() {
    console.log("Hello, I am " + this.name);
  }
}
Person.prototype.country = "india";

class Employee extends Person {
  constructor(name, role) {
    super(name); // calls Person constructor
    this.role = role;
  }

  work() {
    console.log(this.name + " is working as " + this.role);
  }
}

class Manager extends Employee {
  constructor(name, role, department) {
    super(name, role); // calls Employee constructor
    this.department = department;
  }

  manage() {
    console.log(this.name + " manages the " + this.department + " department");
  }
}

const m1 = new Manager("Kiran", "Developer", "Bank");

/* -------------------------------
   Accessing properties
--------------------------------*/
console.log(m1.name); // Kiran
console.log(m1.role); // Developer
console.log(m1.department); // Bank
console.log(m1.country); // India (from Parent Prototype)

/* -------------------------------
   Calling methods
--------------------------------*/
m1.greet(); // from Person.prototype
m1.work(); // from Employee.prototype
m1.manage(); // from Manager.prototype

/* -------------------------------
   Prototype chain checks
--------------------------------*/
console.log(m1.__proto__ === Manager.prototype); // true
console.log(Manager.prototype.__proto__ === Employee.prototype); // true
console.log(Employee.prototype.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true

/* -------------------------------
   Final prototype chain
--------------------------------*/
console.log(m1.__proto__.__proto__.__proto__.__proto__ === null); // true
