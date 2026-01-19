// returns number

function square(value) {
  return value * value;
}
console.log(square(10));

// returns string

function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("kiran"));

// return boolean

function isEven(value) {
  return value % 2 == 0;
}
console.log(isEven("10"));

// return array

function getPrimes() {
  return [2, 3, 5, 7, 11];
}
console.log(getPrimes());

// return object

function createUser(name, age) {
  return { name, age };
}
console.log(createUser("kiran", 26));

// higher order function
function multiplier(factor) {
  return function (x) {
    return x * factor;
  };
}
console.log(multiplier(2));

// null or undefined

function notFound() {
  return null;
}

function noReturn() {
}
console.log(noReturn());
