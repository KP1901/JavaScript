/*
🔹 Challenge 2: Custom Array Transformer (HOF + Callback)
Problem

Create a function transformArray(arr, transformerFn) that:

Takes an array and a function

Applies the function to each element

Returns a new array
❌ Do NOT use map()

*/

function square(x) {
  return x * x;
}

function transformArray(arr, transformerFn) {
  let result = [];
  for (const element of arr) {
    result.push(transformerFn(element));
  }
  return result;
}

const result = transformArray([1, 2, 3, 4], square);
console.log(result);
