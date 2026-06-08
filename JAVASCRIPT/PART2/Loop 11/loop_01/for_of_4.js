/*

4️⃣ for...of

Concept:

-Iterates values
-Works on iterables
-Reads values one by one from an iterable

Use when:
works on iterables
-Arrays
-Strings
-Maps, Sets

❌ Not for objects

*/

// works on array

let cart = [100, 200, 300];
let total = 0;

for (const price of cart) {
  total += price;
}
console.log(total);

// works on string

let name = "kiran";

for (let ch of name) {
  console.log(ch);
}

// works on map

let prices = new Map();
prices.set("apple", 100);
prices.set("bananaa", 50);
prices.set("orange", 70);
prices.set("chiku", 80);

let totalRe = 0;

for (const [key, value] of prices) {
  totalRe += value;
}
console.log(totalRe);

// works on sets

let uniqueIds = new Set();
uniqueIds.add(10);
uniqueIds.add(10);
uniqueIds.add(10);
uniqueIds.add(20);
let sum = 0;

for (const id of uniqueIds) {
  sum += id;
}
console.log(sum);

/*

| Loop         | Consumes iterable? | Why                           |
| ------------ | ------------------ | ----------------------------- |
| `for`        | ❌                  | Index-based                   |
| `while`      | ❌                  | Condition-based               |
| `do...while` | ❌                  | Condition-based               |
| `for...in`   | ❌                  | Iterates **keys**, not values |

for...of is the only loop that consumes iterables
 */