/*
A function factory is a function that creates (returns) other functions.
Just like a factory in real life makes products, a function factory makes functions.
*/

function greetFactory(greeting) {
  return function (name) {
    console.log(`${greeting},${name}`);
  };
}
const sayHello = greetFactory("Hello");
sayHello("Alice");
const sayHi = greetFactory("Hi");
sayHi("Bob");

/*
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

// challenge -2

function logger(prefix) {
  return function (message) {
    return `${prefix},${message}`;
  };
}
const errorMsg = logger("Error");
const infoLogger = logger("INFO");

console.log(errorMsg("File not found"));
console.log(infoLogger("Server Started"));




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
const checkPassword = makePasswordChecker("abc123");
console.log(checkPassword("abc123"));

// You can now produce specialized functions that remember their own data.because of closure
