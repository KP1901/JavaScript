function createFunction() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }

  return arr;
}
let funcs = createFunction();
funcs[0]();
funcs[1]();
funcs[2]();
console.log(funcs);

/*
Closure – Q3 Notes (Very Important)

-The loop uses one single variable i.
-var is function-scoped, not block-scoped.
-All inner functions close over the same variable i.
-Closures capture the variable, not its value.
-The value of i is read when the function is executed, not when it is created.
-When the loop ends, i becomes 3.
-All functions then log the same final value.

imp : 👉 "let is block-scoped, and in a for loop JavaScript creates a new block scope per iteration, so each closure captures a different variable. With var, there is only one function-scoped variable shared by all closures."
*/
