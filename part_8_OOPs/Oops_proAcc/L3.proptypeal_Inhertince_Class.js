// cover a class concept
//  person class is a blue print

class Person {
  constructor(name, birthYear, gender) {
    this.name = name;
    (this.birthYear = birthYear), (this.gender = gender);
  }
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }
}

Person.prototype.greet = function () {
  console.log("hi " + this.name);
};

let john = new Person("jhon", 1998, "male");
console.log(john);
john.greet();
john.calcAge();
