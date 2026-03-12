/*
=====================================================
🔑 Abstract Class in JavaScript (Theory + Practical)
=====================================================

📌 THEORY:
- Abstract class is like a blueprint.
- You CANNOT create objects directly from it.
- It defines WHAT methods a child class must have, 
  but not HOW they are implemented.
- Subclasses (child classes) must implement those methods.

✅ Benefits:
- Provides structure (all child classes follow the same rules).
- Helps achieve Abstraction + Polymorphism.

-----------------------------------------------------
PRACTICAL EXAMPLE: Shape → Circle, Rectangle
=====================================================
*/

class Shape {
  constructor() {
    // ❌ Prevent direct object creation
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
// 1️⃣ Circle Class (inherits Shape)
// ===================================================
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  // ✅ Concrete implementation of abstract method
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

// ===================================================
// 2️⃣ Rectangle Class (inherits Shape)
// ===================================================
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  // ✅ Must implement area()
  area() {
    return this.width * this.height;
  }
}

// ===================================================
// 3️⃣ Usage (Theory in Action)
// ===================================================

// ❌ Direct instantiation (not allowed)
// const s = new Shape(); // Error

// ✅ Circle
const c = new Circle(5);
console.log("Circle Area:", c.area()); // ~78.5

// ✅ Rectangle
const r = new Rectangle(10, 4);
console.log("Rectangle Area:", r.area()); // 40

// ✅ Polymorphism (one interface, different behavior)
const shapes = [new Circle(3), new Rectangle(4, 6)];

shapes.forEach((shape) => {
  console.log("Area:", shape.area());
});

/*
=====================================================
📌 OUTPUT:
Circle Area: 78.53981633974483
Rectangle Area: 40
Area: 28.274333882308138
Area: 24

=====================================================
📌 KEY TAKEAWAYS:
1. Shape = abstract class (blueprint).
2. Circle and Rectangle = child classes with real logic.
3. You cannot do new Shape() directly.
4. Each child MUST define area().
5. Polymorphism: same method name (area), different results.
6. why super() is called even if not have parameter or no need of instantiated 
   In a subclass, this is not automatically created.
7.Calling super() runs the parent constructor and initializes this.

Abstract class gives you:

| Benefit               | Explanation                          |
| --------------------- | ------------------------------------ |
| Prevent wrong objects | Cannot create base class objects     |
| Enforce rules         | Subclasses must implement methods    |
| Common structure      | All subclasses follow same design    |
| Polymorphism          | Same interface for different objects |
| Extensibility         | Easy to add new subclasses           |

*/
