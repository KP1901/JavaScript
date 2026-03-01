/*
Q1.
A function returns another function that increments a counter.
You call the returned function 3 times.
👉 What will be printed each time, and why doesn’t the counter reset?

*/

function outer() {
  var count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}

let counter = outer(); // store function inner + its closure
counter();
counter();
counter();

/*
Closure – Q1 Notes

-A closure is created when an inner function accesses variables from its outer function.
-The outer function executes once, creating the variable (count).
-The inner function is returned and stored.
-The inner function remembers the outer function’s lexical environment.
-Even after the outer function finishes, its variables are not destroyed.
-Each call to the inner function uses the same variable, not a new one.
-Therefore, the value updates instead of resetting.

*/
