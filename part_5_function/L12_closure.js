// nested function

function outerFun() {
  let name = "kiran";
  function innerFun() {
    console.log(name);
  }
  return innerFun;
}

let inner = outerFun();
inner();

// real time example

/*
Use Case                            	       Example
Data privacy / encapsulation          	Hiding variables from outside
*/
// ✅ 1. Data Privacy / Encapsulation
// Closures help hide private variables from outside access:

function createCounter() {
  let count = 1; // private variable

  return {
    increment: function () {
      count++;
      return count;
      // count++;
      // return count++;
    },
    decrement: function () {
      count--;
      return count;
    },
  };
}
const counter = createCounter();
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.count); // undefined (private)

/*
✅ 2. Function Factories
Closures let you create functions with preset values:

*/
function makeMultiplier(multiplier) {
  return function (value) {
    return value * multiplier;
  };
}
const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

/*
🔒 This is Closure in Action:
Even though makeMultiplier is done running, the multiplier variable stays alive inside the returned function. That’s what “remembered” means — the inner function closes over the variable.

*/

/*
✅ 3. Callbacks & Async Programming
Closures allow async functions to remember variables:
*/

function delayedGreeting(name) {
  setTimeout(function () {
    console.log("hello, " + name);
  }, 1000);
}
// delayedGreeting("kirsh");

/*
✅ Closure Captures
The callback function closes over the variable name.

Even though delayedGreeting finishes running before 1 second, the inner function remembers name = "kirsh" because of closure.
*/

/*
✅ 4. Memoization / Caching
Closures can store previous results for faster access:
*/

function MemoizeAdd() {
  let cache = {};
  return function (num) {
    if (cache[num]) {
      console.log("fetching from cache");
      return cache[num];
    }
    console.log("calculating result");
    cache[num] = num + 10;
    return cache[num];
  };
}
const add = MemoizeAdd(); // 👈 returns the inner function
console.log(add(5));
console.log(add(5));
// console.log(add(10));

/*
✅ What's the goal of this code?
To avoid repeating expensive calculations for the same input — by storing and reusing previous results.

This technique is called memoization.

hum cache ke andar result store kar rahe hai aur agar user phirse same addtion pucha toh cache hum return karwa rhae hai
*/

//  write a code that returns already present calculation

function getMultiplier() {
  let cache = {};
  return function (num) {
    if (cache[num]) {
      console.log("fetching from cache");
      return cache[num];
    }
    console.log("result printing");
    cache[num] = num * 10;
    return cache[num];
  };
}

let multi = getMultiplier();
console.log(multi(5));
console.log(multi(5));
