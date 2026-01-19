/*
🔹 Challenge 3: Function Composer (HOF + Returning Function)
Problem

Create a function compose(f, g) that:

Takes two functions

Returns a new function

The returned function applies g first, then f
*/
function add2(x) {
  return x + 2;
}
function multiple3(x) {
  return x * 3;
}

function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}
let composeFn = compose(multiple3, add2);
console.log(composeFn(4));
