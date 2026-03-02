/*
Closure – Q8 (Question)

Two inner functions modify the same variable from an outer function.
They are called in different orders.

👉 Why does the call order change the final result?
*/

function counter() {
  let count = 0;

  function increment() {
    count++;
  }

  function decrement() {
    count--;
  }

  function getCount() {
    console.log(count);
  }

  return { increment, decrement, getCount };
}
let c = counter();
c.increment();
c.increment();
c.getCount();

/*
Closure – Q8 Notes

-count is created in the outer function.
-increment, decrement, and getCount all form closures over count.
-All inner functions share the same lexical environment.
-Each function mutates the same variable.
-The final value depends on which function runs first.
-Call order matters because state is shared and mutable.
*/
