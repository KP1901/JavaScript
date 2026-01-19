/*
A function factory is a function that creates (returns) other functions.
Just like a factory in real life makes products, a function factory makes functions.
*/

function greetFactory(greeting) {
  return function (name) {
    console.log(`${greeting},${name}`);
  };
}
let sayHello = greetFactory("Hello");
sayHello("ALice");
sayHello("Jhon");

const sayHi = greetFactory("Hi");
sayHi("Bob");

/*

---------------------------------------------------------------------------


1️⃣ Global Lexical Environment (created first)
Global Lexical Environment
--------------------------
greetFactory → function
sayHello     → undefined
sayHi        → undefined


2️⃣ greetFactory("Hello") is called
New Lexical Environment created for this call
Lexical Environment (greetFactory call #1)
-----------------------------------------
greeting → "Hello"


Inner function is created

Inner function gets a hidden link:
[[Environment]] → this lexical environment

Return value → inner function
Assigned to sayHello

3️⃣ sayHello("Alice") is called
New Lexical Environment for inner function
Lexical Environment (sayHello call)
----------------------------------
name → "Alice"


🔗 Scope chain lookup:

name      → found here
greeting  → NOT here → go to [[Environment]]
greeting  → "Hello


4️⃣ sayHello("John")

Same closure, same preserved environment

Lexical Environment (sayHello call)
----------------------------------
name → "John"


🔗 Uses:

greeting → "Hello" (still alive)


✅ Output: Hello, John


5️⃣ greetFactory("Hi") is called
New, separate Lexical Environment
Lexical Environment (greetFactory call #2)
-----------------------------------------
greeting → "Hi"


Returned inner function assigned to sayHi

sayHi → function (closure)
        [[Environment]] → { greeting: "Hi" }


        6️⃣ sayHi("Bob")
Lexical Environment (sayHi call)
--------------------------------
name → "Bob"


🔗 Lookup:

greeting → "Hi"


✅ Output: Hi, Bob


---------------------------------------------------------------------------
greetFactory("Hello") → makes a new function that always uses "Hello".

greetFactory("Hi") → makes a new function that always uses "Hi".

✅ Here, greetFactory is the factory — it produces specialized greeting functions.
*/

/*
Key points

-The outer function produces a new function.

-The returned function remembers the outer variables via closure.

-This is useful to create reusable, customized functions.
*/

// challenge - 1

function makeMultiplier(x) {
  return function (y) {
    return x * y;
  };
}
const multipleBy2 = makeMultiplier(2);
console.log(multipleBy2(5));

const multipleBy3 = makeMultiplier(3);
console.log(multipleBy3(10));

/*
- makeMultiplier() is an outer function that takes x.
- Each call to makeMultiplier() creates a new lexical environment.
- x is stored inside that lexical environment.
- The returned inner function remembers x.
- multipleBy2 remembers x = 2.
- multipleBy3 remembers x = 3.
- Even though the inner function code is the same, the stored data is different.
- Closure allows the function to reuse preset values later.
*/

// challenge - 2

function logger(prefix) {
  return function (message) {
    return `${prefix},${message}`;
  };
}
const errorMsg = logger("Error");
const infoLogger = logger("INFO");

console.log(errorMsg("File not found"));
console.log(infoLogger("Server Started"));

/*
logger() is an outer function that takes prefix.

-Each call to logger() creates a new lexical environment.
-prefix is stored inside that lexical environment.
-The returned inner function closes over prefix.
-errorMsg remembers prefix = "Error".
-infoLogger remembers prefix = "INFO".
-Even though the inner function code is the same, the stored data is different.
-Closure allows the function to reuse preset values later.
 */

// challenge 3

function makePasswordChecker(password) {
  return function (checkPass) {
    if (password === checkPass) {
      return true;
    } else {
      return false;
    }
  };
}

let checkPass = makePasswordChecker("abc123");

console.log(checkPass("abc123"));

/*
- each call makePasswordChecker() creates a new lexical environment
-password is stored inside lexical environment
- the returned inner function remembers  password
-checkPass remembers password = "abc123".
-Even though the inner function code is the same, the stored data is different.
-Closure allows the function to reuse preset values later.

*/

// imp => function parameter always acts let
