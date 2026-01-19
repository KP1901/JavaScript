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

function firstDoubleThenSqaure(x) {
  return square(double(x));
}
console.log(firstDoubleThenSqaure(3));

// realworld example

/*
✅ Goals:

-Trim extra spaces
-Convert everything to lowercase
-Capitalize the first letter of each word

the below is not scalable it is good for 2-3 function 
*/

// function removeSpace(input) {
//   return input.trim();
// }

// function removeExtraSpace(input) {
//   return input.replace(/\s+/g, " ");
// }

// function convertToLower(input) {
//   return input.toLowerCase();
// }

// function capitalFirst(input) {
//   return input.replace(/\b\w/g, (char) => char.toUpperCase());
// }

// function funCom(input) {
//   return capitalFirst(convertToLower(removeExtrvaSpace(removeSpace(input))));
// }
// console.log(funCom("  Kiran  Patodekar"));

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
  capitalFirst
);

console.log(cleaned(" kiran  ashok    patOdekar  "));
// function funCom(input) {
//   let step1 = removeSpace(input);
//   let step2 = removeExtraSpace(step1);
//   let step3 = convertToLower(step2);
//   let step4 = capitalFirst(step3);
//   return step4;
// }
//  still we are calling it manually
// instead of we can put in array

// const steps = [removeSpace, removeExtraSpace, convertToLower, capitalFirst];
// instead of use array we can use rest parameter

/*
🧩 So in simple words

-The first function that runs is trimSpaces.
-Each function takes the output of the previous.
-The last function (capitalFirst) gives the final cleaned result.
-That final value is printed.


| Step | `fn` currently   | Input (`acc`)                    | What it returns               | Output (`acc` for next step)  |
| ---- | ---------------- | -------------------------------- | ----------------------------- | ----------------------------- |
| 1️⃣  | `trimSpaces`     | `" kiran  ashok    patOdekar  "` | `"kiran  ashok    patOdekar"` | `"kiran  ashok    patOdekar"` |
| 2️⃣  | `removeSpaces`   | `"kiran  ashok    patOdekar"`    | `"kiran ashok patOdekar"`     | `"kiran ashok patOdekar"`     |
| 3️⃣  | `convertToLower` | `"kiran ashok patOdekar"`        | `"kiran ashok patodekar"`     | `"kiran ashok patodekar"`     |
| 4️⃣  | `capitalFirst`   | `"kiran ashok patodekar"`        | `"Kiran Ashok Patodekar"`     | `"Kiran Ashok Patodekar"`     |

*/
