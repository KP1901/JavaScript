// 2️⃣ Thinking await blocks JavaScript

async function test() {
  console.log("A");
  Promise.resolve("D").then((data) => {
    console.log(data);
  });
  console.log("B");
}
test();
console.log("C");

//✅ Truth

/*
🧠 Why this proves await does NOT block JavaScript

Step-by-step execution:

1️⃣ test() is called
→ console.log("A") runs immediately

2️⃣ await Promise.resolve("D").then(...)
→ .then() callback is scheduled as a microtask
→ async function pauses at await
→ continuation (console.log("B")) is also scheduled as a microtask

3️⃣ Control returns to main thread

4️⃣ console.log("C") runs

5️⃣ Microtask queue starts executing

6️⃣ .then() callback runs
→ console.log("D") runs

7️⃣ Async function resumes
→ console.log("B") runs

🔑 Key rule (MEMORIZE THIS)

await pauses only the async function,
not the entire JavaScript thread.

What does “await pauses the async function” really mean?

👉 It pauses execution of that async function at the await line and schedules the remaining part of that function as a microtask.

👉 It does NOT pause the function forever — it resumes after the awaited promise settles.

👉 It does NOT pause JavaScript globally — other synchronous code continues executing normally.
*/
