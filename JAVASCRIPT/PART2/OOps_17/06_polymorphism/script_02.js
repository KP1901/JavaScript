/*
method overriding vs polymorphism

1️⃣ Method Overriding

Method overriding happens when a child class defines a method with the same name as a parent class method.

The child method replaces (overrides) the parent version.

*/

Example;
class Animal {
  speak() {
    console.log("Animal speaking");
  }
}

class Dog extends Animal {
  speak() {
    // overriding
    console.log("Dog barking");
  }
}

const d = new Dog();
d.speak();

/*
Output:

Dog barking

Even though Animal has speak(), the child version is used
*/

/*
2️⃣ Polymorphism

Polymorphism means:

The same method name can behave differently depending on the object calling it.

Method overriding is one way to achieve polymorphism.
*/

class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Bark");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow");
  }
}

const animals = [new Dog(), new Cat()];

animals.forEach((a) => a.speak());

/*
Output:

Bark
Meow

Same method:

speak()

Different behavior → polymorphism.

| Concept               | Meaning                                               |
| --------------------- | ----------------------------------------------------- |
| **Method Overriding** | Child class replaces parent method                    |
| **Polymorphism**      | Same method behaves differently for different objects |

Overriding → technique
Polymorphism → concept
*/