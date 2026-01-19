/*
1️⃣ What is Currying?

Currying is a technique of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument.

or
where sequence of a function that each that each take single argument.

Instead of writing f(a, b, c), you write f(a)(b)(c).

✅ Every call returns a new function that takes exactly one argument.
 or 
 ✅ Transforming multi-arg → single-arg sequence 
*/

// arity currying (fixed arguments)
function add(a) {
  return function (b) {
    return a + b;
  };
}

console.log(add(5)(2));

/*
“Call add with 5,
take whatever function it returns,
then call that function with 2,
and log the result.”
*/

// no fixed arguments

function sub(a) {
  let res = a;
  return function inner(value) {
    if (value === undefined) {
      return res;
    }
    res += value;
    return inner;
  };
}
console.log(sub(2)(3)(4)(5)());

/*
1️⃣ Global Lexical Environment
Global Lexical Environment
--------------------------
add → function

2️⃣ add(5) is executed
Lexical Environment for add
Lexical Environment (add call)
------------------------------
a → 5


Inner function is created

Inner function gets hidden reference:

[[Environment]] → { a: 5 }


add(5) returns the inner function

3️⃣ Immediately calling returned function → (2)
Lexical Environment for inner function
Lexical Environment (inner function call)
-----------------------------------------
b → 2

Scope chain lookup
b → found in inner LE
a → not found → go to [[Environment]]
a → 5

Execution
a + b = 5 + 3 = 8


Returned value → 8

4️⃣ console.log
console.log(8)

*/

/*
💡 Analogy:

so instead of using function factory to remember the data

add(5) → I give you 5 and say: “hold this number”

Returned function → I give you 3 and say: “add it to the number you’re holding” → 5 + 3 = 8
*/

// challenge - 1

function multiple(a) {
  return function (b) {
    return a * b;
  };
}
console.log(multiple(3)(2));
console.log(multiple(5)(2));

/*
1️⃣ Global Lexical Environment
Global Lexical Environment
--------------------------
multiple → function

2️⃣ multiple(3) is executed
Lexical Environment for multiple
Lexical Environment (multiple call)
------------------------------
a → 3

Inner function is created

Inner function gets hidden reference:

[[Environment]] → { a: 3 }

multiple(3) returns the inner function

3️⃣ Immediately calling returned function → (2)
Lexical Environment for inner function
Lexical Environment (inner function call)
-----------------------------------------
b → 2

Scope chain lookup
b → found in inner LE
a → not found → go to [[Environment]]
a → 3

Execution
a * b = 3 * 2 = 6


Returned value → 6

4️⃣ console.log
console.log(5)

*/

// challenge 3

function fullName(firstName) {
  return function (lastName) {
    return `${firstName} +${lastName}`;
  };
}
console.log(fullName("kiran")("patodekar"));

// challenge 3

function discount(rate) {
  return function (price) {
    return price - rate * price;
  };
}

// challenge 4

function getFullAdd(firstName) {
  return function (lastName) {
    return function (address) {
      console.log(firstName, lastName, address);
    };
  };
}
getFullAdd("kiran")("patodekar")("latur");

/*
🔍 Variable lookup order (scope chain)

Inside this function:

function (address) {
  console.log(firstName, lastName, address);
}

For each variable:
🔹 address
address → Local Lexical Environment ✅

🔹 lastName
Local LE ❌
→ Outer LE (lastName function) ✅

🔹 firstName
Local LE ❌
→ Outer LE (lastName function) ❌
→ Outer LE (getFullAdd function) ✅


✔ Exactly: local → outer → outer

*/
