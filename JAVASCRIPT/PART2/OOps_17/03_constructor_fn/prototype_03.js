/*
if we create 1000 objects we get 1000 copies of function which is not optimized

solution : Prototype => shares same method between objects

Prototype is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects.
*/

function Person(name, age) {
  this.name = name;
  this.age = age;

  Person.prototype.greet = function () {
    console.log("Hello " + this.name);
  };
}

const p1 = new Person("kiran", 26);
const p2 = new Person("ajit", 26);

p1.greet();
p2.greet();

//  both objects use the same shared function
