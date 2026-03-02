/*
🔹 Challenge 2: Dynamic Compose (Any Number of Functions)
Problem

Create a function composeAll(...fns) that:

Accepts any number of functions

Returns a single composed function

Uses right-to-left execution
*/
function add2(value) {
  return value + 2;
}

function multiple3(value) {
  return value * 3;
}

function minus1(value) {
  return value - 1;
}

function compose3(...fns) {
  return function (value) {
    return fns.reduceRight((acc, fn) => fn(acc), value);
  };
}

const fn = compose3(add2, multiple3, minus1);

/*
Compose = right → left execution
pipe - left -> right execution

above structure defines the function composition / pipeline — it does NOT execute immediately. It only creates a new composed function.

-so ask yourself you want to process the data left to right or right to left according to this (add2, multiple3, minus1)
- then call the function accordingly
Compose = right → left execution
pipe - left -> right execution
*/
console.log(fn(5));
