// 🧩 Challenge 1

// Question:
// Match all numbers in the string below.

let str = "a1b22c333";
// console.log(str.match(/[0-9]+/g));
console.log(str.match(/\d+/g));

/**

✔ Uses digit range [0-9]
✔ Uses + to group digits
✔ Uses g flag to get all matches
 */
