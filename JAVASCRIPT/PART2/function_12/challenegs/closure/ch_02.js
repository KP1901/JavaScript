/*
Q2 — Two Counters (Important Closure Test)
Question recap

You create two counters using the same outer function, like:

One counter is stored in variable A

Another counter is stored in variable B

You call them alternately

👉 Do they share the same count or have independent counts? Why?
*/

function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}
let A = outer();
let B = outer();
let C = outer();
A();
A();
B();
A();
B();

/*
✅ Correct technical statement

Closure – Q2 Notes (Multiple Counters)

-Every call to the outer function creates a new execution context.
-Each execution context has its own lexical environment.
-A new count variable is created on every outer function call.
-Each returned inner function is linked to its own closure.
-Even though the function code is the same, the memory is different.
-Closures do not share variables across different outer calls.
*/