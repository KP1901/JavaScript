/*
=========================================
🔎 new.target in JavaScript
=========================================

👉 Definition:
- `new.target` is a special meta-property.
- Available ONLY inside a constructor function or class constructor.
- It tells you which constructor was directly called with `new`.

👉 Why useful?
1. Helps detect which class was instantiated (especially with inheritance).
2. Lets us prevent direct instantiation of base classes (simulate abstract classes).
3. Useful in debugging or building frameworks/libraries.

=========================================
1️⃣ Simple usage
=========================================
*/

class Person {
  constructor() {
    console.log("new.target is:", new.target);
  }
}

new Person();
// logs: [class Person]

/*
=========================================
2️⃣ Parent & Child class usage
=========================================
*/

class Animal {
  constructor() {
    console.log("new.target is:", new.target);
  }
}

class Dog extends Animal {}

new Dog();
// logs: [class Dog]
// Even though Animal’s constructor runs,
// new.target shows the class that was ACTUALLY called with new (Dog).

/*
=========================================
3️⃣ Using new.target to simulate Abstract Class
=========================================

👉 Abstract Class = a class that should NOT be instantiated directly.
   Instead, it acts as a base/blueprint for child classes.

👉 JavaScript has no built-in abstract classes.
   But we can simulate them with new.target + error throwing.
*/

class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error("❌ Cannot instantiate abstract class Shape directly");
    }
  }

  // Abstract method simulation
  draw() {
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

// new Shape();    // ❌ Error: Cannot instantiate abstract class Shape directly

const c = new Circle();
c.draw(); // ✅ Drawing Circle

const s = new Square();
s.draw(); // ✅ Drawing Square

/*
=========================================
⚖️ Summary
=========================================

- new.target = constructor directly invoked with `new`.
- With inheritance:
  - Base class constructor runs, but new.target points to the subclass.
- Main use cases:
  1. Detect if a base class is being instantiated directly.
  2. Simulate abstract classes in JavaScript.
  3. Enforce subclass responsibility (child must implement certain methods).
*/
