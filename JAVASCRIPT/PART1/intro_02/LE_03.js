console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

/*
Global Execution Context (Memory Phase)

this            → window (browser) / global (node)
console         → { log: ƒ }
setTimeout      → ƒ
Promise         → ƒ

--------------------------------------------------------------------------------------------
Correct mental model (this is what you should remember)

Memory Creation Phase ≈ Compile-time concepts
Code Execution Phase = Runtime

But in JavaScript, both happen inside the JS engine at runtime (not like C/Java).
--------------------------------------------------------------------------------------------
Is JavaScript multithreaded?

❌ JavaScript (main thread) is single-threaded

-One call stack
-One thing executes at a time

Event loop do NOT create threads.

They create asynchronous callbacks that the event loop schedules on a single thread.

so imp => you learn about cpu conecept concurrency this is then since js is an single threaded still we can handle muiltiple task one by one (buecase of context switching => one chief multiple dishes making by swtiching context)

----------------------------------------------------------------

Event Loop (The Coordinator 🧠)

Not JS, not Web API — browser mechanism

Job:

1.Check if Call Stack is empty
2.Execute all Microtasks
3.Take one task from Task Queue
4.Push it to Call Stack
5.Repeat forever

Example :

for settimout =>

When setTimeout is called, it is handled by the Web APIs.
After the timer finishes, the callback is pushed into the Task (Macrotask) Queue.
When the Call Stack becomes empty, the Event Loop first executes all Microtasks.
Only after that, it takes the setTimeout callback from the Task Queue and pushes it to the Call Stack,
where a new Function Execution Context is created for that callback.

for promises =>

When a Promise is resolved or rejected, its .then / .catch / .finally callback is placed into the Microtask Queue (not the Call Stack directly).
When the Call Stack becomes empty, the Event Loop executes all Microtasks by pushing each callback onto the Call Stack, creating a new Function Execution Context for each one.
----------------------------------------------------------------
1️⃣ Global Execution Context (GEC) is created

JS engine:

Creates Global Execution Context

Pushes it into Call Stack

Call Stack:
[ Global EC ]

2️⃣ console.log("A")

Synchronous

Executes immediately

📤 Output:

A


Stack stays:

[ Global EC ]

3️⃣ setTimeout(..., 0)

Important ❗
setTimeout is NOT JS engine

What happens:

JS engine encounters setTimeout

Sends it to Web API

Timer starts (0 ms ≠ immediate)

JS engine moves on

❌ No execution context created now
❌ Callback NOT in call stack

Web APIs:
setTimeout(cb)

4️⃣ Promise.resolve().then(...)

Promise callbacks are microtasks

What happens:

Promise resolves immediately

.then() callback goes to Microtask Queue

Microtask Queue:
[ () => console.log("C") ]

5️⃣ console.log("D")

Synchronous

Executes immediately

📤 Output:

D

6️⃣ Global Execution Context finishes

Call Stack becomes empty

Call Stack:
[ empty ]

7️⃣ Event Loop starts work

Event loop rules:

Check Microtask Queue → empty it fully

Then check Task Queue

8️⃣ Microtask Queue runs

Microtask:

() => console.log("C")


Callback pushed to call stack

New Execution Context created

📤 Output:

C


Microtask queue now empty ✅

9️⃣ Task Queue runs

Now Event Loop checks Task Queue

setTimeout callback:

() => console.log("B")


Moved from Task Queue → Call Stack

Execution Context created

📤 Output:

B

At the end, ALL executable code (sync, microtask, macrotask) is executed only by the JS engine’s single Call Stack.

🔑 One-line rule (VERY IMPORTANT)

Synchronous → Microtasks → Macrotasks
*/
