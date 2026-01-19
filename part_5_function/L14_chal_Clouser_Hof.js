// 🔷 Higher-Order Functions Challenges

/*
✅ 1. Pass a Function as Argument
Task: Create a function repeatTwice that takes another function and calls it twice.
*/
function repeatTwice(greet) {
  greet();
  greet();
}
function greet() {
  console.log("hi");
}
repeatTwice(greet);

/*
✅ 2. Return a Function
Task: Write a function multiplier(factor) that returns a new function which multiplies a number by factor.
*/
function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}
let multi = multiplier(5);
console.log(multi(4));

/*
✅ 3. Filter Custom Condition
Task: Create a filterGreaterThan function that takes an array and a limit, and returns only the elements greater than that limit.
*/

function filterGreaterThan(arr, limit) {
  return arr.filter(function (num) {
    return num > limit;
  });
}
let arr = [1, 5, 8, 2];

console.log(filterGreaterThan(arr, 4));

/*
✅ 4. Map with Custom Operation
Task: Write a function applyOperation(arr, fn) that applies fn to every element in arr.

*/
function applyOperation(arr, fn) {
  return arr.map(fn);
}

let nums = [3, 4, 5, 6];

function square(n) {
  return n * n;
}
console.log(applyOperation(nums, square));

/*
✅ 5. Compose Two Functions
Task: Create a compose function that combines two functions f and g into a single function that returns f(g(x)).
*/
function compose(fn1, fn2) {
  return function (value) {
    return fn2(fn1(value));
  };
}
function double(num) {
  return num * 2;
}
function increment(num) {
  return num + 1;
}
const composed = compose(increment, double);
console.log(composed(3));
// first do increment then double it => 3 => 3+1 = 4 => 4 * 2 = 8

// 🔷 Closures Challenges

/*
🔷 Closures Challenges
✅ 1. Simple Counter
Task: Create a createCounter() function that returns a function which increments and returns a private count.
*/

function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

let counter = createCounter();
console.log(counter());

/*
✅ 2. Function Factory
Task: Write createGreeter(name) that returns a function which logs "Hello, <name>!".
*/

function createGreeter(name) {
  return function () {
    return "Hello, " + name;
  };
}
const greeter = createGreeter("jhon");
console.log(greeter());

/*
✅ 3. Private Bank Account
Task: Write a createAccount(initial) that returns an object with deposit, withdraw, and balance methods that access a private amount.
*/

function createAccount(intial) {
  let amount = intial;

  return {
    deposit: function (value) {
      return (amount += value);
    },
    withdraw: function (value) {
      return (amount -= value);
    },
    balance: function (value) {
      return amount;
    },
  };
}
const account = createAccount(100);
console.log(account);
