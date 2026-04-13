/*

IIFE — Immediately Invoked Function Expression

One-line meaning

An IIFE is a function that runs immediately after it is created.

No waiting. No later call.

❓ Why does this even exist?

Because sometimes you want:

-a private scope
-run code once
-avoid polluting global variables

Before let / const, this was 🔥 very important.

*/

// 🚫 Normal function (NOT IIFE)

function greet() {
  console.log("hi");
}
greet();

// IIFE function (NOT IIFE)

(function greet() {
  console.log("hi");
})();

/*
Breakdown:

-(function () { ... }) → function expression
-() → invoke immediately

📌 Expression first, call second
*/

// Real-world example 1️⃣: Private variables

const counter = (function () {
  let count = 0;
  return function () {
    count++;
    return count;
  };
})();

console.log(counter());
console.log(counter());
console.log(counter());

//Real-world example 2️⃣: One-time setup code

(function () {
  console.log("App Initialized");

  const config = {
    apiUrl: "https://api.example.com",
  };

  // fetch, setup, listeners
})();

/*
IIFE runs immediately when the JS file is loaded,
a normal function runs only when you explicitly call it.

What actually happens

1️⃣ JS loads the file
2️⃣ JS creates the function expression
3️⃣ JS immediately executes it
4️⃣ App setup + fetch happens automatically

📌 No function call needed from outside

This is why it’s perfect for:

-app bootstrapping
-one-time initialization
-config setup

| IIFE               | Normal function               |
| ------------------ | ----------------------------- |
| Runs automatically | Runs only when called         |
| No external call   | Needs explicit call           |
| Private scope      | Scope depends on where called |
| Used for setup     | Used for reusable logic       |

*/
