/*
1️⃣ One symbol, two meanings

-Both use three dots ...
-Meaning depends on where it is used

2️⃣ Spread Operator (...)

Meaning
,     
👉 Expands / opens values
=> ... is on the left side of assignment
  let [a,...arr] = [1,2,3] => rest operator
   
=> ... is on the right side of assignment
   a = ...arr => spread operator
Used when

👉 You want to send values out

*/

// Example 1: Copy an array

let a = [1, 2, 3, 4];
let b = [...a];

/*
...a opens → 1, 2, 3

*/

// Example 2: Merge arrays

let c = [1, 2];
let d = [3, 4];

let e = [...c, ...d];
console.log(e);

// Example 3: Function call

let nums = [1, 2, 3, 4];
console.log(Math.max(...nums));

//Example 4: open array values

let arr = [10, 20, 30, 40];
console.log(...arr);

// Example 5: spread In Array Context

let k = [1, 2, 3];
let v = [10, ...k]; // first 10 remaining collect
console.log(v);

/*
2️⃣ rest Operator (...)
Meaning

👉  Collects / packs values into one

Used when

 👉 You want to receive unknown number of values

*/

// 3️⃣ Rest Operator (Solution-based)

// Example 1: Function parameters

function getValue(...numbers) {
  console.log(numbers);
}

// let arr5 = [1, 23, 4];

getValue(10, 20, 30);

// Example 2: Function parameters

function sum(...numbers) {
  return numbers.reduce((sum, index) => sum + index, 0);
}
console.log(sum(10, 20, 30));

// ------------------------------------------------------------------------------------------------------

// ... In Object Context

// Example 1:

let user = { name: "Kiran", age: 22, city: "Delhi" };

let user2 = { name: "ajit", age: 24 };

let user1 = { user, ...user2 };

console.log(user1);

/*
- In object literals, ... is OBJECT SPREAD syntax
- user → property shorthand (copies reference)
- ...user2 → copies enumerable own properties
- Objects are NOT iterable (iteration is not used here)

{
  user: { name: "Kiran", age: 22, city: "Delhi" },
  name: "ajit",
  age: 24
}

*/

// Example 2 : ... spread needs an iterable(array,string,map,sets) so object is not an iterable so this is an object spread syntax (which copies enumerable properties)

let user5 = { name: "Kiran", age: 22, city: "Delhi" };
console.log(...user5);
// console.log({ ...user5 });

// Example 3: Object Destructuring

let u1 = { name: "Kiran", age: 22, city: "Delhi" };

let { name, ...details } = u1;
console.log(u1);
console.log(name);
console.log(details);

/*
In object destructuring, ... collects remaining properties into a new object — order is irrelevant because objects are key-based, not sequential.

✅ Correct & complete statement

Object REST syntax works only in object destructuring, and object SPREAD syntax works in object literals (to copy properties).
*/

/*

✅ Final, corrected version

-In arrays / function calls → ... spreads an iterable
-In object literals → ... copies enumerable own properties (object spread syntax)
-In object destructuring → ... collects remaining enumerable properties into a new object (object rest syntax)
-In function parameters → ... collects arguments into an array (rest parameters)

| Point    | Spread              | Rest                            |
| -------- | ------------------- | ------------------------------- |
| Purpose  | Expand values       | Collect values                  |
| Position | RHS (right side)    | LHS (left side)                 |
| Use case | Copy / merge / pass | Function params / destructuring |

Destructuring = breaking a structure into individual variables

👉 Destructuring is done using these two symbols only
1️⃣ { } → Object destructuring
2️⃣ [ ] → Array destructuring
*/

// 1️⃣ { } → Object destructuring

let user4 = { fname: "Kiran", age: 22 };

let { fname = "Ajit", age } = user4;

/*
Rule (very important):
-👉 Default value works ONLY when the property is undefined only, not when it already exists.
-✅ Destructuring uses REST only, not spread
*/

console.log(fname);
console.log(age);

/*
let fname = user4.name;
let age = user4.age;
 */

// 🔹 Array destructuring → [ ]

let arr1 = [10, 20, 30];

let [n1, n2, n3] = arr1;

/*
let n1 = arr1[0];
let n2 = arr1[1];
let n3 = arr1[2];
*/
console.log(n1);
console.log(n2);
console.log(n3);
