/*
🧩 What is Function Composition?

Function Composition means combining two or more functions so that the output of one becomes the input of the next.

It’s like building a function pipeline.

or 

“Function composition is when you take smaller functions and combine them to form a bigger function.”
*/

// ⚙️ Example 1 — Basic Composition

function double(x) {
  return x * 2;
}

function square(x) {
  return x * x;
}

function firstDoubleThenSquare(x) {
  return square(double(x));
}
console.log(firstDoubleThenSquare(3));

// -----------------------------------

// realworld example

/*
✅ Goals:

-Trim extra spaces
-Convert everything to lowercase
-Capitalize the first letter of each word

the below is not scalable it is good for 2-3 function becuase of nesting
*/

// function removeSpace(input) {
//   return input.trim();
// }

// function removeExtraSpaces(input) {
//   return input.replace(/\s+/g, " ");
// }

// function convertToLowerCase(input) {
//   return input.toLowerCase();
// }

// function capitalFirst(input) {
//   return input.replace(/\b\w/g, (char) => char.toUpperCase());
// }

// function funCom(input) {
//   return capitalFirst(
//     convertToLowerCase(removeExtraSpaces(removeSpace(input)))
//   );
// }
// console.log(funCom("  Kiran patodekar"));

// same example but scalable

function trimSpaces(input) {
  return input.trim();
}
function removeSpaces(input) {
  return input.replace(/\s+/g, " ");
}
function convertToLower(input) {
  return input.toLowerCase();
}
function capitalFirst(input) {
  return input.replace(/\b\w/g, (char) => char.toUpperCase());
  //   here the callback is called for each pattern the found and it is called by js engine then replace that pattern and move to next pattern
}

function CompositionFn(...fns) {
  return function (value) {
    return fns.reduce((acc, fn) => fn(acc), value);
  };
}

let cleaned = CompositionFn(
  trimSpaces,
  removeSpaces,
  convertToLower,
  capitalFirst,
);

console.log(cleaned(" kiran  ashok    patOdekar  "));

/*
| Step | `fn` currently   | Input (`acc`)                    | What it returns               | Output (`acc` for next step)  |
| ---- | ---------------- | -------------------------------- | ----------------------------- | ----------------------------- |
| 1️⃣  | `trimSpaces`     | `" kiran  ashok    patOdekar  "` | `"kiran  ashok    patOdekar"` | `"kiran  ashok    patOdekar"` |
| 2️⃣  | `removeSpaces`   | `"kiran  ashok    patOdekar"`    | `"kiran ashok patOdekar"`     | `"kiran ashok patOdekar"`     |
| 3️⃣  | `convertToLower` | `"kiran ashok patOdekar"`        | `"kiran ashok patodekar"`     | `"kiran ashok patodekar"`     |
| 4️⃣  | `capitalFirst`   | `"kiran ashok patodekar"`        | `"Kiran Ashok Patodekar"`     | `"Kiran Ashok Patodekar"`     |
*/

/*
✅ Correct Hierarchy (Conceptual Tree)

Functions
├── Lexical Scope
│   └── Closure  ✅ (foundation)
│
└── Higher-Order Functions (HOF)
    ├── Function Factory
    ├── Currying
    ├── Partial Application
    │   ├── Manual partial function
    │   └── bind-based partial
    └── Function Composition


*/
