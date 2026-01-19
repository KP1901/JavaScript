/*

filter()

-filter() is a higher-order array method in JavaScript
-It returns a NEW array
-It keeps elements that satisfy a condition
-Original array is not modified
-Callback must return true or false


Thinking (VERY IMPORTANT)

Use filter() when:

 -You want some elements, not all
 -Condition-based selection
 -One array → smaller array

👉 filter() means:

“Keep this element if condition is true.”

Syntax:

array.filter(function (element, index, array) {
  return condition; // true or false
}, thisArg);


Callback Parameters

-element → current element
-index → (optional) index
-array → (optional) original array
-thisArg → (optional) value of this
*/

// Basic Example: Even numbers

let nums = [1, 2, 3, 4];

let evens = nums.filter((num) => num % 2 == 0);

console.log(evens);

// filter objects

let users = [
  { name: "A", age: 17 },
  { name: "B", age: 22 },
  { name: "C", age: 18 },
];

let res = users.filter((user) => user.age >= 18);

console.log(res);

/*
Common Mistakes ❌

❌ Forgetting return
❌ Returning non-boolean (truthy/falsy confusion)
❌ Using forEach() instead of filter()
*/

// Replace filter with reduce (INTERVIEW)

let numbers = [1, 2, 3, 4];

let evenList = numbers.reduce((acc, currValue) => {
  if (currValue % 2 == 0) {
    acc.push(currValue);
  }

  return acc;
}, []);

console.log(evenList);
