/*
==========================================================
🔑 Polymorphism in JavaScript – Method Overloading (Simulated)
==========================================================

📌 Theory:
1. Polymorphism = "many forms".
2. Types of polymorphism:
   - Runtime polymorphism → Method overriding (like Animal → Dog, Cat).
   - Compile-time polymorphism → Method overloading (same method name, 
     different signatures).
3. In Java or C#, true overloading is supported by the compiler.
   Example (Java):
      add(int a, int b)
      add(int a, int b, int c)
4. JavaScript does NOT support method overloading directly.
   👉 But we can *simulate it* using:
      - Rest parameters (...args)
      - Checking number/type of arguments

✅ Why use it?
- Makes a method more flexible (handle multiple use cases).
- Clean single method name for different input variations.

==========================================================
*/

// 1️⃣ Calculator class with simulated method overloading
class Calculator {
  add(...args) {
    // Rest parameter → captures all arguments in an array
    if (args.length === 2) {
      return args[0] + args[1]; // Case: 2 arguments
    } else if (args.length === 3) {
      return args[0] + args[1] + args[2]; // Case: 3 arguments
    }
    return "Invalid number of arguments"; // Any other case
  }
}

// 2️⃣ Create object
const calc = new Calculator();

// 3️⃣ Test calls
console.log(calc.add(5, 10)); // 15 (two arguments)
console.log(calc.add(1, 2, 3)); // 6  (three arguments)
console.log(calc.add(1)); // Invalid number of arguments

/*
================== OUTPUT ==================
15
6
Invalid number of arguments
============================================

📌 Conclusion:
- Same method name: add()
- Different behaviors: based on number of arguments
- This is not "true" method overloading (like Java/C#) 
  but a JavaScript simulation using rest parameters and conditions.
*/

// a basic example
function addNumber(x, y) {
  return x + y;
}
function addNumber(x, y, z) {
  return x + y + z;
}
addNumber(10, 20);
addNumber(10, 20, 30);
