/*
=====================================================
🔑 Abstract Classes in JavaScript (Simulated)
=====================================================

- JavaScript does NOT have the `abstract` keyword (like Java/C#).
- But we can simulate abstract classes by:
  1. Preventing direct instantiation (using new.target).
  2. Creating "abstract methods" that throw errors unless implemented.
- Child classes MUST implement those abstract methods.
*/

// ===================================================
// 1️⃣ Abstract Base Class → Shape
// ===================================================

class Shape {
  constructor() {
    // ❌ Prevent direct instantiation of Shape
    if (new.target === Shape) {
      throw new Error("Cannot instantiate abstract class Shape directly");
    }
  }

  // Abstract method (no implementation here)
  area() {
    throw new Error("Method 'area()' must be implemented in subclass");
  }
}

// ===================================================
// 2️⃣ Circle Class (extends Shape)
// ===================================================

class Circle extends Shape {
  constructor(radius) {
    super(); // calls Shape constructor
    this.radius = radius;
  }

  // ✅ Must provide concrete implementation of area()
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

// ===================================================
// 3️⃣ Rectangle Class (extends Shape)
// ===================================================

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  // ✅ Must provide its own implementation
  area() {
    return this.width * this.height;
  }
}

// ===================================================
// 4️⃣ Triangle Class (extends Shape)
// ===================================================

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  // ✅ Must implement area()
  area() {
    return 0.5 * this.base * this.height;
  }
}

// ===================================================
// 5️⃣ Usage Examples
// ===================================================

// ❌ Direct instantiation → not allowed
// const s = new Shape();
// Error: Cannot instantiate abstract class Shape directly

// ✅ Circle
const c = new Circle(5);
console.log("Circle Area:", c.area()); // ~78.5

// ✅ Rectangle
const r = new Rectangle(10, 4);
console.log("Rectangle Area:", r.area()); // 40

// ✅ Triangle
const t = new Triangle(10, 5);
console.log("Triangle Area:", t.area()); // 25

// ===================================================
// 6️⃣ Polymorphism Example
// ===================================================

const shapes = [new Circle(3), new Rectangle(4, 6), new Triangle(5, 8)];

shapes.forEach((shape) => {
  console.log(`Area: ${shape.area()}`);
});

/*
Output:
Circle Area: 28.27
Rectangle Area: 24
Triangle Area: 20
*/

/*
=====================================================
📌 Key Takeaways
=====================================================

1. Shape is an "abstract" class:
   - Cannot be instantiated directly.
   - Provides a base for all specific shapes.

2. Each subclass (Circle, Rectangle, Triangle) must
   implement the abstract method area().

3. If a subclass does NOT implement area(),
   calling(c.area()) it will throw an error.

4. This demonstrates:
   - Abstraction (Shape defines the structure).
   - Inheritance (Circle/Rectangle/Triangle extend Shape).
   - Polymorphism (same method name, different behavior).
*/

/*
--------------------imp concept----------
== when method is not implement in child class what will happens==
The error happens when you call c.area() because the method wasn’t overridden in child and it falls back to the parent’s abstract version.
*/
