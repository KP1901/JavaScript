/* 
let Person = function (name, gender, birthYear) {
  this.name = name;
  this.gender = gender;
  this.birthYear = birthYear;
};
Person.prototype.calAge = function () {
  return new Date().getFullYear() - this.birthYear;
};
let mark = new Person("Mark", "Male", 1998);
// if you write just Person this property will set in windows global object to check (use browser console(window)) in non strict else its undfind in (strict mode)
console.log(mark.calAge());

// another function constructor

// here this = merry for Empolyee object
let Employee = function (name, gender, birthYear, eId, eSalary) {
  Person.bind(this, name, gender, birthYear);
  this.empId = eId;
  this.empSalary = eSalary;
};

// need to store prototype of person inside empolyee prototype (wrong statment)
// we need to inherit Employee.prototype from Person.prototype", not directly assign (correct statement)
// always inherit prototype from the parent constructor

Employee.prototype = Person.prototype;

//  calculating annual salary
Employee.prototype.calSalary = function () {
  return this.empSalary * 12;
};

//  get emp details

Employee.prototype.getDetails = function () {
  console.log(this.empId);
  console.log(this.empSalary);
};
let merry = new Employee("Mark", "Male", 1998, 101, 30000);
console.log(merry);

*/

/*
🎯 Key takeaway:

bind → does NOT run the function, only returns a new bound function.

call / apply → immediately invoke the function with a given this.

That’s why we always use call (or apply) for constructor chaining in JavaScript, not bind.
*/

// imp concept

/*
=====================================================
🔑 Prototype Inheritance (Person → Employee)
=====================================================

1️⃣ When we do:
    Employee.prototype = Object.create(Person.prototype);

- This creates a new empty object linked to Person.prototype.
- Now Employee.prototype is connected to Person.prototype.
- BUT the constructor of this new object by default points to Person.

    console.log(Employee.prototype.constructor); // Person ❌

2️⃣ Why is that wrong?
- Because now objects created from Employee will look like
  they were constructed by Person, which is misleading.

3️⃣ Fixing it:
    Employee.prototype.constructor = Employee;

- This resets the constructor reference back to Employee.
- Now Employee objects correctly show Employee as their constructor.

    console.log(Employee.prototype.constructor); // Employee ✅
*/

// ===================================================
// Example Code
// ===================================================

let Person = function (name, gender, birthYear) {
  this.name = name;
  this.gender = gender;
  this.birthYear = birthYear;
};

Person.prototype.calAge = function () {
  return new Date().getFullYear() - this.birthYear;
};

let Employee = function (name, gender, birthYear, eId, eSalary) {
  Person.call(this, name, gender, birthYear); // inherit props
  this.empId = eId;
  this.empSalary = eSalary;
};

// ✅ Correct prototype inheritance
Employee.prototype = Object.create(Person.prototype);

// ❌ At this point constructor points to Person
console.log(Employee.prototype.constructor); // Person

// ✅ Fix constructor reference
Employee.prototype.constructor = Employee;
console.log(Employee.prototype.constructor); // Employee

// Extra methods for Employee
Employee.prototype.calSalary = function () {
  return this.empSalary * 12;
};

Employee.prototype.getDetails = function () {
  console.log(this.name, this.gender, this.birthYear);
  console.log(this.empId, this.empSalary);
};

// ===================================================
// Test
// ===================================================
let merry = new Employee("Merry", "Female", 1998, 101, 30000);

console.log(merry); // Employee object with all props
console.log(merry.constructor); // ✅ Employee
console.log(merry.calAge()); // Inherited from Person
console.log(merry.calSalary()); // From Employee
merry.getDetails(); // Show details

/*
=====================================================
❓ Why does calAge look like it's not on Person.prototype?
=====================================================

1️⃣ Expectation:
- We defined calAge on Person.prototype.
- So we expect to see calAge directly under Person.prototype.

2️⃣ What Chrome DevTools shows:
- When expanding `merry` in console, DevTools shows something like:

   [[Prototype]]: Person
       calSalary: f ()
       getDetails: f ()
       constructor: f (...)
       [[Prototype]]: Object
           calAge: f ()

- This makes it *look* like calAge is on some generic Object prototype.

3️⃣ Why this happens:
- In reality, we did:
      Employee.prototype = Object.create(Person.prototype);
- So the prototype chain is:

      merry → Employee.prototype → Person.prototype → Object.prototype

- DevTools sometimes compresses or labels Person.prototype as just
  "[[Prototype]]: Object" instead of showing its real name.
- The method calAge *is still on Person.prototype* — DevTools just
  groups it in a confusing way.

4️⃣ How to check properly:
   console.log(Person.prototype);
   // Shows: { calAge: f }

   console.log(merry.__proto__); 
   // Employee.prototype

   console.log(Object.getPrototypeOf(merry.__proto__));
   // Person.prototype → contains calAge ✅

=====================================================
🎯 Key Point:
- calAge really lives on Person.prototype.
- Chrome DevTools tree view sometimes hides that fact by displaying
  "[[Prototype]]: Object".
- Always use Object.getPrototypeOf(...) to confirm where a method is.
=====================================================
*/
