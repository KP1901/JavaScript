// number

let balance = 120;
console.log(typeof balance);
console.log("\n");

//in js everything is object so we can convert it into object

let anotherBalance = new Number(130);
console.log(anotherBalance);
console.log(typeof anotherBalance);
console.log("\n");

/**
new Number(age) gives you an object, but not a plain {}.
It’s a special wrapper object around the number value.

let a = new Number(5);
let b = 5;

console.log(a == b);  // true (wrapper is converted to primitive)
console.log(a === b); // false (object !== number)

In loose (==) comparison, wrapper objects (new Number(), new String(), new Boolean()) always get converted to their primitive values.
 */

// boolean
let isActive = true;
let isReallyActive = new Boolean(true);
console.log(isReallyActive);
console.log(typeof isReallyActive);
console.log("\n");

// null and undefined

let firstName;
console.log(firstName);

let surname = null;
console.log(surname);
console.log(typeof surname);
console.log("\n");

// string
// ways 2 define
let myString = "hello";
let greetMessage = `hello`;

// symbol
let sm1 = Symbol("hitesh");
let sm2 = Symbol();

console.log(sm1 == sm2);
console.log(sm1);
console.log(sm2);
