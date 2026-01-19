// ❌ WRONG: Returning inside setTimeout

/*
function getData() {
  setTimeout(() => {
    return "data"; // ❌ returned to callback, NOT to getData()
  }, 1000);
}

const result = getData();
console.log(result);

*/

/*
🤯 Why this happens

-setTimeout is async
-return returns from the callback, not getData
-getData() finishes before timeout runs

*/

// ✅ CORRECT: Return a Promise

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data");
    }, 1000);
  });
}
getData().then((result) => {
  console.log(result);
});

/*
🧠 FINAL RULE (MEMORIZE THIS)

-Never return values from async callbacks.
-Return a Promise instead.

---------------------------------------------------------------------------------------------
callback Info 

✅ Corrected & precise version

-Promise executor is called immediately by JavaScript when new Promise(...) runs.
-The Promise starts in the pending state after creation.
-Inside the executor, an async task is scheduled (here, setTimeout).
-After 1 second, JavaScript calls the timer callback (the async task).
-That callback calls resolve("data"), which fulfills the Promise with "data".
-In new Promise(executor), the executor function is a callback that is invoked immediately by the Promise constructor’s internal implementation (not by js magically).

new Promise((resolve) => {
  executor body
});

conceptually

function Promise(executor) {
  executor(resolve,reject); // called immediately
}


new Promise(executor)
   │
   ├─ Promise created
   │    ├─ state = pending
   │    └─ result = undefined
   │
   └─ executor(resolve, reject)  ← runs immediately
            │
            └─ schedules async work
                     │
                     └─ resolve("data") called later
                              │
                              ▼
                    Promise state → fulfilled
--------------------------------------------------------------------------------------------------
Constructor responsibility (very clear)
1️⃣ Promise constructor
new Promise((resolve) => {
  executor
});


Constructor: Promise

Callback: executor

Who calls it? → Promise constructor

When? → immediately

Conceptually:

function Promise(executor) {
  executor(resolve, reject);
}

2️⃣ setTimeout is NOT a constructor


setTimeout(() => {
  resolve("data");
}, 1000);


-setTimeout is not a constructor.
-setTimeout is a built-in API (function) provided by the environment (browser / Node.js).
-When you call setTimeout(cb, delay), the runtime’s timer system (not a constructor) calls the callback later after the delay.

❌ Not a constructor
❌ Does not call callbacks itself as a constructor
✅ Timer system / runtime calls the callback later
*/
