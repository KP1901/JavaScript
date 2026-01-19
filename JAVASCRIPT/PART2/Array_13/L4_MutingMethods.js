// -----------4. includes -------------

// 1. basic
let fruits = ["apple", "banana"];
console.log(fruits.includes("banana"));

// 2. case sensitive for string

let fname = ["Kiran", "Ajit"];
console.log(fname.includes("kiran"));

// 3 .Use fromIndex (start searching later)
let letters = ["a", "b", "c", "a"];
console.log(letters.includes("a", 2));

// 4.fromIndex out of range

console.log(letters.includes("a", 7));
// 📌 Starting index is out of bounds → never finds the value.

// 6: Works with NaN (unlike indexOf)
let weird = [NaN, 1, 2];
console.log(weird.includes(NaN));
console.log();

// 📌 includes() can detect NaN, while indexOf(NaN) returns -1.

// --------------indexOf()-----------

// 1. basic
let nums = [10, 20, 30];
console.log(nums.indexOf(20));

// 2. values not found => return -1
console.log(nums.indexOf(50));

// 3. case sensitive

let words = ["Java", "Node"];
console.log(words.indexOf("java"));

// 3. using from index

let letter = ["a", "b", "c", "a"];
console.log(letter.indexOf("a", 2));

// 4. Duplicates – returns first match
console.log(letter.indexOf("a"));

// 5. with object(wont work unless same reference) (same for lastIndexOf())
let arr = [{ id: 1 }];
console.log(arr.indexOf({ id: 1 }));

// 📌 Different objects in memory → returns -1.

let obj = { id: 2 };
let arr1 = [1, "kiran", obj];
console.log(arr1.indexOf(obj));

// 📌 Same reference → works correctly.

// 6 .Doesn’t find NaN

let weird1 = [1, NaN, 30];
console.log(weird1.indexOf(NaN));
console.log();

// 📌 Use includes() to detect NaN instead.

// --------------lastIndexOf()-----------

// 1.basic

let nums1 = [1, 2, 3, 2, 1];
console.log(nums1.lastIndexOf(2));
// 📌 The last 2 appears at index 3.

// 2.value not found
console.log(nums1.lastIndexOf(5));

// 3. case sensitive
let fruits1 = ["apple", "banana"];
console.log(fruits1.lastIndexOf("Apple"));

// 3. from index
console.log(nums1.lastIndexOf(2, 2));
// 📌 Starts searching backward from index 2, so finds 2 at index 1.
// 2 index se start kar but ulti direction
// index lies at their position either for indexof / lastIndexOf()

// 4.duplicate values
console.log(nums1.lastIndexOf(1));
// 1 ko serach kar but last occurrence de

// 6 .Doesn’t find NaN

let weird2 = [1, NaN, 30];
console.log(weird2.lastIndexOf(NaN));
