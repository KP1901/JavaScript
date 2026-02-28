// All three (call, apply, bind) belong to Function.prototype, meaning every function in JavaScript can use them.

/*
🔹 1. call() — Call Immediately

👉 Purpose: Execute the function immediately with a specific this value.

*/

const car = {
  brand: "Tesla",
};
// normal function

function description(model, color) {
  console.log(`${this.brand} ${model} in ${color}`);
}

description.call(car, "Model 3", "Red");

// arrow function

function wrapper() {
  const arrowFn = (model, color) => {
    console.log(`${this.brand} ${model} in ${color}`);
  };
  arrowFn("Model 3", "Red");
}

wrapper.call(car);

/*

-Here, wrapper is called with call(car), so inside wrapper, this refers to car. The arrow function does not have its own this, so it inherits this from its surrounding execution context, which is car.
-Here, we are explicitly deciding what this should be by using .call(car) on the normal function.

Explanation:
call(car, "Model 3", "Red") means —

“Call this function right now, and make this point to car.”

“It temporarily sets the function’s this to the specified object (like car) for that single function call.”
*/

/*
 🔹 2. apply() — Same as call, but Arguments in an Array

 👉 Purpose: Also executes immediately, but passes arguments as an array.

*/

const user = {
  name: "Kiran",
};

function description(...args) {
  let [city, address] = args;

  console.log(`${this.name} live in ${city} in ${address}`);
}

description.apply(user, ["Udgir", "Shivai chowk"]);

/*
Explanation:


“Call this function right now, and make `this` point to person.”

“It temporarily sets the function’s `this` to the specified object (like person)
for that single function call.”

✅ Difference from call():
Instead of passing arguments one by one, we pass them as an array.
Example: apply(person, ["Developer", "Level 1"])

*/

/*
 🔹 3. bind() — Does NOT Call Immediately

👉 Purpose: Returns a new function with this permanently set.
*/

const book = {
  name: "Age of Pirates",
  Author: "Kiran P.",
};
function bookInfo() {
  console.log(`
    Book : ${this.name} 
    Author :${this.Author}`);
}
// bookInfo.bind(book); // not allowed bind will not call it will return it

const info = bookInfo.bind(book);
info();

// or

/*

const book = {
  name: "Age of Pirates",
  Author: "Kiran P.",
};

function bookInfo() {
  Object.keys(this).forEach((key) => {
    console.log(`${key} : ${this[key]} `);
  });
}

const boundFn = bookInfo.bind(book);
boundFn();

Here we bind the function with the object, so inside bookInfo,
this === book.
bind() does not call the function — it returns a new function with this permanently set.
We store that returned function’s reference in boundFn, and when we call boundFn(), it executes the original bookInfo function with this pointing to book.

*/

/*
1️⃣ Global Execution Context (GEC)

Global Lexical Environment
Global Lexical Environment
├── book → {
│     name: "Age of Pirates",
│     Author: "Kiran P."
│   }
├── bookInfo → function bookInfo() { ... }
├── info → <uninitialized>
└── this → window (or global object)

2️⃣ bind() Execution

const info = bookInfo.bind(book);

What bind() does internally

❌ It does NOT execute bookInfo

✅ It creates a new function

✅ Permanently sets this = book

Global Lexical Environment
├── book
├── bookInfo
├── info → bound bookInfo with this = book
└── this → window

⚠️ Important
bind() does NOT create a new execution context yet.

3️⃣ Calling info()

Execution Context of info()
├── this → book   ✅ (from bind)

Lexical Environment of info()
├── Arguments → none
├── Local Variables → none
└── Outer Reference → Global Lexical Environment

lookup check (scope chain)


Explanation:

bind() return this function and make `this` point to person.”

“It permanently sets the function’s `this` to the specified object (like book)
for that function call.” 

*/

//  🔹 4. Borrowing Methods (Real-World Use)

// 1.You can “borrow” methods from one object for another using call.

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

/*

Normally, when we call a function, it executes immediately with the default this binding(who is calling).
Using call, apply, and bind, we can explicitly control what this refers to.


or 

Normally, this refers to who calls the function.
Using call, apply, or bind, we can explicitly control whom this refers to.
*/

/*
imp concepts : 

1.Once a function is bound using bind(), its this value is permanently fixed and cannot be changed by call(), apply(), or another bind().
2.When a bound function is called using new, the new keyword creates a fresh object and sets this to that new object, overriding the bound this.+
3.so generally in normal function this value is depend on who callsit where in arrow function this value is depend on where it defined 
*/
