class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showAge() {
    console.log(`age is ${this.age}`);
  }
}

class Employee extends Person {
  constructor(name, age, empName, empSalary) {
    super(name, age); // Calls the constructor of the Parent class (Person)
    this.empName = empName;
    this.empSalary = empSalary;
  }
  showSalary() {
    console.log(`employee salary is ${this.empSalary}`);
  }
}

const kiran = new Employee("Kiran", 25, "Ajit", 300000);
kiran.showAge(); // This should work fine
