/*
1️⃣ What is a Map? (Core idea)

A Map stores data as key → value pairs.

let m = new Map();

m.set("name", "Kiran");
m.set("age", 22);

✅ Rules

-Keys are unique
-Values can repeat
-Any data type can be a key
-Insertion order preserved
-Iterable
*/

let m = new Map();

m.set("name", "kiran");
m.set("age", 22);
m.set(1, 20);

console.log(m);

/*
2️⃣ Why Map exists (VERY IMPORTANT)

Objects had problems:

❌ Keys forced to string
❌ No reliable size
❌ Not directly iterable
❌ Prototype pollution issues

👉 Map solves all of this
*/

//3️⃣ What can be Map keys?

let k = new Map();

k.set("id", 1);
k.set(10, "ten");
k.set(true, "yes");

let obj = { a: 1 };
k.set(obj, "data");

let fn = () => {};
k.set(fn, "function key");

console.log(k);

//⚠️ Keys are compared by reference (like Set)

// 4️⃣ Creating a Map

// 4.1 Empty Map

let dk = new Map();

// 4.2 From array of pairs

let vk = new Map([
  ["name", "kiran"],
  ["age", 22],
]);

// 5️⃣ Core Map methods (MUST KNOW)

//➕ set(key, value)
vk.set("city", "udgir");

// 📖 get(key) => gives value
vk.get("age"); // 22

// ❓ has(key) => check true/false
vk.has("age");

//❌ delete(key)
vk.delete("age");

//🧹 clear()
// vk.clear();

//📏 size
vk.size;

// 6️⃣ Updating values

vk.set("city", "Latur"); // overwrite

console.log(vk);

// 7️⃣ Looping a Map (Iterable behavior)

// 7.1 for...of (BEST)

for (let [key, value] of vk) {
  console.log(value);
}

// 8️⃣ Map does NOT allow duplicate keys

vk.set("a", 1);
vk.set("a", 2);

console.log(m.get("a")); // 2

// 👉 Latest value wins.

// 9️⃣ MOST IMPORTANT USE CASES (REAL WORLD)

// ✅ 1. Frequency counting (DSA GOLD)

let freq = new Map();

for (let x of [1, 2, 2, 3]) {
  freq.set(x, (freq.get(x) || 0) + 1);
}
console.log(freq);

/*
| Iteration | x | freq.get(x) | freq.get(x) || 0 | +1 | freq after set          |
| --------- | - | ----------- | ---------------- | -- | ----------------------- |
| 1         | 1 | undefined   | 0                | 1  | { 1 → 1 }               |
| 2         | 2 | undefined   | 0                | 1  | { 1 → 1, 2 → 1 }        |
| 3         | 2 | 1           | 1                | 2  | { 1 → 1, 2 → 2 }        |
| 4         | 3 | undefined   | 0                | 1  | { 1 → 1, 2 → 2, 3 → 1 } |

*/

// ✅ 2. Caching / memoization

let cache = new Map();

function getData(id) {
  if (cache.has(id)) return cache.get(id);
  let result = fetchData(id);
  cache.set(id, result);
  return result;
}

/*
| Feature           | Set                   | Map                   |
| ----------------- | --------------------- | --------------------- |
| Stores            | **Values only**       | **Key → Value pairs** |
| Uniqueness        | Values must be unique | Keys must be unique   |
| Duplicate allowed | ❌ No                  | ❌ Keys no, values yes |
| Index             | ❌ No index            | ❌ No index            |
| Iterable          | ✅ Yes                 | ✅ Yes                 |

*/
