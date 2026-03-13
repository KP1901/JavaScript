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

/*
 - same method name
 - different arguments
 - but behavior is always same addition 
 - which method overlaoding doesnot follow

*/

class Calculator {
  add(...args) {
    let total = 0;
    for (const item of args) {
      total += item;
    }
    return total;
  }
}

const calc1 = new Calculator();

console.log(calc1.add(5, 10));
console.log(calc1.add(5, 10, 15));
console.log(calc1.add(5, 10, 15, 20));

/*
 - same method name
 - different arguments
 - different behavior 
 - which method overlaoding  follows

 | Case                      | Behavior                           | Concept                      |
| ------------------------- | ---------------------------------- | ---------------------------- |
| `add(...args)`            | Same logic for all arguments       | Variadic function            |
| `arguments.length` checks | Different logic based on arguments | Simulated method overloading |


*/

class Calculator {
  add() {
    if (arguments.length === 2) {
      return arguments[0] + arguments[1];
    }
    if (arguments.length === 3) {
      return arguments[0] * arguments[1] * arguments[2];
    }
  }
}
const calc2 = new Calculator();

console.log(calc2.add(2, 3));
console.log(calc2.add(2, 3, 4));

/*
Important Concept

This looks like compile-time polymorphism (method overloading) but in JavaScript it is actually just one method handling multiple arguments dynamically.

| Concept                   | JavaScript Behavior        |
| ------------------------- | -------------------------- |
| Compile-time polymorphism | ❌ Not supported            |
| Runtime polymorphism      | ✅ Supported                |
| Variable arguments        | ✅ Achieved using `...rest` |

-Polymorphism is a concept achieved using method overriding and method overloading.
-Method overriding is runtime polymorphism, where the method that executes depends on the object calling it.
-Method overloading is compile-time polymorphism, where the compiler decides which method to execute based on the arguments.
-JavaScript does not support true method overloading because it does not have compile time like Java/C++.
*/
