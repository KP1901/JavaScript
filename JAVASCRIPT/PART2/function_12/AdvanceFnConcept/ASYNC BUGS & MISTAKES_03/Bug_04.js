// 4️⃣ forEach + async (CLASSIC TRAP)

function doTask(item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task Done for ", item);
      resolve();
    }, 1000);
  });
}

const arr = [1, 2, 3, 4];

arr.forEach(async (item) => {
  await doTask(item);
});

// or

arr.forEach(async function (item) {
  await doTask(item);
});

console.log("Done");

/*
❌ Why this is wrong

-forEach does NOT wait for async callbacks
-await works, but forEach ignores it
-"Done" prints immediately
-Tasks are still running in background
*/

// ✅ CORRECT WAY 1: for...of (sequential, recommended)

async function runSequential() {
  for (const item of arr) {
    await doTask(item);
  }
  console.log("Done");
}
runSequential();

// ✅ CORRECT WAY 2: Promise.all (parallel)

async function runParallel() {
  await Promise.all(arr.map((item) => doTask(item)));
  console.log("Done");
}
runParallel();

/*
🧠 FINAL RULE (MEMORIZE THIS)

-forEach does NOT understand async/await.
-Use for...of or Promise.all.

-------------------------------------------------

Way 1 : detailed context


1. First, memory is allocated for the functions and the array.

2. runSequential() is called and execution enters the function.

3. The for...of loop starts with the first item (1).
   doTask(1) is called and immediately returns a Promise.
   The setTimeout inside doTask is scheduled for 1 second.

4. The `await` pauses ONLY the execution of runSequential at that line.
   Control is returned to the JavaScript event loop.
   JavaScript itself is NOT blocked.

5. After 1 second, the setTimeout callback runs,
   "Task Done for 1" is logged, and the Promise is resolved.

6. The resolved Promise queues a microtask,
   which resumes runSequential right after the await.

7. The loop proceeds to the next item (2) and repeats the same process.

8. After all items are processed sequentially,
   "Done" is printed and the total time is logged.

final =This example simulates sequential async operations where each task always resolves; it does not check fulfillment or rejection like a real fetch would
*/
