/*
1️⃣ What is Currying?

Currying is a technique of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument.

Instead of writing f(a, b, c), you write f(a)(b)(c).

✅ Every call returns a new function that takes exactly one argument.
 or 
 ✅ Transforming multi-arg → single-arg sequence 
*/

function add(a) {
  return function (b) {
    return a + b;
  };
}
console.log(add(2)(3));




/**
 
🔹 Key idea

Currying means split a function with multiple arguments into nested single-argument functions.

Uses closures internally to remember previous arguments.

 */

// challenge - 1

function multiply(a) {
  return function (b) {
    return a * b;
  };
}
console.log(multiply(2)(3));
console.log(multiply(5)(5));

// challenge - 2

function fullName(firstName) {
  return function (lastName) {
    return `${firstName} ${lastName}`;
  };
}
console.log(fullName("kiran")("patodekar"));

// challenge - 3
function discount(rate) {
  return function (price) {
    return price - rate * price;
  };
}
console.log(discount(0.1)(500));
console.log(discount(0.5)(500));

// simply “we are passing step by step arguments into nested functions”

function getFullAdd(firstName) {
  return function (lastName) {
    return function (address) {
      console.log(firstName, lastName, address);
    };
  };
}
getFullAdd("kiran")("patodekar")("latur");

/*

1️⃣ Global Lexical Environment
Global Lexical Environment
--------------------------
getFullAdd → function

2️⃣ getFullAdd("kiran") is called
Lexical Environment created
Lexical Environment (getFullAdd call)
------------------------------------
firstName → "kiran"


Returns function(lastName)

Inner function gets:

[[Environment]] → { firstName: "kiran" }

3️⃣ Returned function is immediately called → ("patodekar")
Lexical Environment created
Lexical Environment (lastName function call)
-------------------------------------------
lastName → "patodekar"


Returns function(address)

This function gets:

[[Environment]] → { lastName: "patodekar" }
                  ↑
                  └── outer → { firstName: "kiran" }

4️⃣ Returned function is immediately called → ("latur")
Lexical Environment created
Lexical Environment (address function call)
-------------------------------------------
address → "latur"

🔍 Scope Chain Resolution (very important)

When this line runs:

console.log(firstName, lastName, address);


Lookup happens like this:

address   → found in current LE
lastName  → not here → go outer LE → found
firstName → not there → go outer LE → found

*/

/*
🧠 Visual Closure Chain (memorize)
address function
   ↓
lastName LE { lastName: "patodekar" }
   ↓
firstName LE { firstName: "kiran" }
   ↓
Global LE
*/