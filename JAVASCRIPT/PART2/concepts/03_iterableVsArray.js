/*

🔹 Iterable

-Has Symbol.iterator
-Can be used in for...of

No guarantee of:

-index
-length
-array methods

Examples:

Map, Set, String, NodeList

🔹 Array

-Has Symbol.iterator ✅
-Has index values (0,1,2...) ✅
-Has length ✅
-Has array methods (map, filter, etc.) ✅

So:

All arrays are iterable
But not all iterables are arrays
*/

const map = new Map();

map.set("id", 1);

Array.from(map);

console.log(Array.isArray([1, 2, 34]));
console.log(Array.isArray(map));
