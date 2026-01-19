/*
Closure – Q10 (Question)

You expect JavaScript’s garbage collector to remove unused variables,
but memory is still retained.

👉 How can a closure prevent garbage collection, and why does this cause memory to stay allocated?
*/

function heavyTask() {
  let bigData = new Array(100000).fill("data");

  return function () {
    console.log(bigData.length);
  };
}
let task = heavyTask();
task();

/*
-bigData is created inside heavyTask.
-The inner function references bigData.
-This reference creates a closure.
-Even after heavyTask() finishes, bigData is still reachable.
-JavaScript’s garbage collector removes only unreachable memory.
-Since the closure still holds a reference, memory is not freed.
-This can cause memory leaks if not handled properly.
*/
