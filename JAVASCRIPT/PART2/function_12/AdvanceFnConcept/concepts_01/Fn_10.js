/*

🧩 STEP 4: async / await
1️⃣ THEORY: Why async / await exists

Promises solved callback hell, but:

fetchData()
  .then(data => process(data))
  .then(result => save(result))
  .catch(err => handle(err));


✔ correct
❌ still feels “chained”
❌ still not like normal code

👉 async / await was created to write async code like sync code


2️⃣ THEORY: What does async mean?

Any function marked async ALWAYS returns a Promise.

Even this:

async function foo() {
  return 10;
}


Actually returns:

Promise.resolve(10);


📌 Rule:

async wraps return value into a Promise.

3️⃣ THEORY: What does await mean?

await pauses the execution of the CURRENT async function until the Promise settles.

Important:

❌ Does NOT block JS engine
❌ Does NOT freeze UI
✅ Only pauses this function
*/

//4️⃣ Basic example (Promise)

function getData() {
  return Promise.resolve("DATA");
}
getData()
  .then((data) => {
    console.log(data);
    throw new Error("not valid");
  })
  .catch((error) => {
    console.log("Error is : ", error);
  });

//4️⃣ Basic example (async/await)

async function loadUser() {
  try {
    const response = await fetch("/api/user");
    const user = await response.json();
    if (!user) {
      throw new Error("not found");
    }
  } catch (e) {
    console.log("Failed:", e);
  }
}
loadUser();

// 8️⃣ Sequential vs Parallel (VERY COMMON MISTAKE)

// ❌ Slow (sequential)

const a = await fetchA();
const b = await fetchB();

// ✅ Fast (parallel)

const [c, d] = await Promise.all([fetchA(), fetchB()]);

/*
async  → returns a promise
await  → unwraps a promise value
*/
