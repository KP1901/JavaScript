/*
STEP 1 : What is a Map? (Core idea)

A Map stores data as key → value pairs.

map creation Syntax :

let m = new Map();

✅ Rules

-Keys are unique
-Values can repeat
-Any data type can be a key
-Insertion order preserved
-it is an Iterable

*/

let m = new Map();

m.set("name", "kiran");
m.set("age", 22);
m.set(1, 20);

console.log(m);

/*

STEP 2 : Why Map exists (VERY IMPORTANT)

Objects had problems:

❌ Keys forced to string
❌ No reliable size
❌ Not directly iterable
❌ Prototype pollution issues

👉 Map solves all of this
*/

// STEP 3 : what map can do ?

let k = new Map();

k.set("id", 1);
k.set(10, "ten");
k.set(true, "yes");

let obj = { a: 1 };
k.set(obj, "data");

let fn = () => {};
k.set(fn, "function key");

console.log(k);

// STEP 4 : Creating MAP

// 4.1 Empty Map

let vk = new Map();

// 4.2 From array of pairs

let bk = new Map([
  ["name", "kiran"],
  ["age", 22],
]);

// STEP 5 : Core Map methods (MUST KNOW)

map.set(key, value); // add or update value
map.get(key); // gives value
map.has(key); // check whether key avilable T/F
map.delete(key); // Remove entry
map.clear(); // remove everything
map.size; // shows total length of map

