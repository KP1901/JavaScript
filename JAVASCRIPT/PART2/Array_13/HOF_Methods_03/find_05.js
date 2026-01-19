/*

find()

-find() is a higher-order array method in JavaScript
-It returns the FIRST element that matches a condition
-It stops immediately after finding the match
-If no match is found → returns undefined
-Original array is not modified


Thinking (VERY IMPORTANT)

Use find() when:
   -You need only one element
   -You want the first match
   -Early exit is important

👉 find() means:

“Give me the first element that satisfies this condition.”

array.find(function (element, index, array) {
  return condition; // true or false
}, thisArg);


Callback Parameters

-element → current element
-index → (optional) index
-array → (optional) original array
-thisArg → (optional) value of this
*/

// basic example

let nums = [1, 3, 5, 8, 10];

let res = nums.find((num) => num % 2 == 0);

console.log(res);

/*

| Step | element | condition (`even?`) | result              |
| ---- | ------- | ------------------- | ------------------- |
| 1    | 1       | false               | continue            |
| 2    | 3       | false               | continue            |
| 3    | 5       | false               | continue            |
| 4    | 8       | true                | **return 8 (STOP)** |

*/

// find object

let users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
];

let obj = users.find((user) => user.id == 2);

console.log(obj);

/*

Common Mistakes ❌

❌ Expecting an array
❌ Forgetting it can return undefined
❌ Using filter()[0] instead of find()
*/

