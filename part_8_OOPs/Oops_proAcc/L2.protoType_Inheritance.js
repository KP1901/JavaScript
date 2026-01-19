let Person = function (name, gender, birthYear) {
  this.name = name;
  this.gender = gender;
  this.birthYear = birthYear;
};
// prototype method
Person.prototype.calAge = function () {
  let age = new Date().getFullYear() - this.birthYear;
  console.log(age);
};
// prototype property

Person.prototype.city = "London";

let Jhon = new Person("jhon", "male", 1998);
console.log(Jhon);

let merry = new Person("merry", "female", 1995);
console.log(merry);

/*
Why Chrome DevTools shows [[Prototype]]: Object

-Chrome doesn’t literally write Person.prototype there.
-It just shows [[Prototype]]: Object meaning → this is an object created via a function   
constructor,   whose prototype is an object.
-If you expand that, you’ll see your custom methods and properties (calAge, city) that you attached       to Person.prototype.
*/
