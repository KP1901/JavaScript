/*
1) THIS IS AN EXAMPLE OF CLASS/constructor Fn INHERITANCE (implicit)

Inheritance means:

A class can reuse properties and methods from another class

Instead of rewriting code, we reuse existing functionality.

Basic Idea

Parent class (base class)
        ↓
Child class (derived class)

Example concept:

Animal
 ├ eat()
 ├ sleep()

Dog
 ├ bark()
 └ inherits eat() and sleep()
*/

// basic example

class Animal {
  eat() {
    console.log("eating");
  }
}

/*
Adding Child Methods

The child class can add its own methods.
*/

class Dog extends Animal {
  bark() {
    console.log("Barking");
  }
}

const d = new Dog();

d.eat();
d.bark();

/*

extends Keyword

Inheritance is created using:
extends

Example:

class Dog extends Animal {}

Meaning:

Dog inherits from Animal

eat()  ← inherited
bark() ← own method

so Behind scene it looks like 

= Parent constructor
function Animal() {}

Animal.prototype.eat = function () {
  console.log("eating");
};

= Child constructor
function Dog() {
  Animal.call(this)
}

= inheritance setup
Dog.prototype = Object.create(Animal.prototype);

= fix constructor reference
Dog.prototype.constructor = Dog;

= child method
Dog.prototype.bark = function () {
  console.log("Barking");
};
*/

/*
constructor in child class :

If the child class has a constructor, we must use:

super() => calls the parent constructor in child constructor

behind the scene it will look like :

function University(name)
{
  this.name = name;
}

function College(collegeName,name){
  University.call(this,name);
  this.collegeName = collegeName;
}

College.prototype = Object.create(University.prototype)

College.prototype.constructor = College
*/

class University {
  constructor(name) {
    this.name = name;
  }
}

class College extends University {
  constructor(collegeName, name) {
    super(name);
    this.collegeName = collegeName;
  }
}

const d1 = new College("udgir", "SPPU");
console.log(d1.name);
console.log(d1.collegeName);

/*
Method Overriding

A child class can replace a parent method.
*/

class Fruit {
  color() {
    console.log("fruit color");
  }
}

class Banana extends Fruit {
  color() {
    console.log("fruit color is Yellow");
  }
}

let b1 = new Banana();
b1.color();

/*

Behind scene its look like :

function Fruit(){}

Fruit.prototype.color = function (){
    console.log("fruit color");
}

function Banana(){
  Fruit.call(this)
}

=> prototype inheritance
Banana.prototype = Object.Create(Fruit.prototype)

=> fix constructor ref
Banana.prototype.constructor = Banana;

==> method override
Banana.prototype.color = function (){
    console.log("fruit color is Yellow");
}

Prototype Chain in Inheritance

dog
 ↓
Dog.prototype
 ↓
Animal.prototype
 ↓
Object.prototype
 ↓
null

This is how JavaScript finds inherited methods.

SO IMP : 
Class inheritance in JavaScript is syntactic sugar over prototype inheritance and represents implicit prototype inheritance.
*/
