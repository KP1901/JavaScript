class Animal {
  constructor() {}
  makeSound() {
    console.log("animal makes different sound");
  }
}
class Dog extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
  makeSound() {
    console.log(this.name + " makes a sound bhow bhow");
  }
}
class Cat extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
  makeSound() {
    console.log(this.name + " makes a sound meow meow");
  }
}
const dog = new Dog("charile");
const cat = new Cat("rony");
cat.makeSound();
