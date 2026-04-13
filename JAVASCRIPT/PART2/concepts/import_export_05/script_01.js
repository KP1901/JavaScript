/*
🔹 1. WHY import/export EXISTS (Real Problem)

Imagine this:

You build a project with:

-auth logic
-UI logic
-API calls
-utility functions

If everything is in one file:

❌ messy
❌ hard to debug
❌ not reusable

👉 Solution = Modules

👉 Break code into small files


🔹 2. WHAT is a Module?

👉 A module = one JS file with its own scope

Example:

math.js
auth.js
app.js

Each file = separate world 🌍

🔹 3. EXPORT (Giving something out)

-You use export to share code from a file to another file
-“I am making this variable/function/class available to other files”

*/

// 1.export variables

export let age = 20;
export const userName = "kiran";

// 2. export functions

export function add(a, b) {
  return a + b;
}

// 3. export arrow functions

export let sub = (a, b) => {
  return a - b;
};

// 4. export objects

export const user = {
  name: "kiran",
  age: 22,
};

// 5. export Classes

export class Person {
  constructor(name) {
    this.name = name;
  }
}

// 6.export after define

const height = 123;
const weight = 60;

export { height, weight };

// 7.default export

export default function sayHi() {
  console.log("Hi");
}


/*

8. default export as one object

You exported one object that contains multiple values

scrip1.js

let hi = "Hi"
let age = 30

export default {hi,age} 

script2.js

import allData from "./script1.js"

console.log(allData) => object {hi : "HI",age : 30}
console.log(allData.hi); 
console.log(allData.age); 

*/

/*
👉 Only ONE default export per file

📌 Real-world:

-main functionality of file
-component in React
-main class
*/
