let person = function (name, gender, birthYear) {
  this.name = name;
  this.gender = gender;
  this.birthYear = birthYear;
};
person.prototype.calAge = function () {
  return new Date().getFullYear() - this.birthYear;
};

let Employee = function (name, gender, birthYear, eId, eSalary) {
  person.call(this, name, gender, birthYear);
  this.empId = eId;
  this.empSalary = eSalary;
};

Employee.prototype = Object.create(person.prototype);
console.log(Employee.prototype.constructor);

Employee.prototype.constructor = Employee;
console.log(Employee.prototype.constructor);

Employee.prototype.calSalary = function () {
  return this.empSalary * 12;
};

Employee.prototype.getDetails = function (){
      console.log(this.name, this.gender, this.birthYear);
      console.log(this.empId, this.empSalary);
}
let merry = new Employee("Merry", "Female", 1998, 101, 30000);
console.log(merry);
