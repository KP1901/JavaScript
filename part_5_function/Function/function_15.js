// All three (call, apply, bind) belong to Function.prototype, meaning every function in JavaScript can use them.
// 🔹 1. call() — Call Immediatel

// 👉 Purpose: Execute the function immediately with a specific this value.

const car = {
  brand: "Tesla",
};
function describeCar(model, color) {
  console.log(`${this.brand} ${model} in ${color}`);
}
describeCar.call(car, "Model 3", "red");

/*
Explanation:
call(car, "Model 3", "Red") means —
“Call this function right now, and make this point to car.”

“It temporarily sets the function’s this to the specified object (like car) for that single function call.”
*/

// 🔹 2. apply() — Same as call, but Arguments in an Array

// 👉 Purpose: Also executes immediately, but passes arguments as an array.

const person = {
  name: "kiran",
};
function personInfo(role, level) {
  console.log(`${this.name} is ${role} at ${level}`);
}
personInfo.apply(person, ["Developer", "Level 1"]);

/*
Explanation:


“Call this function right now, and make `this` point to person.”

“It temporarily sets the function’s `this` to the specified object (like person)
for that single function call.”

✅ Difference from call():
Instead of passing arguments one by one, we pass them as an array.
Example: apply(person, ["Developer", "Level 1"])

*/

// 🔹 3. bind() — Does NOT Call Immediately

// 👉 Purpose: Returns a new function with this permanently set.

const book = {
  name: "Age of Pirates",
  Aurthor: "Kiran P.",
};

function bookInfo() {
  console.log(`
Book : ${this.name}
Author : ${this.Aurthor}`);
}
// bookInfo.bind(book); // not allowed bind will not call it will return it

const info = bookInfo.bind(book);
info();

/*

Explanation:

bind() return this function and make `this` point to person.”

“It permanently sets the function’s `this` to the specified object (like book)
for that function call.”
*/

//  🔹 4. Borrowing Methods (Real-World Use)

// You can “borrow” methods from one object for another using call.

const student = {
  name: "Ajit",
  printName() {
    console.log(`${this.name}`);
  },
};
const teacher = {
  name: "kiran",
};

student.printName.call(teacher);

/*
Here’s what the JS engine does step-by-step:
-It creates a memory space (a small “call frame”) for the function greet().
This includes local variables, arguments, and a return address (so it knows where to go back after the call).
-It runs the code inside the function — console.log("Hi!").
-Then the function finishes executing.
 Since there’s no return statement, JS automatically does: 
 return undefined;
-The engine hands back that return value (here undefined) to wherever the function was called — even if you’re not storing or using it.

thatswhy it is look like  => student.printName().call(teacher); 
                             undefined.call(teacher)

*/

// 🔹 5. Partial Application with bind

function multiply(a, b, c) {
  return a * b * c;
}
const mul = multiply.bind(null, 2);
console.log(mul(4, 5));

/*
This code demonstrates partial application, not a closure.
bind() creates a new function (mul) with the first argument fixed to 2, while allowing the remaining arguments to be provided later.

so when you write => const mul = multiply.bind(null, 2); // behind the scene is happening

function multiply(a, b, c) {
  return a * b * c;
}

function mul(b, c) {
  return multiply(2, b, c);
}

console.log(mul(4, 5)); // 40
*/

// 🔹 6. Event Listener Example
const button = {
  label: "Submit",
  click() {
    console.log(`${this.label} button clicked`);
  },
};

const btn = document.createElement("button");
btn.textContent = "Click Me";
btn.addEventListener("click", button.click.bind(button));
// Ensures this.label refers to 'Submit'
document.body.appendChild(btn);

// ways to define methods inside object
// const student = {
//   name: "ravi",
//   printName() {}, // ✅ ES6 method shorthand
//   printName: function () {}, // ✅ function expression
//   printName: () => {}, // ✅ arrow function
// };
