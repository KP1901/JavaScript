/*
1) THIS IS AN EXAMPLE OF Object INHERITANCE (implicit)

Sure! Here’s a single code block showing all examples of inheriting from an object directly (without using constructor functions / class or prototypes explicitly):
*/

// 1️⃣ Base object
const person = {
  name: "ajit",
  sayHi() {
    console.log(`hi,I am ${this.name}`);
  },
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

// 2️⃣ Create employee object inheriting from person

const employee = Object.create(person);
employee.name = "kiran";
employee.role = "Developer";

employee.sayHi();
employee.greet();

console.log(employee);

// check inheritance

console.log(Object.getPrototypeOf(employee) === person);
// Object.getPrototypeOf(employee) is return the prototype of empolyee which is person
// person -> employee
// person <- employee
// employee prototype is person
// person prototype is Object.prototype
// Object.prototype prototype is null

// 3️⃣ Another object with method override

const manager = Object.create(person);
manager.name = "Riya";

manager.sayHi = function () {
  console.log(`Hello, I'm manager ${this.name}`);
};
manager.sayHi();
manager.greet();

// 4️⃣ Adding new properties to inherited object

employee.department = "IT";
console.log(employee.department);
console.log(employee.role);

// 5️⃣ Confirm that original object is untouched
console.log(person);
console.log(person.name);
person.sayHi();

/*
✅ Conclusion: Inheriting from Objects in JavaScript (Without Classes or Constructors)

This example demonstrates object-based inheritance using Object.create(), which is a core feature of JavaScript’s prototype-based inheritance model and this is also implict prototype.

*/
