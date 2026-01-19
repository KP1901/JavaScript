// 1. parameter function
function greet(name) {
  console.log(`hello ${name}`);
}
greet("kiran");

// 2. multiple parameter

function addition(a, b) {
  let result = a + b;
  console.log(result);
}
addition(4, 5);

// 3. function scoped

function showAge(age) {
  console.log(age);
}
showAge(22);
// console.log(age); // can't access outside (function scoped)

// 4. extra  parameter (ignored)

function printName(name) {
  console.log(name);
}

printName("kiran", "patodekar");

// 5 . missing parameter  (undefined)

function showUser(firstName, lastName) {
  console.log(firstName);
  console.log(lastName);
}
showUser("kiran");

// 6 . default parameter

function gradtitude(user = "Kiran") {
  console.log("good morning " + user);
}
gradtitude(); // kiran
gradtitude("Ajit"); //ajit

// 7 . argument object in js function

function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  console.log(total);
}
sum(1, 2, 3);

/*
arguments is a special, array-like object available inside every regular function (not arrow functions).
arguments.lenth - calulate the length of argument
✅ Why useful?

If you don’t know how many values will be passed → arguments (or modern ...args) is better.

If you know exactly how many → use named parameters (a, b, c) for clarity.
*/

// 8. rest parameter(...)

function collectAll(...names) {
  console.log(names);
}
collectAll("kiran", "ajit", "vishal", "ajay");

// real world example
