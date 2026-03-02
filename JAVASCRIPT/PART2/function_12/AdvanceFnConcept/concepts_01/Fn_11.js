/*

🧩 STEP 5: EVENT LOOP (FOUNDATION OF ASYNC JS)

1️⃣ THEORY: What is the Event Loop?

The Event Loop is the mechanism that allows JavaScript (single-threaded) to handle asynchronous tasks.

-JS itself can do one thing at a time,
-but the Event Loop coordinates when async callbacks run.
-------------------------------------------------------------------------------------

2️⃣ THE MAIN PLAYERS (MEMORIZE THESE)

There are 4 components:

1️⃣ Call Stack

-Where JS executes code
-LIFO (Last In, First Out)

2️⃣ Web APIs (Browser / Node)

-Timers (setTimeout)
-Fetch / HTTP
-DOM events

3️⃣ Task Queues

-Microtask Queue (higher priority)
-Macrotask Queue (lower priority)

4️⃣ Event Loop

-Watches the stack
-Pushes tasks when stack is empty

-------------------------------------------------------------------------------------
3️⃣ Call Stack (THEORY + EXAMPLE)

function a() {
  b();
}

function b() {
  console.log("B");
}

a();

Stack flow:
a()
  b()
    console.log()


📌 Stack must be empty before async tasks run.

-------------------------------------------------------------------------------------
4️⃣ Web APIs (THEORY)

When JS sees:

setTimeout(cb, 1000);


JS does NOT wait.

Instead:
1️⃣ Sends timer to Web API
2️⃣ Continues executing JS
3️⃣ After time → callback sent to queue

-------------------------------------------------------------------------------------
5️⃣ Macrotask Queue (THEORY)

Contains:

-setTimeout
-setInterval
-DOM events

Lower priority.

-------------------------------------------------------------------------------------
6️⃣ Microtask Queue (VERY IMPORTANT)

Contains:

-Promise.then
-catch
-finally
-queueMicrotask

📌 Microtasks always run BEFORE macrotasks
-------------------------------------------------------------------------------------

7️⃣ Event Loop RULE (MOST IMPORTANT LINE)

When Call Stack is empty, Event Loop:
1️⃣ Runs ALL microtasks
2️⃣ Then runs ONE macrotask
3️⃣ Repeats
-------------------------------------------------------------------------------------

8️⃣ Practical example 1 (classic)

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

Step-by-step execution

1️⃣ "A" → stack
2️⃣ setTimeout → Web API
3️⃣ Promise .then → microtask queue
4️⃣ "D" → stack

Stack empty → Event Loop runs:

5️⃣ Microtasks → "C"
6️⃣ Macrotasks → "B"

Output:
A
D
C
B

✅ Correct truth (memorize this)

JavaScript is single-threaded.
The event loop makes it NON-BLOCKING, not multi-threaded.

Why JavaScript is still single-threaded

-JS has one call stack
-Only one piece of JS code runs at a time
-No two JS functions execute simultaneously on the stack

*/
