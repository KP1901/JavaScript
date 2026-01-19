/*

Closure – Q6 (Question)

An outer function finishes execution,
but its inner function is still callable later.

👉 Where are the outer function’s variables stored after the function has finished executing, and why are they not destroyed?
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
Closure – Q6 Notes (Very Important)

-When outer() finishes, its execution context is removed from the call stack.
-But its lexical environment is not destroyed.
-The inner function holds a reference to that lexical environment.
-Because of this reference, variables like count stay alive in memory.
-JavaScript’s garbage collector does not remove variables that are still referenced.
-This preserved environment is called a closure.
*/
