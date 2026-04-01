// const - keyword

const book = "The Habit";

// 1 - functioned scope - yes

function getBook() {
  const fname = "kiran";
  console.log(fname);
}
getBook();
// console.log(fname); // error

// 2 - blocked scoped - yes

if (true) {
  let marks = 90;
}
// console.log(marks);

// 3 .reassign -no

const count = 20;
count = 30;
console.log(count);

// 4. redeclared - no

// let count = 30; // not allowed

// 5 hoisting -  hoisted but not initialized

console.log(age);

const age = 20;

/*
🧠 What is hoisting?

“Hoisting means JavaScript moves variable declarations to the top during the memory creation phase.

console.log(age);
var age = 30;

In the case of var, the variable is hoisted and initialized with undefined, so we can access it before its declaration.

console.log(age);
let age = 30;

-In the case of let and const, the variables are hoisted but not initialized. They remain in the Temporal Dead Zone (TDZ) until the execution reaches their declaration line.
-Initialization happens exactly when JavaScript executes the declaration line, which is why we cannot access let and const before their declaration.

*/
