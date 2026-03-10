/*
Polymorphism means:
-Same method name
-Different behavior depending on the object

The word comes from:
poly = many
morph = forms

So:
one method → many behaviors

Example Idea

Animal.speak()

Dog → bark
Cat → meow
Cow → moo

Same method speak(), but different results.

*/

// Basic Example

class Animal {
  speak() {
    console.log("Animals make sound");
  }
}
class Dog extends Animal {
  speak() {
    console.log("Dog Barking");
  }
}
class Cat extends Animal {
  speak() {
    console.log("Cat Doing Meow");
  }
}
class Cow extends Animal {
  speak() {
    console.log("Cow doing Mooo..");
  }
}
const d = new Dog();
const c = new Cat();

d.speak();
c.speak();

/*
Output

Dog barks
Cat meows

Here:

same method name
different behavior
*/
