/*

🧠 What is Memoization (one line)

Memoization = remember the result of a function call so you don’t recompute it again

📌 It is possible only because functions are first-class.

Why do we even need memoization?

Some functions:

-are slow
-do same calculation again & again
-give same output for same input

Example:

slowFn(5); // expensive
slowFn(5); // same work again ❌
slowFn(5); // again ❌


💡 Idea:

“If input is same, output will be same — so store it.”


✅ Concept

Store previous results of a function
If same input → return cached result


🧱 Core Idea (Very Important)

-Call function with input
-Check: have I seen this input before?
-If YES → return stored result
-If NO → compute, store, return

That’s memoization.
*/

// 🚫 Without memoization

function square(n) {
  console.log("calculating...");
  return n * n;
}

square(2);
square(2);
square(2);

console.log();

// ✅ With memoization (basic version)

function memoizedSquare() {
  let cache = {};

  return function (n) {
    if (cache[n] !== undefined) {
      return cache[n];
    }
    console.log("calculating...");
    cache[n] = n * n;
    return cache[n];
  };
}

let cube = memoizedSquare();
cube(5);
cube(5);
cube(5);

/*
 When a function is created and assigned to a variable, it is a function expression.


cube = function (n) {
  ...
  return cache[n];
}
📌 square stores a FUNCTION, not a number.

*/

/*
📌 Key observation

-cache is remembered
-inner function still has access → closure


🔑 Why memoization works?

Because of two concepts working together:

| Concept               | Role              |
| ------s-------------- | ----------------- |
| First-class functions | Return a function |
| Closure               | Remember `cache`  |


❗ Memoization = First-class function + Closure


🧠 Visual Memory Model
memoizedSquare()
 ├─ cache = {}
 └─ returns inner function
       ├─ cache[5] = 25
       └─ cache persists


⚠️ Important rules of memoization

✅ Good for:

-Pure functions
-Same input → same output
-Expensive computation

❌ Bad for:

-Changing inputs (time, random, API)
-Huge input space (memory leak)
-Functions with side effects

Example ❌:

function getTime() {
  return Date.now();
}


Memoizing this is wrong.
------------------------------------------------------------------------------------------
*/

/*
Real world situation

You fetch user data by userId.

Same user opens:

-Profile page
-Settings page
-Dashboard

❌ Without memoization → 3 network calls
✅ With memoization → 1 call, rest from cache

*/

function memoizeFetch(fn) {
  const cache = {};

  return async function (id) {
    if (cache[id]) {
      console.log("from cache");
      return cache[id];
    }

    console.log("from API");
    const result = await fn(id);
    cache[id] = result;
    return result;
  };
}

async function fetchUser(id) {
  return { id, name: "User :" + id };
}

const getUser = memoizeFetch(fetchUser);

await getUser(1); // from API
await getUser(1); // from cache
await getUser(1); // from cache

/*
📌 Used in:

-Frontend apps
-Redux / RTK Query
-React Query
-Browser caching layers
*/
console.log();
console.log();
console.log();

/*
🧩 REAL-WORLD PROBLEM: Form Validation Memoization
Situation (very real)

In a web app:

User types in a username / email

Validation runs on every keystroke

Validation is expensive (regex + API rule checks)

Example:

a → validate
ab → validate
abc → validate
abc → validate again ❌
abc → validate again ❌


👉 Same input is validated multiple times

🎯 Your task
Implement a memoized validator
Requirements:

validateInput(value) is slow

Same input → should not re-validate

Cache should be remembered using closure

Return cached result if available

*/

function memoizeValidator(validateInputFn) {
  const cache = {};

  return function (value) {
    if (value in cache) {
      console.log("from cache");
      return cache[value];
    }

    let result = validateInputFn(value);

    if (result !== undefined) {
      cache[value] = result;
    }
    return result;
  };
}

function validateInput(value) {
  if (value.length >= 8) {
    console.log("validating...");
    return value;
  } else {
    console.log("password length is not so strong");
  }
}

const checkValue = memoizeValidator(validateInput);
checkValue("a");

// using map

function memoizationFn() {
  let cache = new Map();
  return function (basePrice, taxPer, discountPer) {
    let key = `${basePrice},${taxPer},${discountPer}`;

    if (cache.has(key)) {
      console.log("from cache");
      return cache.get(key);
    }
    console.log("from new call");

    const taxAmount = (basePrice * taxPer) / 100;
    const priceWithTax = basePrice + taxAmount;

    const discountAmount = (priceWithTax * discountPer) / 100;

    const finalPrice = priceWithTax - discountAmount;

    let result = finalPrice;

    cache.set(key, result);
  };
}

const calculateFinalPrice = memoizationFn();

console.log(calculateFinalPrice(1000, 18, 10));
console.log(calculateFinalPrice(1000, 18, 10));
console.log(calculateFinalPrice(1000, 18, 10));

// using plain object

/*

function memoizationFn() {
  let cache = {};
  return function (basePrice, taxPer, discountPer) {
    let key = `${basePrice},${taxPer},${discountPer}`;

    if (key in cache) {
      console.log("from cache");

      return cache[key];
    }
    console.log("from new call");

    const taxAmount = (basePrice * taxPer) / 100;
    const priceWithTax = basePrice + taxAmount;

    const discountAmount = (priceWithTax * discountPer) / 100;

    const finalPrice = priceWithTax - discountAmount;

    let result = finalPrice;
    cache[key] = result;
    return result;
  };
}

const calculateFinalPrice = memoizationFn();

console.log(calculateFinalPrice(1000, 18, 10));
console.log(calculateFinalPrice(1000, 18, 10));
console.log(calculateFinalPrice(1000, 18, 10));
*/

// -------------------------------

function add(a, b) {
  console.log("computing...");
  return a + b;
}

function multiple(a, b) {
  console.log("computing...");
  return a * b;
}

function sub(a, b) {
  console.log("computing...");
  return a - b;
}

function memoization(fn, isCommutative = false) {
  let cache = {};
  return function (a, b) {
    let key;
    if (!isCommutative) {
      key = `${a},${b}`;
    } else {
      key = [a, b].sort((a, b) => a - b).join(",");
    }

    if (key in cache) {
      console.log("from cache...");
      return cache[key];
    } else {
      let result = fn(a, b);
      cache[key] = result;
      console.log(cache);
      return result;
    }
  };
}

const memoizedData = memoization(sub, false);

function run() {
  let a = memoizedData(10, 4);
  console.log(a);

  let b = memoizedData(5, 4);
  console.log(b);

  let c = memoizedData(4, 6);
  console.log(c);

  let d = memoizedData(4, 4);
  console.log(d);

  let e = memoizedData(6, 4);
  console.log(e);
}
run();

/*
👉 Commutative means:

Changing the order of inputs does NOT change the result
*/
