// 9️⃣ Nested Functions and Closures

/*
🧠 Concept 1: Nested Functions

A nested function means a function defined inside another function.
The inner function can access variables of the outer function, but not the other way around.
*/

function outer() {
  let outerVar = "I am from outer";

  function inner() {
    console.log(outerVar);
  }
  inner();
}
outer();
console.log();

/*
Most Imp => so it it just lexical environment of outer() that why we can can access outer variable not becuase of closure because closure means inner function will survive even after outers finish but here all is going inside outer function 

✅ Summary

Your current code uses lexical scope, not a true closure.

Closure is only visible when the inner function survives after the outer function has finished, like in function factories, currying, or returned functions.
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

A closure happens when an inner function “remembers” the variables of its outer function — even after the outer function has finished running.

This is one of the most powerful behaviors in JavaScript.
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
We are storing a reference of inner in counter, and
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
