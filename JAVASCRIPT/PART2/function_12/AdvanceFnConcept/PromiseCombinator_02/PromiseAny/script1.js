(async function loadDashboard() {
  try {
    const response = await Promise.any([
      fetch("https://jsonplaceholder.typicode.com/usr/1"),
      fetch("https://jsonplaceholder.typicode.com/pot/1"),
      fetch("https://jsonplaceholder.typicode.com/photos/1"),
    ]);

    if (!response.ok) {
      throw new Error(`HTTP Error : ${response.status}`);
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
})();

/*

1.With Promise.any(), network-level issues are handled automatically.
2.Promise.any() returns the FIRST promise that is fulfilled.
3.Case:
p1 ❌ rejected (network error, etc.)
p2 ✅ fulfilled
p3 ❓ (ignored after success)

👉 Result = p2
------------------------------------------------------d
✅ What the browser does

-The browser always logs network / HTTP problems in DevTools
(404, 500, blocked requests, etc.)
-This happens regardless of promises
-JavaScript cannot stop these logs
-👉 That’s why you see red errors in the console/network tab.

✅ What Promise.any() does

-It ignores rejected promises
-It resolves as soon as ONE promise is fulfilled
-It rejects ONLY when ALL promises are rejected
→ throws AggregateError

👉 Promise behavior is independent of browser logs.

✅ Final answer to your question (plain)

Yes — the browser will show errors for bad URLs,
and Promise.any() will only trigger an error if all promises are rejected.

----------------------------------------------------------
There are two separate systems:

1️⃣ Browser / DevTools (Network + Console)

-Logs HTTP requests
-Logs 404, 500, blocked requests
-Happens outside JavaScript
-You cannot control it with Promises

2️⃣ JavaScript Promise Engine

-Works with only fulfilled / rejected
-Decides how Promises behave
-Does not know or care what DevTools shows

👉 These two systems do not talk to each other.
---------------------------------------------------------------------------------
Most Imp => You WRITE resolve/reject when creating promises (fake APIs, libraries).
You OBSERVE fulfilled/rejected when using real APIs.
resolve = fulfilled
reject = rejected
r
*/
