/*
1) forEach()

-(only works on arrays | internally works like a for loop – IMP)
-Does not return a new array (unlike map())
-forEach() is a higher-order array method in JavaScript
-Used to iterate over elements of an array
-It executes the callback function once for each array element, in order


array.forEach(function(element, index, array) {
  your code here
}, thisArg);

Parameters

-element — current element
-index (optional) — index of current element
-array (optional) — the array forEach() is being applied on
-thisArg (optional) — value to use as this when executing callback

*/

// Basic Example

let fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit) => {
  console.log(fruit);
});

// Example with index and array

let marks = [100, 200, 300, 400, 500];

marks.forEach((mark, index) => {
  console.log(index, mark);
});

/*

When to use forEach()

-Simple looping over an array
-Performing side effects
  -e.g. console.log
  -updating DOM

*/

/*
-------------------------------------------------------------------------------------------
Using thisArg in forEach()

-thisArg is an optional second parameter of the forEach() method
-It defines what the value of this should be inside the callback function of forEach()

-array.forEach(callbackFunction, thisArg);

-callbackFunction → function executed for each array element
-thisArg → value to use as this when executing callback function
*/

//Without thisArg

let arr1 = [1, 2, 3];

arr1.forEach(function (el) {
  console.log(el * this.multiplier);
});

/*
this is undefined (in strict mode)
or refers to global object (in non-strict mode)
👉 this does NOT refer to the intended object
*/

// With thisArg

let user = {
  multiplier: 2,
};

let arr3 = [1, 2, 3];

arr3.forEach(function (el) {
  console.log(el * this.multiplier);
}, user);

/*
this inside callback refers to the object
thisArg explicitly binds this
*/

/*
Key Points

-Without thisArg, this is:
-  undefined (strict mode)
-  global object (non-strict mode)
-With thisArg, this refers to the provided object
-Mostly useful in older code / function syntax
*/

/*

-When we use arrow function (does not need thisArg)
-Arrow functions don’t have their own this
-They inherit this from the outer (lexical) scope

Summary
Case → Behavior of this inside callback

=>Normal function (no thisArg)
→ this is undefined (strict mode) or global object (non-strict)

=>Normal function + thisArg
→ this is bound to the provided object

=>Arrow function
→ Inherits this from outer scope


⭐ Key Takeaways

-forEach() is use for side effects
-Use thisArg only with normal functions
-Arrow functions ignore thisArg
-forEach() works only on arrays
-Avoid forEach() with async/await


What does side effect mean?

👉 A side effect is when a function does something other than returning a value.

In simple words:

Side effect = change outside the function

Side Effect in JavaScript (Simple)

A function has a side effect if it:

-Logs something (console.log)
-Changes a variable
-Modifies an object or array
-Updates the DOM
-Makes an API call
-Writes to storage (localStorage, file, DB)

Example 1: Side effect ✅
let sum = 0;

[1, 2, 3].forEach(num => {
  sum += num;   // modifying external variable
});

console.log(sum); // 6


✔ sum is changed
✔ This is a side effect

Example 2: Side effect (console.log)
[1, 2, 3].forEach(num => {
  console.log(num);
});


✔ Printing to console
✔ Side effect

Example 3: NOT a side effect ❌ (pure function)
let doubled = [1, 2, 3].map(num => num * 2);


✔ No external change
✔ Returns new array
✔ No side effect


*/
