// THIS IS AN EXAMPLE OF PROTOTYPE INHERITANCE (EXPLICIT)

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
Rectangle.prototype.describe = function () {
  return this.width * this.height;
};

function Square(color, side) {
  // Call Rectangle constructor
  // Pass side as both width and height (since all sides are equal)
  Rectangle.call(this, color, side, side);
  this.side = side;
}

// Inheritance setup
// Creates a new object for Square.prototype
// and links its __proto__ to Rectangle.prototype
// Square.prototype = Object.create(Rectangle.prototype);

// Square.prototype.constructor = Square;

Object.setPrototypeOf(Square.prototype, Rectangle.prototype);

Square.prototype.describe = function () {
  return this.side * this.side;
};

// ✔ sq is a child of Square.prototype, which links to Rectangle.prototype.
let sq = new Square("red", 20);

console.log(sq.describe());

console.log(sq.__proto__ === Square.prototype);

console.log(Square.prototype.__proto__ === Rectangle.prototype);

console.log(Rectangle.prototype.__proto__ === Shape.prototype);

/*
so chain becomes :

sq
 ↓
Square.prototype
 ↓
Rectangle.prototype
 ↓
Shape.prototype
 ↓
Object.prototype
 ↓
null

So IMP : Every JavaScript object has an internal [[Prototype]] link to another object.
JavaScript follows this prototype chain to access inherited properties and methods.

SO IMP :
-✔ sq is a child of Square.prototype, which links to Rectangle.prototype.
-Objects inherit from prototypes, not from other objects.
*/
