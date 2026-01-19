/*
reduce()

-reduce() is a higher-order array method in JavaScript
-It reduces an array to a single value
-It executes a callback for each element, carrying forward a result
-It returns ONE value (number, string, object, array, etc.)
-Original array is not modified


Thinking (MOST IMPORTANT)

-Use reduce() when:

    -Many values → one value
    -Accumulating result (sum, total, count)
    -Building objects or arrays
    -Replacing map + filter + loop logic

👉 reduce() means:

“Take all elements and combine them into one result.”

Syntax

array.reduce(function (accumulator, currentValue, index, array) {
  return updatedAccumulator;
}, initialValue);


Callback Parameters

-accumulator (acc) → result so far
-currentValue (curr) → current element
-index → (optional) index of current element
-array → (optional) original array
-initialValue → starting value of accumulator
*/

// Basic Example: Sum of numbers

let num = [10, 20, 30];

let result = num.reduce((acc, currValue) => acc + currValue, 0);

console.log(result);

/*
| acc | curr | return |
| --- | ---- | ------ |
| 0   | 1    | 1      |
| 1   | 2    | 3      |
| 3   | 3    | 6      |
| 6   | 4    | 10     |

*/
//Example: Find maximum

let res = num.reduce(
  (acc, currValue) => (currValue > acc ? currValue : acc),
  num[0]
);

console.log(res);

//Example: Count occurrences

let fruits = ["apple", "banana", "apple"];

let count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);

/*
| Step | acc (before)              | fruit      | Operation           | acc (after)               |
| ---- | ------------------------- | ---------- | ------------------- | ------------------------- |
| 1    | `{}`                      | `"apple"`  | `acc["apple"] = 1`  | `{ apple: 1 }`            |
| 2    | `{ apple: 1 }`            | `"banana"` | `acc["banana"] = 1` | `{ apple: 1, banana: 1 }` |
| 3    | `{ apple: 1, banana: 1 }` | `"apple"`  | `acc["apple"] = 2`  | `{ apple: 2, banana: 1 }` |

*/

//Example: Convert array → object

let users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];

let userInfo = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});

console.log(userInfo);



/*
| Step | acc (before)                  | user                   | Operation                       | acc (after)                                            |
| ---- | ----------------------------- | ---------------------- | ------------------------------- | ------------------------------------------------------ |
| 1    | `{}`                          | `{ id: 1, name: "A" }` | `acc[1] = { id: 1, name: "A" }` | `{ 1: { id: 1, name: "A" } }`                          |
| 2    | `{ 1: { id: 1, name: "A" } }` | `{ id: 2, name: "B" }` | `acc[2] = { id: 2, name: "B" }` | `{ 1: { id: 1, name: "A" }, 2: { id: 2, name: "B" } }` |


*/






/*
Common Mistakes ❌

❌ Forgetting initialValue
❌ Not returning accumulator
❌ Mutating accumulator incorrectly


| Method      | Use                  |
| ----------- | -------------------- |
| `map()`     | Transform values     |
| `forEach()` | Side effects         |
| `reduce()`  | Combine to one value |

*/
