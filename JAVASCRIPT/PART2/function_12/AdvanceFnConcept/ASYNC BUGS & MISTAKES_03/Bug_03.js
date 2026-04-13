// 3. Sequential async calls (PERFORMANCE BUG)

/*
❌ Slow
const a = await fetchA();
const b = await fetchB();

🤯 Why bad?

Each waits for previous to finish.

What actually happens

👉 await fetchA() pauses the async function
👉 It waits until fetchA()’s Promise settles
👉 Only after that, fetchB() is called
*/

// fast

// const [a, b] = await Promise.all([fetchA(), fetchB()]);

function fetchA() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("fetchA done");
      resolve("A");
    }, 2000);
  });
}

function fetchB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("fetchB done");
      resolve("B");
    }, 2000);
  });
}
async function slowRun() {
  console.time("slow");

  const a = await fetchA();
  const b = await fetchB();

  console.log(a, b);

  console.timeEnd("slow");
}

// slowRun();

/*
One-line summary

resolve is used to tell JavaScript:
“My async task is finished and here is the result.”
*/

// ✅ FAST: Parallel execution with Promise.all

async function fastRun() {
  console.time("fast");
  const [a, b] = await Promise.all([fetchA(), fetchB()]);
  console.log(a, b);
  console.timeEnd("fast");
}
fastRun();

/*
🧠 FINAL RULE (MEMORIZE THIS)

-Independent async tasks should run in parallel using Promise.all.
-Sequential await causes unnecessary slowdown.

✅ Correct rule (MEMORIZE 🧠)

🔹 If tasks are independent

➡️ Run them in parallel

const [a, b] = await Promise.all([fetchA(), fetchB()]);


✔ Faster
✔ Best practice
✔ No unnecessary waiting

🔹 If tasks are dependent

➡️ Run them sequentially

const a = await fetchA(); // b needs a
const b = await fetchB(a);


✔ Correct data flow
✔ No race condition
✔ Logic is clear

Your statements (corrected English ✨)

Dependent tasks: first login → then fetch profile → then fetch orders
Independent tasks: user profile, notifications, and orders

-------------------------------------------------------------------------------------------------------

Think in “layers” (this clears all confusion)
🔹 Layer 1 — Authentication (DEPENDENT)
Login  ⟶  token / userId


Everything depends on this.

❌ Cannot parallelize login with anything else
✅ Must be sequential

🔹 Layer 2 — Data fetching (INDEPENDENT)
Profile   Notifications   Orders


All of these:

need the same token

do not need each other’s result

So they can run in parallel.

Correct real-world code (professional pattern)

async function loadDashboard() {
  1️⃣ DEPENDENT step (must finish first)
  const token = await loginUser();

  2️⃣ INDEPENDENT steps (parallel)
  const [profile, notifications, orders] = await Promise.all([
    fetchProfile(token),
    fetchNotifications(token),
    fetchOrders(token),
  ]);

  console.log(profile, notifications, orders);
}


✅ This is the correct mental model
*/
