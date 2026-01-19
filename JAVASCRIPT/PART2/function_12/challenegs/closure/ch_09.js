/*
Closure – Q9 (Question)

A function returns other functions, each with a fixed value decided at creation time.

👉 How does closure help each returned function remember its own fixed value?
*/

function multiplier(factor) {
  return function (num) {
    console.log(num * factor);
  };
}

let double = multiplier(2);
let triple = multiplier(3);

double(5);
triple(5);

/*
Closure – Q9 Notes

-factor is a parameter of the outer function.
-Each call to multiplier() creates a new lexical environment.
-double closes over factor = 2.
-triple closes over factor = 3.
-Even though the inner function code is same, the stored values differ.
-Closure allows each function to remember its creation-time data.
*/
