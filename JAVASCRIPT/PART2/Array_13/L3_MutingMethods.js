// 1. slice => returns new array (original remains unchanged)

let nums = [10, 20, 30, 40];

let res1 = nums.slice(0, 3);
console.log(res1);

let res2 = nums.slice(1, 3);
console.log(res2);

let res3 = nums.slice(1);
console.log(res3);

let res4 = nums.slice(-1);
console.log(res4);

let res5 = nums.slice(-1, -3);
console.log(res5);

let res6 = nums.slice(1, -3);
console.log(res6);

let res7 = nums.slice(-3, -1);
console.log(res7);
// 📌 -3 means 3rd from end, -1 means 1st from end (exclusive)

// cloning an array => 📌 Creates a shallow copy of the entire array.

let arr = [1, 2, 3, 4];
let clone = arr.slice();
console.log(clone);
console.log();

// -------------------2. concat()---------------------

// 1.basic

let a = [1, 2];
let b = [3, 4];
let result = a.concat(b);
console.log(result);

// 2.: Concatenating arrays and values

let newarr = [10, 20];
let re1 = newarr.concat(30, [40, 50]);
console.log(re1);

// 3 : Original arrays remain unchanged

let x = [1, 2];
let y = [3, 4];
let z = x.concat(y);
console.log(x);
console.log(y);

//Nested arrays are not flattened
let x1 = [1, 2];
let x2 = [1, 2, [3, 4]];
let x3 = x1.concat(x2);
console.log(x3);
// 📌 Only one level of arrays is merged. Inner arrays stay nested.

//  5: Using concat() for cloning

let original1 = [5, 6];
let copy = [].concat(original1);
console.log(copy);
console.log();

//  An easy way to make a shallow copy of an array.

//----------------- 3 join()---------------

// 1. basic example

let fruits = ["apple", "banana", "pineapple"];
let result1 = fruits.join();
console.log(result1);
// 📌 Default separator is a comma.

// 2: Join with custom separator

let result2 = fruits.join("-");
console.log(result2);

/*
📌 Joins elements using a space as the separator.

*/

// 3. join on empty array

let empty = [];
let result3 = empty.join("ji");
console.log(result3);

// 4.undefined and null elements

let mixed = ["a", undefined, null, "b"];
let result4 = mixed.join(",");
console.log(result4);

// 📌 undefined and null are treated as empty strings during join.

// comparison toString() vs join()

let neearr = [1, 23, 4];
let result5 = neearr.join(",");
let result6 = neearr.toString();
console.log(result5);
console.log(result6);

/*
✅ Both return the same thing if no separator is provided, but join() gives you control over the separator.

Mutating → modifies the original object/array
Non-mutating → returns a new value without changing the original
*/
