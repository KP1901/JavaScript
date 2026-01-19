async function loadData(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const data = await response.json();

    console.log("Data from server:", data);

    return data;
  } catch (error) {
    console.log("Request failed:", error.message);
    throw error;

    /*
    Mental model (very important)

    Think like this:
    return value → “Here is the data”
    throw error → “There is no data. Stop.”
    There is no box with undefined when you throw.
    */
  }
}

function memoization(fn, ttl = 5000) {
  const cache = {};

  return async function (key) {
    const now = Date.now();

    if (key in cache && now - cache[key].time < ttl) {
      console.log("🟢 Cache hit for:", key);
      return cache[key].promise;
    }   
    console.log("🔵 Fetching from server for:", key);

    try {
      const promise = fn(key);
      cache[key] = { promise, time: now };
      return await promise;
    } catch (error) {
      delete cache[key];
      throw error;
      //   A thrown error is caught by the nearest catch in the call stack.(which is in memoization)
    }
  };
}

const memoizedLoadData = memoization(loadData);

(async function run() {
  console.time("start");

  //   🧠 Real-world interpretation

  await memoizedLoadData(999);

  console.timeEnd("start");
})();

/*
🧠 Real-world interpretation

 
   -You request the same data three times
   -Each call creates a new HTTP request
   -The server is hit three times 
 
  await memoizedLoadData(1); // first network req
  await memoizedLoadData(1); // second network req but same id
  await memoizedLoadData(1); // third network req but same id


Imagine:

Profile page loads
Header needs user data
Sidebar needs user data
Settings panel needs user data

Without memoization:
➡️ 3 HTTP calls
➡️ Slower UI
➡️ More server load

This is exactly what happens in real apps.
*/

/*





context : 


You already have:

✅ Real API
✅ Async fetch logic
✅ Correct memoization
✅ Cache hits working
✅ No accidental caching logic bugs

This is Level-1 production caching.


You already have:

✅ Real API
✅ Async fetch logic
✅ Correct memoization
✅ Cache hits working
✅ No accidental caching logic bugs

This is Level-1 production caching.

Problesm I faced :

1. Memoization works only when:

      same input → same output

With random IDs:

-every call is different
-cache can never hit
-memoization becomes useless

📌 In production:

-IDs come from user action, route, or state
-NOT randomly generated inside the function


| Tool                | What it solves              |
| ------------------- | --------------------------- |
| `await`             | Makes code sequential       |
| Promise combinators | Coordinate many promises    |
| **Promise caching** | Prevents duplicate requests |


2 problem : 

Problem:

Why normal caching is not enough
Normal caching (what you first wrote)

const result = await fn(key);
cache[key] = result;


-Cache is filled after the request finishes
-While it’s running, cache is empty
-Another call starts another request ❌

- so cahce the proimse immediately not after it filled the reqq

=>If the first call fails (for any reason), a rejected Promise is stored in the cache.
=>If we don’t remove it, the second call will instantly fail again.
=>So we must delete the failed cache entry to allow retry.

---------------------------
so how we solved the problem
-------------------------

What was being stored before

This line:

cache[key] = fn(key);

stores whatever fn(key) returns.

Since fn is loadData, and it’s async, it returns a Promise immediately.

So at that moment:

cache[key] = Promise { <pending> }

✔️ Yes — a pending Promise was stored.
---------------------------------------
Then what happens next

If the request succeeds
  Promise → fulfilled
  Cache now holds a fulfilled Promise
  Future calls reuse it

If the request fails
  Promise → rejected
  catch runs
  You delete the cache entry
  Retry is allowed

Why this is exactly what we want

Because:

  While the request is in flight → cache is not empty
  Other callers reuse the same Promise
  No duplicate network calls

This is Promise caching in its pure form.

5:prbolem 

Concrete example

Imagine:
-User opens profile → data cached
-User updates name on another device
-Your app still shows old name
-Cache never refreshes ❌

-----------------------------
STEP 7 exists to prevent this.

Then why is STEP 7 needed?

Because the app may stay open for hours.

Real scenario (important)

1.User opens profile at 10:00
→ name = "Kiran" (cached)
2.User updates name on another device at 10:30
→ name = "Kiran P"
3.Your app is still open
→ cache still has old data
→ UI shows "Kiran" ❌

No refresh happened, so cache is still alive.
----------------------------------------------

so before => 

 cache[key] = fn(key);
      return await cache[key];

after =>

*/
