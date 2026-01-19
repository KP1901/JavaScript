/*
What is Controlled Parallelism?

Run multiple async tasks in parallel, but NOT all at once.
You allow only a fixed number to run simultaneously.

📌 Example meaning:

Limit = 2
At most 2 API calls run at the same time
When one finishes → start the next
-----------------------------------------------------------------------------------
Why do we need this in real apps?

❌ Bad (Unlimited parallel)

Promise.all(ids.map(fakeApi));

Problems:

Server overload
API rate-limit errors
Memory spikes
Browser/network choking


✅ Good (Controlled parallel)

✔ Protects backend
✔ Respects rate limits
✔ Used in production systems
*/

// function loadUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id: 1, name: "kiran" });
//     }, 1000);
//   });
// }

// function loadSettings() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ theme: "dark" });
//     }, 1000);
//   });
// }

// function loadPayment() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ status: "done" });
//     }, 1000);
//   });
// }

function fakeApi(id) {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 2000) + 500;
    console.log(`🚀 Start API ${id} (delay ${delay}ms)`);
    setTimeout(() => {
      console.log(`✅ Done API ${id}`);
      resolve(id);
    }, delay);
  });
}

async function limitedParallel(ids, limit = 2) {
  console.time("limited");

  const running = [];

  for (let id of ids) {
    const p = await fakeApi(id);
    running.push(p);

    if (running.length == limit) {
      await Promise.race(running);
      running.splice(0, 1);
    }
  }
  await Promise.all(running);

  console.timeEnd("limited");
}
limitedParallel([1, 2, 3, 4, 5], 2);

/*

🧠 Key Rules Before Tracing

running = currently running API calls
limit = 2 → max 2 APIs at a time
Promise.race() → waits for any one to finish
splice(0,1) → removes one finished slot


| Step | ID | Action         | running array | Await?     |
| ---- | -- | -------------- | ------------- | ---------- |
| 1    | 1  | Start API 1    | `[P1]`        | ❌          |
| 2    | 2  | Start API 2    | `[P1, P2]`    | ✅ `race()` |
| →    |    | API 2 finishes | `[P1, P2]`    |            |
| →    |    | `splice(0,1)`  | `[P2]`        |            |
| 3    | 3  | Start API 3    | `[P2, P3]`    | ✅ `race()` |
| →    |    | API 1 finishes | `[P2, P3]`    |            |
| →    |    | `splice(0,1)`  | `[P3]`        |            |
| 4    | 4  | Start API 4    | `[P3, P4]`    | ✅ `race()` |
| →    |    | API 3 finishes | `[P3, P4]`    |            |
| →    |    | `splice(0,1)`  | `[P4]`        |            |
| 5    | 5  | Start API 5    | `[P4, P5]`    | ✅ `race()` |
| →    |    | API 4 finishes | `[P4, P5]`    |            |
| →    |    | `splice(0,1)`  | `[P5]`        |            |

🏁 After Loop Ends

| Action                 | running         |
| ---------------------- | --------------- |
| `Promise.all(running)` | waits for API 5 |
| API 5 finishes         | `[]`            |
| `console.timeEnd`      | DONE            |


🧠 One-line mental model

-“Keep 2 APIs running.
-When any finishes → start the next.”
*/

/*
so oerview of async

8️⃣ FINAL MENTAL MODELS (LOCK THESE 🔒)

-Promise = future value
-async = always returns promise
-await = pause function, not JS
-microtasks > macrotasks
-parallel > sequential (when possible)

Most Imp =>

-With Promise.race, if you start 10 fetch requests, all 10 requests run.

-race simply returns the result of the first promise that settles (fulfilled or rejected).

-This is not unique to race — it’s true for all Promise combinators (all, any, race, allSettled).

-Promise combinators do not control how many requests run; they only decide when and how the combined promise settles.

| Use case          | Suggested limit |
| ----------------- | --------------- |
| Profile page data | 2–3             |
| Infinite scroll   | 3–5             |
| File uploads      | 2               |
| Third-party API   | 1–2             |
| Admin dashboards  | 4–6             |

-----------------------------------------------------------------------------------

Real scenario: Profile page loading

Imagine your profile page needs 5 API calls:

-User basic info
-Profile photo
-Friends list
-Recent posts
-Notifications

And you decide:

Limit = 2 (only 2 requests at a time)

How it works in real life (step by step)
⏱️ Time 0 (page opens)

You start only the first 2:

RUNNING:
✔ User info
✔ Profile photo

PENDING (waiting in JS queue, not network):
⏸ Friends
⏸ Posts
⏸ Notifications


👉 The pending ones are just functions waiting to be started
They are not hitting the server yet.

⏱️ Time 1 (profile photo finishes)

As soon as one finishes, you start the next pending one:

RUNNING:
✔ User info
✔ Friends

PENDING:
⏸ Posts
⏸ Notifications

⏱️ Time 2 (user info finishes)

Start the next:

RUNNING:
✔ Friends
✔ Posts

PENDING:
⏸ Notifications

⏱️ Time 3

Finally:

RUNNING:
✔ Posts
✔ Notifications


Then everything completes ✅

The KEY idea (this clears confusion)

-Pending requests are NOT network requests.
-They are just waiting functions in memory.

or 

-There are NOT 10 requests yet.
-There are only 10 tasks.

or 
The correct statement (simple & precise)

In controlled parallelism, we control how many tasks start — not how many fetch requests pause.

A task = a function that can start a fetch

A fetch request exists only after the task is started

One clean example (tiny)
const tasks = [
  () => fetch("/user"),
  () => fetch("/posts"),
  () => fetch("/friends"),
];


Right now:

❌ No network requests

✅ Just 3 tasks waiting

With limit = 2:

Start task 1 → fetch /user
Start task 2 → fetch /posts
(wait)
Finish one
Start task 3 → fetch /friends


At any moment:

Only 2 fetch requests exist

*/
