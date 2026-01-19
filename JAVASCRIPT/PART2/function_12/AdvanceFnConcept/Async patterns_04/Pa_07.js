// ❌ WRONG — forEach with async (MOST COMMON MISTAKE)

function fakeApi(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched : ", id);
      resolve(id);
    }, 1000);
  });
}

async function wrongLoop() {
  console.time("wrong");

  [1, 2, 3].forEach(async (id) => {
    await fakeApi(id);
  });
  console.timeEnd("wrong");
}
// wrongLoop();

/*
❌ Why wrong?

-forEach does NOT wait for await
-Function ends immediately
---------------------------------------
use :
✔ When order matters
✔ When next depends on previous
*/

// ✅ CORRECT — Sequential Async Loop (for...of)

async function sequentialLoop() {
  console.time("sequential");
  for (let id of [1, 2, 3]) {
    await fakeApi(id);
  }
  console.timeEnd("sequential");
}

// sequentialLoop();

// ✅ CORRECT — Parallel Async Loop (promise.all)

async function parallelLoop() {
  console.time("parallel");
  //   const promises = [1, 2, 3].map((id) => fakeApi(id));
  await Promise.all([1, 2, 3].map((id) => fakeApi(id)));

  //   await Promise.all(promises);
  console.timeEnd("parallel");
}
parallelLoop();

/*
✔ Fast
✔ Independent tasks
✔ Most used in real apps
*/
