/*

1️⃣ What is Cache

Cache = temporary storage of frequently used data so it can be accessed faster.

Instead of doing an expensive operation again, we reuse the stored result.

Idea
Request → Check Cache
            |
        Found? → return immediately
            |
        Not Found → compute/fetch → store in cache

 It can store anything:

-API responses
-database results
-images
-files
-function results   

*/

let cache = {};

function getUser(name, id) {
  if (cache[id]) {
    console.log("from cache...");
    return cache[id];
  }
  console.log("from fetching...");
  let user = { name, id };
  cache[id] = user;
  return cache[id];
}

getUser("kiran", 1);
getUser("kiran", 1);

/*
1️⃣ Memoization

Memoization is a technique that uses a cache to store function results

It remembers the result of a function based on its input arguments.

If the same input appears again, it returns the stored result instead of recomputing.

-memoization is one of the concept of caching 

Memoization IMP = caching specifically for function results based on inputs.

*/

function square(n) {
  console.log("calculating...");
  return n * n;
}

function double(n) {
  console.log("calculating...");
  return n * 2;
}

function memoize(fn) {
  const cache = {};

  return function (n) {
    if (cache[n]) {
      return cache[n];
    }

    const result = fn(n);
    cache[n] = result;
    return result;
  };
}

const memoSquare = memoize(square);
const memoDoubled = memoize(double);

memoSquare(5);
memoSquare(5);
memoSquare(5);
memoSquare(5);

/*
MOST IMP :

"Caching is used to store reusable data (like API responses), while memoization is a caching technique used to store function results based on their inputs."

- so use cache when storing data/resources
- use memoization for function calculations
*/
