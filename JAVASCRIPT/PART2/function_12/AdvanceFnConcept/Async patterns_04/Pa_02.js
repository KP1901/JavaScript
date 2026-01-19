/*

2️⃣ Async + Memoization (REAL WORLD)
Problem

Same API called multiple times.

Solution

Cache the promise result.


📌 Used in:

-data fetching
-config loading
-user permissions
*/

// -------------------------------
// Mock fetch (no real server)
// -------------------------------
function fetch(url, key) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetching from server:", url);

      resolve({
        ok: true,
        json() {
          return Promise.resolve({
            id: key,
            data: "Server Data for " + url,
          });
        },
      });
    }, 1000);
  });
}

// -------------------------------
// Standard API Flow function
// -------------------------------
async function loadData(key) {
  try {
    const res = await fetch(`/api/data/${key}`, key);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("loadData error:", err.message);
    throw err;
  }
}

// -------------------------------
// Async memoization helper
// -------------------------------
function memoizeAsync(fn) {
  const cache = {};

  return async function (key) {
    if (key in cache) {
      console.log("Returning from cache:", key);
      return cache[key];
    }

    const result = await fn(key);
    cache[key] = result;
    return result;
  };
}

// -------------------------------
// Memoized API function
// -------------------------------
const memoizedLoadData = memoizeAsync(loadData);

// -------------------------------
// Consumer
// -------------------------------
async function run() {
  console.log("First call:");
  const a = await memoizedLoadData(1);
  console.log(a);

  console.log("\nSecond call (same key):");
  const b = await memoizedLoadData(1);
  console.log(b);

  console.log("\nThird call (different key):");
  const c = await memoizedLoadData(2);
  console.log(c);
}

run();

/*

🧠 WHY THIS COMBINATION IS GOLD

🔹 loadData

-Handles API logic
-Validates response
-Throws meaningful errors

🔹 memoizeAsync

-Prevents duplicate network calls
-Improves performance
-Transparent to caller

🔹 Caller
await memoizedLoadData(1);


Doesn’t care about caching or fetching logic ✔️

🔑 FINAL PROFESSIONAL RULE (MEMORIZE THIS)

-Write clean async functions first.
-Add memoization as a wrapper.
-Never mix concerns inside one function.

*/
