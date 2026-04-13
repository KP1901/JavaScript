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

let tasks = [1, 2, 3, 4, 5, 6];

function fakeApi(id) {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 2000) + 500;
    setTimeout(() => {
      console.log("Task " + id + " done");
      resolve(id);
    }, delay);
  });
}

function controlledParallelism(tasks, limit) {
  return new Promise((resolve) => {
    let index = 0;
    let running = 0;
    let total = tasks.length;
    let completed = 0;

    function next() {
      if (running < limit && index < total) {
        running++;

        tasks[index++]()
          .then(() => {})
          .catch(() => {})
          .finally(() => {
            running--;
            completed++;

            if (completed === total) {
              resolve();
            } else {
              next();
            }
          });
      }
    }

    for (let i = 0; i < limit; i++) {
      next();
    }
  });
}

let newTask = tasks.map((id) => () => fakeApi(id));

controlledParallelism(newTask, 2).then(() => {
  console.log("All tasks finished");
});

/*

🧠 Key Rules Before Tracing

running = currently running API calls
limit = 2 → max 2 APIs at a time



| Step | Task | Action          | running | index | completed |
| ---- | ---- | --------------- | ------- | ----- | --------- |
| 1    | 1    | Start Task 1    | 1       | 1     | 0         |
| 2    | 2    | Start Task 2    | 2       | 2     | 0         |
| →    |      | Task 2 finishes | 1       | 2     | 1         |
| 3    | 3    | Start Task 3    | 2       | 3     | 1         |
| →    |      | Task 1 finishes | 1       | 3     | 2         |
| 4    | 4    | Start Task 4    | 2       | 4     | 2         |
| →    |      | Task 3 finishes | 1       | 4     | 3         |
| 5    | 5    | Start Task 5    | 2       | 5     | 3         |
| →    |      | Task 4 finishes | 1       | 5     | 4         |
| 6    | 6    | Start Task 6    | 2       | 6     | 4         |
| →    |      | Task 5 finishes | 1       | 6     | 5         |
| →    |      | Task 6 finishes | 0       | 6     | 6         |


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
