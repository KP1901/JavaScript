// 2️⃣ Thinking await blocks JavaScript

async function test() {
  console.log("A");
  await Promise.resolve();
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

2️⃣ await Promise.resolve()
→ JS pauses ONLY this async function
→ control returns to main thread

3️⃣ console.log("C") runs
→ normal JS keeps executing

4️⃣ Microtask queue resumes async function
→ console.log("B") runs

🔑 Key rule (MEMORIZE THIS)

await pauses only the async function,
not the entire JavaScript thread.

What does “await pauses the async function” really mean?

👉 It pauses execution of that async function from the await line onward.
👉 It does NOT pause the whole function forever.
👉 It does NOT pause JavaScript globally.
*/
