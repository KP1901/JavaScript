/*
Concept : Object.create()

Object.create() allows us to manually create prototype inheritance.

It is the pure prototype-based way of doing OOP in JavaScript (before classes existed).

Syntax

Object.create(prototypeObject)

It creates a new object whose prototype is the given object.
*/

// base example

const Animal = {
  eat() {
    console.log("Animal Eating");
  },
};
const dog = Object.create(Animal);
dog.eat();

/*
Output :
Animal Eating

Why?
Because:
dog → animal → Object.prototype

The method eat() exists in animal.
*/

// adding properties to new Object

dog.name = "Tommy";

console.log(dog);

/*
Object now looks like 

dog
 ├ name → "Tommy"
 ↓
animal
 └ eat()


 Important Difference

Constructor / Class style

class Animal {
  eat() {
    console.log("Eating")
  }
}

const d = new Animal()

Prototype chain :

dog
 ↓
animal.prototype
 ↓
Object.prototype
 ↓
null

------------------------------
Pure prototype style

const animal = {
  eat() {
    console.log("Eating")
  }
}

const dog = Object.create(animal)

Both create prototype inheritance.

Prototype chain :

dog
 ↓
animal
 ↓
Object.prototype
 ↓
null
*/

/*
Most IMP :

function → has prototype
class → has prototype
object → NO prototype property

*/