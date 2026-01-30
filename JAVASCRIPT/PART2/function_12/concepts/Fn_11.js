// 9️⃣ Nested Functions and Closures

/*
🧠 Concept 1: Nested Functions

A nested function means a function defined inside another function.
The inner function can access variables of the outer function, but not the other way around.


Your example demonstrates both:

-Lexical Environment (Lexical Scope)
-Scope Chaining

and NOT closure.

*/

function outer() {
  let outerVar = "I am from outer";

  function inner() {
    let innerVar = "I am from inner";
    console.log(outerVar);
  }
  inner();
}
outer();
console.log();

/*
Most Imp =>A closure is created whenever a function accesses variables from its outer lexical environment — regardless of whether the outer function has finished or not.

✅ Summary

Your current code does create a closure.

The inner function has access to the outer function’s variable because of lexical scope, so a closure exists even though the inner function is called inside the outer function.

Closure becomes visible only when the inner function survives after the outer function finishes (like in function factories, currying, or returned functions).
*/

// Example 2: Multiple Inner Functions

function greet() {
  let name = "kiran";

  function sayHello() {
    console.log("Hello " + name);
  }

  function sayBye() {
    console.log("Goodbye " + name);
  }
  sayHello();
  sayBye();
}
greet();

/*
🧠 Concept 2: Closures

Now the real magic:

A closure happens when an inner function “remembers” the variables of its outer function — even if the outer function is still running.
The closure becomes especially visible when the inner function survives after the outer function has finished.
*/

function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}
let counter = outer();
counter();
counter();
counter();

/*
We are storing a reference to inner in counter, and
inner’s lexical environment has access to outer’s lexical environment,
so even after outer() finishes, we can still access 

  or
  
We store a reference to the inner function in counter.
That function carries a hidden reference to its outer lexical environment.
Because of that reference, the outer lexical environment is preserved,
so even after outer() finishes, we can still access and update count.
*/

/*

🔑 Key Point

counter is just a reference to the function object returned by outer.

Calling counter() is the same as calling inner().

The closure is what allows the function to remember count between calls.
*/
/*

Interview-Ready Answer (Flow Explanation)

When a function is declared inside another function and the inner function uses variables from the outer function, a closure is formed.

Here’s what happens step-by-step:

When the outer function is called, a new execution context is created.

The outer function’s local variables (like count) are created in its lexical environment.

The inner function is defined inside the outer function, so it gets a hidden link to that lexical environment.

When the outer function returns the inner function, the outer function’s execution context is removed from the stack — but its lexical environment is not destroyed because the inner function still references it.

Every time we call the returned inner function, JavaScript first looks for variables inside the inner scope. If not found, it goes up the scope chain to that preserved lexical environment and accesses the outer variables.

This combination of the inner function + its preserved environment is called a closure.


imp => 
    “In a closure, the inner function retains access to the outer function’s variables through its lexical environment, even after the outer function has finished executing.
When the outer function runs, it creates a scope; when it returns an inner function, that inner function carries a reference to the outer scope, forming a closure.”
*/

// Closure = Scope Chain + Lexical Environment + Remembered variables

/*

🌍 GLOBAL EXECUTION CONTEXT (GEC)

🔹 Creation Phase (Global)
Global Execution Context
-----------------------
Lexical Environment:
Environment Record:
outer → function outer() { ... }
counter → <uninitialized> (TDZ)
console → Console object
this → window

Outer Reference → null

🔹 Execution Phase (Global)
let counter = outer();


➡️ outer() is called
➡️ outer Execution Context is created

🔹 OUTER EXECUTION CONTEXT (FIRST & ONLY TIME)
🔹 Creation Phase (outer)
outer Execution Context
----------------------
Lexical Environment:
Environment Record:
count → <uninitialized> (TDZ)
inner → function inner() { ... }

Outer Reference → Global Lexical Environment

🔹 Execution Phase (outer)
let count = 0;     // count = 0
return inner;     // return function reference

🔑 IMPORTANT (CLOSURE POINT)

inner is returned

outer finishes

BUT count is NOT destroyed

Because inner still references outer’s lexical environment

counter → inner (with closure over count)

🔁 WHAT REMAINS IN MEMORY (CLOSURE)
Closure
-------
inner → function
[[Environment]] → outer Lexical Environment
count → 0

🔸 CALL 1 → counter()
🔹 inner Execution Context (1st call)
Creation Phase
inner Execution Context
----------------------
Lexical Environment:
Environment Record:
(no local variables)

Outer Reference → outer Lexical Environment (closure)

Execution Phase
count++;        // 0 → 1
console.log(1);


✔️ Output: 1

🔸 CALL 2 → counter()

(Same closure, same count)

count++;        // 1 → 2
console.log(2);


✔️ Output: 2

🔸 CALL 3 → counter()
count++;        // 2 → 3
console.log(3);


✔️ Output: 3


*/
