/*

map()

-map() is a higher-order array method in JavaScript
-It loops over each element of an array
-It returns a NEW array
-It does NOT change the original array
-Each element is transformed using a callback function

Thinking

Use map() when you want to convert one array into another array with modified values

map() → “I want to transform each element into something new.”

array.map(function (element, index, array) {
  return transformed value
}, thisArg);

Parameters

-element — current element being processed
-index — (optional) index of current element
-array — (optional) the array map() was called on
-thisArg — (optional) value to use as this

*/

// 1 basic example

let numbers = [1, 2, 3, 4];

let squared = numbers.map((element) => element * element);

console.log(squared);

// 2. convert number to string

let nums = [1, 2, 3, 4];

let intoStr = nums.map((num) => String(num));

console.log(intoStr);

//3. map() with index

let arr = [10, 20, 30];

let result = arr.map((element, index) => element + index);

console.log(result);

//4. map() array of objects (VERY IMPORTANT)

let obj = [
  {
    name: "A",
    age: 25,
  },
  {
    name: "B",
    age: 26,
  },
];

let names = obj.map((user) => user.name);

console.log(names);

/*

When NOT to use map()

❌ If you don’t return anything
❌ If you just want to filter values → use filter()
❌ If you want a single value → use reduce()


Avoid forEach() when

-You need to return a value → use map() or reduce()
-You need early exit (break, continue) → use for or for...of
-You need to handle await / async → use for...of

| Feature              | forEach()   | for loop  | map()          |
| -------------------- | ----------- | --------- | -------------- |
| **Purpose**          | Iteration   | Iteration | Transformation |
| **Returns value**    | `undefined` | N/A       | New array      |
| **Break / Continue** | Not allowed | Yes       | Not allowed    |

*/
