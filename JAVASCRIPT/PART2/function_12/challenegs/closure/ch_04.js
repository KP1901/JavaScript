/*
Closure – Q4 (Question)

You have the same loop that creates multiple functions,
but now each function prints a different value when called.

👉 What changed conceptually so that each function gets its own value instead of sharing one?

(Think in terms of lexical environment, not syntax.)
*/

function createFunctions() {
  let arr = [];

  for (let i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }

  return arr;
}

let funcs = createFunctions();

funcs[0](); // 0
funcs[1](); // 1
funcs[2](); // 2

/*
Closure – Q4 Notes (Conceptual Fix)

-let is block-scoped, not function-scoped.
-Each loop iteration creates a new lexical environment.
-A new i variable is created for every iteration.
-Each inner function closes over a different i.
-Closures now reference different memory locations.
-Therefore, each function prints a different value.
*/
