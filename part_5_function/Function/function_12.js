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

// challenge 1

const counter = {
  count: 0,
  increment: function (step1, step2) {
    this.count = step1 + step2;
    console.log(this.count);
  },
};
const incrementBy5 = counter.increment.bind(this, 5);
incrementBy5(10);
incrementBy5(5);

// challenge 2

function logger(prefix, message) {
  console.log(`${prefix},${message}`);
}
const errorLogger = logger.bind(null, "Error");
errorLogger("Not Found");

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
-Both use closures internally

A partial function also creates a new function like a function factory, but the difference is that it pre-fills (locks in) some arguments of an existing function, allowing the remaining arguments to be passed later.

Manual partial application is done using a function factory.
*/
