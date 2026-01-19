/*
arguments is a special array-like object available inside normal functions.

❌ Problems with arguments

-❌ NOT a real array
-❌ No map, reduce, filter
-❌ Hard to read
-❌ Not available in arrow functions
*/

function test(a) {
  console.log(typeof arguments);
}
test(10, 20, 30);
