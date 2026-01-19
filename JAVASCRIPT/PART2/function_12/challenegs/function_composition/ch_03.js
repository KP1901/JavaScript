/*
🔹 Challenge 3 – Solution

Safe Composition (with validation)

Goal Recap

Create safeCompose(f, g) that:

Composes two functions

Executes right → left

If the result at any step is not a number, return "Invalid result"
*/

const parse = (x) => Number(x);
const double = (x) => x * 2;

function safeCompose(double, parse) {
  return function (value) {
    const parseResult = parse(value);

    if (typeof parseResult !== "number" || Number.isNaN(parseResult))
      return "invalid";

    const doubleResult = double(parseResult);

    if (typeof doubleResult !== "number" || Number.isNaN(doubleResult))
      return "Invalid";

    return doubleResult;
  };
}
const fn = safeCompose(double, parse);
console.log(fn("abc5"));
