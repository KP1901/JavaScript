/*

✅ Concept

A function has a side effect if it:

-Changes external variables
-Mutates objects
-Logs to console
-Modifies DOM
-Makes API calls

side effect - the function does something other than returning and storing which hits external system

*/

// example of sideeffect

let total = 0;

function add(x) {
  total += x; // side effect
}

// ✅ Pure Function (No Side Effect)

function add(a, b) {
  return a + b;
}

/*
🧠 Why it matters

-Hard to debug
-Breaks predictability
-Causes bugs in reduce, map

👉 Pure functions are predictable, testable, and reusable
*/
