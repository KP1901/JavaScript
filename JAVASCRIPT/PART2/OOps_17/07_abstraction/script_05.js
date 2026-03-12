/*
=========================================
🔎 Abstract Method in OOP
=========================================

👉 Definition:
- An abstract method is a method declared in a base class but not implemented there.
- Its purpose is to force subclasses (child classes) to provide their own implementation.
- Think of it as a "contract": 
  "Every child class MUST have this method."

👉 Note in JavaScript:
- JavaScript does not have built-in abstract classes or abstract methods (unlike Java/C#).
- But we can SIMULATE abstract methods by:
  1. Declaring a method in the base class.
  2. Making it throw an error if not overridden in the child class.
- Often combined with `new.target` to prevent direct instantiation of the base class.

=========================================
1️⃣ Abstract Method Simulation in JavaScript
=========================================
*/

class Shape {
  // Abstract method simulation
  draw() {
    // If child does not override this, an error will be thrown
    throw new Error("❌ draw() must be implemented by subclass");
  }
}

class Circle extends Shape {
  draw() {
    console.log("✅ Drawing Circle");
  }
}

class Square extends Shape {
  draw() {
    console.log("✅ Drawing Square");
  }
}

const c = new Circle();
c.draw(); // ✅ Drawing Circle

const s = new Square();
s.draw(); // ✅ Drawing Square

// If we try to use Shape directly:
const shape = new Shape();
shape.draw(); // ❌ Error: draw() must be implemented by subclass

/*
=========================================
2️⃣ Abstract Class + Abstract Method Together
=========================================

👉 Using `new.target`:
- Prevents direct instantiation of the base class.
- Combined with abstract method simulation for stronger abstraction.
*/

class Animal {
  constructor() {
    if (new.target === Animal) {
      throw new Error("❌ Cannot instantiate abstract class Animal directly");
    }
  }

  makeSound() {
    throw new Error("❌ makeSound() must be implemented by subclass");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("🐶 Woof! Woof!");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("🐱 Meow! Meow!");
  }
}

// const a = new Animal(); // ❌ Error: Cannot instantiate abstract class Animal directly

const dog = new Dog();
dog.makeSound(); // 🐶 Woof! Woof!

const cat = new Cat();
cat.makeSound(); // 🐱 Meow! Meow!

/*
=========================================
⚖️ Summary
=========================================

- Abstract Method:
  - Declared in base class but NOT implemented.
  - Child classes MUST implement it.
  - In JS → simulated using `throw new Error()`.

- Abstract Class:
  - A class not meant to be instantiated directly.
  - Only serves as a blueprint for other classes.
  - In JS → simulated using `new.target` check.

- Together:
  - Abstract Class + Abstract Methods = enforce rules for subclasses.
*/
