/*

An iterable is something that can be looped element-by-element.

✔️ Common Iterables in JS

-Arrays
-Strings
-Maps
-Sets

🔁 What works on iterables?

1️⃣ for...of loop

for (let item of iterable) { }

-Works with:
-Arrays
-Strings
-Maps
-Sets

2️⃣ Spread operator ...

[...iterable]

Works with:

-Arrays
-Strings
-Maps
-Sets

3️⃣ Destructuring

let [a, b] = iterable;

Works with:

-Arrays
-Strings
-Sets
-Map entries


❌ What does NOT work on iterables?

for...in ❌ (works on objects, not values)

*/
