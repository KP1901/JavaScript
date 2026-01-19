// 🔷 ASYNC FUNCTIONS & PROMISES (THEORY + PRACTICAL)

// 🧩 STEP 1: SYNCHRONOUS vs ASYNCHRONOUS

/*
1️⃣ THEORY: What does synchronous mean?

Synchronous = one task must finish before the next starts
like dialogx boxes (alert,confirm)

JavaScript:

-has one call stack
-executes top → bottom
-waits for each line

*/

console.log("Start");

function task() {
  console.log("Task Running");
}
task();

console.log("End");
console.log();

// 📌 JS waited for task() to finish.

/*
2️⃣ THEORY: What does asynchronous mean?

Asynchronous = start a task and continue without waiting

JS delegates slow work (timer, network) to:
-Browser APIs
-Web APIs
-Node APIs

JS continues executing other code.
*/

//🧪 Practical example (ASYNC)

console.log("start");

setTimeout(() => {
  console.log("async task");
}, 1000);

console.log("end");

// 📌 JS did NOT wait for setTimeout.

/*
🧠 Mental model (VERY IMPORTANT)
Synchronous  → wait → do next
Asynchronous → delegate → continue → come back later

3️⃣ Why JS must be async (THEORY)

Imagine this:

fetch("bigData"); // takes 5 seconds


If JS waits:

UI freezes ❌
Page hangs ❌
User angry ❌

So JS says:

“I’ll start this, but I won’t wait.”
*/
