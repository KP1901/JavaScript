/*

1️⃣ SET
🔹 What is a Set?

A Set is a collection of unique values.

let s = new Set([1, 2, 2, 3]);
console.log(s); // {1, 2, 3}

✅ Rules

-❌ No duplicate values
-✅ Order is preserved (insertion order)
-✅ this is an Iterable

 */

let s = new Set([10, 10, 20, 30, 30, 40]);
console.log(s);

/*
2️⃣ What can a Set store?

A Set can store ANY data type.

*/
let b = new Set();
b.add(10);
b.add("kiran");
b.add(true);
b.add({ a: 1 });
b.add({ a: 1 });
b.add([1, 2]);

console.log(b);

//3️⃣ Creating a Set

//3.1 Empty Set

let v = new Set();

// 3.2 From iterable (array, string)

let k = new Set([5, 5, 4, 5, 6, 7]);

//4️⃣ Core Set methods (MUST KNOW)

//➕ add()

k.add(10);

// ❌ delete()

k.delete(10);

// ❓ has() =>> true/false

k.has(10);

// 🧹 clear() => remove all elements

// k.clear();

// 📏 size => length of set iterable

console.log(k.size);

console.log(k);

//5️⃣ Looping a Set (Iterable behavior) => ⚠️ No index — only value.

// 5.1 for...of (most common)

for (let item of k) {
  console.log(item);
}

// 5.2 forEach

k.forEach((item) => {
  console.log(item);
});

/*
6️⃣ Set does NOT support indexing ❌
s[0]; // undefined
👉 Because Set is not index-based like arrays.
*/

// 7️⃣ Converting Set ↔ Array

// Set → Array

let vk = [...k];

// Array → Set

let bk = new Set(vk);

//8️⃣ MOST IMPORTANT USE CASES (REAL WORLD)

// ✅ 1. Remove duplicates (classic)

let nums = [1, 2, 2, 3, 4];
let uniques = [...new Set(nums)];
console.log(uniques);

//✅ 2. Fast existence check (VERY IMPORTANT)

let visited = new Set();

visited.add(101);

if (visited.has(101)) {
  console.log("already visited");
}

// ✅ 3. Filter duplicates while looping

let arr = [10, 10, 20, 30];
let seen = new Set();

for (const item of arr) {
  if (seen.has(item)) continue;
  seen.add(item);
}
console.log(seen);

// 🧠 ONE-LINE RULE (LOCK THIS)

// Use Set when uniqueness matters more than indexing
