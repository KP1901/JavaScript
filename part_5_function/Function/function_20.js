/*
🧩 1. What is reduce()?

reduce() reduces an array to a single value (it can be a number, string, object, or even another array).

array.reduce((accumulator, currentValue, index, array) => {
  // return updated accumulator
}, initialValue);

| Parameter      | Description                                                |
| -------------- | ---------------------------------------------------------- |
| `accumulator`  | Holds the value that’s being built up after each iteration |
| `currentValue` | The current element being processed                        |
| `index`        | (optional) The current index                               |
| `array`        | (optional) The original array                              |
| `initialValue` | (optional) The starting value of the accumulator           |

internally js have one accumulator variable which update through every iteration

*/

// /🧠 Example 1: Sum of all numbers

let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(sum);

// 🧩 Example 2: Find Maximum value

const nums = [3, 9, 1, 12, 7];

const maxValue = nums.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
});

console.log(maxValue);
// Notice: No initial value → first element (3) becomes the initial acc.

// 🧩 Example 3: Count number of occurrences

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const occurrencesOfFruits = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(occurrencesOfFruits);

/*
/*
+------------+-----------+---------------------------------------------+---------------------------+---------------------------------------------+
| Iteration  | fruit     | acc (before)                                | (acc[fruit] || 0) + 1     | acc (after)                                |
+------------+-----------+---------------------------------------------+---------------------------+---------------------------------------------+
| 1          | "apple"   | {}                                          | (undefined || 0) + 1 = 1  | { apple: 1 }                               |
| 2          | "banana"  | { apple: 1 }                                | (undefined || 0) + 1 = 1  | { apple: 1, banana: 1 }                    |
| 3          | "apple"   | { apple: 1, banana: 1 }                     | (1 || 0) + 1 = 2          | { apple: 2, banana: 1 }                    |
| 4          | "orange"  | { apple: 2, banana: 1 }                     | (undefined || 0) + 1 = 1  | { apple: 2, banana: 1, orange: 1 }         |
| 5          | "banana"  | { apple: 2, banana: 1, orange: 1 }          | (1 || 0) + 1 = 2          | { apple: 2, banana: 2, orange: 1 }         |
| 6          | "apple"   | { apple: 2, banana: 2, orange: 1 }          | (2 || 0) + 1 = 3          | { apple: 3, banana: 2, orange: 1 }         |
+------------+-----------+---------------------------------------------+---------------------------+---------------------------------------------+

Final Output:
{ apple: 3, banana: 2, orange: 1 }
*/

// so here first we store undefined at every start of iteration and if it again appears then we increase the count itself

// 🧩 Example 3: Flattned nested arrays

let nestedArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let FlattnedArr = nestedArr.reduce((acc, curr) => {
  return acc.concat(curr);
}, []);

console.log(FlattnedArr);

/*
+------------+----------+---------------------+--------------------------------------- +---------------------+
| Iteration  | curr     | acc (before)        | acc.concat(curr)                       | acc (after)         |
+------------+----------+---------------------+------------------------------------    +---------------------+
| 1          | [1, 2]   | []                  | [].concat([1, 2])  → [1, 2]            | [1, 2]              |
| 2          | [3, 4]   | [1, 2]              | [1, 2].concat([3, 4]) → [1,2,3,4]      |  [1, 2, 3, 4]  |
| 3          | [5]      | [1, 2, 3, 4]        | [1, 2, 3, 4].concat([5]) → [1,2,3,4,5] | [1, 2, 3, 4, 5] |
+------------+----------+---------------------+-------------------------------+---------------------+

*/
