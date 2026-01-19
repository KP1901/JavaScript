class Person {
  constructor(name, age, birthYear) {
    this.name = name;
    this.age = age;
    this.birthYear = birthYear;
  }
  cagAge() {
    return new Date().getFullYear() - this.birthYear;
  }
}

class Empolyee extends Person {
  constructor(name, age, birthYear, eId, eSalary) {
    super(name, age, birthYear);
    this.eId = eId;
    this.eSalary = eSalary;
  }
  calSalary() {
    return this.eSalary * 12;
  }
}
let merry = new Empolyee("Merry", "Female", 1998, 101, 30000);
console.log(merry);
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(merry)));

console.log(merry.cagAge());
console.log(merry.calSalary());
