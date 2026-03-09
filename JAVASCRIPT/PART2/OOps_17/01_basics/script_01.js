/*
What is OOP (Object Oriented Programming)

OOP is a way of organizing code using objects that represent real-world things.

Instead of writing random functions and variables, we group data + behavior together.

Example real world:

Car
   color
   speed
   fuel

   start()
   drive()
   brake()

   So in programming we represent it like this:

const car = {
  color: "red",
  speed: 0,

  drive() {
    this.speed += 10
  }
}

Why OOP Exists

Without OOP, code becomes messy.

Procedural style (not scalable)
let car1Speed = 0
let car2Speed = 0

function driveCar1() {
  car1Speed += 10
}

function driveCar2() {
  car2Speed += 10
}

Problems:

-code duplication
-difficult to manage
-hard to scale

OOP Style
function Car() {
  this.speed = 0
}

const car1 = new Car()
const car2 = new Car()

Now we can create many objects from one blueprint.

Core Concepts of OOP

There are 4 main pillars.

1 Encapsulation
2 Inheritance
3 Polymorphism
4 Abstraction   

Important OOP Terms

1️⃣ Object

An object is a collection of properties and methods.

Example:

const user = {
  name: "Kiran",
  age: 25,

  greet() {
    console.log("Hello")
  }
}

2️⃣ Property

A variable stored inside an object.

name
age

3️⃣ Method

A function inside an object.

greet()

4️⃣ Class (Blueprint)

A template to create objects.

Example idea:

Car blueprint
   ↓
car1
car2
car3

Very Important Thing About JavaScript OOP

JavaScript is not class-based originally.

It is:

Prototype-based OOP
*/

console.log(this);
