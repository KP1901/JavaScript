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
//Compose = right → left execution

const fn = compose3(add2, multiple3, minus1);
console.log(fn(5));
