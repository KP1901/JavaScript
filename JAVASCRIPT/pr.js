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
  }
}

function memoization(fn) {
  const cache = {};

  return async function (key) {
    if (key in cache) {
      console.log("🟢 Cache hit for:", key);
      return cache[key];
    }
    console.log("🔵 Fetching from server for:", key);
    const result = await fn(key);
    cache[key] = result;
    return result;
  };
}

const memoizedLoadData = memoization(loadData);

(async function run() {
  console.time("start");
  /**
   -You request the same data three times
   -Each call creates a new HTTP request
   -The server is hit three times 
   */
  await memoizedLoadData(1); // first network req
  await memoizedLoadData(1); // second network req but same id
  await memoizedLoadData(1); // third network req but same id

  /*
🧠 Real-world interpretation

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
  console.timeEnd("start");
})();

/*

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

*/
const str = "ajit";
const str2 = "ajit";