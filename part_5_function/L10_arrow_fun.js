// basic
// always remember with curly braces need to mentioned return always
let sum = (a, b) => {
  return a + b;
};
console.log(sum(10, 20));

// 2. Arrow Functions and this
// 🔸 Arrow functions do not bind their own this.

let person = {
  name: "ajit",
  greet: function () {
    const inner = () => {
      return this.name;
    };
    return inner();
  },
};
console.log(person.greet());

// 3.Arrow functions cannot be used as constructors

// const Person = (name) => {
//   this.name = name;
// };
// const p = new Person("kiran");
// person is not constructor (it has not own this,argument)

/*

When you use new Person(...), JavaScript expects Person to be a constructor function.
But arrow functions are not constructible, so trying new Person() throws an error.
*/

// ✅ Correct Way: Use a Regular Function

function User(name) {
  this.name = name;
}
let u = new User("kiran");
console.log(u.name);

// ✅ Good
const add = (a, b) => a + b;
const sayHi = () => "Hi";
setTimeout(() => console.log("Done"), 1000);

// ⚠️ Not good
const obj = {
  name: "Kiran",
  greet: () => console.log("Hi " + this.name), // ❌
};

// challenge

// 1.Write an arrow function triple that takes a number and returns it multiplied by 3.
let triple = (a) => {
  return a * 3;
};
console.log(triple(10));

/*
2.
Task:
Write an arrow function createUser that takes name and age and returns an object like { name: ..., age: ... }.
*/

let createUser = (name, age) => {
  return { name, age };
};
console.log(createUser("kiran", 25));

// 3 Given an array of numbers, return a new array with each number squared using .map() and arrow functions.

const nums = [1, 2, 3, 4];

const square = nums.map((num) => num * num);
console.log(square);

// .map() is used to create a new array by transforming each element of the original array.
// num => num * num is an arrow function that returns the square of each num.

// 4.Use an arrow function with .filter() to return only even numbers from the array.

const num = [1, 2, 3, 4, 5, 6];

const evens = num.filter((num) => num % 2 == 0);
console.log(evens);
/*
.filter() creates a new array with only the elements that pass the condition.
num % 2 === 0 checks if the number is even.
The arrow function returns true only for even numbers, so only those stay in the new array.
*/

setTimeout(() => {
  console.log("🚀 Arrow function delayed");
}, 1000);

/*

🔰 challenge: Fix the Broken Object Method
Task:
The code below doesn’t work as expected. Fix it so the function logs “Hello, I’m Kiran”.

js
Copy
Edit
const user = {
  name: "Kiran",
  greet: () => {
    console.log("Hello, I’m " + this.name);
  }
};

user.greet(); // ❌ undefined

✅ Fix it (don’t use arrow for methods)
*/

const user = {
  name: "Adoc",
  greet: function () {
    let sayHi = () => {
      console.log("Hello, I’m " + this.name);
    };
    sayHi();
  },
};

user.greet(); //
/*

✅ Conclusion:
Use arrow functions when you want to preserve this from the outer scope.
Use regular functions when you need your own this (e.g., object methods).
*/

// ✅ Fix (use a regular function expression):
// js
// Copy
// Edit
// const user = {
//   name: "Kiran",
//   greet: function () {
//     console.log("Hello, I’m " + this.name);
//   }
// };

// user.greet(); // ✅ "Hello, I’m Kiran"

/*
challenge - 6
Task:
Given const nums = [1, 2, 3, 4], use .reduce() with an arrow function to calculate the total sum.
*/

const numbers = [1, 2, 3, 4, 5];

const sums = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sums);

/*
Challenge 10: Arrow Function + DOM
Task:
Add a button to the page. When clicked, use an arrow function in an event listener to log "Button clicked".
*/
