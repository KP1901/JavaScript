/*
1️⃣ What is Partial Application?

-Partial application is the process of fixing some arguments of a function now, so you can pass the rest later.
-Unlike currying, you don’t have to split arguments one by one.
-You can prefill any number of arguments.
*/

// there are two way to achieve this (bind and manually)

function multiply(a, b, c) {
  return a * b * c;
}
const multipleBy2 = multiply.bind(null, 2);
console.log(multipleBy2(3, 4));

/*
function multipleBy2(b, c) {
  return multiply.call(null, 2, b, c);
}

*/

/*

✅ The function returned by bind() => (multipleBy2)

is a new function created by the JS engine
bind() creates a Bound Function Object, not a lexical closure.
 -the original function reference (multiply)
 -any pre-filled arguments
 -the this value
So yes 💯 — it remembers the outer/original function (multiply) it was created from.
But technically, there’s no “outer function call” here — it’s a function binding, not a nested function.
 */

/*
-bind(null, 2) does NOT call multiply immediately.
-It returns a new function.
-In this new function, the first argument a is pre-filled with 2.
-You can still pass the remaining arguments (b and c) when you call it.

when you do:

multipleBy2(3, 4);

It’s like calling:

multiply(2, 3, 4); // 24
*/

/*
✅ Key points:

-bind → returns a new function.
-Arguments in bind → pre-fill arguments for the original function.
-null → placeholder for this (not used here).
*/

/*
| Aspect              | Closure (manual) | bind()          |
| ------------------- | ---------------- | --------------- |
| Lexical Environment | ✅ Yes            | ❌ No            |
| Outer function call | ✅ Yes            | ❌ No            |
| Variable lookup     | Scope chain      | Internal slots  |
| Memory model        | LE reference     | Bound arguments |
| JS concept          | Language-level   | Engine-level    |



🧠 What actually happens internally 

2️⃣ low-level explanation (engine level)
When you do:

const multipleBy2 = multiply.bind(null, 2);


JS creates a Bound Function with internal slots:

multipleBy2
 ├── [[BoundTargetFunction]] → multiply
 ├── [[BoundThis]]           → null
 └── [[BoundArguments]]      → [2]


⚠️ No lexical environment is created
⚠️ No outer function execution
⚠️ No closure in the lexical-scope sense

2️⃣ High-level explanation (same meaning)

bind() returns a new bound function that internally stores:

-the original function reference
-the bound this value
-pre-filled arguments
without using lexical environments or closures

This sentence is simply describing those same internal slots in words.

Clear wording (important)
-Original function → multiply
-Bound function → multipleBy2
-bind() does not modify multiply
-It creates a new function object that wraps multiply
*/

// challenge 1

const counter = {
  count: 0,
  increment: function (n1, n2) {
    this.count = n1 + n2;
    console.log(this.count);
  },
};
const incrementBy5 = counter.increment.bind(this, 5);
incrementBy5(10);

// challenge 2

function logger(prefix, message) {
  console.log(`${prefix},${message}`);
}
const errorMsg = logger.bind(null, "Error");
errorMsg("Not Found");

// challenge 3

function applyDiscount(discount, price) {
  return price - price * discount;
}
const tenPerOff = applyDiscount.bind(null, 0.1);
console.log(tenPerOff(500));

// manual parital fuction (wihtout bind)

function paritalMultiply(a) {
  return function (b, c) {
    return a * b * c;
  };
}
const multipleBy3 = paritalMultiply(2);
console.log(multipleBy3(3, 4));

/*
🔹 Key Points

-Partial Application = pre-filling some arguments now
-Currying = splitting arguments step-by-step
- Partial Application → may or may NOT use closures
- currying →always use closures

A partial function also creates a new function like a function factory, but the difference is that it pre-fills (locks in) some arguments of an existing function, allowing the remaining arguments to be passed later.

Manual partial application is done using a function factory.
*/

/*
| Concept             | Level     | What it does                 | Uses closure | Key signal        |
| ------------------- | --------- | ---------------------------- | ------------ | ----------------- |
| Closure             | Engine    | Remembers scope              | —            | Variable survives |
| Function Factory    | Pattern   | Creates configured functions | ✅            | Reuse             |
| Currying            | Technique | One arg at a time            | ✅            | `f(a)(b)`         |
| Partial Application | Technique | Presets some args            | ❌/✅          | Pre-filled args   |


*/
