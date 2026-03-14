/*
1️⃣ What is an Array?

An array is an ordered collection of values.

const arr = [10, 20, 30];

-Index starts from 0
-Can store mixed types
-Arrays are objects internally

*/
let arr = [1, 23, 4];
console.log(arr);
console.log(typeof arr);

// 2️⃣ Creating Arrays

// Literal (most common)

const a = [1, 2, 3];

// constructor

const b = new Array(3);
console.log(b);

const c = new Array(1, 2, 3);
console.log(c);

//3️⃣ Accessing & Modifying Elements

const arr1 = [10, 20, 30];

arr1[0];
arr[1] = 50;

//Out-of-bound access

console.log(arr[10]);

// 4️⃣ Length Property (VERY IMPORTANT)

arr.length; // number of elements

// Length is mutable

let k = [1, 2, 3, 4];
k.length = 2;
console.log(k);

// 5️⃣ Array is Reference Type chaging one will affect other so alwyas use ...spread opeartor

const d = [1, 2];
const e = d;

e.push(10);

console.log(d);

// copying array

const copy = [...d];
console.log(copy);

/*
6️⃣ Looping Over Arrays (only preferable)
-for loop 
-for... of 
-forEach() 

| Feature        | `for`          | `for...of`    | `forEach()`  |
| -------------- | -------------- | ------------- | ------------ |
| Type           | loop statement | iterator loop | array method |
| Access index   | ✅              | ❌             | ✅            |
| Access value   | manual         | automatic     | automatic    |
| break/continue | ✅              | ✅             | ❌            |
| Works on       | anything       | iterable      | arrays only  |

*/
