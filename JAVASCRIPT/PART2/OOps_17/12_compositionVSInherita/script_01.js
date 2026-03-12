/*
1️⃣ What is Inheritance

Inheritance means one class derives from another class.

*/

class Animal {
  eat() {
    console.log("Eating");
  }
}
class Dog extends Animal {
  bark() {
    console.log("Bhow Bhow");
  }
}
const d = new Dog();

d.eat();
d.bark();

/*
Structure:

Dog → Animal → Object

Dog inherits behavior from Animal.
*/

/*
2️⃣ What is Composition

Composition means objects are built using other objects.

Instead of inheriting behavior, we combine behaviors.
*/

const canEat = {
  eat() {
    console.log(this.name + " eating");
  },
};

const canWalk = {
  walk() {
    console.log(this.name + " walking");
  },
};

function createAnimal(name) {
  return {
    name,
    ...canEat,
    ...canWalk,
  };
}

const dog = createAnimal("Tommy");

dog.eat();
dog.walk();

/*
Key Idea (Real OOP Design)

Instead of: (inheritance)

d → dog.prototype → Animal.prototype -> object.prototype -> null 

We do: (adding all behavior in one object)

Dog = eat + walk

This is composition over inheritance.

WHy Function Composition is Better over inheritance

1.more flexible
2.avoid deep hierarchy 
3.resusable behaviors

*/
