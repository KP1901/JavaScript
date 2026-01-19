const person = {
  name: "ajit",
  sayHi() {
    console.log(`hi,I am ${this.name}`);
  },
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

const employee = Object.create(person);
employee.name = "kiran";
employee.role = "Developer";

employee.sayHi();
employee.greet();

console.log(employee);