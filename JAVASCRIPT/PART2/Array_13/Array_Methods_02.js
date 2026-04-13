// common Array Methods

let arr = [10, 20, 30, 40];

// 1 . push() => adding element

arr.push(50);

// 2 . pop() => remove from end element

arr.pop();

// 3 . shift() => remove from first element

arr.shift();

// 4 . unshift() => add element to beginning

arr.unshift(10);

console.log(arr);

//🔍 SEARCHING & CHECKING

let arr1 = [100, 200, 300];

// 1. includes

console.log(arr1.includes(100));

//✂️ MODIFYING ARRAYS

let arr2 = [200, 400, 600, 800];

// 1.slice () ✅ (Safe) => copy part of array (non - mutating) => no change in original array

let arr3 = arr2.slice(1, 3);

console.log(arr2);
console.log(arr3);

// 2. splice() ⚠️ (Dangerous) => Add/remove in middle (mutates) =>  change in original array

let arr5 = [1000, 2000, 3000];
arr5.splice(0, 2);
console.log(arr5);

/*
 start Index => where to start
 delete count => how many elment wants to delete
*/
