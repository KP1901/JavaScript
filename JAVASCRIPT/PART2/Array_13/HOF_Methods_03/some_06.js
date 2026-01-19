/*
some()

-some() is a higher-order array method in JavaScript
-It checks if AT LEAST ONE element satisfies a condition
-It returns a boolean (true or false)
-It stops early when condition becomes true
-Original array is not modified


Thinking (VERY IMPORTANT)

Use some() when:
  -You want to check existence
  -You don’t need the element itself
  -Yes / No decision

👉 some() means:

“Is there at least one element like this?”


synatx

array.some(function (element, index, array) {
  return condition; // true or false
}, thisArg);

*/

// basic example

let nums = [1, 3, 5, 8];

let hasEven = nums.some((num) => num % 2 === 0);

console.log(hasEven); // true

/*

| Step | element | condition (`even?`) | result                 |
| ---- | ------- | ------------------- | ---------------------- |
| 1    | 1       | false               | continue               |
| 2    | 3       | false               | continue               |
| 3    | 5       | false               | continue               |
| 4    | 8       | true                | **return true (STOP)** |

 */

// object

let users = [
  { name: "A", isAdmin: false },
  { name: "B", isAdmin: true },
];

let hasAdmin = users.some((user) => user.isAdmin);

console.log(hasAdmin); // true

/*
| Method   | Returns             | Stops Early |
| -------- | ------------------- | ----------- |
| some()   | boolean             | ✅           |
| find()   | element / undefined | ✅           |
| filter() | array               | ❌           |

*/
