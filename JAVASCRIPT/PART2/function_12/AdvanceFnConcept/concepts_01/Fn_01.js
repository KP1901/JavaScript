/*
1️⃣ First-Class Functions (Core Idea)

Functions are treated like values.

You can:

-Assign to variables
-Pass as arguments
-Return from functions

📌 First-class function means:

Functions are values just like numbers, strings, objects.
*/

function greet() {
  return "Hello";
}
let sayHello = greet;
console.log(sayHello());

/*
✅ Examples
1️⃣ Assign function to variable
function greet() {
  return "Hello";
}

let sayHello = greet;
console.log(sayHello()); // Hello

2️⃣ Pass function as argument
function execute(fn) {
  return fn();
}

execute(() => "Hi"); // Hi

3️⃣ Return function
function outer() {
  return function inner() {
    return "I am inner";
  };
}

const fn = outer();
console.log(fn());
*/