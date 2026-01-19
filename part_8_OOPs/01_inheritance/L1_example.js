// ==========================================
// 1️⃣ Shape constructor
// ==========================================

// Shape constructor → creates a "blueprint" for shape objects
function Shape(color) {
  // own property: each Shape instance gets its own color
  this.color = color;
}

// Add a method to Shape.prototype (shared by all shapes)
// Any object created from Shape (or child classes) can use this
Shape.prototype.describe = function () {
  console.log("A shape of color " + this.color);
};

// ==========================================
// 2️⃣ Rectangle constructor (inherits from Shape)
// ==========================================

// Rectangle constructor → blueprint for rectangle objects
function Rectangle(color, width, height) {
  // Call Shape constructor so Rectangle also has a "color" property
  Shape.call(this, color); // like super() in class syntax

  // Add own properties
  this.width = width;
  this.height = height;
}

// Inheritance setup
// Creates a new object for Rectangle.prototype
// and links its __proto__ to Shape.prototype
Rectangle.prototype = Object.create(Shape.prototype);

// Reset constructor pointer back to Rectangle
Rectangle.prototype.constructor = Rectangle;

// Add method specific to Rectangle
// Uses instance properties this.width and this.height
Rectangle.prototype.area = function () {
  return this.width * this.height;
};

// ==========================================
// 3️⃣ Square constructor (inherits from Rectangle)
// ==========================================

// Square constructor → blueprint for square objects
function Square(color, side) {
  // Call Rectangle constructor
  // Pass side as both width and height (since all sides are equal)
  Rectangle.call(this, color, side, side);
}

// Inheritance setup
// Creates a new object for Square.prototype
// and links its __proto__ to Rectangle.prototype
Square.prototype = Object.create(Rectangle.prototype);

// Reset constructor pointer back to Square
Square.prototype.constructor = Square;

// Override describe method → specific to Square
Square.prototype.describe = function () {
  console.log(`A ${this.color} square`);
};

// ==========================================
// 4️⃣ Testing
// ==========================================

// Create a new Square instance
let sq = new Square("red", 5);

// Calls overridden method on Square.prototype
sq.describe(); // "A red square"

// Calls Rectangle.prototype.area()
// Uses stored properties width=5, height=5
console.log(sq.area()); // 25

// ==========================================
// 5️⃣ Prototype chain checks
// ==========================================

// sq.__proto__ points to Square.prototype
console.log(sq.__proto__ === Square.prototype); // true

// Square.prototype.__proto__ points to Rectangle.prototype
console.log(sq.__proto__.__proto__ === Rectangle.prototype); // true

// Rectangle.prototype.__proto__ points to Shape.prototype
console.log(sq.__proto__.__proto__.__proto__ === Shape.prototype); // true
