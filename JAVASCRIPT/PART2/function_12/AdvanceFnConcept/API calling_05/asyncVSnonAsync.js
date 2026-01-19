//Case 1️⃣ Fake API WITHOUT async ✅ (BEST & CLEAN)

function fakeApi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("DATA");
    }, 1000);
  });
}

/*
What happens?

-You manually create a Promise
-You control resolve / reject
-Function returns a Promise
-Caller uses .then() or await

✔ Correct
✔ Explicit
✔ No confusion

*/

//Case 2️⃣ Fake API WITH async ⚠️ (REDUNDANT)

async function fakeApi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("BATA");
    }, 1000);
  });
}

/*
What happens?

async wraps return value in a Promise
But you already return a Promise
So you get Promise inside Promise (flattened by JS)

📌 JavaScript auto-unwraps it, so result looks same
📌 But mentally it’s misleading
*/

/*
| Aspect                 | Without `async` | With `async`         |
| ---------------------- | --------------- | -------------------- |
| Returns Promise        | ✅               | ✅                    |
| Uses `await` inside    | ❌               | ❌                    |
| Extra Promise wrapping | ❌               | ⚠️ Yes (unnecessary) |
| Readability            | ✅ Clear         | ❌ Confusing          |
| Best practice          | ✅ YES           | ❌ Avoid              |


Final verdict (remember this)

✔ Fake API without async → BEST
⚠ Fake API with async → Redundant
✔ async only when await exists

Final rule (remember forever)

✔ Use async when you await ( for real api calling)
❌ Do not use async when manually creating Promises
*/